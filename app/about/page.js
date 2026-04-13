import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import YouTubeFacade from '../../components/shared/YouTubeFacade/YouTubeFacade';
import TripleCTA from '../../components/shared/TripleCTA/TripleCTA';
import styles from './about.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'About Jermaine Wong — Playwright, Filmmaker, Spoken Word Artist, Educator',
  description:
    'Jermaine Wong is a playwright, filmmaker, spoken word artist and educator — and the founder of Learn 2 Live Legacy. Over 15 years delivering theatre-based youth work across South London.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Jermaine Wong — Learn 2 Live Legacy',
    description:
      'The architect of the Forgiveness Framework. Work built from lived experience, delivered through theatre.',
    url: `${BASE_URL}/about`,
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.page}>
        {/* ── Hero + portrait ─────────────────────── */}
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                <li><Link href="/">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">About</li>
              </ol>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <div className="eyebrow">The founder</div>
                <h1 className={`display-xl ${styles.heroHeadline}`}>
                  Jermaine Wong — the architect of the{' '}
                  <em>Forgiveness Framework.</em>
                </h1>

                <div className={styles.heroBody}>
                  <p>
                    Jermaine Wong is a playwright, filmmaker, spoken word artist, drama educator
                    and the founder of Learn 2 Live Legacy — a cultural and social impact
                    organisation that uses theatre, film and structured dialogue to help young
                    people, families, and communities move from cycles of violence and pain towards
                    forgiveness, healing, and transformation.
                  </p>
                  <p>
                    His work sits at the intersection of artistic excellence, youth development,
                    faith-rooted vision, and civic imagination. It is not theoretical. It is built
                    from lived experience.
                  </p>
                  <p>
                    Following the murder of his son Keelan in Brixton in 2023, Jermaine made a
                    decision that now underpins everything he builds: not to reproduce harm — but
                    to interrupt it. That decision is the Forgiveness Framework.
                  </p>
                  <p>
                    In 2025 he was interviewed on BBC News on knife crime and what genuine change
                    requires. That same year, The Voice — the UK&apos;s leading Black British
                    newspaper — published a full feature interview on his work. His message in
                    both: if nothing changes internally, nothing changes externally.
                  </p>
                </div>

                {/* BBC News video embed */}
                <div className={styles.videoBlock}>
                  <p className={`text-xs ${styles.videoLabel}`}>
                    Watch: Jermaine Wong on BBC News
                  </p>
                  <YouTubeFacade
                    videoId="_qtjZkFMejw"
                    title="Jermaine Wong on BBC News"
                  />
                  <p className={`text-sm text-muted ${styles.videoCaption}`}>
                    Speaking on knife crime, internal transformation, and what genuinely needs
                    to change.
                  </p>
                </div>

                <div className={styles.signature}>
                  <span className={styles.signatureName}>Jermaine Wong</span>
                  <span className={styles.signatureRole}>
                    Playwright · Filmmaker · Spoken Word Artist · Educator · Founder, Learn 2 Live Legacy
                  </span>
                </div>

                <div className={styles.heroActions}>
                  <Link href="/fund" className="btn-primary">
                    Fund This Initiative
                  </Link>
                  <Link href="/the-framework" className="btn-ghost">
                    Explore the framework
                  </Link>
                </div>
              </div>

              <aside className={styles.portrait}>
                <Image
                  src="/thevoice-news-article.jpg"
                  alt="Jermaine Wong, as featured in The Voice newspaper"
                  fill
                  sizes="(max-width: 900px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.portraitCaption}>
                  <span className="text-xs text-muted">As featured in The Voice, August 2025</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── What this work is built on ──────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The work"
              headline="What Jermaine builds, and why."
            />
            <div className={styles.prose}>
              <p>
                The Forgiveness Framework was not designed in a classroom. It
                was assembled, cohort by cohort, from the rooms Jermaine has
                actually delivered into — South London schools, pupil referral
                units, community youth settings, and civic venues. Every part
                of the framework has been tested on the young people it is
                built for.
              </p>
              <p>
                The work rests on a simple premise: <em>pain that is not
                processed becomes pattern.</em> Most of the interventions a
                young person encounters work on the outside — behaviour, choice,
                consequence. The inside — what they are carrying, what they
                have learned to survive with, what they have been taught to
                expect — gets left alone.
              </p>
              <p>
                What Jermaine builds is a way to change that. Theatre creates
                the emotional conditions. Structured facilitation turns the
                experience into voice. Voice becomes craft, and craft becomes
                public. By the time a young person stands in front of a civic
                audience with work they have made, the shift has already
                happened.
              </p>
            </div>
          </div>
        </section>

        {/* ── Credentials ─────────────────────────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Track record"
              headline="Over fifteen years in the room."
              subhead="Jermaine's work has been delivered in partnership with schools, civic venues, and youth organisations across South London — and covered by national press."
            />
            <div className={styles.credsGrid}>
              <div className={styles.cred}>
                <div className={`text-xs ${styles.credLabel}`}>Delivery</div>
                <h3 className={styles.credTitle}>Nearly 30 years</h3>
                <p className={styles.credBody}>
                  Nearly 30 years in inner-city London secondary education,
                  combined with over 15 years of theatre-based youth engagement
                  delivered across South London schools, colleges, and civic venues.
                </p>
              </div>
              <div className={styles.cred}>
                <div className={`text-xs ${styles.credLabel}`}>Partnerships</div>
                <h3 className={styles.credTitle}>Kiyan Prince Foundation · Brixton House · Saint Gabriel&apos;s College</h3>
                <p className={styles.credBody}>
                  Kiyan Prince Foundation (Official Collaborating Partner) · Brixton House ·
                  Saint Gabriel&apos;s College (Confirmed Educational Partner) ·
                  Final Call Productions (Creative Production Partner).
                </p>
              </div>
              <div className={styles.cred}>
                <div className={`text-xs ${styles.credLabel}`}>Press</div>
                <h3 className={styles.credTitle}>BBC News (2025) · The Voice (August 2025)</h3>
                <p className={styles.credBody}>
                  BBC News interview on knife crime and transformation, 2025.
                  The Voice — full editorial feature interview on Our Son and the
                  Forgiveness Framework, August 2025.
                </p>
              </div>
            </div>
            <div className={styles.credLinks}>
              <a
                href="https://youtu.be/_qtjZkFMejw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Watch BBC Interview →
              </a>
              <a
                href="https://www.voice-online.co.uk/news/uk-news/2025/08/06/love/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Read The Voice Feature →
              </a>
            </div>
          </div>
        </section>

        <TripleCTA
          eyebrow="What happens next"
          headline="Three ways to work with this."
          intro="Fund a cohort, bring the programme to your borough, or book Jermaine to speak to your team."
        />
      </main>
      <Footer />
    </>
  );
}
