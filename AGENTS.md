# AGENTS.md — Drew Royster personal website

This repository is a human-readable and agent-readable personal site. The goal is not to maximize conversion or turn the site into a marketing funnel; it should feel like a modern personal dossier / field-notes system that is delightful for humans and easy for LLM agents to inspect.

## Product direction

- Human-first: pages should be readable, beautiful, and interesting.
- Agent-readable: keep stable routes, clear metadata, `public/llms.txt`, and direct summaries of what each page contains.
- Personal, not salesy: no aggressive CTAs, funnels, or generic portfolio claims.

## Voice and tone

The site should make someone feel: "This guy builds interesting practical stuff."

Avoid sounding like:

- AI hype guy
- SaaS growth/marketing guy
- enterprise consultant
- crypto/web3 futurist
- academic researcher cosplay
- generic full-stack résumé

Prefer:

- curious builder
- practical systems person
- slightly skeptical
- taste-driven
- interested in real workflows and unfinished edges

## Visual direction

Current accepted palette:

- dark green / black / cream base
- muted rust/copper accent
- archival/dossier/field-notes aesthetic

Future redesign direction:

- subtle audio/waveform/orb/device affordances
- fewer generic portrait/image treatments if they do not support the dossier concept

## Content sources

- `src/content/personalDossier.mjs` — personal thesis, current fascinations, books/marginalia, site tone.
- `src/app/articles/*/page.mdx` — public writing.
- `src/app/about/page.jsx` — origin story, current interests, selected books.
- `src/app/books/page.jsx` — books/marginalia page.
- `docs/personal-site-interview.md` — raw interview notes; do not treat as polished copy.

## Implementation rules for future agents

1. Keep the site readable by humans and machines.
2. Update `public/llms.txt` when adding/removing major routes.
3. Update `src/content/personalDossier.mjs` rather than scattering personal-dossier facts.
4. Run `npm run lint`, `npm test`, and `npm run build` before calling work complete.
5. Do not invent biographical/professional claims. Use the site content or ask Drew.
