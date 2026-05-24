import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Appearances',
  description:
    'Technical talks, podcasts, and recordings by Drew Royster.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Talks, demonstrations, and recordings."
      intro="Recorded discussions and technical walkthroughs on function calling, model routing, and agent execution."
      unpadded
    >
      <div className="grid border-b border-cream/18 px-4 py-3 text-xs uppercase tracking-[0.22em] text-cream/42 sm:grid-cols-[0.22fr_0.78fr] sm:px-6">
        <span>Recorded</span>
        <span>Details</span>
      </div>
      <ul role="list" className="divide-y divide-cream/14">
        <li className="p-4 sm:p-6 transition hover:bg-cream/[0.02]">
          <article className="grid gap-4 sm:grid-cols-[0.22fr_0.78fr]">
            <div>
              <p className="font-mono text-xs text-cream/40">Podcast</p>
              <time className="mt-1 block font-mono text-sm text-rust">
                Nov 4, 2024
              </time>
            </div>
            <div className="group relative">
              <h2 className="text-xl font-semibold text-cream group-hover:text-rust transition">
                <a href="https://youtu.be/SxFGFsDRj6g?si=vK2buQCgf5uFqcJC" target="_blank" rel="noopener noreferrer">
                  <span className="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 z-20" />
                  Function Calling & BAML: Shaolin AI Podcast
                </a>
              </h2>
              <p className="mt-3 text-sm leading-6 text-cream/62">
                How function calling actually works, and the interesting things the folks at BAML are doing with it.
              </p>
              <div aria-hidden="true" className="mt-4 flex items-center text-sm font-medium text-rust group-hover:text-cream transition">
                Listen to podcast
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                  <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </SimpleLayout>
  )
}
