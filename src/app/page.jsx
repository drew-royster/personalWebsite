import Image from 'next/image'
import Link from 'next/link'

import { WebGLDitherSignalPanel } from '@/components/WebGLDitherSignalPanel'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import machineHands from '@/images/photos/retro/machine-hands.jpg'
import speechToAction from '@/images/photos/retro/speech-to-action.jpg'
import { currentFascinations } from '@/content/personalDossier.mjs'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

const capabilities = [
  {
    title: 'Voice interfaces',
    body: 'Speech is latency sensitive and weirdly unforgiving. A voice agent either feels present or it feels like a phone tree with better branding.',
  },
  {
    title: 'Agent runtime',
    body: 'The interesting part is usually not the model call. It is permissions, context, retries, delegation, logs, and what happens when the agent is wrong.',
  },
  {
    title: 'Tool workflows',
    body: 'Models are much more useful when they can touch the real system: APIs, browsers, webhooks, databases, calendars, files. Then you need rails.',
  },
  {
    title: 'Local systems',
    body: 'Some things should run close to you: local models, private data, self hosted infrastructure, and boring machines that keep working after the demo.',
  },
  {
    title: 'Automations',
    body: 'A good automation is not a clever prompt. It is a small system that wakes up, checks the world, does the right thing, and leaves a trace.',
  },
  {
    title: 'Evaluation loops',
    body: 'If you cannot inspect it, you are mostly vibing. Tests, traces, review surfaces, and failure notes make agent work less magical and more useful.',
  },
]

const caseStudies = [
  {
    label: 'Staff Search',
    title: 'Natural language search over people data',
    body: 'A staffing search app where the hard part was not search in the abstract. It was making messy people data legible enough that an operator could ask a normal question and get useful candidates back.',
    href: '/articles/staff-search-rag-function-calling',
  },
  {
    label: 'Shaolin AI',
    title: 'Applied AI education and product builds',
    body: 'Bootcamp work and applied projects around agents, function calling, and the gap between what a demo implies and what a team can actually ship.',
    href: 'https://shaolin.ai',
  },
  {
    label: 'Smart Autofill',
    title: 'Identity-aware form automation',
    body: 'A browser extension experiment for using personal context to fill out forms. Forms are boring, but they are also where a lot of real workflow pain hides.',
    href: 'https://github.com/drew-royster/smart-autofill-extension',
  },
]

const terminalLines = [
  ['voice.input', 'say the messy version out loud'],
  ['transcript.stream', 'turn speech into state we can inspect'],
  ['context.load', 'pull the page, articles, notes, permissions'],
  ['agent.plan', 'decide what should happen before touching tools'],
  ['tool.call', 'browser, webhook, database, file, calendar'],
  ['handoff', 'leave a trace a human can actually review'],
]

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      className="inline-flex h-10 w-10 items-center justify-center border border-cream/18 text-cream/62 transition hover:border-rust/50 hover:text-rust"
      {...props}
    >
      <Icon className="h-5 w-5 fill-current" />
    </Link>
  )
}

function Shell({ children, className = '', ...props }) {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-7 sm:px-8 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}

function CommandBlock({ step, title, children, href }) {
  return (
    <div className="border-t border-cream/18 py-3 first:border-rust/65">
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="small-label text-sm text-cream/58">
          {step}. {title}
        </p>
        {href && (
          <Link
            href={href}
            className="small-label text-xs text-cream/42 transition hover:text-cream"
          >
            Open
          </Link>
        )}
      </div>
      <code className="block border border-cream/18 bg-black/18 px-3 py-2 font-mono text-sm text-cream/86">
        {children}
      </code>
    </div>
  )
}

function TerminalDemo() {
  return (
    <div className="h-full border border-cream bg-black/70 p-3">
      <div className="mb-4 flex items-center gap-2 border-b border-cream/18 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-cream/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-brass/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-rust/90" />
        <span className="ml-3 font-mono text-xs text-cream/32">drew.systems</span>
      </div>
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        {terminalLines.map(([event, detail]) => (
          <div key={event} className="grid gap-1 sm:grid-cols-[9.5rem_1fr]">
            <span className="text-rust">{event}</span>
            <span className="text-cream/66">{detail}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-cream/14 pt-4 font-mono text-xs text-cream/40">
        status: useful enough to run, still strange enough to inspect
      </div>
    </div>
  )
}

function ImagePlate({ image, label, priority = false }) {
  return (
    <div className="image-plate relative h-full min-h-[18rem] overflow-hidden border border-cream/18 bg-oxidized">
      <Image
        src={image}
        alt=""
        sizes="(min-width: 1024px) 38rem, 100vw"
        className="etched-image absolute inset-0 h-full w-full object-cover opacity-80"
        priority={priority}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,28,26,0.1),rgba(0,0,0,0.42))]" />
      <p className="small-label absolute bottom-4 right-4 text-sm text-cream">
        {label}
      </p>
    </div>
  )
}

function Article({ article, index }) {
  return (
    <article className="group border-t border-cream/18 p-4 transition hover:bg-cream/[0.035] md:border-l md:border-t-0">
      <p className="small-label text-xs text-cream/42">
        Note {String(index + 1).padStart(2, '0')} · {formatDate(article.date)}
      </p>
      <h3 className="mt-4 text-xl font-semibold text-cream">
        <Link href={`/articles/${article.slug}`}>
          <span className="absolute" />
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-cream/62">{article.description}</p>
      <Link
        href={`/articles/${article.slug}`}
        className="small-label mt-5 inline-block text-xs text-rust transition group-hover:text-cream"
      >
        Read article
      </Link>
    </article>
  )
}

function CaseStudy({ item }) {
  return (
    <Link
      href={item.href}
      className="group block border-t border-cream/18 p-4 transition hover:bg-cream/[0.035] md:border-l md:border-t-0"
    >
      <p className="small-label text-xs text-cream/42">{item.label}</p>
      <h3 className="mt-4 text-xl font-semibold text-cream">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-cream/62">{item.body}</p>
      <span className="small-label mt-5 inline-block text-xs text-rust transition group-hover:text-cream">
        Open record
      </span>
    </Link>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Shell className="pt-0">
        <div className="dossier-frame border-t-0 bg-ink/58">
          <div className="relative overflow-hidden px-4 py-20 text-center sm:px-8 sm:py-24 lg:px-20">
            <WebGLDitherSignalPanel className="pointer-events-none absolute inset-0 opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(3,28,26,0.08)_0%,rgba(3,28,26,0.62)_48%,rgba(0,0,0,0.82)_100%)]" />
            <div className="relative mx-auto max-w-4xl">
              <div className="accent-rule mx-auto mb-5 h-px w-24" />
              <p className="small-label accent-kicker text-sm">
                Drew Royster · Utah · practical AI systems
              </p>
              <h1 className="font-display mt-4 text-5xl leading-[0.92] text-cream sm:text-7xl lg:text-8xl">
                I like working on the edge of what’s possible.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl font-serif text-lg leading-8 text-cream/74">
                Especially when the new capability is real but still awkward:
                agents that need better senses, voice interfaces that need to
                feel present, local models that need practical workflows, and
                systems where the boring details decide whether the magic
                survives contact with the world.
              </p>
              <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-0 text-left">
                <CommandBlock
                  step="1"
                  title="Find the edge"
                >
                  capability is real + workflow is still fuzzy
                </CommandBlock>
                <CommandBlock step="2" title="Make it legible">
                  context + tools + traces + something a person can run
                </CommandBlock>
              </div>
              <div className="mt-8 flex items-center justify-center gap-3">
                <SocialLink
                  href="https://www.github.com/drew-royster"
                  aria-label="GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/drew-royster/"
                  aria-label="LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </Shell>

      <Shell>
        <div className="dossier-frame border-t-0 bg-black/44">
          <div className="grid border-b border-cream/18 lg:grid-cols-[1fr_0.95fr]">
            <div className="p-4 lg:p-6">
              <p className="small-label mb-4 text-xl text-cream">A small trace</p>
              <TerminalDemo />
            </div>
            <div className="border-t border-cream/18 lg:border-l lg:border-t-0">
              <ImagePlate image={speechToAction} label="speech to action" />
            </div>
          </div>
          <div className="border-b border-cream/18 p-4">
            <p className="small-label text-xl text-cream">Working materials</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="border-t border-cream/18 p-4 md:border-l md:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+3)]:border-t-0"
              >
                <h2 className="small-label text-base text-cream">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-cream/62">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Shell>

      <Shell className="mt-10">
        <div className="dossier-frame bg-black/40">
          <div className="border-b border-cream/18 p-4 sm:p-6">
            <p className="small-label text-sm text-rust">Current fascinations</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-cream sm:text-4xl">
              The stuff I keep circling right now.
            </h2>
            <p className="mt-4 max-w-2xl font-serif text-base leading-7 text-cream/64">
              These are not all finished products. Some are more like pressure
              points. The capability is close enough to be real, but the shape
              of the thing is still unsettled.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {currentFascinations.map((item, index) => (
              <article
                key={item.title}
                className="border-t border-cream/18 p-4 transition hover:bg-cream/[0.035] md:border-l md:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+4)]:border-t-0"
              >
                <p className="small-label text-xs text-cream/36">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cream/62">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Shell>

      <Shell id="contact" className="mt-10">
        <div className="dossier-frame bg-black/40">
          <div className="grid border-b border-cream/18 lg:grid-cols-[0.72fr_1fr]">
            <div className="p-4 sm:p-6">
              <p className="small-label text-sm text-rust">Work records</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold text-cream sm:text-4xl">
                Things that made the model touch the world.
              </h2>
              <p className="mt-5 max-w-xl font-serif text-base leading-7 text-cream/64">
                I am interested in the part after the impressive screenshot:
                what context the system needs, what actions it is allowed to
                take, how a human checks the work, and whether it still works
                tomorrow.
              </p>
            </div>
            <div className="border-t border-cream/18 lg:border-l lg:border-t-0">
              <ImagePlate image={machineHands} label="tools and machines" />
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            {caseStudies.map((item) => (
              <CaseStudy key={item.title} item={item} />
            ))}
          </div>
        </div>
      </Shell>

      <Shell className="mt-10">
        <div className="dossier-frame bg-black/40">
          <div className="border-b border-cream/18 p-4 sm:p-6">
            <p className="small-label text-sm text-rust">Field Notes</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-cream sm:text-4xl">
              Notes from the fuzzy edge where models become software.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => (
              <Article key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </Shell>

      <Shell className="mt-10">
        <div className="dossier-frame grid bg-ink/52 md:grid-cols-[1fr_auto]">
          <div className="p-4 sm:p-6">
            <p className="small-label text-sm text-rust">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-cream">
              If you have a hard, weird system, send it over.
            </h2>
            <p className="mt-4 max-w-2xl font-serif text-base leading-7 text-cream/64">
              I am usually most useful when the thing is half product problem,
              half systems problem: voice workflows, agent tooling, private
              model infrastructure, automation glue, or prototypes where the
              boring failure modes matter.
            </p>
          </div>
          <div className="flex items-center border-t border-cream/18 p-4 md:border-l md:border-t-0 sm:p-6">
            <Link
              href="mailto:drew.royster@gmail.com?subject=AI%20systems%20build"
              className="small-label border border-rust bg-rust px-5 py-3 text-sm text-ink transition hover:bg-transparent hover:text-rust"
            >
              Email Drew
            </Link>
          </div>
        </div>
      </Shell>
    </>
  )
}
