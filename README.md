# Learn 2 Live Legacy — The Forgiveness Framework

The digital home of **Learn 2 Live Legacy**, an NGO delivering *The Forgiveness Framework* — a structured, evidence-based youth resilience programme that uses theatre and lived experience to help young people in South London understand forgiveness as a practical human tool.

This site is the first-impression asset for funders, civic partners, and educators. It replaces the PDF proposal as the default way to understand the organisation, the programme, and the *Our Son* theatre production that anchors it.

> **Brand architecture:** Learn 2 Live Legacy (organisation) → The Forgiveness Framework (programme) → Our Son (artistic vehicle).

---

## Stack

- **[Next.js 14](https://nextjs.org)** App Router (JavaScript, not TypeScript)
- **React 18**
- **CSS Modules** + global design tokens in [app/globals.css](app/globals.css)
- **Playfair Display** + **Inter** via `next/font/google`
- **[Resend](https://resend.com)** for contact form email delivery (REST API, no SDK)
- Deployed on **[Vercel](https://vercel.com)**

No database, no CMS, no auth — this is a static-ish marketing site with one server action for the contact form.

---

## Getting started

Prerequisites: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Create a production build — run this before shipping |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run `next lint` |

---

## Environment variables

Create a `.env.local` for local development. For production, set these in the Vercel project dashboard **before** deploying.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL used by metadata, sitemap, robots, and JSON-LD. Defaults to `https://learn2livelegacy.org`. |
| `RESEND_API_KEY` | For email | API key from [resend.com](https://resend.com). |
| `CONTACT_EMAIL_TO` | For email | Where contact form submissions are delivered. |
| `CONTACT_EMAIL_FROM` | For email | Verified Resend sender (e.g. `no-reply@learn2livelegacy.org`). |

If the Resend variables are missing, the contact form still works — it just logs submissions server-side and returns success, which is the intended behaviour for dev and preview environments.

---

## Project layout

```
app/
  layout.js          Root layout, fonts, metadata, JSON-LD graph
  page.js            Homepage — composes sections from components/sections
  globals.css        Design tokens, typography, buttons, motion
  about/             /about
  the-framework/     /the-framework
  our-son/           /our-son
  actions/
    contact.js       Contact form server action (Resend + rate limiting)
  sitemap.js         Generated sitemap.xml
  robots.js          Generated robots.txt
  manifest.js        PWA manifest
  opengraph-image.js OG image generator
  twitter-image.js   Twitter card image generator

components/
  Navbar/            Sticky top nav with mobile menu
  Footer/
  sections/          Self-contained homepage sections
    Hero/
    AboutJermaine/
    TheFramework/
    ImpactStats/
    OurSon/
    Partners/
    GetInvolved/     Contact form + PDF download

public/              Logo, proposal PDF, hero video, photography
next.config.js       Security headers, image config, legacy redirects
.brief.md            Canonical project brief — scope, tone, constraints
```

---

## Design system

The site runs on a dark theme with a single yellow accent, defined as CSS variables in [app/globals.css](app/globals.css):

- **Black** `#0A0A0A` — background
- **Yellow** `#F5C200` — accent (buttons, eyebrows, focus rings)
- **Playfair Display** for display headings, **Inter** for body
- Motion tokens (`--duration-*`, `--ease-*`) used across components for consistent feel
- Scroll reveals (`.fade-up`, `.reveal`) short-circuit under `prefers-reduced-motion`

The visual direction is **theatre-meets-community** — civic-arts rather than charity or corporate. See `.brief.md` for the full design constraint set, tone-of-voice rules, and the CRISP framework priorities (primary: Contextual, secondary: Seamless).

---

## Content and voice

All body copy is written in **first person as Jermaine Wong**, matching the cadence of [public/forgiveness-framework-proposal.pdf](public/forgiveness-framework-proposal.pdf) — direct, considered, emotionally honest without being sentimental.

Two rules when editing copy:
1. **No religious or moralistic framing of forgiveness.** It is presented as a practical human framework, not a doctrine.
2. **Pattern-match existing sections** (`Hero`, `AboutJermaine`, `GetInvolved`) rather than introducing a detached marketing voice.

Jermaine reviews and approves final copy before launch.

---

## Contact form

The single piece of server logic lives in [app/actions/contact.js](app/actions/contact.js). It:

- Validates name, organisation, email, and message server-side
- Filters bots with a hidden **honeypot** field (`website`)
- **Rate limits** to 5 submissions per IP per 15 minutes (in-memory — fine for a single-instance Vercel deploy; swap to Upstash/Redis if scaling beyond that)
- Delivers mail via the Resend REST API
- Never leaks internal error details to the client

---

## Deployment

The site is built for **Vercel**. Connect the repository, set the environment variables listed above, and Vercel handles the rest.

Before each production deploy:

1. Run `npm run build` locally and confirm it completes without warnings
2. Confirm `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`, and `NEXT_PUBLIC_SITE_URL` are set in the Vercel environment
3. Run `npm audit` and resolve any critical vulnerabilities

Legacy URLs and common misspellings are handled via permanent redirects in [next.config.js](next.config.js) — add new redirects there rather than restructuring routes.

---

## SEO

- Full JSON-LD `@graph` in [app/layout.js](app/layout.js) cross-referencing the NGO, founder, theatre production, framework, and website entities
- Per-page metadata exports on every route
- Generated sitemap and robots via Next.js convention files
- OG and Twitter card images generated at build time
- Security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) configured in [next.config.js](next.config.js)

---

## License

All rights reserved — Learn 2 Live Legacy / Jermaine Wong.

The third-party `claude-seo/` directory included in the repository is a vendored SEO audit toolkit with its own separate license; it is not part of the site build.
