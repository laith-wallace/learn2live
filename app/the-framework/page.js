import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import TripleCTA from '../../components/shared/TripleCTA/TripleCTA';
import styles from './the-framework.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'The Forgiveness Framework — A Structured Model for Breaking Cycles',
  description:
    'The Forgiveness Framework is a structured, repeatable model that connects culture, youth voice and civic dialogue. Built on a four-step delivery flow and a four-phase inner journey.',
  alternates: { canonical: '/the-framework' },
  openGraph: {
    title: 'The Forgiveness Framework | Learn 2 Live Legacy',
    description:
      'A structured, repeatable model that creates space for reflection, dialogue and change — built from lived experience.',
    url: `${BASE_URL}/the-framework`,
    type: 'article',
  },
};

// The operational delivery flow — what the programme DOES in sequence.
// This is the funder-facing view of the framework, matching the homepage §5.
const STEPS = [
  {
    n: '01',
    title: 'Theatre Encounter',
    body: 'Our Son or a related work creates the emotional conditions reflection needs. Theatre reaches the parts of a young person that curriculum-based intervention cannot.',
    anchor: 'phase-01',
  },
  {
    n: '02',
    title: 'Youth Voice Development',
    body: 'Structured sessions surface what participants are carrying. Identity, context, and lived experience become the raw material the rest of the framework is built on.',
    anchor: 'phase-02',
  },
  {
    n: '03',
    title: 'Creative Response',
    body: 'Participants develop their own spoken word, film, or performance piece. Lived experience becomes voice and agency through structured craft work.',
    anchor: 'phase-03',
  },
  {
    n: '04',
    title: 'Civic Showcase',
    body: 'The finished work is presented to an audience that matters — family, community, civic partners, commissioners. The loop closes in public.',
    anchor: 'phase-04',
  },
];

// The psychological inner journey — what happens INSIDE a participant as
// they move through the operational steps above. This is the deeper
// methodology funders and educators will drill into if they want the why
// behind the what.
const PHASES = [
  {
    number: '01',
    title: 'Recognition',
    anchor: 'phase-01',
    behind: 'Behind: Theatre Encounter',
    description:
      'Young people learn to name what has happened to them — without judgement, without minimisation. Recognition is not acceptance. It is the first honest acknowledgement that something real occurred and that it mattered. Theatre creates the conditions for this acknowledgement to happen in public without shame.',
  },
  {
    number: '02',
    title: 'Reflection',
    anchor: 'phase-02',
    behind: 'Behind: Youth Voice Development',
    description:
      'Structured facilitation helps participants examine the impact of what they carry — on themselves, on their relationships, and on the choices they make. Not as therapy. As inquiry. This is the work that turns raw experience into the material they will shape into voice.',
  },
  {
    number: '03',
    title: 'Reframe',
    anchor: 'phase-03',
    behind: 'Behind: Creative Response',
    description:
      'Through story, craft, and dialogue, participants encounter new ways of understanding what forgiveness actually is — and what it is not. It is not weakness. It is not forgetting. It is a decision about who holds the weight going forward. Reframing happens in the making of the work, not before it.',
  },
  {
    number: '04',
    title: 'Recommitment',
    anchor: 'phase-04',
    behind: 'Behind: Civic Showcase',
    description:
      'Participants define the life they intend to build. Recommitment is the practical work: setting intentions, building accountability, and understanding that forgiveness is not a moment — it is a practice. The public showcase is the first test of that practice.',
  },
];

export default function TheFrameworkPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'The Forgiveness Framework',
    description:
      'A structured, repeatable model that connects culture, youth voice and civic dialogue through a four-step delivery flow and a four-phase inner journey.',
    step: STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Navbar />
      <main id="main" className={styles.page}>
        {/* ── Hero ────────────────────────────────── */}
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                <li><Link href="/">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">The Framework</li>
              </ol>
            </nav>
            <div className={styles.heroInner}>
              <div className="eyebrow">The Forgiveness Framework</div>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                A structured, repeatable<br />
                <em>model for breaking cycles.</em>
              </h1>
              {/* DRAFT — JW to approve */}
              <p className={`text-lg ${styles.heroSub}`}>
                This is not a programme. It is a structured, repeatable model
                designed to create space where there often is none — a model that
                connects culture, youth voice and civic dialogue. It operates on
                two layers: a four-step delivery flow, and a four-phase inner
                journey that moves through it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Delivery flow (operational) ─────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The delivery flow"
              headline="Four operational steps."
              subhead="This is what the programme does, in sequence. Every cohort, every school, every borough moves through the same four steps — the structure does not change."
            />
            <div className={styles.steps}>
              {STEPS.map(({ n, title, body, anchor }) => (
                <div key={n} className={styles.step}>
                  <div className={styles.stepNumber}>{n}</div>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepBody}>{body}</p>
                  <a href={`#${anchor}`} className={styles.stepLink}>
                    Inner journey ↓
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Inner journey (psychological) ───────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The inner journey"
              headline="Four phases. One honest shift."
              subhead="Behind every operational step is a phase the participant moves through inside themselves. Recognition, reflection, reframe, and recommitment are the deeper methodology the framework is built on."
            />
            <div className={styles.phases}>
              {PHASES.map((phase) => (
                <div
                  key={phase.number}
                  id={phase.anchor}
                  className={styles.phase}
                >
                  <div className={styles.phaseNumber}>{phase.number}</div>
                  <div>
                    <span className={styles.phaseAnchor}>{phase.behind}</span>
                    <h3 className={styles.phaseTitle}>{phase.title}</h3>
                    <p className={styles.phaseBody}>{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What it is not ──────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="What the framework is not"
              headline="A practical human tool, not a moral directive."
            />
            <div className={styles.prose}>
              {/* DRAFT — JW to approve */}
              <p>
                The Forgiveness Framework is not religious. It does not treat
                forgiveness as a moral obligation, an emotional requirement, or
                something that a young person owes to anyone — including themselves.
              </p>
              <p>
                It is not therapy, though it sits comfortably alongside therapeutic
                provision where it exists. It is not a curriculum document, though
                it can be delivered inside schools and further education settings.
                It is not an intervention programme in the behaviour-change sense —
                it works on the inside, not on the outside.
              </p>
              <p>
                What it is: a structured, repeatable practice. A way of creating
                space where there often is none. A model that treats forgiveness
                as <em>a decision about who holds the weight going forward</em> —
                and gives young people the tools to make that decision on their
                own terms.
              </p>
            </div>
          </div>
        </section>

        <TripleCTA
          eyebrow="Work with the framework"
          headline="Three ways to put this into practice."
          intro="Fund a cohort, bring the framework to your borough, or book Jermaine to speak to your team."
        />
      </main>
      <Footer />
    </>
  );
}
