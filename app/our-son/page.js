import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import YouTubeFacade from '../../components/shared/YouTubeFacade/YouTubeFacade';
import Testimonials from '../../components/shared/Testimonials/Testimonials';
import TripleCTA from '../../components/shared/TripleCTA/TripleCTA';
import styles from './our-son.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'Our Son — Theatrical Production by Jermaine Wong',
  description:
    'Our Son is a one-act drama by Jermaine Wong exploring fatherhood, identity, pride and forgiveness. It anchors the Forgiveness Framework by placing audiences inside the consequence of unforgiveness.',
  alternates: { canonical: '/our-son' },
  openGraph: {
    title: 'Our Son — Theatrical Production by Jermaine Wong',
    description:
      'A one-act drama that makes the case for forgiveness by showing what happens when it is absent.',
    url: `${BASE_URL}/our-son`,
    type: 'article',
  },
};

const AUDIENCE_QUOTES = [
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
  {
    quote: 'The play is off the scale. It needs to be at the Young Vic.',
    attribution: 'Theatre professional',
    role: 'Post-performance',
  },
  {
    quote: 'You are an exceptionally gifted young man and I can\'t wait to see your next chapter.',
    attribution: '★★★★★',
    role: 'Post-performance message',
  },
];

export default function OurSonPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: 'Our Son',
    description:
      'A one-act drama exploring fatherhood, identity, pride and forgiveness. It anchors the Forgiveness Framework by placing audiences inside the consequence of unforgiveness.',
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
                it. <em>Our Son: The Battlefield of Forgiveness</em> is a one-act
                drama exploring fatherhood, identity, pride and forgiveness. It
                does not argue for forgiveness. It makes the case by showing what
                happens when it is absent.
              </p>
            </div>

            <div className={styles.heroVideo}>
              <YouTubeFacade
                videoId="moaDBwlF1r0"
                title="Our Son — Production"
              />
            </div>
          </div>
        </section>

        {/* ── A play born before the tragedy ──────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="The story behind the play"
              headline="A play born before the tragedy."
            />
            <div className={styles.prose}>
              <p>
                Our Son was completed in September 2023 — two weeks before the
                murder of Jermaine&apos;s son, Keelan. The play was already written.
                Already about a father and son. Already about the long road back
                to reconciliation.
              </p>
              <p>
                The decision to stage it afterwards — despite everything — speaks
                to the same conviction the Framework is built on: that the work of
                healing must continue, and that art has a specific role in making
                that possible.
              </p>
            </div>
            <div className={styles.videoSection}>
              <p className={`text-xs ${styles.videoLabel}`}>
                Watch: Jermaine explains the story behind Our Son
              </p>
              <div className={styles.videoWrap}>
                <YouTubeFacade
                  videoId="D7Lejud5mbU"
                  title="Jermaine explains the story behind Our Son"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── About the production ────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="About the production"
              headline="Written and directed by Jermaine Wong."
              subhead="Our Son is the cultural anchor of the Forgiveness Framework. It was born from Jermaine's own reckoning with loss, and has been delivered to audiences across South London schools, colleges, and civic venues."
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
                <h3 className={styles.factTitle}>Brixton House &amp; Kiyan Prince Foundation</h3>
                <p className={styles.factBody}>
                  Delivered in partnership with Brixton House and the Kiyan
                  Prince Foundation. Saint Gabriel&apos;s College, Camberwell is a
                  confirmed educational partner, hosting the Learn 2 Live Legacy
                  Spoken Word Programme on site.
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

        {/* ── Promotional film ────────────────────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Watch: Our Son — Promotional Film"
              headline="See the work."
            />
            <div className={styles.testimonialWrap}>
              <YouTubeFacade
                videoId="moaDBwlF1r0"
                title="Our Son — Promotional Film"
                caption="Spoken word poetry from the production."
              />
            </div>
          </div>
        </section>

        {/* ── Actor testimony ─────────────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Actor testimony"
              headline="From inside the production."
              subhead="DeManni Marshall, who plays Kamari in Our Son, on why young people need to see this play."
            />
            <div className={styles.testimonialWrap}>
              <YouTubeFacade
                videoId="KSyVRZz_0r0"
                title="DeManni Marshall — Actor Testimony"
                caption="DeManni Marshall, who plays Kamari in Our Son, on why young people need to see this play."
              />
            </div>
          </div>
        </section>

        {/* ── Audience quotes ─────────────────────── */}
        <section className={`section section--dark ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Audience response"
              headline="How it lands."
              subhead="The case for Our Son is always made most clearly by the people who have just watched it."
            />
            <Testimonials items={AUDIENCE_QUOTES} columns={2} />
            <p className={`text-sm text-muted ${styles.responseNote}`}>
              Responses received directly following performances of Our Son across South London.
            </p>
          </div>
        </section>

        {/* ── Audience feedback video ─────────────── */}
        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Watch: Audience Reactions — Our Son Live Event"
              headline="The room responds."
            />
            <div className={styles.testimonialWrap}>
              <YouTubeFacade
                videoId="T8NhYIEi_a0"
                title="Audience Reactions — Our Son"
                caption="Mark Prince (Kiyan Prince Foundation) and audience members respond immediately after an Our Son event."
              />
            </div>
          </div>
        </section>

        {/* ── Pull quote ──────────────────────────── */}
        <section className={`section section--dark ${styles.block}`}>
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
