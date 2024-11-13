import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Recommendations',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="What helps me ship stuff fast and sustainably."
    >
      <div className="space-y-20">
        <ToolsSection title="Development tools">
          <Tool title="Jetbrains">
            I know a lot of vim bindings and admire the people who use neovim, but jetbrains products are just so polished. I&#39;ve been using them for years and they&#39;ve never let me down. Datagrip especially is by far the best database administrative tool. It&#39;s well worth the money. Silly things like ts-server crashing on vs-code just doesn&#39;t happen on Webstorm. The new ai features are underappreciated too.
          </Tool>
          <Tool title="Ollama">
            Ollama just works. It&#39;s so nice for running models locally without needing to do any extra python setup. I&#39;m interested in vllm for performance gains, but ollama has served me very well in production so far.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="Desktop Intel with RTX 3060">
            I like having a dedicated workstation with an nvidia card to run models and try things out locally. Works great for running small models. One day I&#39;ll buy a 4090 or 5090, but for now I make do.
          </Tool>
          <Tool title="Server AMD with RTX 4060">
            Unraid is great for a home server. I can run applications and also store all my personal data on the same server. Putting a cloudflare proxy in front gives you some security while letting you self host.
          </Tool>
          <Tool title="Kinesis 360 Pro Wireless">
            I started developing wrist and shoulder pain from bending my hands and shoulders in to type. A split, concave and tented keyboard is a game changer. Hasn&#39;t made me type much faster, but it let&#39;s me type all day without any of the issues I used to suffer from. Expensive but worth it if you&#39;re making decent money in software.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Bill Gates could never make something this solid.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Excalidraw">
            Excalidraw is just so convenient for sketching out ideas and
            prototyping. I&#39;ve never used something so simple and easy to use. It seems to cache in browser which is so nice and convenient.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            Alfred is so nice for kicking things off, but mostly I just love the extended clipboard. Coding without an extended clipboard is so much slower. It&#39;s a substantial improvement, I don&#39;t see how you can be serious without investing in a clipboard tool with a stack.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
