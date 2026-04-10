import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import TripleCTA from '../../components/shared/TripleCTA/TripleCTA';
import styles from './programmes.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn2livelegacy.org';

export const metadata = {
  title: 'Programmes — Spoken Word, Filmmaking & Keynote Speaking',
  description:
    'Three pathways into the Forgiveness Framework: Spoken Word, Filmmaking, and Keynote Speaking. Structured creative interventions built from lived experience.',
  alternates: { canonical: '/programmes' },
  openGraph: {
    title: 'Programmes | Learn 2 Live Legacy',
    description:
      'Three doors into the same framework — Spoken Word, Filmmaking, and Keynote Speaking.',
    url: `${BASE_URL}/programmes`,
    type: 'website',
  },
};

const PATHWAYS = [
  {
    eyebrow: 'Programme',
    title: 'Spoken Word',
    body: 'A structured creative intervention that transforms lived experience into voice and agency. Participants are given space to articulate what is often left unspoken — and to deliver it on their terms.',
    cta: 'View programme',
    href: '/programmes/spoken-word',
  },
  {
    eyebrow: 'Programme',
    title: 'Filmmaking',
    body: 'A cinematic pathway where young people develop, write, shoot, and present their own stories. The film becomes both an outcome and a vehicle for the conversation that needs to happen next.',
    cta: 'View programme',
    href: '/programmes/filmmaking',
  },
  {
    eyebrow: 'Speaking',
    title: 'Keynote Speaking',
    body: 'Experiences that shift thinking, challenge assumptions and open dialogue. Jermaine speaks to schools, civic events, cultural institutions and professional audiences who need to hear this work framed honestly.',
    cta: 'Book Jermaine',
    href: '/keynote',
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.page}>
        <section className={`section section--dark ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className="eyebrow">Programmes</div>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                Three doors into the<br />
                <em>same framework.</em>
              </h1>
              {/* DRAFT — JW to approve */}
              <p className={`text-lg ${styles.heroSub}`}>
                Every pathway leads to the same place: a young person finding their
                own voice, their own position, and their own sense of what happens
                next. The door you walk through depends on what you are carrying,
                and what you want to make.
              </p>
            </div>
          </div>
        </section>

        <section className={`section section--surface ${styles.block}`}>
          <div className="container">
            <SectionHeader
              eyebrow="Pathways into the work"
              headline="Choose your door."
              subhead="Each programme is a different route into the Forgiveness Framework. The structure is consistent across all three — the medium is what changes."
            />
            <div className={styles.pathwayGrid}>
              {PATHWAYS.map((p) => (
                <Link key={p.title} href={p.href} className={styles.pathwayCard}>
                  <div className={`text-xs ${styles.pathwayEyebrow}`}>{p.eyebrow}</div>
                  <h2 className={styles.pathwayTitle}>{p.title}</h2>
                  <p className={styles.pathwayBody}>{p.body}</p>
                  <span className={styles.pathwayCta}>
                    {p.cta} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TripleCTA
          eyebrow="Bring a programme to your organisation"
          headline="Funded by a borough. Commissioned by a school. Booked by a conference."
          intro="Whatever the context, the route in is the same — start a conversation below."
        />
      </main>
      <Footer />
    </>
  );
}
