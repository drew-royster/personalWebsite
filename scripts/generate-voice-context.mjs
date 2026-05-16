import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import glob from 'fast-glob'

import {
  cleanMdxForVoiceContext,
  extractArticleMetadata,
  toExcerpt,
} from './voice-context-utils.mjs'
import { books, dossierText } from '../src/content/personalDossier.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

async function readUtf8(relativePath) {
  return fs.readFile(path.join(root, relativePath), 'utf8')
}

async function buildArticles() {
  const files = await glob('src/app/articles/*/page.mdx', { cwd: root })

  return Promise.all(
    files.map(async (file) => {
      const source = await readUtf8(file)
      const slug = file.replace(/^src\/app\/articles\//, '').replace(/\/page\.mdx$/, '')
      const metadata = extractArticleMetadata(source)
      const body = cleanMdxForVoiceContext(source)

      return {
        type: 'article',
        slug,
        path: `/articles/${slug}`,
        title: metadata.title || slug,
        description: metadata.description || '',
        author: metadata.author || 'Drew Royster',
        date: metadata.date || '',
        body,
        excerpt: toExcerpt(body),
      }
    }),
  )
}

async function buildPages() {
  const curatedPages = [
    {
      path: '/',
      title: 'Voice Interfaces',
      description:
        'Homepage for Drew Royster: voice systems, agents, local infrastructure, and the places where models have to touch real workflows.',
      body:
        'Drew Royster works on practical AI systems at the awkward stage where the model is good enough to be useful but the workflow is still messy. The homepage covers voice interfaces, agent runtimes, tool workflows, local systems, automations, evaluation loops, and projects where the model had to do something outside the chat box.',
    },
    {
      path: '/about',
      title: 'About Drew',
      description: 'Drew Royster builds practical AI systems across the whole stack.',
      body:
        'Drew Royster lives in Utah and builds practical AI systems across web applications, databases, platforms, machine learning, voice interfaces, agents, tool-calling, private infrastructure, and real workflows. He is useful when a project needs taste and implementation in the same person: someone who can reason about product, wire APIs, debug runtime behavior, and leave behind operable software.',
    },
    {
      path: '/projects',
      title: 'Projects',
      description: 'Projects and systems Drew has worked on: AI education, staffing search, autofill, and sync tooling.',
      body:
        'Projects include Shaolin AI for applied AI education and product builds; The Anon, a staffing search application using natural-language search over structured and unstructured data; Smart Autofill, a browser extension experiment using personal context and LLMs to fill forms; and Canvas File Sync, an older Electron app for syncing Canvas course files into Google Drive.',
    },
    {
      path: '/articles',
      title: 'Articles',
      description: 'Drew\'s writing on programming, machine learning, agents, validation, prompting, and user experiences.',
      body:
        'The articles index collects Drew Royster\'s writing about programming, machine learning, agents, validation, prompting, abstractions, RAG, function calling, and the future of user experiences.',
    },
    {
      path: '/books',
      title: 'Books',
      description: 'Books Drew Royster has been thinking about, with marginal notes.',
      body: books.map((book) => `${book.title} by ${book.author}: ${book.note}`).join('\n'),
    },
    {
      path: '/appearances',
      title: 'Appearances',
      description: 'Talks, podcasts, and public appearances by Drew Royster.',
      body:
        'Appearances is the place for talks, podcasts, and other public conversations where Drew discusses the systems and ideas he is working on.',
    },
    {
      path: '/recommendations',
      title: 'Recommendations',
      description: 'Software, gadgets, local systems, and tools Drew recommends.',
      body:
        'Drew recommends tools and systems he actually uses, including JetBrains products, local model tooling such as Ollama, NVIDIA workstations, Unraid for home servers, Cloudflare proxying for self-hosting, ergonomic split keyboards, Excalidraw, and Alfred/clipboard workflows.',
    },
  ]

  return curatedPages.map((page) => ({
    type: 'page',
    ...page,
    excerpt: toExcerpt(page.body),
  }))
}

async function buildProjects() {
  const source = await readUtf8('src/app/projects/page.jsx')
  const projectMatches = [...source.matchAll(/name:\s*'([^']+)'[\s\S]*?description:\s*\n\s*'([^']+)'[\s\S]*?link:\s*\{ href:\s*'([^']+)'/g)]

  return projectMatches.map((match) => ({
    type: 'project',
    path: match[3],
    title: match[1],
    description: match[2],
    body: match[2],
    excerpt: match[2],
  }))
}

async function main() {
  const generatedAt = new Date().toISOString()
  const [articles, pages, projects] = await Promise.all([
    buildArticles(),
    buildPages(),
    buildProjects(),
  ])

  const bundle = {
    version: 1,
    generatedAt,
    site: {
      name: 'Drew Royster',
      url: 'https://drewroyster.com',
      voiceAgentName: 'Drew Systems Voice Interface',
      identityBoundary:
        "You are Drew Royster's site agent and guide. You are not literally Drew; you help visitors understand Drew's writing, projects, and work from the site context.",
      style:
        'Concise, candid, technically grounded, archival/dossier aesthetic, comfortable discussing voice systems, AI agents, tooling, search, and local-first workflows.',
    },
    pages,
    dossier: {
      type: 'dossier',
      path: '/about',
      title: 'Personal site dossier',
      description:
        'Drew Royster personal-site context: tone, almost-prime-time technology thesis, current fascinations, and books/marginalia.',
      body: dossierText(),
      excerpt: toExcerpt(dossierText()),
    },
    articles: articles.sort((a, b) => String(b.date).localeCompare(String(a.date))),
    projects,
  }

  const outputPath = path.join(root, 'public/voice-context.json')
  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, `${JSON.stringify(bundle, null, 2)}\n`)
  console.log(
    `Generated public/voice-context.json with ${pages.length} pages, ${articles.length} articles, ${projects.length} projects.`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
