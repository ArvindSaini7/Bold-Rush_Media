# BoldRush Media — React PWA

A responsive, social-first marketing agency website inspired by the supplied BoldRush Media visual reference. Built with React, Vite, Lucide icons and `vite-plugin-pwa`.

## Features

- Supplied BoldRush Media logo used in the shared header/footer brand component and PWA app icons
- Responsive desktop, tablet and mobile layouts
- Social-first services, campaign cards, results dashboard, process, testimonial and contact sections
- Functional in-page navigation, project filters, click-to-call links, WhatsApp links and Google Maps search link
- PWA manifest, generated service worker, offline fallback and 192/512/maskable app icons
- Install button uses the browser `beforeinstallprompt` event when available; otherwise it displays Android/desktop or iOS instructions
- Accessible labels, form validation, reduced-motion support and basic social metadata

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. PWA installation behavior is generally tested on a production build or HTTPS origin; the Vite dev server intentionally does not enable the service worker.

## Production build

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## Deploy over HTTPS

Deploy the contents of `dist/` to any static host with HTTPS (for example, Vercel, Netlify, Cloudflare Pages, or an Nginx static site). Configure SPA/static fallback to `/index.html` for normal routes; the current site uses in-page anchors. Ensure the `/offline.html` and `/icons/` assets are served from the same origin. PWA installation requires HTTPS except on localhost.

For Nginx, set the document root to `dist/`, use `try_files $uri $uri/ /index.html;`, and enable HTTPS. The generated service worker and manifest are emitted by the Vite PWA plugin at build time.

## Contact form behavior

The enquiry form validates the name and phone number, then opens WhatsApp with a prefilled message to **+91 85296 63707**. The user must review and send the message in WhatsApp. This project does **not** store leads or pretend a backend submission succeeded. To use a true website form, replace the `submit` handler in `src/main.jsx` with your backend/API endpoint and implement server-side validation, spam protection and privacy handling.

The second phone number **+91 63757 30016** is also available as a `tel:` link. Email and social profile URLs are placeholders where noted; replace them with the agency's verified contact/social accounts before launch.

## PWA installation QA checklist

- [ ] Build and deploy on a public HTTPS domain.
- [ ] Confirm manifest name, theme/background colors, start URL, scope and icons in browser devtools.
- [ ] Confirm service worker is activated and `/offline.html` is available after an offline navigation.
- [ ] Android Chrome: use the Download App button when the native prompt is available; otherwise use Chrome menu → Install app/Add to Home screen.
- [ ] iPhone/iPad: open in Safari → Share → Add to Home Screen → Add.
- [ ] Desktop Chromium: test native install where supported and the fallback instructions otherwise.
- [ ] Test all anchor links, both `tel:` links, WhatsApp links, Maps link, form validation and WhatsApp prefill.
- [ ] Test 320px mobile width, tablet, laptop and desktop; check there is no horizontal overflow.
- [ ] Replace placeholder social profile links and `hello@boldrushmedia.com` with verified details.


## Client portfolio entry added

The portfolio includes **Dev Hotel Tandoori Dhaba** under the `Client Work` filter, with links to the Instagram profile, a Google search for its Google Business Profile, and the supplied website URL (`https://astronarayana.com/`). The Google link is a search link, not a verified direct GBP listing URL. No client video file was attached, so a video has not been embedded.
