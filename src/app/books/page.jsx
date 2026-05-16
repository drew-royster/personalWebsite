import { SimpleLayout } from '@/components/SimpleLayout'
import { books } from '@/content/personalDossier.mjs'

export const metadata = {
  title: 'Books',
  description: 'Books Drew Royster has been thinking about, with marginal notes.',
}

export default function Books() {
  return (
    <SimpleLayout
      title="Books I keep thinking about."
      intro="Not a canon and not really recommendations. More like a small pile of books that left a splinter in my brain. Some notes are cleaned up a little. Some should stay weird."
    >
      <div className="dossier-frame bg-black/35">
        <div className="grid border-b border-cream/18 px-4 py-3 text-xs uppercase tracking-[0.22em] text-cream/42 sm:grid-cols-[0.28fr_0.72fr] sm:px-5">
          <span>Marginalia</span>
          <span className="hidden sm:block">Notes</span>
        </div>
        <ul role="list" className="divide-y divide-cream/14">
          {books.map((book, index) => (
            <li
              key={book.title}
              className="grid gap-4 p-4 sm:grid-cols-[0.28fr_0.72fr] sm:p-5"
            >
              <div>
                <p className="font-mono text-xs text-rust">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-cream">
                  {book.title}
                </h2>
                <p className="mt-1 text-sm text-cream/45">{book.author}</p>
              </div>
              <p className="font-serif text-base leading-7 text-cream/72">
                {book.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}
