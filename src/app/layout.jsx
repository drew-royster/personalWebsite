import { Courier_Prime, Lora } from 'next/font/google'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier-prime',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata = {
  title: {
    template: '%s - Drew Royster',
    default: 'Drew Royster - Agents, tools, and voice systems.',
  },
  description:
    'I build agents, tool workflows, and voice systems that survive contact with real work.',
  alternates: {
    types: {
      'application/rss+xml': `https://drewroyster.com/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${courierPrime.variable} ${lora.variable}`} suppressHydrationWarning>
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
