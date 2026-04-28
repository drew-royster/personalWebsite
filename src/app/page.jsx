import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/retro/agent-ears.jpg'
import image2 from '@/images/photos/retro/machine-hands.jpg'
import image3 from '@/images/photos/retro/memory-archive.jpg'
import image4 from '@/images/photos/retro/speech-to-action.jpg'
import image5 from '@/images/photos/retro/radio-builder.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article, index }) {
  return (
    <Card
      as="article"
      className="retro-card spaceage-panel rounded-lg border border-amber-200/15 p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-300/45"
    >
      <span className="retro-corners" />
      <span className="phosphor-status" />
      <div className="mb-8 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-teal-200/80">
          note {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-px w-16 bg-gradient-to-r from-teal-300/70 to-transparent" />
      </div>
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-amber-100/60 transition group-hover:fill-teal-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-14 sm:mt-20">
      <div className="-my-4 overflow-hidden border-y border-amber-200/10 bg-[linear-gradient(90deg,rgba(255,232,178,0.06),rgba(47,211,198,0.04),rgba(255,232,178,0.06))] py-8">
        <div className="photo-drift flex justify-center gap-5 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-lg bg-[#211910] shadow-2xl shadow-black/30 ring-1 ring-amber-200/20 transition duration-500 hover:-translate-y-2 hover:rotate-0 sm:w-72',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

const focusAreas = [
  'voice agents',
  'speech workflows',
  'tool use',
  'agent memory',
  'software that acts',
]

const principles = [
  {
    title: 'Listen',
    label: '01',
    description:
      'Speech interfaces, transcripts, turn-taking, and the product details that make voice feel natural instead of ornamental.',
  },
  {
    title: 'Remember',
    label: '02',
    description:
      'Context and memory systems that help agents carry useful history without turning every interaction into a junk drawer.',
  },
  {
    title: 'Act',
    label: '03',
    description:
      'Tool calls, callbacks, automations, and workflows that move voice AI from impressive conversation into useful software.',
  },
]

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-8 sm:mt-12">
        <section className="relative grid items-end gap-12 overflow-hidden rounded-[1.5rem] border border-amber-200/10 bg-[#1b130d]/45 p-5 shadow-2xl shadow-black/20 sm:p-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] lg:p-10">
          <div className="spaceage-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="slow-orbit pointer-events-none absolute -right-48 -top-64 h-[42rem] w-[42rem] rounded-full border border-teal-200/10" />
          <div className="slow-orbit pointer-events-none absolute -right-36 -top-52 h-[34rem] w-[34rem] rounded-full border border-amber-200/10 [animation-duration:52s]" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-teal-300">
              Voice-first AI systems
            </p>
            <h1 className="mt-5 text-6xl font-bold tracking-tight text-amber-50 sm:text-8xl">
              Ears for agents.
              <span className="block text-amber-200/60">
                Hands for machines.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-amber-100/75">
              I’m Drew Royster. I build voice-first AI systems for the space
              between speech, agents, tools, and real-world action.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-amber-200/15 bg-amber-100/[0.03] px-3 py-1 text-sm text-amber-100/70"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-9 flex items-center gap-6">
              <Link
                href="/projects"
                className="rounded-full bg-amber-200 px-5 py-2.5 text-sm font-semibold text-[#21170f] shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-100"
              >
                See the work
              </Link>
              <div className="flex gap-5">
                <SocialLink
                  href="https://www.github.com/drew-royster"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/drew-royster/"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-4 rounded-[1.25rem] border border-teal-300/15" />
            <div className="absolute -inset-8 rounded-full bg-teal-300/10 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#211910] shadow-2xl shadow-black/40 ring-1 ring-amber-200/20">
              <Image
                src={image4}
                alt=""
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120f0b]/50 via-transparent to-transparent" />
              <div className="signal-pulse absolute left-6 right-6 top-7 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-amber-200/15 bg-[#120f0b]/70 px-5 py-4 backdrop-blur">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-200">
                  spoken intent
                </p>
                <p className="mt-1 text-sm text-amber-100/80">
                  routed into tools, memory, and useful action
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Photos />
      <Container className="mt-20 md:mt-24">
        <div className="grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="retro-card spaceage-panel rounded-lg border border-amber-200/15 p-7 transition duration-300 hover:-translate-y-1 hover:border-teal-300/45"
            >
              <span className="retro-corners" />
              <span className="phosphor-status" />
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-base font-semibold text-amber-50">
                  {principle.title}
                </h2>
                <span className="rounded-full border border-teal-300/25 px-2.5 py-1 text-xs text-teal-200">
                  {principle.label}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-amber-100/70">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-24">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-amber-200/10 bg-[#15100b]/70 p-5 sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/35 to-transparent" />
          <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-300">
                Field notes
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-amber-50 sm:text-4xl">
                Writing from the edge of voice, agents, and useful software.
              </h2>
            </div>
            <p className="text-sm leading-6 text-amber-100/55">
              Essays, experiments, and working notes from the place where speech
              turns into tools.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {articles.map((article, index) => (
              <Article key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
