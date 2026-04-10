'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Pathways.module.css';

const CARDS = [
  {
    eyebrow: 'Programme',
    title: 'Spoken Word',
    body: 'A structured intervention that transforms lived experience into voice and expression.',
    cta: 'View programme',
    href: '/programmes/spoken-word',
  },
  {
    eyebrow: 'Programme',
    title: 'Filmmaking',
    body: 'A cinematic pathway where young people develop and present their own stories.',
    cta: 'View programme',
    href: '/programmes/filmmaking',
  },
  {
    eyebrow: 'Speaking',
    title: 'Keynote Speaking',
    body: 'Experiences that shift thinking, challenge assumptions and open dialogue.',
    cta: 'Book Jermaine',
    href: '/keynote',
  },
];

/**
 * Homepage §7 — three pathway cards. Each points at a dedicated page
 * so visitors can self-select the door they want to walk through.
 */
export default function Pathways() {
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
    <section className={`section section--surface ${styles.section}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow fade-up">Pathways of engagement</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            Three doors into the same framework.
          </h2>
          <p className={`text-lg text-muted fade-up ${styles.intro}`}>
            Every pathway leads to the same place — a young person finding their
            own voice and their own position on what happens next.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <Link
              key={card.title}
              href={card.href}
              className={`${styles.card} fade-up`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`text-xs ${styles.cardEyebrow}`}>{card.eyebrow}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <span className={styles.cardCta}>
                {card.cta} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
