# BD Plumbing & Heating Services, Milton Keynes (demo)

One-page demo site for BD Plumbing & Heating Services, a Milton Keynes plumber
that currently has no website. Built to pitch the business and to rank for local
searches such as "plumber Milton Keynes" and "plumbing services Milton Keynes".

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Inline SVG icons (no extra dependencies)
- Design language modelled on the HGZ Berlin reference: deep blue + white, clean
  modular cards, generous whitespace, prominent rating badges, subtle reveals.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Notes

- Phone `07472 792722` is the real number from the Google Business listing.
- Email `info@bdplumbingmk.co.uk` is a placeholder for the demo; swap before launch.
- Imagery is stand-in plumbing/bathroom photography for the demo.
- The quote form is front-end only (no backend); it shows a thank-you state.

All editable business content lives in `lib/content.ts`.
