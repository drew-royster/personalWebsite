export async function createVoiceSession({ pageContext, siteContext }) {
  const response = await fetch('/api/voice/session', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ pageContext, siteContext }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error || 'Unable to create voice session')
  }

  return response.json()
}

export function collectPageContext() {
  if (typeof window === 'undefined') return {}

  const visibleText = document.body?.innerText || ''

  return {
    path: window.location.pathname,
    title: document.title,
    url: window.location.href,
    visibleText: visibleText.replace(/\s+/g, ' ').trim().slice(0, 4000),
    visibleHeadings: [...document.querySelectorAll('h1, h2, h3')]
      .map((heading) => heading.textContent?.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .slice(0, 12),
  }
}

export async function fetchRelevantSiteContext({ path, query, limit = 5 }) {
  const response = await fetch('/api/voice/context', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ path, query, limit }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error || 'Unable to load voice context')
  }

  return response.json()
}

export function buildRealtimeSocketUrl(session) {
  return session?.websocketUrl || process.env.NEXT_PUBLIC_XAI_REALTIME_URL || 'wss://api.x.ai/v1/realtime'
}
