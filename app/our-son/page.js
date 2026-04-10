import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import YouTubeFacade from '../../components/shared/YouTubeFacade/YouTubeFacade';
import TripleCTA from '../../components/shared/TripleCTA/TripleCTA';
import styles from './our-son.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'Our Son — Award-Winning Theatrical Production by Jermaine Wong',
  description:
    'Our Son is a one-hour, award-winning theatrical production by Jermaine Wong. It anchors the Forgiveness Framework by placing audiences inside the consequence of unforgiveness.',
  alternates: { canonical: '/our-son' },
  openGraph: {
    title: 'Our Son — Award-Winning Theatrical Production by Jermaine Wong',
    description:
      'A one-hour, award-winning theatrical production that makes the case for forgiveness by showing what happens when it is absent.',
    url: `${BASE_URL}/our-son`,
    type: 'article',
  },
};

export default function OurSonPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: 'Our Son',
    description:
      'An award-winning, one-hour theatrical production that anchors the Forgiveness Framework by placing audiences inside the consequence of unforgiveness.',
    performer: { '@type': 'Person', name: 'Jermaine Wong' },
    organizer: { '@type': 'Organization', name: 'Learn 2 Live Legacy' },
    location: {
      '@type': 'Place',
      name: 'Brixton House',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Brixton',
        addressRegion: 'London',
        addressCountry: 'GB',
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/fund`,
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Navbar />
      <main id="main" className={styles.page}>
        {/* ── Hero + flagship video ───────────────── */}
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                <li><Link href="/">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Our Son</li>
              </ol>
            </nav>

            <div className={styles.heroInner}>
              <div className="eyebrow">Our Son</div>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                The production that <em>opens the door.</em>
              </h1>
              <p className={`text-lg ${styles.heroSub}`}>
                Before anyone can engage with the framework, they have to feel
                it. <em>Our Son</em> is a one-hour, award-winning theatrical
                production that puts the audience inside the consequence of
                unforgiveness. It doesn&apos;t argue for forgiveness. It makes
                the case by showing what happens when it&apos;s absent.
              </p>
            </div>

            <div className={styles.heroVideo}>
              <YouTubeFacade
                videoId="moaDBwlF1r0"
                title="Our Son — Award-Winning Production"
              />
            </div>
          </div>
        </section>

        {/* ── About the production ────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="About the production"
              headline="Written and directed by Jermaine Wong."
              subhead="Our Son is the cultural anchor of the Forgiveness Framework. It was born from Jermaine's own reckoning with loss, and has been delivered to audiences across South London schools, colleges, and civic venues for over fifteen years."
            />
            <div className={styles.factsGrid}>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>Format</div>
                <h3 className={styles.factTitle}>One-hour theatre</h3>
                <p className={styles.factBody}>
                  A single one-hour performance designed to hold a room of any
                  size — from a school assembly to a civic showcase. No
                  interval, no interruption, no exit point.
                </p>
              </div>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>Partnership</div>
                <h3 className={styles.factTitle}>Brixton House</h3>
                <p className={styles.factBody}>
                  Delivered in partnership with Brixton House, the borough
                  landmark that provides the platform and legitimacy for the
                  production to reach audiences beyond school settings.
                </p>
              </div>
              <div className={styles.fact}>
                <div className={`text-xs ${styles.factLabel}`}>What comes next</div>
                <h3 className={styles.factTitle}>The Framework</h3>
                <p className={styles.factBody}>
                  After the performance, audiences engage with{' '}
                  <Link href="/the-framework">the Forgiveness Framework</Link>{' '}
                  — a structured process that helps young people decide what to
                  do with what they have just felt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Audience response video ─────────────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Audience response"
              headline="How it lands."
              subhead="The case for Our Son is always made most clearly by the people who have just watched it."
            />
            <div className={styles.testimonialWrap}>
              <YouTubeFacade
                videoId="KSyVRZz_0r0"
                title="Our Son — Audience Testimonials"
              />
            </div>
          </div>
        </section>

        {/* ── Pull quote ──────────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <figure className={styles.quote}>
              <blockquote className={`display-md ${styles.quoteText}`}>
                &ldquo;This isn&apos;t a show about what happened.{' '}
                <em>It&apos;s a show about what keeps happening</em> when
                nothing changes.&rdquo;
              </blockquote>
              <figcaption className={`text-sm ${styles.quoteSource}`}>
                — Jermaine Wong, Playwright &amp; Director
              </figcaption>
            </figure>
          </div>
        </section>

        <TripleCTA
          eyebrow="Bring Our Son to your venue"
          headline="A single performance is the door into everything else."
          intro="Our Son can be booked as a standalone performance or as the opening of a longer programme engagement. Fund a run, bring it to your borough, or book Jermaine to speak alongside it."
        />
      </main>
      <Footer />
    </>
  );
}
