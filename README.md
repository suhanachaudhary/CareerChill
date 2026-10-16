# CareerChill

Resume • Interview Prep • Career Guidance — "Less confusion. Better preparation."

React + Vite + Tailwind. No backend: the Order page builds a message and opens WhatsApp / email.

## Before launch (edit `src/config.js`)
- `whatsapp` (digits with country code, e.g. `919876543210`), `whatsappDisplay`, `email`, `instagram`, `paymentNote`.
- Prices / inclusions: `src/data/services.js`. FAQs: `src/data/faqs.js`.

## Run
```
npm install
npm run dev      # http://localhost:5173/CareerChill/
npm run build    # output in dist/
```

## Deploy (GitHub Pages, free) — live at https://suhanachaudhary.github.io/CareerChill/
Push to `main` runs `.github/workflows/deploy.yml`. If the first run fails, set Settings → Pages → Source = GitHub Actions and re-run.

### Alternative: Cloudflare Pages (set `base` to `/` in vite.config.js)
Connect the repo → build command `npm run build` → output directory `dist`. `public/_redirects` handles SPA routes.
(Vercel Hobby is non-commercial only — avoid it for a paid service.)

## Marketing
`marketing/` has the 7-day content plan and WhatsApp reply templates.

## Reminders
Check domain, Instagram handle and IP India trademark availability for "CareerChill" before investing in branding.

## Ad reel
`marketing/reel/careerchill-ad.mp4` (1080x1920, 24s, no audio — add trending audio in Instagram). Source: `ad-reel.html`; re-record with `record.mjs`.
