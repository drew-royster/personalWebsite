import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VoiceAgentButton } from '@/components/VoiceAgentButton'

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center bg-black sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-[radial-gradient(ellipse_at_74%_-8%,rgba(159,90,42,0.20)_0%,rgba(159,90,42,0.07)_20%,transparent_38%),radial-gradient(ellipse_at_50%_-14%,rgba(255,230,204,0.12)_0%,rgba(3,44,40,0.72)_28%,rgba(1,18,17,0.96)_58%,#000_100%)] ring-1 ring-cream/12" />
        </div>
      </div>
      <div className="field-noise pointer-events-none fixed inset-0 z-0 opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,230,204,0.035)_1px,transparent_1px)] bg-[length:100%_8px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,rgba(159,90,42,0.18),transparent_14%,transparent_86%,rgba(201,151,91,0.08))]" />
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
        <VoiceAgentButton />
      </div>
    </>
  )
}
