import Image from 'next/image'
import Link from 'next/link'

import { WebGLDitherSignalPanel } from '@/components/WebGLDitherSignalPanel'
import machineHands from '@/images/photos/retro/machine-hands.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

const capabilities = [
  {
    title: 'Voice interfaces',
    body: 'Voice is unforgiving. A little lag makes the whole thing feel dead. Bad interruption handling turns a smart model into a weird phone tree.',
  },
  {
    title: 'Agent runtime',
    body: 'The model call is usually the easy part. The harder bit is what it gets to know, what it can touch, and how you catch it when it drifts.',
  },
  {
    title: 'Tool workflows',
    body: "A model that can't touch the system is mostly a text box with confidence. The useful version calls tools, stays bounded, and leaves enough evidence to check.",
  },
  {
    title: 'Local systems',
    body: "Some things belong close to the machine: private data, local models, home servers, weird hardware. Cloud is useful. It just isn't always the default.",
  },
  {
    title: 'Automations',
    body: 'Good automations should be boring. They wake up, check the world, do the thing, and leave a trace you can inspect later.',
  },
  {
    title: 'Evaluation loops',
    body: "If you can't inspect it, you're mostly judging vibes. Tests help, but so do transcripts, screenshots, diffs, and screens that make failure obvious.",
  },
]

const caseStudies = [
  {
    label: 'Staff Search',
    title: 'Search that had to survive messy people data',
    body: 'The interesting part was not search in the abstract. It was getting messy people data clean enough that an operator could ask a normal question and get useful candidates back.',
    constraint: 'Constraint: translate fuzzy operator intent into inspectable retrieval and function-calling steps over messy structured and unstructured records.',
    href: '/articles/staff-search-rag-function-calling',
  },
  {
    label: 'Shaolin AI',
    title: 'Applied AI product builds',
    body: 'Rapid applied builds around agents, function calling, and all the stuff that gets lost between a clean demo and something a team can actually ship.',
    constraint: 'Constraint: turn agent concepts into small working systems with clear boundaries, artifacts, and failure notes instead of slideware.',
    href: 'https://shaolin.ai',
  },
  {
    label: 'Smart Autofill',
    title: 'Forms are still where the pain hides',
    body: 'A browser extension experiment for using personal context to fill out forms. It sounds small, but forms are where a surprising amount of real workflow pain piles up.',
    constraint: 'Constraint: make personal context useful inside a browser workflow without letting the model invent facts or overreach.',
    href: 'https://github.com/drew-royster/smart-autofill-extension',
  },
]

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
    <div className="border-cream/18 border-t py-3 first:border-rust/65">
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="small-label text-cream/58 text-sm">
          {step}. {title}
        </p>
        {href && (
          <Link
            href={href}
            className="small-label text-cream/42 text-xs transition hover:text-cream"
          >
            Open
          </Link>
        )}
      </div>
      <code className="border-cream/18 bg-black/18 text-cream/86 block border px-3 py-2 font-mono text-sm">
        {children}
      </code>
    </div>
  )
}

function ImagePlate({ image, label, priority = false }) {
  return (
    <div className="image-plate border-cream/18 relative h-full min-h-[18rem] overflow-hidden border bg-oxidized">
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
    <article className="border-cream/18 group border-t p-4 transition hover:bg-cream/[0.035] md:border-l md:border-t-0">
      <p className="small-label text-cream/42 text-xs">
        Note {String(index + 1).padStart(2, '0')} · {formatDate(article.date)}
      </p>
      <h3 className="mt-4 text-xl font-semibold text-cream">
        <Link href={`/articles/${article.slug}`}>
          <span className="absolute" />
          {article.title}
        </Link>
      </h3>
      <p className="text-cream/62 mt-3 text-sm leading-6">
        {article.description}
      </p>
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
      className="border-cream/18 group block border-t p-4 transition hover:bg-cream/[0.035] md:border-l md:border-t-0"
    >
      <p className="small-label text-cream/42 text-xs">{item.label}</p>
      <h3 className="mt-4 text-xl font-semibold text-cream">{item.title}</h3>
      <p className="text-cream/62 mt-3 text-sm leading-6">{item.body}</p>
      {item.constraint && (
        <p className="mt-4 border-l border-rust/60 pl-3 font-mono text-xs leading-5 text-cream/48">
          {item.constraint}
        </p>
      )}
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
        <div className="dossier-frame bg-ink/58 border-t-0">
          <div className="relative overflow-hidden px-4 py-20 text-center sm:px-8 sm:py-24 lg:px-20">
            <WebGLDitherSignalPanel className="pointer-events-none absolute inset-0 opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(3,28,26,0.08)_0%,rgba(3,28,26,0.62)_48%,rgba(0,0,0,0.82)_100%)]" />
            <div className="relative mx-auto max-w-4xl">
              <div className="accent-rule mx-auto mb-5 h-px w-24" />
              <p className="small-label accent-kicker text-sm">
                Drew Royster · Utah · frontier voice AI systems
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[0.92] text-cream sm:text-7xl lg:text-8xl">
                I build frontier voice AI systems.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl font-serif text-lg leading-8 text-cream/74">
                Low-latency interfaces, local models, and agent workflows that
                turn speech into action.
              </p>
              <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-0 text-left">
                <CommandBlock step="1" title="Find the edge">
                  voice + agents + local models + real workflow pain
                </CommandBlock>
                <CommandBlock step="2" title="Make it legible">
                  context + tools + traces + bounded actions
                </CommandBlock>
              </div>
            </div>
          </div>
        </div>
      </Shell>

      <Shell>
        <div className="dossier-frame bg-black/44 border-t-0">
          <div className="border-cream/18 border-b p-4">
            <p className="small-label text-xl text-cream">
              Things I do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="border-cream/18 border-t p-4 md:border-l md:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+3)]:border-t-0"
              >
                <h2 className="small-label text-base text-cream">
                  {item.title}
                </h2>
                <p className="text-cream/62 mt-3 text-sm leading-6">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Shell>

      <Shell id="contact" className="mt-10">
        <div className="dossier-frame bg-black/40">
          <div className="border-cream/18 grid border-b lg:grid-cols-[0.72fr_1fr]">
            <div className="p-4 sm:p-6">
              <p className="small-label text-sm text-rust">Work records</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold text-cream sm:text-4xl">
                Projects where the model had to do something.
              </h2>
              <p className="text-cream/64 mt-5 max-w-xl font-serif text-base leading-7">
                I am interested in the part after the impressive screenshot:
                what context the system needs, what actions it can take, what
                evidence it leaves, and whether it still works tomorrow.
              </p>
            </div>
            <div className="border-cream/18 border-t lg:border-l lg:border-t-0">
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
          <div className="border-cream/18 border-b p-4 sm:p-6">
            <p className="small-label text-sm text-rust">Field Notes</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-cream sm:text-4xl">
              Stuff I’ve been trying to understand in public.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => (
              <Article key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </Shell>
    </>
  )
}
