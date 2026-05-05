import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-10 sm:mt-14">
      <div className="dossier-frame bg-black/40">
        <header className="border-b border-cream/18 p-4 sm:p-6">
          <p className="small-label text-sm text-cream/42">Dossier</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-cream sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-base leading-7 text-cream/66">
            {intro}
          </p>
        </header>
        {children && <div className="p-4 sm:p-6">{children}</div>}
      </div>
    </Container>
  )
}
