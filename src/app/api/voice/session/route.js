import { NextResponse } from 'next/server'

import { buildVoiceInstructions } from '@/lib/voice/context'

export const dynamic = 'force-dynamic'

const DEFAULT_REALTIME_URL = 'wss://api.x.ai/v1/realtime'

export async function POST(request) {
  const { pageContext = {}, siteContext = [] } = await request.json().catch(() => ({}))
  const instructions = buildVoiceInstructions({ pageContext, siteContext })

  if (!process.env.XAI_API_KEY) {
    return NextResponse.json({
      setupRequired: true,
      provider: 'xai',
      websocketUrl: process.env.XAI_REALTIME_URL || DEFAULT_REALTIME_URL,
      model: process.env.XAI_REALTIME_MODEL || 'grok-voice-realtime',
      voice: process.env.XAI_REALTIME_VOICE || 'wire-me-later',
      instructions,
      message:
        'XAI_API_KEY is not configured yet. UI/context/tooling are wired; add credentials later to mint real ephemeral sessions.',
    })
  }

  const sessionPayload = {
    model: process.env.XAI_REALTIME_MODEL || 'grok-voice-realtime',
    voice: process.env.XAI_REALTIME_VOICE,
    instructions,
    turn_detection: { type: 'server_vad' },
  }

  try {
    const response = await fetch(
      process.env.XAI_REALTIME_SESSION_URL || 'https://api.x.ai/v1/realtime/sessions',
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
      websocketUrl: process.env.XAI_REALTIME_URL || DEFAULT_REALTIME_URL,
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
