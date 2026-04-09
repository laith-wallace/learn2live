import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'About Jermaine Wong — Playwright, Director, Founder',
  description:
    'Jermaine Wong is a playwright, director, and the founder of Learn 2 Live Legacy. Over 15 years delivering theatre-based youth work across South London.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Jermaine Wong — Playwright, Director, Founder',
    description:
      'Playwright, director, and founder of Learn 2 Live Legacy. 15+ years of theatre-based youth work across South London.',
    url: '/about',
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="section section--dark" style={{ paddingTop: 'calc(var(--section-pad-y) + 40px)' }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
              <ol style={{ display: 'flex', gap: 8, listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li><Link href="/" style={{ color: 'var(--accent)' }}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">About</li>
              </ol>
            </nav>

            <div className="eyebrow">About the founder</div>
            <h1 className="display-xl" style={{ maxWidth: 900, marginBottom: 32 }}>
              Jermaine Wong &mdash; playwright, director, and founder of Learn 2 Live Legacy.
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start' }}>
              <div style={{ maxWidth: 720, fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: 20 }}>
                  My name is Jermaine Wong. I&apos;m a playwright, director, and the founder of
                  Learn 2 Live Legacy. I didn&apos;t come to this work from a textbook —
                  I came to it through loss, through watching people I love carry wounds
                  that were slowly destroying them, and through my own reckoning with what
                  it means to keep going when everything has broken.
                </p>
                <p style={{ marginBottom: 20 }}>
                  For over fifteen years I have been delivering theatre-based youth work
                  into South London schools, colleges, and civic venues. That work became{' '}
                  <em style={{ color: 'var(--white)' }}>Our Son</em> — a one-hour theatrical
                  production that puts audiences inside the consequence of unforgiveness —
                  and later became the{' '}
                  <Link href="/the-framework" style={{ color: 'var(--accent)' }}>Forgiveness Framework</Link>,
                  the four-phase structured process that grew out of delivering that story
                  into real rooms with real young people.
                </p>
                <p style={{ marginBottom: 20 }}>
                  I work with partners who understand that this kind of change does not
                  happen from a curriculum document. It happens in the space between a
                  story and a young person — when they feel something recognisable enough
                  that they are willing to ask a question they would not otherwise ask.
                </p>
                <p style={{ marginBottom: 32 }}>
                  If you are a funder, a commissioner, an educator, or a youth worker who
                  believes the same, I would be glad to hear from you.
                </p>

                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/#contact" className="btn-primary">Start a conversation</Link>
                  <Link href="/the-framework" className="btn-ghost">Explore the framework</Link>
                </div>
              </div>

              <aside style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)' }}>
                <Image
                  src="/thevoice-news-article.jpg"
                  alt="Jermaine Wong, as featured in The Voice newspaper"
                  fill
                  sizes="(max-width: 900px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
