import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';
import YouTubeFacade from '../../../components/shared/YouTubeFacade/YouTubeFacade';
import TripleCTA from '../../../components/shared/TripleCTA/TripleCTA';
import styles from '../programmes.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'Filmmaking — From Experience to Screen',
  description:
    'Filmmaking is a structured youth programme from Learn 2 Live Legacy. Young people develop, write, shoot, and premiere their own cinematic work.',
  alternates: { canonical: '/programmes/filmmaking' },
  openGraph: {
    title: 'Filmmaking | Learn 2 Live Legacy',
    description:
      'A cinematic pathway where young people turn lived experience into films.',
    url: `${BASE_URL}/programmes/filmmaking`,
    type: 'website',
  },
};

// DRAFT — JW to approve delivery specs.
const STAGES = [
  {
    n: '01',
    title: 'Story',
    body: 'Participants identify the story they want to tell. Facilitated sessions unpack lived experience into the raw narrative material a film can hold — characters, setting, tension, stakes.',
  },
  {
    n: '02',
    title: 'Script',
    body: 'The raw material becomes a first draft. Participants learn scene-writing, dialogue, and structure — without losing the honesty of the original voice. Drafts are workshopped collectively.',
  },
  {
    n: '03',
    title: 'Production',
    body: 'Shooting happens in-cohort. Participants rotate through roles — direction, camera, sound, performance — so every member of the group understands how the work is made.',
  },
  {
    n: '04',
    title: 'Premiere',
    body: 'The finished film is screened to a public audience. Family, school, civic partners, commissioners. The work lands the way it was always meant to — on a screen, in a room, with the lights down.',
  },
];

export default function FilmmakingPage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.page}>
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className="eyebrow">Filmmaking</div>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                From experience to <em>screen.</em>
              </h1>
              {/* DRAFT — JW to approve */}
              <p className={`text-lg ${styles.heroSub}`}>
                Young people transform lived experience into cinematic
                storytelling. Every participant leaves with a film, a
                screen credit, and a new relationship to the story they carry.
              </p>
            </div>
            <div className={styles.heroVideo}>
              <YouTubeFacade
                videoId="YapRE2jCxbI"
                title="Filmmaking programme — participant work"
              />
            </div>
          </div>
        </section>

        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The journey"
              headline="Four stages. One finished film."
              subhead="Every cohort moves through the same four stages. The finished film is always public."
            />
            <div className={styles.journey}>
              {STAGES.map(({ n, title, body }) => (
                <div key={n} className={styles.stage}>
                  <div className={styles.stageNumber}>{n}</div>
                  <h3 className={styles.stageTitle}>{title}</h3>
                  <p className={styles.stageBody}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Additional context"
              headline="A second look at the work."
              subhead="Reflections from a prior cohort."
            />
            <div className={styles.heroVideo}>
              <YouTubeFacade
                videoId="_ojjloQHpv8"
                title="Filmmaking — participant reflections"
              />
            </div>
          </div>
        </section>

        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Delivery"
              headline="Built for schools, festivals, and community venues."
              subhead="Every aspect of the programme is designed to fit existing structures — term timetables, festival dates, venue calendars."
            />
            <div className={styles.factsGrid}>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>Who it&apos;s for</div>
                <h3 className={styles.factTitle}>Young people, 14–21</h3>
                <ul className={styles.factList}>
                  <li>Cohort size: 8–12 participants</li>
                  <li>No prior filmmaking experience required</li>
                  <li>School, college, or community setting</li>
                  <li>Equipment and production kit provided</li>
                </ul>
              </div>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>What they leave with</div>
                <h3 className={styles.factTitle}>A completed film</h3>
                <ul className={styles.factList}>
                  <li>Short film (5–15 minutes)</li>
                  <li>On-screen credit for every participant</li>
                  <li>Public premiere with invited audience</li>
                  <li>Digital copy for portfolio use</li>
                </ul>
              </div>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>Delivery model</div>
                <h3 className={styles.factTitle}>8–16 sessions + shoot</h3>
                <ul className={styles.factList}>
                  <li>Weekly sessions plus a production block</li>
                  <li>DBS-checked facilitator and crew</li>
                  <li>Full production kit on site</li>
                  <li>Premiere event included</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Safeguarding & evaluation"
              headline="Designed to sit alongside your existing policies."
            />
            <div className={styles.body}>
              <p>
                Every facilitator and crew member is DBS-checked and briefed on the
                safeguarding lead of the host setting before the programme starts.
                Any disclosure follows the host school or organisation&apos;s existing
                safeguarding procedures — we do not operate in parallel to them.
              </p>
              <p>
                Consent and release forms are collected for every participant before
                any film is screened publicly. Participants retain portfolio rights
                to their own work. Evaluation uses baseline and endline measures
                tailored to the cohort, with a written report provided to the host
                at the end of the cycle.
              </p>
              <p>
                Full safeguarding policy, DBS records, insurance certificates, and
                production risk assessments available on request before any booking
                is confirmed. {/* DRAFT — JW to confirm safeguarding and production protocols */}
              </p>
            </div>
          </div>
        </section>

        <TripleCTA
          eyebrow="Launch Filmmaking with us"
          headline="Every film needs a first funder."
          intro="Fund a pilot cohort, bring this to your borough, or book Jermaine to present the programme to your team."
        />
      </main>
      <Footer />
    </>
  );
}
