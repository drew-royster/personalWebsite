import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

export const metadata = {
  title: 'Articles',
  description:
    'My thoughts on programming, machine learning and the future of user experiences.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Programming, machine learning, user experiences and more."
      intro="My thoughts on programming, machine learning and the future of user experiences."
      unpadded
    >
      <div className="grid border-b border-cream/18 px-4 py-3 text-xs uppercase tracking-[0.22em] text-cream/42 sm:grid-cols-[0.22fr_0.78fr] sm:px-6">
        <span>Date</span>
        <span>Record</span>
      </div>
      <ul role="list" className="divide-y divide-cream/14">
        {articles.map((article) => (
          <li key={article.slug} className="p-4 sm:p-6 transition hover:bg-cream/[0.02]">
            <article className="grid gap-4 sm:grid-cols-[0.22fr_0.78fr]">
              <time
                dateTime={article.date}
                className="font-mono text-sm text-rust"
              >
                {formatDate(article.date)}
              </time>
              <div className="group relative">
                <h2 className="text-xl font-semibold text-cream group-hover:text-rust transition">
                  <Link href={`/articles/${article.slug}`}>
                    <span className="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 z-20" />
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-cream/62">
                  {article.description}
                </p>
                <div aria-hidden="true" className="mt-4 flex items-center text-sm font-medium text-rust group-hover:text-cream transition">
                  Read article
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
