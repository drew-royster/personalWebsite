'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

const navItems = [
  ['About', '/about'],
  ['Articles', '/articles'],
  ['Projects', '/projects'],
  ['Talks', '/appearances'],
  ['Uses', '/recommendations'],
]

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M5 7h14M5 12h14M5 17h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Wordmark({ className }) {
  return (
    <Link
      href="/"
      aria-label="Drew Royster home"
      className={clsx(
        'font-display block text-3xl leading-[0.86] text-cream transition hover:text-white sm:text-4xl',
        className,
      )}
    >
      <span className="block">DREW</span>
      <span className="block">ROYSTER</span>
    </Link>
  )
}

function NavLink({ href, children, className }) {
  let pathname = usePathname()
  let isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'nav-cell flex min-h-16 items-center px-4 py-3 text-sm uppercase text-cream/64 transition hover:bg-cream/[0.035] hover:text-cream',
        isActive && 'bg-cream/[0.055] text-cream',
        className,
      )}
    >
      {children}
    </Link>
  )
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center border border-cream/14 text-cream/58 transition hover:border-cream/40 hover:text-cream"
    >
      <Icon className="h-4 w-4 fill-current" />
    </Link>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <div className="flex items-center">
        <PopoverButton
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center border border-cream/20 bg-black/20 text-cream/80 transition hover:border-cream/45 hover:text-cream"
        >
          <MenuIcon className="h-5 w-5" />
        </PopoverButton>
      </div>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-black/70 duration-150 data-[closed]:opacity-0"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-7 top-7 z-50 border border-cream/25 bg-ink p-0 text-cream shadow-2xl shadow-black/40 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="flex items-start justify-between border-b border-cream/18 p-4">
          <Wordmark className="text-3xl" />
          <PopoverButton
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/70"
          >
            <CloseIcon className="h-5 w-5" />
          </PopoverButton>
        </div>
        <nav>
          <ul className="divide-y divide-cream/14">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <PopoverButton
                  as={Link}
                  href={href}
                  className="block px-4 py-4 text-sm uppercase text-cream/78 transition hover:bg-cream/[0.04] hover:text-cream"
                >
                  {label}
                </PopoverButton>
              </li>
            ))}
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="relative z-50 mx-auto w-full max-w-7xl px-7 pt-7 sm:px-8 lg:px-8">
      <div className="dossier-frame bg-ink/70 backdrop-blur">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1.45fr_repeat(5,minmax(5.75rem,0.72fr))_1.08fr_0.84fr]">
          <div className="flex min-h-24 items-center border-r border-cream/18 px-4 py-4 sm:px-5">
            <Wordmark />
          </div>
          <div className="flex items-center justify-end px-4 md:hidden">
            <MobileNavigation />
          </div>
          <nav className="hidden md:contents" aria-label="Primary">
            {navItems.map(([label, href]) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cell hidden min-h-16 items-center justify-between gap-2 px-4 py-3 md:flex">
            <span className="text-sm uppercase text-cream/42">Socials</span>
            <div className="flex gap-2">
              <SocialLink
                href="https://www.github.com/drew-royster"
                label="GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/drew-royster/"
                label="LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
          <Link
            href="/#contact"
            className="nav-cell hidden min-h-16 items-center px-4 py-3 text-sm uppercase text-cream/72 transition hover:bg-cream/[0.035] hover:text-cream md:flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
