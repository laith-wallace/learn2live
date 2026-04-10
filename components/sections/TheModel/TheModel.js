'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './TheModel.module.css';

const STEPS = [
  {
    n: '01',
    title: 'Theatre Encounter',
    body: 'Our Son or a related work creates the emotional conditions reflection needs.',
  },
  {
    n: '02',
    title: 'Youth Voice Development',
    body: 'Structured sessions surface what participants are carrying.',
  },
  {
    n: '03',
    title: 'Creative Response',
    body: 'Lived experience becomes spoken word, film, or performance.',
  },
  {
    n: '04',
    title: 'Civic Showcase',
    body: 'The work is presented to the audience that matters.',
  },
];

/**
 * Homepage §5 — "The Model": 4 operational steps rendered as a horizontal
 * spine with numbered cards. This is the funder-facing delivery flow, not
 * the deeper psychological methodology (that lives on /the-framework).
 */
export default function TheModel() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.fade-up, .reveal');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        }),
      { rootMargin: '-80px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section section--surface ${styles.section}`}
      id="framework"
      ref={ref}
    >
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow fade-up">The model</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            The Forgiveness Framework.
          </h2>
          {/* DRAFT — JW to approve */}
          <p className={`text-lg text-muted fade-up ${styles.intro}`}>
            This is not a programme. It is a structured, repeatable model designed
            to create space where there often is none. A model that connects
            culture, youth voice and civic dialogue.
          </p>
        </div>

        <div className={styles.spine} aria-hidden="true" />

        <div className={styles.steps}>
          {STEPS.map(({ n, title, body }, i) => (
            <div
              key={n}
              className={`${styles.step} fade-up`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.stepNumber}>{n}</div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepBody}>{body}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.cta} fade-up`}>
          <Link href="/the-framework" className="btn-ghost">
            Explore the framework →
          </Link>
        </div>
      </div>
    </section>
  );
}
