import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Appearances',
  description:
    'I try to put myself out there and talk about all the exciting things I am working on.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I try to put myself out there and talk about all the exciting things I am working on."
      intro="I'm a yapper, I love to talk and am always looking for opportunities to speak with people about all the exciting things happening in the software and artificial intelligence space."
    >
      <div className="space-y-20">
        <SpeakingSection title="Podcasts">
          <Appearance
            href="https://youtu.be/SxFGFsDRj6g?si=vK2buQCgf5uFqcJC"
            title="Function Calling & BAML: Shaolin AI Podcast "
            description="How function calling actually works, and the interesting things the folks at BAML are doing with it."
            event="Podcast,Nov 4, 2024"
            cta="Listen to podcast"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
