# WebGL + dithering direction

Yes: the next visual direction can combine a voice-first WebGL signal surface with ordered/error-diffusion dithering so the site feels modern without becoming generic AI SaaS.

## Concept

**A field-notes signal console.**

The hero is not a glossy orb. It is a living machine-readable signal layer: dot-matrix, scanlines, low-bit gradients, audio-reactive waveforms, and agent state transitions. It should feel like a dossier discovered through a terminal, oscilloscope, and marginalia notebook.

## Aesthetic ingredients

- Dark green / black / cream base
- Rust/copper as the active signal color
- Ordered dithering / Bayer matrix texture
- Subtle CRT/scanline grain
- WebGL shader background, not video/image
- Dot-matrix waveform for voice states
- Page-context chips that look like indexed cards
- Optional hover/scroll parallax through a low-bit field

## Voice states as visuals

- Idle: slow dithered breathing field, barely moving
- Loading context: scanning/raster pass across page summaries
- Listening: low-amplitude waveform grid, cream/rust dots opening around mic
- Thinking: interference pattern / moire field, context cards lightly brighten
- Speaking: stronger rust waveform, dotted radial pulse, transcript line appears
- Error/setup missing: muted amber fault line, no red panic state

## Technical approach

Use a small client-only React canvas component with WebGL shader code:

- fragment shader renders gradient/noise/waveform field
- ordered dithering via Bayer matrix or blue-noise texture
- CSS variables feed palette colors
- props feed voice state: idle/listening/thinking/speaking/error
- keep it progressive-enhancement: page remains readable without WebGL
- respect `prefers-reduced-motion`

Potential implementation files:

- `src/components/SignalField.jsx`
- `src/components/VoiceConsoleHero.jsx`
- `src/lib/visual/dither-shader.js`

## Why it fits Drew's site

- Feels agent-native without looking like chatbot SaaS.
- Makes voice-first visible immediately.
- Keeps the dossier/field-notes identity.
- Turns the current image weakness into a strength: generated signal visuals instead of stock/portrait-heavy design.

## Avoid

- Glossy purple AI orb
- generic neon gradients
- fake sci-fi HUD clutter
- constant high-motion animation
- unreadable text over shader effects
- making the visual more important than the writing
