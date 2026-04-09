'use client';

import { useEffect, useRef } from 'react';
import styles from './TheFramework.module.css';

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

export default function TheFramework() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(`.${styles.card}`);
    const intro = el.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      }),
      { rootMargin: '-60px' }
    );

    intro.forEach(t => observer.observe(t));

    // Stagger cards via IntersectionObserver on the grid
    const gridObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add(styles.cardVisible), i * 80);
          });
          gridObserver.disconnect();
        }
      },
      { rootMargin: '-80px' }
    );
    const grid = el.querySelector(`.${styles.grid}`);
    if (grid) gridObserver.observe(grid);

    return () => { observer.disconnect(); gridObserver.disconnect(); };
  }, []);

  return (
    <section className={`section section--dark ${styles.section}`} id="framework" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <div className="eyebrow fade-up">The Forgiveness Framework</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            Four phases. One honest journey.
          </h2>
          <p className={`text-lg text-muted fade-up ${styles.intro}`}>
            This is not an intervention programme. It is not counselling. It is a structured
            process that creates the conditions for young people to encounter forgiveness
            on their own terms — and decide what to do with it.
          </p>
        </div>

        {/* Phase cards */}
        <div className={styles.grid}>
          {phases.map((phase, i) => (
            <div key={phase.number} className={styles.card} style={{ '--i': i }}>
              <div className={styles.cardNumber}>{phase.number}</div>
              <div className={styles.cardContent}>
                <h3 className={`display-md ${styles.cardTitle}`}>{phase.title}</h3>
                <p className={`text-base text-muted ${styles.cardText}`}>{phase.description}</p>
              </div>
              <div className={styles.cardAccent} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className={`${styles.closing} fade-up`}>
          <div className={styles.closingLine} aria-hidden="true" />
          <p className={`display-md ${styles.closingText}`}>
            The framework is the structure.<br />
            <em>Our Son</em> is the door.
          </p>
          <a href="#ourson" className="btn-primary">See Our Son</a>
        </div>

      </div>
    </section>
  );
}
