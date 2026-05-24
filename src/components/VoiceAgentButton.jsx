'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import {
  collectPageContext,
  createVoiceSession,
  fetchRelevantSiteContext,
} from '@/lib/voice/client'
import { BrowserRealtimeVoiceClient } from '@/lib/voice/realtime'

const idleCopy = 'Ask the site'

function StatusDot({ tone }) {
  const color =
    tone === 'ready'
      ? 'bg-rust shadow-[0_0_14px_rgba(159,90,42,0.75)]'
      : tone === 'error'
        ? 'bg-red-400'
        : 'bg-cream/50'

  return <span className={`h-2 w-2 rounded-full ${color}`} />
}

export function VoiceAgentButton() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('Loaded with this page, the articles, and the marginalia.')
  const [pageContext, setPageContext] = useState(null)
  const [siteContext, setSiteContext] = useState([])
  const [session, setSession] = useState(null)
  const [lastEvent, setLastEvent] = useState(null)
  const [error, setError] = useState(null)
  const voiceClientRef = useRef(null)

  const statusTone = useMemo(() => {
    if (error) return 'error'
    if (['ready', 'setup', 'connected', 'listening'].includes(status)) return 'ready'
    return 'idle'
  }, [error, status])

  useEffect(() => {
    if (!open || pageContext) return

    const loadContext = async () => {
      setStatus('loading')
      setError(null)

      try {
        const collected = collectPageContext()
        setPageContext(collected)

        const context = await fetchRelevantSiteContext({
          path: collected.path,
          query: `${collected.title} ${collected.visibleHeadings?.join(' ') || ''}`,
          limit: 5,
        })

        setSiteContext(context.results || [])
        setStatus('context-ready')
        setMessage('Context loaded. Voice is ready to start.')
      } catch (loadError) {
        setError(loadError.message)
        setStatus('error')
      }
    }

    loadContext()
  }, [open, pageContext])

  useEffect(() => {
    return () => {
      voiceClientRef.current?.close()
    }
  }, [])

  async function handleStartVoice() {
    setStatus('connecting')
    setError(null)

    try {
      const prepared = await createVoiceSession({ pageContext, siteContext })
      setSession(prepared)

      const client = new BrowserRealtimeVoiceClient({
        session: prepared,
        onStatus: (nextStatus) => {
          setStatus(nextStatus)
          if (nextStatus === 'connected') setMessage('Socket connected. Now the weird part starts.')
          if (nextStatus === 'listening') setMessage('Microphone is streaming to xAI realtime.')
          if (nextStatus === 'setup-required') setMessage(prepared.message)
          if (nextStatus === 'closed') setMessage('Voice session closed.')
        },
        onEvent: (event) => {
          setLastEvent(event)
          if (event?.type) setMessage(`Realtime event: ${event.type}`)
        },
        onError: () => setError('Realtime socket error. Check provider URL/token shape.'),
      })

      setMessage('Allow microphone access to start the xAI realtime socket.')
      await client.requestMicrophone()
      const connection = client.connect()
      voiceClientRef.current = client

      if (!connection.connected) {
        setStatus('setup')
        setMessage(prepared.message)
        return
      }

      setMessage('Microphone is allowed. Waiting for xAI session confirmation.')
    } catch (sessionError) {
      setError(sessionError.message)
      setStatus('error')
      voiceClientRef.current?.close()
      voiceClientRef.current = null
    }
  }

  function handleStopVoice() {
    voiceClientRef.current?.close()
    voiceClientRef.current = null
    setStatus('context-ready')
    setMessage('Voice stopped. The site context is still loaded.')
  }

  async function handleEasterEgg() {
    const response = await fetch('/api/voice/tools', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ tool: 'activate_dossier_mode' }),
    })
    const result = await response.json()
    setMessage(result.message || 'Dossier mode activated.')
    document.documentElement.dataset.voiceEffect = result.effect || 'dossier_mode'
  }

  const voiceActive = ['connecting', 'connected', 'listening'].includes(status)

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div className="w-[min(calc(100vw-2rem),24rem)] border border-cream/18 bg-black/88 p-4 text-sm shadow-2xl shadow-black/60 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 border-b border-cream/12 pb-3">
            <div>
              <p className="small-label text-[0.65rem] text-rust">Drew.Systems site agent</p>
              <h2 className="mt-1 font-mono text-base text-cream">Ask what is already here</h2>
            </div>
            <StatusDot tone={statusTone} />
          </div>

          <p className="mt-3 leading-6 text-cream/70">{error || message}</p>

          {pageContext && (
            <div className="mt-3 border border-cream/10 bg-cream/[0.03] p-3 font-mono text-xs text-cream/56">
              <p className="text-cream/80">Current page</p>
              <p className="mt-1 truncate">{pageContext.title}</p>
              <p className="mt-1 text-rust">{pageContext.path}</p>
            </div>
          )}

          {siteContext.length > 0 && (
            <div className="mt-3 space-y-2">
              <p className="small-label text-[0.65rem] text-cream/42">Loaded context</p>
              <ul className="space-y-1.5 text-xs text-cream/62">
                {siteContext.slice(0, 3).map((item) => (
                  <li key={`${item.type}:${item.path}`} className="truncate">
                    <span className="text-rust">{item.type}</span> / {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {session?.setupRequired && (
            <div className="mt-3 border border-rust/30 bg-rust/10 p-3 text-xs leading-5 text-cream/66">
              Waiting on credentials: set <code>XAI_API_KEY</code>, optionally{' '}
              <code>XAI_REALTIME_MODEL</code>, <code>XAI_REALTIME_VOICE</code>, and{' '}
              <code>XAI_REALTIME_SESSION_URL</code>.
            </div>
          )}

          {lastEvent && (
            <div className="mt-3 max-h-24 overflow-hidden border border-cream/10 bg-black/40 p-3 font-mono text-[0.65rem] leading-4 text-cream/48">
              {JSON.stringify(lastEvent).slice(0, 240)}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={voiceActive ? handleStopVoice : handleStartVoice}
              disabled={!pageContext || status === 'loading'}
              className="border border-rust/45 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-rust transition hover:border-cream/40 hover:text-cream disabled:cursor-not-allowed disabled:opacity-40"
            >
              {voiceActive ? 'Stop voice' : status === 'connecting' ? 'Starting…' : 'Start voice'}
            </button>
            <button
              type="button"
              onClick={handleEasterEgg}
              className="border border-cream/14 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cream/58 transition hover:border-rust/45 hover:text-rust"
            >
              Oracle
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group border border-rust/45 bg-black/85 px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] text-rust shadow-xl shadow-black/50 backdrop-blur transition hover:border-cream/40 hover:text-cream"
        aria-expanded={open}
      >
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-rust transition group-hover:bg-cream" />
        {open ? 'Close' : idleCopy}
      </button>
    </div>
  )
}
