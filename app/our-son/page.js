import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
    url: '/our-son',
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
      url: `${BASE_URL}/#contact`,
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
      <main id="main">
        <section className="section section--dark" style={{ paddingTop: 'calc(var(--section-pad-y) + 40px)' }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
              <ol style={{ display: 'flex', gap: 8, listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li><Link href="/" style={{ color: 'var(--accent)' }}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Our Son</li>
              </ol>
            </nav>

            <div className="eyebrow">Our Son</div>
            <h1 className="display-xl" style={{ maxWidth: 900, marginBottom: 32 }}>
              The production that opens the door.
            </h1>
            <p className="text-lg text-muted" style={{ maxWidth: 720, marginBottom: 40 }}>
              Before anyone can engage with the framework, they have to feel it.{' '}
              <em style={{ color: 'var(--white)' }}>Our Son</em> is a one-hour, award-winning
              theatrical production that puts the audience inside the consequence of
              unforgiveness. It doesn&apos;t argue for forgiveness. It makes the case by
              showing what happens when it&apos;s absent. That&apos;s different. And it works.
            </p>

            <div style={{ display: 'grid', gap: 40, maxWidth: 860, marginBottom: 64 }}>
              <div>
                <h2 className="display-md" style={{ marginBottom: 16 }}>Written and directed by Jermaine Wong</h2>
                <p className="text-base text-muted">
                  Our Son is the production that anchors the Forgiveness Framework. It
                  was born from playwright{' '}
                  <Link href="/about" style={{ color: 'var(--accent)' }}>Jermaine Wong&apos;s</Link>{' '}
                  own reckoning with loss, and it has been delivered to audiences across
                  South London schools, colleges, and civic venues for over fifteen years.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: 16 }}>In partnership with Brixton House</h2>
                <p className="text-base text-muted">
                  Our Son is delivered in partnership with Brixton House, the borough
                  landmark that provides the platform and legitimacy for the production
                  to reach audiences beyond school settings and into the broader community.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: 16 }}>What comes next</h2>
                <p className="text-base text-muted">
                  After the performance, audiences engage with{' '}
                  <Link href="/the-framework" style={{ color: 'var(--accent)' }}>the Forgiveness Framework</Link>{' '}
                  — a four-phase structured process that helps young people decide what
                  to do with what they have just felt.
                </p>
              </div>
            </div>

            <figure
              style={{
                borderLeft: '2px solid var(--accent)',
                padding: '24px 0 24px 32px',
                maxWidth: 680,
                marginBottom: 56,
              }}
            >
              <blockquote className="display-md" style={{ color: 'var(--white)', fontStyle: 'italic', marginBottom: 12, lineHeight: 1.3 }}>
                &ldquo;This isn&apos;t a show about what happened.{' '}
                <em style={{ color: 'var(--accent)' }}>It&apos;s a show about what keeps happening</em>{' '}
                when nothing changes.&rdquo;
              </blockquote>
              <figcaption className="text-sm text-muted">
                — Jermaine Wong, Playwright &amp; Director
              </figcaption>
            </figure>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn-primary">Book Our Son</Link>
              <a href="/forgiveness-framework-proposal.pdf" download className="btn-ghost">
                Download the Proposal
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
