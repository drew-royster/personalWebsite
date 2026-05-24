export function normalizeRealtimeSession(rawSession = {}) {
  const session = rawSession.session || rawSession
  const token =
    session?.client_secret?.value ||
    session?.client_secret ||
    session?.value ||
    session?.ephemeral_token ||
    session?.token ||
    session?.access_token ||
    null

  return {
    provider: rawSession.provider || 'xai',
    setupRequired: Boolean(rawSession.setupRequired),
    ready: Boolean(token && !rawSession.setupRequired),
    websocketUrl: rawSession.websocketUrl || session?.websocketUrl || session?.url || null,
    token,
    instructions: rawSession.instructions || session?.instructions || '',
    voice: rawSession.voice || session?.voice || 'ara',
    raw: rawSession,
  }
}

export function buildRealtimeAuthHeader(token) {
  return token ? `Bearer ${token}` : null
}

export function shouldAttemptRealtimeConnection(normalizedSession) {
  return Boolean(
    normalizedSession?.ready && normalizedSession?.websocketUrl && normalizedSession?.token,
  )
}
