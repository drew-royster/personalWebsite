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
      'Helped build an AI bootcamp and applied projects around agents, function calling, and practical model workflows.',
    link: { href: 'https://shaolin.ai', label: 'shaolin.ai' },
    backgroundColor: 'bg-cream',
    logo: logoShaolin,
  },
  {
    name: 'The Anon',
    description:
      'Staffing search application that lets operators find people with natural-language search over structured and unstructured data.',
    link: { href: '/articles/staff-search-rag-function-calling', label: 'case note' },
    backgroundColor: 'bg-black',
    logo: logoTheAnon,
  },
  {
    name: 'Smart Autofill',
    description:
      'Chrome extension experiment that uses personal context and LLMs to fill out forms with less manual repetition.',
    link: { href: 'https://github.com/drew-royster/smart-autofill-extension', label: 'github' },
    backgroundColor: 'bg-cream',
    logo: lightningLogo,
  },
  {
    name: 'Canvas File Sync',
    description:
      'Electron app from college that synced Canvas course files into Google Drive before the ecosystem made that easy.',
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
        <p className="small-label mt-6 text-xs text-brass transition group-hover:text-cream">
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
      title="Projects and systems I have worked on."
      intro="Some are active, some are old, but they show the direction: useful AI, search, automation, and tools that connect to real work."
    >
      <ul role="list" className="grid border-b border-cream/18 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
