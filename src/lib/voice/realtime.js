import {
  normalizeRealtimeSession,
  shouldAttemptRealtimeConnection,
} from './realtime-session.mjs'

const XAI_AUDIO_SAMPLE_RATE = 24000

function downsampleBuffer(float32Array, inSampleRate, outSampleRate) {
  if (inSampleRate === outSampleRate) return float32Array
  if (inSampleRate < outSampleRate) return float32Array // Should not occur

  const sampleRateRatio = inSampleRate / outSampleRate
  const newLength = Math.round(float32Array.length / sampleRateRatio)
  const result = new Float32Array(newLength)
  let offsetResult = 0
  let offsetBuffer = 0

  while (offsetResult < result.length) {
    const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio)
    let accum = 0
    let count = 0
    for (let i = offsetBuffer; i < nextOffsetBuffer && i < float32Array.length; i++) {
      accum += float32Array[i]
      count++
    }
    result[offsetResult] = count > 0 ? accum / count : 0
    offsetResult++
    offsetBuffer = nextOffsetBuffer
  }
  return result
}

function float32ToInt16(float32Array) {
  const buffer = new Int16Array(float32Array.length)
  for (let i = 0; i < float32Array.length; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]))
    buffer[i] = s < 0 ? s * 0x8000 : s * 0x7fff
  }
  return buffer.buffer
}

function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

export class BrowserRealtimeVoiceClient {
  constructor({ session, onEvent, onStatus, onError } = {}) {
    this.session = normalizeRealtimeSession(session)
    this.onEvent = onEvent || (() => {})
    this.onStatus = onStatus || (() => {})
    this.onError = onError || (() => {})
    this.socket = null
    this.mediaStream = null

    this.audioContext = null
    this.processor = null
    this.sourceNode = null
    this.playbackQueue = []
    this.startTime = 0
    this.sessionConfigured = false
  }

  async requestMicrophone() {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      throw new Error('Microphone capture is not available in this browser.')
    }

    this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true })

    if (this.sessionConfigured && !this.processor) {
      this.startRecording()
    }

    return this.mediaStream
  }

  startRecording() {
    if (!this.mediaStream || this.processor) return

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      this.audioContext = new AudioContextClass()

      // Ensure context is not suspended by autoplay policies
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume()
      }

      this.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream)

      // ScriptProcessorNode for standard cross-browser compatibility
      this.processor = this.audioContext.createScriptProcessor(4096, 1, 1)

      this.processor.onaudioprocess = (e) => {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return

        const float32 = e.inputBuffer.getChannelData(0)
        const inputSampleRate = this.audioContext.sampleRate

        const downsampled = downsampleBuffer(float32, inputSampleRate, XAI_AUDIO_SAMPLE_RATE)
        const int16Buffer = float32ToInt16(downsampled)
        const base64Audio = arrayBufferToBase64(int16Buffer)

        this.send({
          type: 'input_audio_buffer.append',
          audio: base64Audio,
        })
      }

      this.sourceNode.connect(this.processor)

      // Route through a zero-gain node to keep onaudioprocess alive in browsers
      // while preventing mic input from looping back to speakers
      const silenceGain = this.audioContext.createGain()
      silenceGain.gain.setValueAtTime(0, this.audioContext.currentTime)
      this.processor.connect(silenceGain)
      silenceGain.connect(this.audioContext.destination)
    } catch (err) {
      console.error('Failed to initialize AudioContext recording graph:', err)
    }
  }

  connect() {
    if (!shouldAttemptRealtimeConnection(this.session)) {
      this.onStatus('setup-required')
      return { connected: false, reason: 'setup-required', session: this.session }
    }

    const protocols = []

    // Browser WebSockets cannot set Authorization headers. Realtime providers
    // usually accept either an ephemeral-token subprotocol or a URL/session
    // secret shape. Keep this explicit so the final xAI shape is easy to swap.
    if (this.session.token) {
      protocols.push(`xai-client-secret.${this.session.token}`)
    }

    this.socket = new WebSocket(this.session.websocketUrl, protocols)
    this.onStatus('connecting')

    this.socket.addEventListener('open', () => {
      this.onStatus('connected')

      this.send({
        type: 'session.update',
        session: {
          instructions: this.session.instructions,
          voice: this.session.voice,
          audio: {
            input: { format: { type: 'audio/pcm', rate: XAI_AUDIO_SAMPLE_RATE } },
            output: { format: { type: 'audio/pcm', rate: XAI_AUDIO_SAMPLE_RATE } },
          },
          turn_detection: {
            type: 'server_vad',
          },
        },
      })
    })

    this.socket.addEventListener('message', (event) => {
      let payload = event.data
      try {
        payload = JSON.parse(event.data)
      } catch (_) {
        // Some providers may stream binary/audio payloads or plain events.
      }

      // Handle server audio response playbacks
      if (
        (payload?.type === 'response.output_audio.delta' ||
          payload?.type === 'response.audio.delta') &&
        payload.delta
      ) {
        this.playPCM16Chunk(payload.delta)
      }

      if (payload?.type === 'session.updated') {
        this.sessionConfigured = true
        this.onStatus('listening')
        this.startRecording()
      }

      // Interruption: Mute immediately if user starts talking again
      if (payload?.type === 'input_audio_buffer.speech_started') {
        this.stopPlayback()
      }

      this.onEvent(payload)
    })

    this.socket.addEventListener('error', (event) => {
      this.onStatus('error')
      this.onError(event)
    })

    this.socket.addEventListener('close', () => {
      this.onStatus('closed')
    })

    return { connected: true, session: this.session }
  }

  playPCM16Chunk(base64Data) {
    if (!this.audioContext) return

    try {
      // Autoplay safety: ensure context is fully resumed
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume()
      }

      const binary = atob(base64Data)
      const bytes = new Uint8Array(binary.length)
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i)
      }
      const int16 = new Int16Array(bytes.buffer)

      // Convert Int16 back to float32 range [-1.0, 1.0]
      const float32 = new Float32Array(int16.length)
      for (let i = 0; i < int16.length; i++) {
        float32[i] = int16[i] / 32768
      }

      // xAI streams audio at the configured sample rate.
      // The browser AudioContext will automatically resample this to its hardware rate.
      const audioBuffer = this.audioContext.createBuffer(1, float32.length, XAI_AUDIO_SAMPLE_RATE)
      audioBuffer.getChannelData(0).set(float32)

      const source = this.audioContext.createBufferSource()
      source.buffer = audioBuffer
      source.connect(this.audioContext.destination)

      const currentTime = this.audioContext.currentTime
      if (this.startTime < currentTime) {
        this.startTime = currentTime
      }

      source.start(this.startTime)
      this.startTime += audioBuffer.duration

      this.playbackQueue.push(source)
    } catch (err) {
      console.error('Audio chunk playback failed:', err)
    }
  }

  stopPlayback() {
    this.playbackQueue.forEach((source) => {
      try {
        source.stop()
      } catch (_) {}
    })
    this.playbackQueue = []
    this.startTime = 0
  }

  send(payload) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return false
    this.socket.send(typeof payload === 'string' ? payload : JSON.stringify(payload))
    return true
  }

  close() {
    this.stopPlayback()

    if (this.processor) {
      this.processor.disconnect()
      this.processor.onaudioprocess = null
    }
    if (this.sourceNode) {
      this.sourceNode.disconnect()
    }
    if (this.audioContext) {
      try {
        this.audioContext.close()
      } catch (_) {}
    }

    if (this.socket) this.socket.close()
    if (this.mediaStream) {
      for (const track of this.mediaStream.getTracks()) track.stop()
    }

    this.socket = null
    this.mediaStream = null
    this.audioContext = null
    this.processor = null
    this.sourceNode = null
    this.sessionConfigured = false
  }
}
