export const currentFascinations = [
  {
    title: 'Hermes-IoT / ESP32 Echo Pyramid',
    body: 'A physical voice interface for Hermes Agent. Less chat box, more thing in the room that you can interrupt while your hands are busy.',
  },
  {
    title: 'Multi-speaker audiobook builder',
    body: 'A tool for making audiobooks with different voices. The idea feels obvious to me; the models are still not quite good enough to disappear.',
  },
  {
    title: 'Hermes-agent journalism bot',
    body: 'An agent that watches city council meetings and local process. Public information is technically public, but a lot of it is still functionally buried.',
  },
]

export const personalThesis = {
  title: 'Almost ready for prime time',
  body: 'I like working on the edge of what is possible, especially when the capability is real but still awkward. Agents need better senses, voice interfaces need to feel present, local models need practical workflows, and the boring details decide whether the magic survives contact with the world.',
  details: [
    'The capability is newly possible.',
    'The interface is starting to make sense.',
    'The workflow pain is obvious and automatable.',
    'The failure modes are still strange enough to require taste.',
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
    'Curious, practical, a little skeptical, and interested in the unfinished edge where a model becomes a system someone can actually use.',
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
