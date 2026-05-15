# Spotlight

Spotlight is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Voice agent scaffold

The site includes a credentials-free `Ask Drew` voice-agent scaffold:

- `npm run voice-context` generates `public/voice-context.json` from pages, projects, and MDX articles.
- `prebuild` regenerates that context before `next build`.
- `/api/voice/context` returns lightweight site-context retrieval results.
- `/api/voice/session` returns `setupRequired: true` until xAI credentials are present, then attempts to mint a realtime session.
- `/api/voice/tools` currently supports `open_page` and the `activate_dossier_mode` Easter egg.

Copy `.env.example` to `.env.local` and fill these when ready:

```bash
XAI_API_KEY=
XAI_REALTIME_SESSION_URL=https://api.x.ai/v1/realtime/sessions
XAI_REALTIME_URL=wss://api.x.ai/v1/realtime
XAI_REALTIME_MODEL=grok-voice-realtime
XAI_REALTIME_VOICE=
```

Provider-specific final wiring may need one adjustment in `src/lib/voice/realtime.js`: browsers cannot set WebSocket `Authorization` headers, so the client currently sends the ephemeral token as a `bearer.<token>` subprotocol placeholder until the exact xAI browser token shape is confirmed.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
