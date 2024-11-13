import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Drew Royster',
    default:
      'Drew Royster - Full stack software developer and ai engineer',
  },
  description:
    'I’m Drew, a full stack software developer and ai engineer. I help people enter this new world of ai guided user experiences and build models that work!',
  alternates: {
    types: {
      'application/rss+xml': `https://drewroyster.com/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
