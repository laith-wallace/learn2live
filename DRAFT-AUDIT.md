# Draft Content Audit — For Jermaine's Review

> **Purpose:** Every speculative/placeholder block on the site is marked in
> source with `{/* DRAFT — JW to approve */}`. This file is the single
> reference that lists every one of them in one place, grouped by page, so
> you can review and redline in one pass.
>
> **How to use:** For each item, either (a) approve as-is, (b) rewrite, or
> (c) tell me what to replace it with. I will update the file referenced
> and remove the DRAFT marker. Once every marker is gone the site is
> content-ready for launch.
>
> **Last generated:** Phase 3 complete.

---

## Most critical — blocks funder use until validated

These items are the ones most likely to be seen by a real funder before
you have had a chance to review them. Prioritise these.

### 1. Funding tier amounts and deliverables — [app/fund/page.js](app/fund/page.js)

The five tiers (£5K → £100K+) with named deliverables. Amounts, cohort
sizes, session counts, and line-item percentages are all drafted from
typical youth-arts programme norms. **Validate against your actual cost
model before sharing the /fund URL with any real funder.**

- **£5,000 — Pilot Workshop:** 15 young people, 6 × 2-hour sessions
- **£15,000 — Single Programme:** 30 young people, 12–16 sessions, full
  pathway with facilitator team
- **£35,000 — School Partnership (featured tier):** 60 young people, two
  pathways in parallel, Our Son performance
- **£75,000 — Multi-School Cluster:** 150 young people, 3–4 schools,
  external evaluator
- **£100,000+ — Borough Rollout:** Multi-year, embedded evaluator, civic
  showcase

### 2. Funding line-item breakdown — [app/fund/page.js](app/fund/page.js)

The percentage split showing where funding lands:

- 45% Artist and facilitator fees
- 15% Venue and space hire
- 15% Production and materials
- 10% Participant stipends
- 8% Evaluation
- 7% Overheads (capped)

**These are indicative. Confirm they reflect your actual cost structure.**

### 3. Safeguarding / fiscal / governance language

Flagged at multiple points — the site currently says "available on
request" for DBS, insurance, safeguarding policy, and fiscal hosting
arrangement. Before a real funding conversation, you need to confirm:

- **Safeguarding policy:** does it exist as a document? What's the
  version date?
- **DBS:** which facilitators are DBS-checked? Any gaps?
- **Insurance:** public liability cover in place? Provider and limit?
- **Fiscal hosting:** are grants received through a fiscal sponsor, a
  registered charity, a CIC, or directly? This determines what language
  goes on the page.

Files affected:
- [app/fund/page.js](app/fund/page.js) — trust strip note + FAQ "Who holds
  the finance?"
- [components/shared/TrustStrip/TrustStrip.js](components/shared/TrustStrip/TrustStrip.js) — the trust strip used on /fund
- [app/programmes/spoken-word/page.js](app/programmes/spoken-word/page.js) — safeguarding block
- [app/programmes/filmmaking/page.js](app/programmes/filmmaking/page.js) — safeguarding block

### 4. Funder FAQ answers — [app/fund/page.js](app/fund/page.js)

Five questions with drafted answers:
1. "How do I fund a pilot?" — mentions four-week turnaround
2. "What does the reporting cadence look like?" — pilot vs multi-year
3. "Who holds the finance?" — references fiscal hosting (depends on #3 above)
4. "Can I restrict my funding to a specific outcome or borough?"
5. "What happens after Phase 1?"

**Confirm all five answers reflect how you actually want to describe
these things to a funder.**

---

## Homepage copy

### Hero — [components/sections/Hero/Hero.js](components/sections/Hero/Hero.js)

- **Eyebrow:** "Learn 2 Live Legacy"
- **Headline:** "This work was built from a decision most people *avoid.*"
- **Subhead:** "After the loss of his son to serious youth violence,
  Jermaine Wong chose not to reproduce harm — but to interrupt it. That
  decision is now a model: a structured, repeatable framework that
  connects culture, youth voice and civic dialogue."
- **CTAs:** Fund This Initiative / Watch the Work

### Feature Video caption — [components/sections/FeatureVideo/FeatureVideo.js](components/sections/FeatureVideo/FeatureVideo.js)

- Caption: "Before we explain anything — experience the work."

### Why This Exists — [components/sections/WhyThisExists/WhyThisExists.js](components/sections/WhyThisExists/WhyThisExists.js)

Full verse block — pulled verbatim from your v2 document. Confirm the
cadence reads the way you intended on-screen.

- **Pull quote:** "If pain is left unprocessed, it becomes pattern. *This
  work creates the space to break it.*"

### The Gap — [components/sections/TheGap/TheGap.js](components/sections/TheGap/TheGap.js)

- **Headline:** "We are not short of intervention. We are short of *space.*"
- Three-paragraph body block explaining the model's relationship to
  behaviour-change interventions.
- Three pills: "Space to Reflect / Process / Choose differently"

### The Model — [components/sections/TheModel/TheModel.js](components/sections/TheModel/TheModel.js)

Four operational steps with body copy:
1. Theatre Encounter
2. Youth Voice Development
3. Creative Response
4. Civic Showcase

**Each step has a drafted 1-sentence description. Confirm the language
matches how you describe these to a school or funder.**

### Video Proof Grid captions — [components/sections/VideoProofGrid/VideoProofGrid.js](components/sections/VideoProofGrid/VideoProofGrid.js)

Three YouTube clips with overlay captions pulled from your v2 doc:
- "This shifted something in me."
- "I saw myself in it."
- "It made me think differently."

### Our Son Feature — [components/sections/OurSonFeature/OurSonFeature.js](components/sections/OurSonFeature/OurSonFeature.js)

- **Headline:** "This is where the work begins."
- **Body:** "Our Son is more than a performance. It is the cultural
  anchor of a wider model..."

### Founder section (homepage) — [components/sections/AboutJermaine/AboutJermaine.js](components/sections/AboutJermaine/AboutJermaine.js)

- **Headline:** "The architect of the *Forgiveness Framework.*"
- Three-paragraph body pulled directly from your v2 document's Section 9.

---

## Page-level copy

### /the-framework — [app/the-framework/page.js](app/the-framework/page.js)

- **Hero headline:** "A structured, repeatable *model for breaking
  cycles.*"
- **Hero subhead** explaining the two-layer structure (operational
  delivery + psychological inner journey).
- **"What the framework is not"** prose block — three paragraphs.
  Particularly important to check the non-religious framing language.

### /our-son — [app/our-son/page.js](app/our-son/page.js)

- **Hero headline + subhead** (new treatment with flagship video)
- Three-fact grid: Format / Partnership / What comes next
- Existing pull quote preserved

### /about — [app/about/page.js](app/about/page.js)

- **Hero headline:** "Jermaine Wong — the architect of the *Forgiveness
  Framework.*"
- Four-paragraph body covering the origin decision and what you now
  build.
- **Credentials grid:** 15+ years / partnerships / press
- **"What Jermaine builds, and why"** prose block — three paragraphs
  about the underlying premise of the work.

### /keynote — [app/keynote/page.js](app/keynote/page.js)

- **"Why Jermaine is asked to speak"** positioning paragraph
- **Four signature talks — critical review needed:**
  1. *Interrupting the Pattern*
  2. *Forgiveness Without Religion*
  3. *What Theatre Knows That Policy Doesn't*
  4. *The Father's Question*

  **Action needed:** pick which three or four you actually want to offer,
  rename them as you prefer, and confirm the synopsis language. *The
  Father's Question* in particular needs your direct approval given how
  personal the framing is.

- **Audience list** — seven audience types
- **Three formats:** 45 min keynote / 75 min keynote + Q&A / half-day
  workshop

### /programmes — [app/programmes/page.js](app/programmes/page.js)

- Three pathway card descriptions
- Intro copy

### /programmes/spoken-word — [app/programmes/spoken-word/page.js](app/programmes/spoken-word/page.js)

- **Hero headline + subhead**
- **Four journey stages:** Identity → Writing → Performance → Showcase,
  each with a drafted paragraph
- **Delivery specs:** ages 14–21, cohort 10–15, 6–12 sessions,
  90–120 minutes. **Confirm all of these against how you actually
  deliver.**
- Safeguarding block (see §3 above)

### /programmes/filmmaking — [app/programmes/filmmaking/page.js](app/programmes/filmmaking/page.js)

- **Hero headline:** "From experience to *screen.*"
- **Four journey stages:** Story → Script → Production → Premiere
- **Delivery specs:** ages 14–21, cohort 8–12, 8–16 sessions plus
  production block. **Confirm.**
- Safeguarding block

---

## Testimonials

### Default testimonials — [components/shared/Testimonials/Testimonials.js](components/shared/Testimonials/Testimonials.js)

The Testimonials component currently renders three placeholder quotes on
the /fund page:

1. "This shifted something in me." — Audience member, Our Son performance
2. "I saw myself in it." — Participant, Spoken Word programme
3. "It made me think differently about things I thought I already
   understood." — Audience member, Civic showcase

**Action needed:** supply real attributed quotes to replace these.
Ideally 3–6 quotes from participants and audience members with their
(consented) name or role. These will also be used on programme pages and
the homepage in Phase 4 if you want.

---

## Impact numbers

Existing homepage `ImpactStats` component (unchanged from the legacy
site) displays:
- 120+ events
- 4 phases
- 3 partnerships
- 15+ years

**Confirm all four numbers are still current and accurate.** The "4
phases" specifically is a legacy reference to the psychological phases —
now that the framework is presented as a 4-step operational flow with
the inner phases nested underneath, you may want to re-label this as "4
operational steps" or similar.

File: [components/sections/ImpactStats/ImpactStats.js](components/sections/ImpactStats/ImpactStats.js)

---

## Assets outstanding

Things the site needs but cannot be drafted in code:

1. **Mixed montage hero video** — your v2 doc specifies a mixed montage
   (Our Son + workshops + youth + audience) for the homepage hero
   background. Currently the site uses the existing `hero-bg.mp4` as a
   placeholder. Supply the new montage when ready and drop it into
   [public/hero-bg.mp4](public/).

2. **Real testimonial video clips with consent** — if you want to extend
   the testimonial component with video rather than text, we can do that
   when you have consented clips.

3. **Founder portrait refresh** — the /about page currently uses the The
   Voice newspaper feature image. If you have a cleaner portrait for the
   About page specifically, drop it into [public/](public/) and I can
   swap it in.

4. **Domain procurement** — the site currently uses
   `https://learn2livelegacy.org` as the canonical base URL (set via
   `NEXT_PUBLIC_SITE_URL`). Confirm the domain or supply the intended
   production URL.

---

## When this audit is complete

Once every item above has been reviewed and updated, search the codebase
for any remaining `DRAFT` markers:

```bash
grep -rn "DRAFT — JW" app/ components/
```

When that command returns zero results, the site is content-ready for
launch.
