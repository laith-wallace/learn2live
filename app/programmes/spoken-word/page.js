import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';
import YouTubeFacade from '../../../components/shared/YouTubeFacade/YouTubeFacade';
import TripleCTA from '../../../components/shared/TripleCTA/TripleCTA';
import styles from '../programmes.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'Spoken Word — A Creative Intervention That Transforms Voice into Agency',
  description:
    'Spoken Word is a structured youth programme from Learn 2 Live Legacy. Participants transform lived experience into written and performed work, culminating in a public showcase.',
  alternates: { canonical: '/programmes/spoken-word' },
  openGraph: {
    title: 'Spoken Word | Learn 2 Live Legacy',
    description:
      'A structured creative intervention that transforms lived experience into voice and agency.',
    url: `${BASE_URL}/programmes/spoken-word`,
    type: 'website',
  },
};

// DRAFT — JW to approve. All delivery specs (cohort size, session counts,
// venue requirements) are drafted from youth-arts programme norms and need
// Jermaine's validation before being quoted to a school or funder.
const STAGES = [
  {
    n: '01',
    title: 'Identity',
    body: 'Participants spend the first sessions mapping who they are — what they have inherited, what they carry, what they have never been asked to articulate. This is the foundation everything else is built on.',
  },
  {
    n: '02',
    title: 'Writing',
    body: 'Structured writing sessions turn that raw material into first drafts. Participants work with facilitators on craft — line, image, rhythm — without losing the honesty of the original voice.',
  },
  {
    n: '03',
    title: 'Performance',
    body: 'Work is rehearsed and performed for the room before it leaves it. Participants learn to hold a room, use silence, and deliver their work under pressure.',
  },
  {
    n: '04',
    title: 'Showcase',
    body: 'The cycle closes with a public showcase — family, community, civic partners, commissioners. The work lands in front of the audience that matters.',
  },
];

export default function SpokenWordPage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.page}>
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className="eyebrow">Spoken Word</div>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                A creative intervention that<br />
                transforms voice into <em>agency.</em>
              </h1>
              {/* DRAFT — JW to approve */}
              <p className={`text-lg ${styles.heroSub}`}>
                Participants are given space to articulate what is often left
                unspoken — and to deliver it on their own terms. The programme
                runs across a full cycle, from first identity work to public
                showcase.
              </p>
            </div>
            <div className={styles.heroVideo}>
              <YouTubeFacade
                videoId="D7Lejud5mbU"
                title="Spoken Word — Participant voices"
              />
            </div>
          </div>
        </section>

        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The journey"
              headline="Four stages. One cycle."
              subhead="Every cohort moves through the same four stages. Length and pace flex to the group — the structure does not."
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
              eyebrow="Delivery"
              headline="Built to fit a real school year."
              subhead="The programme runs flexibly inside school terms, pupil referral units, and community youth settings. Everything is designed to work around existing timetables, not against them."
            />
            <div className={styles.factsGrid}>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>Who it&apos;s for</div>
                <h3 className={styles.factTitle}>Young people, 14–21</h3>
                <ul className={styles.factList}>
                  <li>Cohort size: 10–15 participants</li>
                  <li>Mixed-gender or single-gender cohorts</li>
                  <li>School, college, or community setting</li>
                  <li>No prior writing experience required</li>
                </ul>
              </div>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>What they leave with</div>
                <h3 className={styles.factTitle}>A body of work</h3>
                <ul className={styles.factList}>
                  <li>At least one written and performed piece</li>
                  <li>A recorded showcase performance</li>
                  <li>An invitation to continue with the framework</li>
                  <li>A participant feedback report for the host</li>
                </ul>
              </div>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>Delivery model</div>
                <h3 className={styles.factTitle}>6–12 structured sessions</h3>
                <ul className={styles.factList}>
                  <li>Weekly or twice-weekly, 90–120 minutes</li>
                  <li>DBS-checked facilitator team</li>
                  <li>Showcase event included</li>
                  <li>Baseline + endline evaluation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Safeguarding & evaluation"
              headline="Designed to sit alongside your existing policies."
            />
            <div className={styles.body}>
              <p>
                Every facilitator is DBS-checked and briefed on the safeguarding
                lead of the host setting before the programme starts. Session
                plans are shared in advance. Any disclosure follows the host
                school or organisation&apos;s existing safeguarding procedures —
                we do not operate in parallel to them.
              </p>
              <p>
                Evaluation uses baseline and endline measures tailored to the
                cohort. Outputs include a written report for the host, a
                summary document suitable for funders, and (with consent) a
                film or photograph record of the final showcase.
              </p>
              <p>
                Full safeguarding policy, DBS records, insurance certificates,
                and evaluation methodology are available on request before any
                booking is confirmed. {/* DRAFT — JW to confirm safeguarding lead & evaluation framework */}
              </p>
            </div>
          </div>
        </section>

        <TripleCTA
          eyebrow="Bring Spoken Word in"
          headline="The fastest route in is a conversation."
          intro="Most school and borough conversations begin with a 30-minute scoping call. Fund a pilot cohort, bring this to your borough, or book Jermaine to present it directly to your team."
        />
      </main>
      <Footer />
    </>
  );
}
