# Voice-first personal site inspiration

Use this as the first research board for a later voice-first redesign. The current site should keep the green/cream/rust dossier identity, but the interaction model can move toward voice as a first-class interface.

## Strong references

### Sesame AI

- Home: https://www.sesame.com/
- Research: https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice

Why it matters:

- Frames voice as a more intimate interface than text.
- Good phrase to borrow conceptually: "voice presence" — the sense that spoken interaction feels real, understood, and valued.
- Their site ties product, research, and hardware into one clean thesis: personal agent + lightweight device interface.
- Relevant to Drew because Hermes-IoT / ESP32 Echo Pyramid is also about moving agents out of the chat box and into physical/audio interfaces.

Design takeaways:

- Big simple thesis.
- Research-backed but not academic-looking.
- Voice/device as the conceptual center, not an add-on widget.

### LiveKit Agents UI

- Product: https://livekit.com/products/agents-ui
- Docs: https://docs.livekit.io/frontends/agents-ui/

Why it matters:

- Concrete voice-agent UI patterns: listening, speaking, thinking, connecting states.
- Multiple visualizer styles: aura, wave, radial, grid, bar.
- The dot-matrix/grid visualizer direction may fit the current dossier/terminal aesthetic better than glossy orb UI.

Design takeaways:

- Voice state should be visually legible.
- A full session view can include visualizer, transcript, and controls without feeling like a normal chatbot.
- Consider a persistent "site agent status" layer, not just a floating button.

### ElevenLabs Conversational AI + UI blocks

- Platform: https://elevenlabs.io/conversational-ai
- UI blocks: https://ui.elevenlabs.io/blocks

Why it matters:

- Good examples of practical voice/chat blocks, realtime transcriber, voice chat, keyboard shortcuts, and audio controls.
- Shows how to package voice interactions into reusable components.

Design takeaways:

- Keyboard shortcuts can make voice feel like a power-user interface.
- Realtime transcript / record controls should be obvious and low-friction.
- Avoid their more generic SaaS/customer-support posture for Drew's site.

### Hume EVI

- Product: https://www.hume.ai/empathic-voice-interface
- Docs: https://dev.hume.ai/docs/voice/overview

Why it matters:

- Strong reference for emotional/contextual voice agent positioning.
- Shows character/voice selection and real-time voice model affordances.

Design takeaways:

- The site agent could have a precise identity boundary: "Drew's site agent," not "Drew."
- Voice identity and style need explicit design, not just a provider voice ID.

## Broader galleries / idea sources

- Dribbble voice AI interface search: https://dribbble.com/search/voice-ai-interface
- Behance voice AI projects: https://www.behance.net/search/projects/voice%20ai
- Voice UI design roundup: https://www.eleken.co/blog-posts/voice-ui-design

Use these for moodboarding only; many will be generic blue/purple AI SaaS. Do not copy the hype aesthetic.

## Direction for Drew's redesign

The next redesign should explore a site that is:

1. **Voice-first but not voice-only** — pages still work as writing and field notes.
2. **Agent-readable** — `llms.txt`, `voice-context.json`, clear metadata, concise route summaries.
3. **Dossier-native** — preserve green/cream/rust and field-note tone.
4. **Stateful** — the agent visibly has states: idle, loading context, listening, thinking, speaking, error.
5. **Context-aware** — the page should show what the agent knows about the current route.
6. **Human-delightful** — books, projects, unfinished ideas, and marginalia should make the site feel personal, not like a funnel.

## Specific redesign ideas

- Replace generic image treatment with a **voice console / signal panel** hero: waveform, transcript fragment, current-page context chip, and "Ask Drew" affordance.
- Add an **agent-readable index panel**: Articles, Projects, Books, Current Fascinations, Uses.
- Add a visible **llms.txt / agent context** link in the footer or a small "machine index" affordance.
- Use a **dot-matrix or oscilloscope-style visualizer** instead of glossy AI orb visuals.
- Give each page a short machine-readable summary block that also works as human orientation.
- Make the Books page feel like **marginalia cards**, not a recommendation list.
