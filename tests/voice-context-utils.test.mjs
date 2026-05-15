import assert from 'node:assert/strict'
import test from 'node:test'

import {
  extractArticleMetadata,
  cleanMdxForVoiceContext,
  scoreSiteContext,
} from '../scripts/voice-context-utils.mjs'

test('extractArticleMetadata reads exported article fields', () => {
  const source = `
export const article = {
  author: 'Drew Royster',
  date: '2025-09-04',
  title: 'Validation by Vibes',
  description: 'You have heard of vibe coding, but what about vibe validation?',
}
`

  assert.deepEqual(extractArticleMetadata(source), {
    author: 'Drew Royster',
    date: '2025-09-04',
    title: 'Validation by Vibes',
    description: 'You have heard of vibe coding, but what about vibe validation?',
  })
})

test('cleanMdxForVoiceContext strips imports, exports, and jsx-ish tags', () => {
  const source = `import img from './x.png'

export const article = { title: 'Demo' }

# Heading

<SomeComponent prop="x" />

Real paragraph with **markdown** and [a link](/about).
`

  assert.equal(
    cleanMdxForVoiceContext(source),
    '# Heading\n\nReal paragraph with markdown and a link (/about).',
  )
})

test('scoreSiteContext prioritizes current path and query terms', () => {
  const bundle = {
    articles: [
      {
        type: 'article',
        path: '/articles/validation-by-vibes',
        title: 'Validation by Vibes',
        description: 'Vibe validation for agents',
        body: 'Agents need observable validation loops.',
      },
      {
        type: 'article',
        path: '/articles/serializers-abstractions-dsl',
        title: 'Serializers and DSLs',
        description: 'Abstractions for LLM apps',
        body: 'Serializers are useful when prompts become protocols.',
      },
    ],
    pages: [
      {
        type: 'page',
        path: '/about',
        title: 'About Drew',
        description: 'Voice systems and agent workflows',
        body: 'Drew builds voice systems.',
      },
    ],
  }

  const results = scoreSiteContext(bundle, {
    path: '/articles/validation-by-vibes',
    query: 'How does validation work for agents?',
    limit: 2,
  })

  assert.equal(results[0].path, '/articles/validation-by-vibes')
  assert.equal(results.length, 2)
  assert.ok(results[0].score > results[1].score)
})
