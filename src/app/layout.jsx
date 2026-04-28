import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Drew Royster',
    default:
      'Drew Royster - Ears for agents. Hands for machines.',
  },
  description:
    'I build voice-first AI systems for the space between speech, agents, tools, and real-world action.',
  alternates: {
    types: {
      'application/rss+xml': `https://drewroyster.com/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-[#120f0b] dark:bg-[#120f0b]">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
