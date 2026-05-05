import Link from 'next/link'

const footerLinks = [
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Articles', '/articles'],
  ['Talks', '/appearances'],
  ['Uses', '/recommendations'],
]

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-cream">
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-7xl flex-none px-7 pb-7 sm:px-8 lg:px-8">
      <div className="dossier-frame bg-black/40">
        <div className="grid divide-y divide-cream/14 text-sm uppercase text-cream/56 sm:grid-cols-[1.2fr_repeat(2,0.9fr)] sm:divide-x sm:divide-y-0">
          <div className="px-4 py-4 text-cream/72">
            Drew Royster <span className="text-cream/36">v2026</span>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 px-4 py-4">
            {footerLinks.map(([label, href]) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </nav>
          <div className="px-4 py-4 text-cream/42">
            Built in Utah · {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
