import { NextResponse } from 'next/server'

const PAGES = {
  home: '/',
  articles: '/articles',
  projects: '/projects',
  about: '/about',
  appearances: '/appearances',
  recommendations: '/recommendations',
}

export async function POST(request) {
  const { tool, arguments: args = {} } = await request.json().catch(() => ({}))

  if (tool === 'open_page') {
    const requested = String(args.path || args.page || '').trim()
    const path = requested.startsWith('/') ? requested : PAGES[requested.toLowerCase()]

    if (!path) {
      return NextResponse.json(
        { error: 'Unknown page requested.', knownPages: Object.keys(PAGES) },
        { status: 400 },
      )
    }

    return NextResponse.json({ action: 'navigate', path })
  }

  if (tool === 'activate_dossier_mode') {
    return NextResponse.json({
      action: 'effect',
      effect: 'dossier_mode',
      message:
        'FIELD DOSSIER UNSEALED. Signal acquired from the agent runtime. The archive is listening.',
    })
  }

  return NextResponse.json(
    {
      error: 'Unknown voice tool.',
      tools: ['open_page', 'activate_dossier_mode'],
    },
    { status: 400 },
  )
}
