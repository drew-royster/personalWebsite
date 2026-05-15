import {
  buildRealtimeAuthHeader,
  normalizeRealtimeSession,
  shouldAttemptRealtimeConnection,
} from './realtime-session.mjs'

export class BrowserRealtimeVoiceClient {
  constructor({ session, onEvent, onStatus, onError } = {}) {
    this.session = normalizeRealtimeSession(session)
    this.onEvent = onEvent || (() => {})
    this.onStatus = onStatus || (() => {})
    this.onError = onError || (() => {})
    this.socket = null
    this.mediaStream = null
  }

  async requestMicrophone() {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      throw new Error('Microphone capture is not available in this browser.')
    }

    this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    return this.mediaStream
  }

  connect() {
    if (!shouldAttemptRealtimeConnection(this.session)) {
      this.onStatus('setup-required')
      return { connected: false, reason: 'setup-required', session: this.session }
    }

    const protocols = []
    const authHeader = buildRealtimeAuthHeader(this.session.token)

    // Browser WebSockets cannot set Authorization headers. Realtime providers
    // usually accept either an ephemeral-token subprotocol or a URL/session
    // secret shape. Keep this explicit so the final xAI shape is easy to swap.
    if (authHeader) protocols.push(`bearer.${this.session.token}`)

    this.socket = new WebSocket(this.session.websocketUrl, protocols)
    this.onStatus('connecting')

    this.socket.addEventListener('open', () => {
      this.onStatus('connected')
      this.send({
        type: 'session.update',
        session: {
          instructions: this.session.instructions,
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

  send(payload) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return false
    this.socket.send(typeof payload === 'string' ? payload : JSON.stringify(payload))
    return true
  }

  close() {
    if (this.socket) this.socket.close()
    if (this.mediaStream) {
      for (const track of this.mediaStream.getTracks()) track.stop()
    }
    this.socket = null
    this.mediaStream = null
  }
}
