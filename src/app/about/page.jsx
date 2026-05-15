import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import {
  books,
  currentFascinations,
  personalThesis,
} from '@/content/personalDossier.mjs'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-cream/70 transition hover:text-cream"
      >
        <Icon className="h-6 w-6 flex-none fill-cream/48 transition group-hover:fill-cream" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I am Drew Royster. I live in Utah and build practical AI systems.',
}

export default function About() {
  return (
    <Container className="mt-10 sm:mt-14">
      <div className="dossier-frame bg-black/40">
        <div className="grid lg:grid-cols-[0.64fr_0.36fr]">
          <div className="border-b border-cream/18 p-4 sm:p-6 lg:border-b-0 lg:border-r">
            <p className="small-label text-sm text-cream/42">Operator Record</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-cream sm:text-5xl">
              I am Drew Royster. I build practical AI systems across the whole stack.
            </h1>
            <div className="mt-8 space-y-7 font-serif text-base leading-7 text-cream/70">
              <p>
                One of my earliest exposures to coding was in high school when
                the first Android phone came out. I wanted to use it, but my
                family was on AT&T and the phone was a T-Mobile exclusive. That
                led me into APNs, CyanogenMod, custom firmware, and the habit of
                taking systems apart until they made sense.
              </p>
              <p>
                Since then I have worked across large companies, small startups,
                web applications, databases, platforms, and machine learning.
                Lately my focus has been the place where stochastic models meet
                deterministic software: voice interfaces, agents, tool-calling,
                private infrastructure, and real workflows.
              </p>
              <p>
                I am most useful when a project needs taste and implementation
                in the same person: someone who can reason about the product,
                wire up the APIs, debug the runtime, and leave behind software
                the team can actually operate.
              </p>
            </div>
          </div>
          <aside className="p-4 sm:p-6">
            <div className="relative overflow-hidden border border-cream/18 bg-ink">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="aspect-square object-cover"
                priority
              />
            </div>
            <ul role="list" className="mt-8 border-t border-cream/18 pt-6">
              <SocialLink href="https://www.github.com/drew-royster" icon={GitHubIcon}>
                GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/drew-royster/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:drew.royster@gmail.com"
                icon={MailIcon}
                className="mt-6 border-t border-cream/18 pt-6"
              >
                drew.royster@gmail.com
              </SocialLink>
            </ul>
          </aside>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
        <section className="dossier-frame bg-black/35 p-4 sm:p-6">
          <p className="small-label text-sm text-rust">Field note</p>
          <h2 className="mt-3 text-2xl font-semibold text-cream">
            {personalThesis.title}
          </h2>
          <p className="mt-4 font-serif text-base leading-7 text-cream/70">
            {personalThesis.body}
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-cream/58 sm:grid-cols-2">
            {personalThesis.details.map((detail) => (
              <li key={detail} className="border border-cream/12 bg-cream/[0.025] p-3">
                {detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="dossier-frame bg-black/35 p-4 sm:p-6">
          <p className="small-label text-sm text-rust">Current fascinations</p>
          <ul role="list" className="mt-4 space-y-4">
            {currentFascinations.map((item) => (
              <li key={item.title}>
                <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cream/62">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="dossier-frame mt-8 bg-black/35 p-4 sm:p-6">
        <div className="flex flex-col gap-4 border-b border-cream/14 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="small-label text-sm text-rust">Marginalia</p>
            <h2 className="mt-3 text-2xl font-semibold text-cream">
              Books I’ve been thinking about
            </h2>
          </div>
          <Link
            href="/books"
            className="font-mono text-xs uppercase tracking-[0.2em] text-rust transition hover:text-cream"
          >
            Full shelf
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {books.slice(0, 3).map((book) => (
            <article key={book.title} className="border border-cream/12 bg-cream/[0.025] p-4">
              <h3 className="text-lg font-semibold text-cream">{book.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/42">
                {book.author}
              </p>
              <p className="mt-3 font-serif text-sm leading-6 text-cream/66">
                {book.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}
