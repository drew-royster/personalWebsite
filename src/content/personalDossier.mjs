export const currentFascinations = [
  {
    title: 'Hermes-IoT / ESP32 Echo Pyramid',
    body: 'A full-duplex physical device interface for Hermes Agent: less chat box, more agent you can actually talk to across a room.',
  },
  {
    title: 'Multi-speaker audiobook builder',
    body: 'A tool for making audiobooks with multiple voices. The direction is compelling; the models are not quite there yet.',
  },
  {
    title: 'Targeted speaker enhancement for personal STT',
    body: 'Personal speech extraction for better speech-to-text: preserve the enrolled speaker, suppress the rest, and keep the downstream transcript useful.',
  },
  {
    title: 'Hermes-agent journalism bot',
    body: 'A local-civic monitoring agent that keeps an eye on city council meetings and turns boring public process into something easier to follow.',
  },
]

export const personalThesis = {
  title: 'Almost ready for prime time',
  body: 'I like trying to skate where the puck is going to be: building with technology that is close enough to be useful, unfinished enough that the interfaces, workflows, and failure modes still need to be invented.',
  details: [
    'The model capability is newly possible.',
    'The hardware or interface is starting to make sense.',
    'The workflow pain is obvious and automatable.',
    'The tech is still janky enough that useful systems require taste.',
  ],
}

export const siteTone = {
  desiredReaction: 'This guy builds interesting practical stuff.',
  not: [
    'AI hype guy',
    'SaaS growth or marketing guy',
    'enterprise consultant',
    'crypto/web3 futurist',
    'academic researcher cosplay',
    'generic full-stack developer resume',
  ],
  voice:
    'Curious builder, practical systems person, slightly skeptical, taste-driven, interested in real workflows and unfinished edges.',
}

export const books = [
  {
    title: 'That Hideous Strength',
    author: 'C. S. Lewis',
    note: 'Weird and good in the way only C. S. Lewis can be. His power of discernment — his familiarity with the nuances of motivations and actions — feels beyond most people today. Valuable because Lewis simply sees more than we do.',
  },
  {
    title: 'Watership Down',
    author: 'Richard Adams',
    note: 'Delightful and beautiful: a book of adventure and friendship. We all live in Cowslip’s Warren, by the way.',
  },
  {
    title: 'Till We Have Faces',
    author: 'C. S. Lewis',
    note: 'How much of what we say is just jabbering noise? What questions will melt away when we meet the one with all the answers?',
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    note: 'Can someone go beyond good and evil? I love Dostoevsky’s insights into the human heart.',
  },
  {
    title: 'Beyond Good and Evil',
    author: 'Friedrich Nietzsche',
    note: 'What stuck with me was Nietzsche’s brutal capacity to argue both sides of an argument forcefully. One page can make an incredible case, totally convincing you, and the next page essentially says: “you’re a moron if you believed me there.” He never quite states his actual beliefs; he just likes fighting.',
  },
  {
    title: 'There Is No Antimemetics Division',
    author: 'qntm',
    note: 'Most recent standout. Incredibly weird and dreadful in the true meaning of the word. The idea that thoughts and things might not want to be discovered felt genuinely unimaginable.',
  },
  {
    title: 'Endurance',
    author: 'Alfred Lansing',
    note: 'Relentless optimism is what I took from this book. Your mindset is something you decide; it is not really about the cards fate deals you. The mission was an immediate disaster, yet Shackleton is known and respected for how he recovered from it without losing a man.',
  },
  {
    title: 'Superluminary',
    author: 'John C. Wright',
    note: 'What if science was so integrated into our lives it seemed like magic? That is what Superluminary feels like: incredible sci-fi that few have read. The conclusion is an interesting answer to: “won’t the cycle of war and death just repeat?”',
  },
]

export function dossierText() {
  return [
    personalThesis.title,
    personalThesis.body,
    ...personalThesis.details,
    'Current fascinations:',
    ...currentFascinations.flatMap((item) => [item.title, item.body]),
    'Books Drew is thinking about:',
    ...books.flatMap((book) => [`${book.title} — ${book.author}`, book.note]),
    'Site tone:',
    siteTone.desiredReaction,
    siteTone.voice,
    `Avoid sounding like: ${siteTone.not.join(', ')}.`,
  ].join('\n')
}
