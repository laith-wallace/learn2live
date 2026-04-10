import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import TripleCTA from '../../components/shared/TripleCTA/TripleCTA';
import styles from './about.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'About Jermaine Wong — Playwright, Director, Founder',
  description:
    'Jermaine Wong is a theatre-maker, educator and the architect of the Forgiveness Framework. 15+ years delivering theatre-based youth work across South London.',
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

                {/* DRAFT — JW to approve */}
                <div className={styles.heroBody}>
                  <p>
                    Jermaine Wong is a theatre-maker, educator and the architect
                    of the Forgiveness Framework. His work sits at the
                    intersection of culture, youth engagement and civic response.
                  </p>
                  <p>
                    But this work is not theoretical. It is built from lived
                    experience. Following the loss of his son to serious youth
                    violence, Jermaine made a decision that now underpins
                    everything he builds: <em>not to reproduce harm — but to
                    interrupt it.</em>
                  </p>
                  <p>
                    That decision has been translated into a structured,
                    scalable model now being developed for borough-level
                    implementation. The production that anchors it —{' '}
                    <Link href="/our-son">Our Son</Link> — has been delivered to
                    audiences across South London for over fifteen years. The
                    model behind it — the{' '}
                    <Link href="/the-framework">Forgiveness Framework</Link> —
                    is what Jermaine now works to scale.
                  </p>
                  <p>
                    If you are a funder, a commissioner, an educator, or a youth
                    worker who understands that this kind of change does not
                    happen from a curriculum document, he would be glad to hear
                    from you.
                  </p>
                </div>

                <div className={styles.signature}>
                  <span className={styles.signatureName}>Jermaine Wong</span>
                  <span className={styles.signatureRole}>
                    Playwright · Director · Founder, Learn 2 Live Legacy
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
                  <span className="text-xs text-muted">As featured in The Voice</span>
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
              {/* DRAFT — JW to approve */}
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
              {/* DRAFT — JW to approve / supply specifics */}
              <div className={styles.cred}>
                <div className={`text-xs ${styles.credLabel}`}>Delivery</div>
                <h3 className={styles.credTitle}>15+ years</h3>
                <p className={styles.credBody}>
                  Continuous theatre-based youth work delivered across South
                  London schools, colleges, and civic venues since 2009.
                </p>
              </div>
              <div className={styles.cred}>
                <div className={`text-xs ${styles.credLabel}`}>Partnerships</div>
                <h3 className={styles.credTitle}>Kiyan Prince Foundation · Brixton House</h3>
                <p className={styles.credBody}>
                  Ongoing programme partnerships with the Kiyan Prince
                  Foundation and Brixton House, the borough landmark that hosts
                  Our Son and civic showcase events.
                </p>
              </div>
              <div className={styles.cred}>
                <div className={`text-xs ${styles.credLabel}`}>Press</div>
                <h3 className={styles.credTitle}>Featured in The Voice</h3>
                <p className={styles.credBody}>
                  National Black British press coverage of the production and
                  the broader framework — available in the press kit on
                  request.
                </p>
              </div>
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
