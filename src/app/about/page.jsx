import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
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
        'I’m Drew Royster. I live in Utah and I solve hard problems with great code.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I’m Drew Royster. I live in Utah and I solve hard problems with great code.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            One of my earliest exposures to coding in any capacity was when I was in high school and the
                            first Android phone was released.
                            I thought it was magic and really wanted to use it, but my family was on AT&T and it was a
                            T-Mobile exclusive. That led to me learning how to
                            break into the phone and modify the APN (access point networks) to use T-Mobile when it
                            wasn&#39;t supposed to. That led me to Cyanogenmod and a lot of modding with custom firmware.
                        </p>
                        <p>
                            Since then I&#39;ve gotten a broad amount of experience from huge companies like Intel to a lot
                            of small startups
                            where I wear a lot of hats. I&#39;m a full stack developer who knows a lot about platforms,
                            databases, and the web.
                            Lately I&#39;ve been working a lot with machine learning and am thoroughly convinced that the
                            future will be a blend of these stochastic models and deterministic software.
                            For the first time software is able to meet us halfway instead of us needing to learn it in
                            detail, it can comprehend our intentions and act accordingly.
                            We haven&#39;t really fully grasped how it&#39;ll change the market.
                        </p>
                        <p>
                            I&#39;ve gotten quite familiar and good with building these hybrid systems (called agents, but
                            hate that word). If you need help or wanna hire me to build anything out just shoot me an
                            email.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="https://www.github.com/drew-royster" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/drew-royster/" icon={LinkedInIcon}
                                    className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:drew.royster@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            drew.royster@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
