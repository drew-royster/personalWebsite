import { NextResponse } from 'next/server'

import { buildVoiceInstructions } from '@/lib/voice/context'

export const dynamic = 'force-dynamic'

const DEFAULT_REALTIME_URL = 'wss://api.x.ai/v1/realtime'
const DEFAULT_REALTIME_SESSION_URL = 'https://api.x.ai/v1/realtime/client_secrets'
const DEFAULT_REALTIME_MODEL = 'grok-voice-latest'
const DEFAULT_CLIENT_SECRET_TTL_SECONDS = 300

export async function POST(request) {
  const { pageContext = {}, siteContext = [] } = await request.json().catch(() => ({}))
  const instructions = buildVoiceInstructions({ pageContext, siteContext })

  const model = process.env.XAI_REALTIME_MODEL || DEFAULT_REALTIME_MODEL
  const baseUrl = process.env.XAI_REALTIME_URL || DEFAULT_REALTIME_URL
  const websocketUrl = baseUrl.includes('?') ? baseUrl : `${baseUrl}?model=${model}`

  if (!process.env.XAI_API_KEY) {
    return NextResponse.json({
      setupRequired: true,
      provider: 'xai',
      websocketUrl,
      model,
      voice: process.env.XAI_REALTIME_VOICE || 'ara',
      instructions,
      message:
        'XAI_API_KEY is not configured yet. UI/context/tooling are wired; add credentials later to mint real ephemeral sessions.',
    })
  }

  const ttlSeconds = Number.parseInt(
    process.env.XAI_REALTIME_CLIENT_SECRET_TTL_SECONDS || '',
    10,
  )

  const sessionPayload = {
    expires_after: {
      seconds: Number.isFinite(ttlSeconds) ? ttlSeconds : DEFAULT_CLIENT_SECRET_TTL_SECONDS,
    },
  }

  try {
    const response = await fetch(
      process.env.XAI_REALTIME_SESSION_URL || DEFAULT_REALTIME_SESSION_URL,
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${process.env.XAI_API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(sessionPayload),
      },
    )

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      return NextResponse.json(
        {
          error: 'xAI realtime session creation failed.',
          status: response.status,
          detail: data,
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      provider: 'xai',
      websocketUrl,
      voice: process.env.XAI_REALTIME_VOICE || 'ara',
      instructions,
      session: data,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to create xAI realtime session.', detail: error.message },
      { status: 502 },
    )
  }
}
