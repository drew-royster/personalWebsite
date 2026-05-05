import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Drew Royster',
    default:
      'Drew Royster - Voice systems, tools, and agents.',
  },
  description:
    'I build voice systems, tool workflows, and agents that survive contact with real work.',
  alternates: {
    types: {
      'application/rss+xml': `https://drewroyster.com/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-black text-cream">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
