const WORD_RE = /[a-z0-9]+/gi

export function extractArticleMetadata(source) {
  const match = source.match(/export\s+const\s+article\s*=\s*\{([\s\S]*?)\n\}/m)
  if (!match) return {}

  const body = match[1]
  const metadata = {}
  for (const key of ['author', 'date', 'title', 'description']) {
    const field = body.match(new RegExp(`${key}\\s*:\\s*(['\"])([\\s\\S]*?)\\1\\s*,?`, 'm'))
    if (field) metadata[key] = field[2].replace(/\s+/g, ' ').trim()
  }

  return metadata
}

export function cleanMdxForVoiceContext(source) {
  return source
    .replace(/^import\s+[^\n]+\n/gm, '')
    .replace(/export\s+const\s+article\s*=\s*\{[\s\S]*?\}\s*/gm, '')
    .replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\}\s*/gm, '')
    .replace(/export\s+default\s+[^\n]+\n?/gm, '')
    .replace(/<([A-Z][\w.]*)\b[^>]*\/>/g, '')
    .replace(/<([A-Z][\w.]*)\b[^>]*>[\s\S]*?<\/\1>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/[*_`~]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function cleanJsxForVoiceContext(source) {
  return source
    .replace(/^import\s+[^\n]+\n/gm, '')
    .replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\n\}/gm, '')
    .replace(/export\s+default\s+function\s+\w+\([^)]*\)\s*\{[\s\S]*?return\s*\(/m, '')
    .replace(/\)[\s;]*\}\s*$/m, '')
    .replace(/\{\/\*[^]*?\*\/\}/g, '')
    .replace(/className=(['\"])[\s\S]*?\1/g, '')
    .replace(/href=(['\"])(.*?)\1/g, ' href="$2"')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^{}]*(?:articles|projects|appearances|socials|resume)[^{}]*\}/gi, ' ')
    .replace(/[{}()[\]<>]/g, ' ')
    .replace(/['"`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(value) {
  return String(value || '')
    .toLowerCase()
    .match(WORD_RE) || []
}

function scoreItem(item, path, queryTerms) {
  let score = 0
  if (path && item.path === path) score += 100
  if (path && item.path && path.startsWith(item.path) && item.path !== '/') score += 25

  const titleTerms = tokenize(item.title)
  const descriptionTerms = tokenize(item.description)
  const bodyTerms = tokenize(item.body)

  for (const term of queryTerms) {
    if (titleTerms.includes(term)) score += 12
    if (descriptionTerms.includes(term)) score += 6
    if (bodyTerms.includes(term)) score += 2
  }

  return score
}

export function scoreSiteContext(bundle, { path = '/', query = '', limit = 5 } = {}) {
  const queryTerms = [...new Set(tokenize(`${query} ${path.replaceAll('/', ' ')}`))]
  const items = [
    ...(bundle.dossier ? [bundle.dossier] : []),
    ...(bundle.pages || []),
    ...(bundle.articles || []),
    ...(bundle.projects || []),
  ]

  return items
    .map((item) => ({ ...item, score: scoreItem(item, path, queryTerms) }))
    .filter((item) => item.score > 0 || item.path === path)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit)
}

export function toExcerpt(value, maxLength = 900) {
  const text = String(value || '').replace(/\s+/g, ' ').trim()
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}…`
}
