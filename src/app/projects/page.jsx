import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import cfsLogo from '@/images/logos/cfs.png'
import lightningLogo from '@/images/logos/lightning.svg'
import logoShaolin from '@/images/logos/shaolin.svg'
import logoTheAnon from '@/images/logos/theanon.png'

const projects = [
  {
    name: 'Shaolin AI',
    description:
      'Built applied agent and function-calling projects for rapid AI product sprints: small working systems, clearer boundaries, and artifacts teams could inspect after the keynote glow wore off.',
    link: { href: 'https://shaolin.ai', label: 'shaolin.ai' },
    backgroundColor: 'bg-cream',
    logo: logoShaolin,
  },
  {
    name: 'The Anon',
    description:
      'A staffing search application over structured and unstructured people data. The useful part was turning fuzzy operator intent into inspectable retrieval and function-calling steps.',
    link: { href: '/articles/staff-search-rag-function-calling', label: 'case note' },
    backgroundColor: 'bg-black',
    logo: logoTheAnon,
  },
  {
    name: 'Smart Autofill',
    description:
      'A Chrome extension experiment for form filling with personal context: boring workflow pain, useful only if the model stays bounded and does not invent facts.',
    link: { href: 'https://github.com/drew-royster/smart-autofill-extension', label: 'github' },
    backgroundColor: 'bg-cream',
    logo: lightningLogo,
  },
  {
    name: 'Canvas File Sync',
    description:
      'A college Electron app that synced Canvas course files into Google Drive before that felt like an obvious thing software should already do.',
    link: { href: 'https://github.com/drew-royster/canvasFileSync', label: 'github' },
    backgroundColor: 'bg-cream',
    logo: cfsLogo,
  },
]

function Project({ project, index }) {
  return (
    <li className="border-t border-cream/18 p-4 transition hover:bg-cream/[0.035] sm:p-5 sm:border-l sm:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+4)]:border-t-0">
      <Link href={project.link.href} className="group block">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center border border-cream/18 ${project.backgroundColor}`}
          >
            <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
          </div>
          <span className="small-label text-xs text-cream/36">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-cream">{project.name}</h2>
        <p className="mt-3 text-sm leading-6 text-cream/62">
          {project.description}
        </p>
        <p className="small-label mt-6 text-xs text-rust transition group-hover:text-cream">
          {project.link.label}
        </p>
      </Link>
    </li>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Projects and systems Drew Royster has worked on.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects and systems I keep learning from."
      intro="Some are active, some are old, and some were mostly useful because they made a fuzzy problem easier to see. That is usually the pattern I care about."
    >
      <ul role="list" className="grid border-b border-cream/18 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
