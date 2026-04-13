import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import TrustStrip from '../../components/shared/TrustStrip/TrustStrip';
import Testimonials from '../../components/shared/Testimonials/Testimonials';
import FundingEnquiryForm from './FundingEnquiryForm';
import styles from './fund.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'Fund This Initiative',
  description:
    'Fund a structured, repeatable model designed to break cycles of harm. Tiered funding from £5,000 pilot workshops to £100,000+ borough-level rollouts.',
  alternates: { canonical: '/fund' },
  openGraph: {
    title: 'Fund This Initiative | Learn 2 Live Legacy',
    description:
      'Tiered funding opportunities from £5,000 pilot workshops to £100,000+ borough rollouts. A model built from lived experience, designed for civic impact.',
    url: `${BASE_URL}/fund`,
    type: 'website',
  },
};

// DRAFT — JW to approve. Tier amounts are placeholders based on typical
// youth-arts delivery budgets and must be validated against Jermaine's
// actual cost model before this page is shared with a real funder.
const TIERS = [
  {
    amount: '£5,000',
    name: 'Pilot Workshop',
    summary: 'One cohort, one school, six sessions.',
    deliverables: [
      'Up to 15 young people',
      '6 × 2-hour structured sessions',
      'One pathway: Spoken Word or Filmmaking',
      'End-of-cycle showcase',
      'Participant feedback report',
    ],
  },
  {
    amount: '£15,000',
    name: 'Single Programme',
    summary: 'A full pathway across one school year.',
    deliverables: [
      'Up to 30 young people',
      '12–16 sessions over an academic year',
      'Full pathway with facilitator team',
      'Two showcase events',
      'Baseline + endline evaluation',
    ],
  },
  {
    amount: '£35,000',
    name: 'School Partnership',
    summary: 'Two pathways plus an Our Son performance.',
    deliverables: [
      'Up to 60 young people across two cohorts',
      'Spoken Word + Filmmaking delivered in parallel',
      'One in-school Our Son performance',
      'Teacher CPD session',
      'Mid-point and final evaluation',
    ],
    featured: true,
  },
  {
    amount: '£75,000',
    name: 'Multi-School Cluster',
    summary: 'Borough pilot footprint — 3–4 schools.',
    deliverables: [
      'Up to 150 young people',
      'Coordinated delivery across 3–4 schools',
      'Borough-level showcase at a cultural venue',
      'External evaluator engagement',
      'Annual report for commissioners',
    ],
  },
  {
    amount: '£100,000+',
    name: 'Borough Rollout',
    summary: 'Multi-year, evaluation partner, civic showcase.',
    deliverables: [
      'Full borough delivery model',
      'Multi-year programme (2–3 years)',
      'Embedded external evaluation partner',
      'Major civic showcase event',
      'Named recognition in all programme materials',
      'Quarterly reporting to funder',
    ],
  },
];

// DRAFT — JW to approve. Reporting and governance answers should be
// revisited once Jermaine confirms the current fiscal hosting arrangement.
const FAQ = [
  {
    q: 'How do I fund a pilot?',
    a: 'Smaller funds (under £15,000) are the fastest path in. Most pilots are agreed within four weeks of first contact. Get in touch below with your timeline and I will send a short scoping document you can bring to your panel.',
  },
  {
    q: 'What does the reporting cadence look like?',
    a: 'For pilot funding, a single end-of-cycle report with participant feedback and outcome evidence. For multi-year funding, quarterly written updates and an annual in-person review with your programme team.',
  },
  {
    q: 'Who holds the finance?',
    a: 'Learn 2 Live Legacy operates with a fiscal hosting arrangement suitable for restricted grant funding. Full governance and safeguarding documentation available on request before any fund is released.',
  },
  {
    q: 'Can I restrict my funding to a specific outcome or borough?',
    a: 'Yes. The framework is designed to be delivered in defined cohorts, and restricted funding for specific schools, boroughs, or themes (e.g. knife crime prevention, young men&apos;s mental health) is straightforward to ring-fence.',
  },
  {
    q: 'What happens after Phase 1?',
    a: 'Every cohort produces a set of outputs (written work, film, performance) that become part of the evidence base for the next phase. Phase 2 funders typically continue or scale — not restart.',
  },
];

export default function FundPage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.page}>
        {/* ── Hero ───────────────────────────────────────── */}
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroInner}>
              {/* DRAFT — JW to approve */}
              <div className="eyebrow">Fund This Initiative</div>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                Fund a model designed to <em>break cycles.</em>
              </h1>
              <p className={`text-lg ${styles.heroSub}`}>
                This work did not begin as an organisation. It began as a decision —
                to interrupt harm rather than reproduce it. That decision is now a
                structured, repeatable model. Your funding is what takes it from
                proof-of-concept to borough-level impact.
              </p>
              <div className={styles.heroActions}>
                <a href="#enquire" className="btn-primary">
                  Make a funding enquiry
                </a>
                <a
                  href="/forgiveness-framework-proposal.pdf"
                  download
                  className="btn-ghost"
                >
                  Download the proposal (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── The problem ─────────────────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <div className={styles.twoColumn}>
              <SectionHeader
                eyebrow="The problem"
                headline="We are not short of intervention. We are short of space."
              />
              {/* DRAFT — JW to approve */}
              <div className={styles.prose}>
                <p>
                  Most youth violence interventions try to change behaviour. They work
                  on the outside. The inside — what a young person is carrying, what
                  has been modelled to them, what they have been taught is expected of
                  them — gets left alone.
                </p>
                <p>
                  The Forgiveness Framework creates a different kind of space. A space
                  to reflect, to articulate, and to choose differently. It does this
                  through the one medium that has always been able to hold difficult
                  conversations: theatre.
                </p>
                <p>
                  We know this model works because it has already been delivered into
                  schools, community venues, and civic audiences across South London.
                  The case for funding it now is not about whether it works. It is
                  about whether it reaches the next borough.
                </p>
                <p>
                  In 2025, Jermaine Wong stated on BBC News: &lsquo;If nothing changes
                  from the inside, then you&rsquo;re going to get the same outcomes —
                  regardless of what measures you put in place.&rsquo; That is the gap
                  this work is designed to close.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The model ───────────────────────────────────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The model"
              headline="Four steps. One framework. Designed to scale."
              subhead="Every pathway follows the same four-step delivery flow. The framework is deliberately repeatable so every new cohort, school, or borough receives the same quality of work."
            />
            <div className={styles.steps}>
              {[
                {
                  n: '01',
                  title: 'Theatre Encounter',
                  body: 'Participants experience Our Son or a related work. Theatre creates the emotional conditions for reflection that lecture-based intervention cannot.',
                },
                {
                  n: '02',
                  title: 'Youth Voice Development',
                  body: 'Structured sessions surface what participants are carrying. Identity, context, and lived experience become the raw material for the work that follows.',
                },
                {
                  n: '03',
                  title: 'Creative Response',
                  body: 'Participants develop their own spoken word, film, or performance piece. This is where lived experience becomes voice and agency.',
                },
                {
                  n: '04',
                  title: 'Civic Showcase',
                  body: 'The work is presented to an audience that matters — family, community, civic partners, commissioners. The loop closes in public.',
                },
              ].map(({ n, title, body }) => (
                <div key={n} className={styles.step}>
                  <div className={styles.stepNumber}>{n}</div>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepBody}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What we are asking for ─────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The ask"
              headline="What we are asking for."
            />
            <div className={styles.fundingAskWrap}>
              <div className={styles.prose}>
                <p>
                  The full programme cost to deliver the Forgiveness Framework pilot
                  is £63,213. We are seeking the full programme budget from funding
                  partners.
                </p>
                <p>
                  The model is designed to generate ticket revenue of up to £54,883
                  at sell-out capacity — but that income is contingent on the programme
                  being fully funded and delivered first. It does not reduce the upfront
                  funding requirement.
                </p>
                <p>
                  Your investment of £63,213 unlocks a programme that generates its own
                  income, builds its own evidence base, and is designed to replicate
                  across boroughs.
                </p>
              </div>
              <div className={styles.fundingCallout}>
                <div className={styles.fundingCalloutItem}>
                  <span className={styles.fundingCalloutFigure}>£63,213</span>
                  <span className={styles.fundingCalloutLabel}>Total funding sought</span>
                </div>
                <div className={styles.fundingCalloutDivider} />
                <div className={styles.fundingCalloutItem}>
                  <span className={styles.fundingCalloutFigure}>~£8,300</span>
                  <span className={styles.fundingCalloutLabel}>Net investment after projected ticket income</span>
                </div>
                <div className={styles.fundingCalloutDivider} />
                <p className={styles.fundingCalloutNote}>
                  This is a model built to sustain itself — but it needs to be fully
                  funded to run.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Where your funding lands ───────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Where your funding lands"
              headline="Transparent, line-item delivery costs."
              subhead="Every pound is accounted for before any work begins. Below is the line-item breakdown of where funding is allocated on a typical cohort."
            />
            <div className={styles.lineItems}>
              {/* DRAFT — JW to approve. Percentages are indicative and
                  will vary by programme length and venue costs. */}
              {[
                { label: 'Artist and facilitator fees', pct: '45%', note: 'Jermaine + facilitation team' },
                { label: 'Venue and space hire', pct: '15%', note: 'Schools, rehearsal and showcase venues' },
                { label: 'Production and materials', pct: '15%', note: 'Film equipment, staging, print' },
                { label: 'Participant stipends', pct: '10%', note: 'Travel, meals, showcase support' },
                { label: 'Evaluation', pct: '8%', note: 'Baseline and endline measurement' },
                { label: 'Overheads', pct: '7%', note: 'Capped — admin, insurance, safeguarding' },
              ].map(({ label, pct, note }) => (
                <div key={label} className={styles.lineItem}>
                  <div className={styles.lineItemPct}>{pct}</div>
                  <div className={styles.lineItemBody}>
                    <div className={styles.lineItemLabel}>{label}</div>
                    <div className={`text-sm ${styles.lineItemNote}`}>{note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Funding tiers ──────────────────────────────── */}
        <section className={`section section--dark ${styles.block}`} id="tiers">
          <div className="container">
            <SectionHeader
              eyebrow="Funding tiers"
              headline="From pilot workshop to borough rollout."
              subhead="Each tier is a defined scope with named deliverables. Restricted funding welcome. Tiers can be combined for multi-year commitments."
            />
            <div className={styles.tiers}>
              {TIERS.map((tier) => (
                <div
                  key={tier.amount}
                  className={`${styles.tier} ${tier.featured ? styles.tierFeatured : ''}`}
                >
                  {tier.featured && (
                    <div className={styles.tierBadge}>Most requested</div>
                  )}
                  <div className={styles.tierAmount}>{tier.amount}</div>
                  <div className={styles.tierName}>{tier.name}</div>
                  <p className={styles.tierSummary}>{tier.summary}</p>
                  <ul className={styles.tierList}>
                    {tier.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={`text-sm text-muted ${styles.tiersFootnote}`}>
              All tiers are indicative. Scope and amount flexed to match the fund,
              the borough, and the timeline. Get in touch below to discuss.
            </p>
          </div>
        </section>

        {/* ── Trust & safeguarding ───────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Trust & safeguarding"
              headline="Built for grant funding from day one."
              subhead="The things a grant officer needs to see before a funding decision — all in one place."
            />
            <TrustStrip />
            <p className={`text-sm text-muted ${styles.trustNote}`}>
              Full safeguarding policy, DBS records, insurance certificates, and
              governance documentation available on request before any fund is
              released. {/* DRAFT — JW to confirm current fiscal hosting arrangement */}
            </p>
          </div>
        </section>

        {/* ── Voices from the room ───────────────────────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Voices from the room"
              headline="How the work actually lands."
              subhead="A funder's best evidence is the room itself. These are the responses we hear most often — from participants, audience members, and the people who bring us in."
            />
            <Testimonials
              columns={2}
              items={[
                {
                  quote: 'This changes families. This changes communities. This changes society.',
                  attribution: 'Mark Prince',
                  role: 'Founder, Kiyan Prince Foundation',
                },
                {
                  quote: 'Awestruck with the power of the message. Huge credit to the knowledge, skill and professionalism of everyone involved.',
                  attribution: 'Professional attendee',
                  role: 'Post-event message',
                },
                {
                  quote: 'So powerful, honest and moving.',
                  attribution: '★★★★★',
                  role: 'Audience member, Our Son',
                },
                {
                  quote: 'I shed tears. I laughed. I reflected. It was raw, authentic and faithful.',
                  attribution: 'Audience member',
                  role: 'Our Son',
                },
              ]}
            />
          </div>
        </section>

        {/* ── Watch the evidence ─────────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Watch the evidence"
              headline="See the work in action."
            />
            <div className={styles.videoGrid}>
              {[
                {
                  videoId: 'D7Lejud5mbU',
                  label: "The Director's Story",
                  caption: 'Why Jermaine staged Our Son — and what it cost him.',
                },
                {
                  videoId: 'T8NhYIEi_a0',
                  label: 'Audience Reactions — Our Son',
                  caption: 'Mark Prince and audiences respond immediately after the event.',
                },
                {
                  videoId: 'JZVtRYhq6I0',
                  label: 'Passion Pathway — The Featurette',
                  caption: 'Young people speak about the impact of the filmmaking programme.',
                },
              ].map(({ videoId, label, caption }) => (
                <div key={videoId} className={styles.videoThumb}>
                  <a
                    href={`https://youtu.be/${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.videoThumbLink}
                    aria-label={label}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={label}
                      className={styles.videoThumbImg}
                      width={480}
                      height={270}
                    />
                    <div className={styles.videoThumbPlay} aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </a>
                  <p className={styles.videoThumbLabel}>{label}</p>
                  <p className={`text-sm text-muted ${styles.videoThumbCaption}`}>{caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Funder FAQ ─────────────────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Funder FAQ"
              headline="The questions I get asked most."
            />
            <div className={styles.faq}>
              {FAQ.map(({ q, a }) => (
                <details key={q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{q}</summary>
                  <p
                    className={styles.faqAnswer}
                    dangerouslySetInnerHTML={{ __html: a }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bring this to your borough ─────────────────── */}
        <section
          className={`section section--dark ${styles.block}`}
          id="borough"
        >
          <div className="container">
            <div className={styles.boroughInner}>
              <SectionHeader
                eyebrow="Bring this to your borough"
                headline="For councils, trusts, and civic partners."
                subhead="If you sit inside a local authority, BID, or civic arts venue and want to bring this model to your borough, the enquiry form below is the fastest way to start a conversation. Most borough conversations begin with a site visit or a short in-person presentation."
              />
            </div>
          </div>
        </section>

        {/* ── Funding enquiry form ───────────────────────── */}
        <section
          className={`section section--surface ${styles.block}`}
          id="enquire"
        >
          <div className="container">
            <div className={styles.formWrap}>
              <SectionHeader
                eyebrow="Make an enquiry"
                headline="Let's start a conversation."
                subhead="A short form — I'll respond personally within five working days."
              />
              <FundingEnquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
