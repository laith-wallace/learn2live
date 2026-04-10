import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import TripleCTA from '../../components/shared/TripleCTA/TripleCTA';
import KeynoteBookingForm from './KeynoteBookingForm';
import styles from './keynote.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'Keynote Speaking — Book Jermaine Wong',
  description:
    'Book Jermaine Wong for keynote talks that shift perspective. Signature talks on forgiveness, youth resilience, cycles of harm, and what theatre knows that policy does not.',
  alternates: { canonical: '/keynote' },
  openGraph: {
    title: 'Keynote Speaking | Jermaine Wong',
    description:
      'Speaking that shifts perspective — signature talks on forgiveness, youth resilience, and breaking cycles of harm.',
    url: `${BASE_URL}/keynote`,
    type: 'website',
  },
};

// DRAFT — JW to approve / rename / reorder. These are drafted from the
// themes running through the framework document. Jermaine should pick
// the three or four he actually wants to offer.
const TALKS = [
  {
    title: 'Interrupting the Pattern',
    synopsis:
      'The practical framework for breaking cycles of harm — in communities, in families, and in the young people who have inherited them. The most requested talk for school leadership teams and civic partners.',
    audiences: 'Schools · Local authorities · Civic events',
  },
  {
    title: 'Forgiveness Without Religion',
    synopsis:
      'Reframing forgiveness as a practical civic tool, not a moral or religious directive. For audiences who have been told forgiveness is something it is not — and for those designing interventions that need a vocabulary that works.',
    audiences: 'Policy forums · Academic settings · Cultural institutions',
  },
  {
    title: "What Theatre Knows That Policy Doesn't",
    synopsis:
      'Why story and performance reach the parts of young people that lecture-based intervention cannot — and what that means for the design of youth work, education, and public service delivery.',
    audiences: 'Sector conferences · CPD events · Arts & education panels',
  },
  {
    title: "The Father's Question",
    synopsis:
      'For fatherhood, masculinity, and men&apos;s health audiences — the question Jermaine carried after the loss of his son, and what answering it in public has taught him about the work that is possible on the other side of it.',
    audiences: 'Men&apos;s health · Fatherhood programmes · Faith-adjacent events',
  },
];

const FORMATS = [
  {
    length: '45 min',
    title: 'Keynote',
    body: 'A single talk, one of the signature titles, delivered standalone. Ideal for conference mainstages and assembly settings.',
  },
  {
    length: '75 min',
    title: 'Keynote + Q&A',
    body: 'A 45-minute keynote plus a facilitated 30-minute Q&A. Ideal for CPD events and leadership audiences who want to interrogate the ideas.',
  },
  {
    length: 'Half-day',
    title: 'Workshop',
    body: 'A keynote framing session followed by an applied workshop for up to 40 participants. Ideal for staff training days and partner events.',
  },
];

export default function KeynotePage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.page}>
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className="eyebrow">Keynote Speaking</div>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                Speaking that <em>shifts perspective.</em>
              </h1>
              {/* DRAFT — JW to approve */}
              <p className={`text-lg ${styles.heroSub}`}>
                Jermaine Wong speaks to the rooms most people avoid — schools,
                civic events, professional audiences, and conferences where the
                question of what to do about harm is taken seriously. He does not
                deliver motivational talks. He delivers a framework.
              </p>
              <div className={styles.heroActions}>
                <a href="#book" className="btn-primary">
                  Book Jermaine
                </a>
                <a href="#talks" className="btn-ghost">
                  See signature talks
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <div className={styles.twoColumn}>
              <SectionHeader
                eyebrow="Why Jermaine is asked to speak"
                headline="An expert by experience, not a motivational speaker."
              />
              {/* DRAFT — JW to approve */}
              <div className={styles.prose}>
                <p>
                  Jermaine came to this work through loss. Every talk he gives is
                  built on that ground, and on the framework he developed in the
                  decade after it. What audiences get is not an inspirational story
                  — it is an honest, structured, practical account of how the work
                  of interrupting harm is actually done.
                </p>
                <p>
                  His talks are designed for the rooms that need the vocabulary
                  most: school leadership teams working through knife crime
                  prevention, local authorities commissioning youth services,
                  cultural institutions thinking about their civic role, and
                  professional audiences whose work intersects with young people
                  who are carrying things no one has asked them to talk about.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`section section--dark ${styles.block}`}
          id="talks"
        >
          <div className="container">
            <SectionHeader
              eyebrow="Signature talks"
              headline="Four titles. One underlying framework."
              subhead="Each talk can stand alone or be tailored to an audience. All four are built on the same model — the framing is what changes."
            />
            <div className={styles.talks}>
              {TALKS.map((talk) => (
                <div key={talk.title} className={styles.talk}>
                  <h3 className={styles.talkTitle}>{talk.title}</h3>
                  <p className={styles.talkBody}>{talk.synopsis}</p>
                  <div className={`text-xs ${styles.talkAudiences}`}>
                    {talk.audiences}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Formats"
              headline="Three ways to book."
              subhead="Choose the length that fits your event — or ask for something bespoke."
            />
            <div className={styles.formats}>
              {FORMATS.map((f) => (
                <div key={f.title} className={styles.format}>
                  <div className={styles.formatLength}>{f.length}</div>
                  <h3 className={styles.formatTitle}>{f.title}</h3>
                  <p className={styles.formatBody}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Audiences"
              headline="Where Jermaine speaks."
            />
            <div className={styles.body}>
              {/* DRAFT — JW to approve audience list */}
              <ul className={styles.audienceList}>
                <li>Secondary schools and further education colleges</li>
                <li>Local authority and borough civic events</li>
                <li>Cultural institutions and theatre venues</li>
                <li>Professional development and CPD sessions</li>
                <li>Sector conferences (youth work, arts education, criminal justice)</li>
                <li>Faith-adjacent and community forums</li>
                <li>Fatherhood, masculinity, and men&apos;s health events</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`section section--surface ${styles.block}`}
          id="book"
        >
          <div className="container">
            <div className={styles.formWrap}>
              <SectionHeader
                eyebrow="Book Jermaine"
                headline="Send a booking enquiry."
                subhead="A short form — I&apos;ll respond personally within five working days with availability and next steps."
              />
              <KeynoteBookingForm />
            </div>
          </div>
        </section>

        <TripleCTA
          eyebrow="Other ways to work with this"
          headline="Funding, programmes, or a place to start."
          intro="If a keynote is the right door but your organisation could also benefit from a delivered programme, start with the funding or borough pathway below."
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
