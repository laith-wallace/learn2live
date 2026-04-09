import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'The Forgiveness Framework — A Four-Phase Youth Resilience Programme',
  description:
    'The Forgiveness Framework is a four-phase structured programme — Recognition, Reflection, Reframe, Recommitment — that helps young people understand forgiveness as a practical tool for building resilience.',
  alternates: { canonical: '/the-framework' },
  openGraph: {
    title: 'The Forgiveness Framework — A Four-Phase Youth Resilience Programme',
    description:
      'A structured, evidence-based programme that helps young people encounter forgiveness as a practical human tool.',
    url: '/the-framework',
    type: 'article',
  },
};

const phases = [
  {
    number: '01',
    title: 'Recognition',
    description:
      'Young people learn to name what has happened to them — without judgement, without minimisation. Recognition is not acceptance. It is the first honest acknowledgement that something real occurred and that it mattered.',
  },
  {
    number: '02',
    title: 'Reflection',
    description:
      'Structured facilitation helps participants examine the impact of what they carry — on themselves, on their relationships, and on the choices they make. Not as therapy. As inquiry.',
  },
  {
    number: '03',
    title: 'Reframe',
    description:
      'Through theatre, story, and dialogue, participants encounter new ways of understanding what forgiveness actually is — and what it is not. It is not weakness. It is not forgetting. It is a decision about who holds the weight going forward.',
  },
  {
    number: '04',
    title: 'Recommitment',
    description:
      'Participants define the life they intend to build. Recommitment is the practical work: setting intentions, building accountability, and understanding that forgiveness is not a moment — it is a practice.',
  },
];

export default function TheFrameworkPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'The Forgiveness Framework',
    description:
      'A four-phase structured programme helping young people understand forgiveness as a practical tool for resilience.',
    step: phases.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.title,
      text: p.description,
    })),
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
                <li aria-current="page">The Framework</li>
              </ol>
            </nav>

            <div className="eyebrow">The Forgiveness Framework</div>
            <h1 className="display-xl" style={{ maxWidth: 960, marginBottom: 32 }}>
              Four phases.<br />One honest journey.
            </h1>
            <p className="text-lg text-muted" style={{ maxWidth: 720, marginBottom: 56 }}>
              The Forgiveness Framework is a structured, evidence-based programme that
              uses theatre and lived experience to help young people understand forgiveness
              as a practical tool for resilience — not a moral directive. It is not
              counselling. It is not an intervention programme. It is a structured process
              that creates the conditions for young people to encounter forgiveness on
              their own terms.
            </p>

            <ol style={{ display: 'grid', gap: 24, listStyle: 'none', padding: 0, maxWidth: 900 }}>
              {phases.map(phase => (
                <li
                  key={phase.number}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: 24,
                    padding: '28px 0',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      lineHeight: 1,
                    }}
                  >
                    {phase.number}
                  </div>
                  <div>
                    <h2 className="display-md" style={{ marginBottom: 12 }}>{phase.title}</h2>
                    <p className="text-base text-muted">{phase.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div style={{ marginTop: 72, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/our-son" className="btn-primary">See Our Son — the production</Link>
              <Link href="/#contact" className="btn-ghost">Partner with us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
