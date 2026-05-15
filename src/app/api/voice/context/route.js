import fs from 'node:fs/promises'
import path from 'node:path'

import { NextResponse } from 'next/server'

import { scoreSiteContext } from '@/lib/voice/context'

export const dynamic = 'force-dynamic'

async function loadVoiceContext() {
  const filePath = path.join(process.cwd(), 'public/voice-context.json')
  const raw = await fs.readFile(filePath, 'utf8')
  return JSON.parse(raw)
}

export async function GET() {
  try {
    const bundle = await loadVoiceContext()
    return NextResponse.json({
      site: bundle.site,
      counts: {
        pages: bundle.pages?.length || 0,
        articles: bundle.articles?.length || 0,
        projects: bundle.projects?.length || 0,
        dossier: bundle.dossier ? 1 : 0,
      },
      generatedAt: bundle.generatedAt,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Voice context has not been generated yet.', detail: error.message },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const { path = '/', query = '', limit = 5 } = await request.json()
    const bundle = await loadVoiceContext()
    const results = scoreSiteContext(bundle, { path, query, limit })

    return NextResponse.json({
      site: bundle.site,
      generatedAt: bundle.generatedAt,
      results,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to retrieve voice context.', detail: error.message },
      { status: 500 },
    )
  }
}
