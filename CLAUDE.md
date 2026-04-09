# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # next dev — local dev server
npm run build   # next build — production build (run before declaring work done)
npm run start   # next start — serve the production build
npm run lint    # next lint
```

There is **no test suite** configured. The global `CLAUDE.md` rule requiring Vitest tests for new API routes / server actions still applies — add `vitest` if you introduce testable server logic.

This is **JavaScript, not TypeScript** (no `tsconfig.json`). The global rule about `tsc --noEmit` does not apply here; `npm run build` is the type-safety signal.

## What this is

A single Next.js 14 App Router marketing site for **Learn 2 Live Legacy**, an NGO delivering *The Forgiveness Framework* — a theatre-based youth resilience programme in South London. The site replaces a PDF proposal as the first-impression asset for funders, educators, and civic partners.

`.brief.md` at the repo root is the canonical brief: scope, tone of voice, brand architecture, CRISP design priorities, and the asset manifest. **Read it before making content, scope, or design decisions** — especially anything touching copy, because the site's first-person voice must match the cadence of `public/forgiveness-framework-proposal.pdf`.

Brand architecture: **Learn 2 Live Legacy** (org) → **The Forgiveness Framework** (programme) → **Our Son** (theatre production). All three coexist and are cross-referenced in the JSON-LD graph.

## Architecture

### Routing and composition

- App Router, JavaScript files (`.js`), React 18.
- Homepage `app/page.js` is a section-composition shell — it just stacks components from `components/sections/*` between `Navbar` and `Footer`. Each section is self-contained (its own folder + CSS Module).
- Standalone routes (`app/about`, `app/the-framework`, `app/our-son`) render their own `Navbar`/`Footer` wrappers rather than using a shared layout-level nav. Keep this consistent when adding new pages.
- `app/layout.js` defines fonts (Playfair Display + Inter via `next/font/google`), global metadata, viewport, and a single **JSON-LD `@graph`** that cross-references Organization, Person (Jermaine Wong), TheaterEvent (Our Son), CreativeWork (Forgiveness Framework), and WebSite. Updating one entity's `@id`/URL means updating the references in the graph too.
- SEO/metadata files use Next.js convention-based APIs: `app/sitemap.js`, `app/robots.js`, `app/manifest.js`, `app/opengraph-image.js`, `app/twitter-image.js`, `app/icon.svg`.

### Styling

- Dark theme — tokens live in `app/globals.css` under `:root`: palette (`--black #0A0A0A`, `--accent #F5C200`), motion easings/durations, spacing, and the typography scale (`.display-xl/lg/md`, `.text-lg/base/sm/xs`, `.eyebrow`, `.btn-primary`, `.btn-ghost`).
- Per-component styles are **CSS Modules** (`Component.module.css`) co-located with the component.
- Scroll-reveal uses `.fade-up` / `.reveal` classes toggled by an `IntersectionObserver` inside each section's client component. Both variants are short-circuited under `prefers-reduced-motion` — preserve that guard when adding new animations.
- Hover effects are wrapped in `@media (hover: hover) and (pointer: fine)` to avoid sticky hover on touch.

### Contact form — the only server logic

`app/actions/contact.js` is the single server action, wired to the form in `components/sections/GetInvolved/GetInvolved.js` via `useFormState` / `useFormStatus`.

Defences:
- Server-side validation (name/org/email/message with length caps).
- **Honeypot** field named `website` (hidden via absolute-position off-screen, not `display:none`).
- **In-memory rate limit**: 5 submissions per IP per 15 minutes. This does **not** survive multi-instance deploys — if the site scales beyond a single Vercel instance, swap to Upstash/Redis (already noted in the file).
- Email delivery via **Resend REST API** (no SDK dependency). Missing env vars are treated as dev mode: log and return success so the form works locally.

Required env vars (set in Vercel before deploying):
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `CONTACT_EMAIL_FROM` (must be a verified Resend sender)
- `NEXT_PUBLIC_SITE_URL` (used by `layout.js`, `sitemap.js`, `robots.js` — defaults to `https://learn2livelegacy.org`)

Never leak internals in error responses (follow global CLAUDE.md §Security). The action already returns generic `code` + `message` pairs and logs detail server-side.

### next.config.js

Sets security headers on every route (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy), long-cache rules for static media, and permanent redirects for legacy paths. Image optimisation is configured for AVIF/WebP with YouTube thumbnails allow-listed. **Update `redirects()` — not the route structure — when old URLs need to keep working.**

## Things that are NOT part of the site

- `claude-seo/` — a vendored third-party SEO audit toolkit (has its own README, LICENSE, `CLAUDE.md`, and Python scripts). It is not part of the Next.js build and should not be imported from the app. Leave it alone unless the user explicitly asks to work on it.
- `.claude/skills/` — CRISP design skill definitions, not runtime code.

## Working conventions to respect

- **First-person voice.** Body copy is written as Jermaine Wong, matching the proposal PDF. When drafting or editing copy, pattern-match the existing sections (`Hero`, `AboutJermaine`, `GetInvolved`) rather than introducing a detached marketing voice. The brief explicitly forbids religious/moralistic framing of forgiveness.
- **No colour or font drift.** Use the CSS variables in `globals.css`; don't hardcode hex values or font stacks in module CSS.
- **Client boundaries.** Sections that need `useEffect` / `useState` (Hero, GetInvolved, Navbar) are `'use client'`; static sections are server components. Keep `metadata` exports out of `'use client'` files (global rule, and it will break the build).
- **Accessibility is already wired.** Skip link in `layout.js`, `:focus-visible` outline in `globals.css`, `aria-*` on the form, reduced-motion branches in Hero and CSS. Don't regress these when editing.
