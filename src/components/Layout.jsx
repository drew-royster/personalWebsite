import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center bg-[#150f0a] sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,214,138,0.28)_0%,rgba(66,211,198,0.14)_24%,rgba(30,22,15,0.94)_52%,#0d0b08_100%)] ring-1 ring-amber-200/10" />
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,246,220,0.018)_1px,transparent_1px)] bg-[length:100%_5px] opacity-30" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[42rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,236,178,0.16),transparent_58%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,rgba(255,194,102,0.10),transparent_16%,transparent_84%,rgba(47,211,198,0.10))]" />
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
