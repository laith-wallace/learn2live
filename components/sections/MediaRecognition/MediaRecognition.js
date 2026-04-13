'use client';

import { useEffect, useRef } from 'react';
import styles from './MediaRecognition.module.css';

export default function MediaRecognition() {
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
      { rootMargin: '-60px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section section--dark ${styles.section}`} ref={ref}>
      <div className="container">
        <div className={`fade-up ${styles.header}`}>
          <div className="eyebrow">Media recognition</div>
          <h2 className={`display-lg ${styles.headline}`}>
            Recognised nationally.<br />Rooted locally.
          </h2>
        </div>

        <div className={styles.grid}>
          {/* BBC News */}
          <div className={`${styles.card} fade-up`}>
            <div className={styles.logoLabel}>BBC NEWS</div>
            <p className={styles.body}>
              Jermaine Wong was interviewed on BBC News on knife crime and what genuinely needs to
              change — speaking as a bereaved father and a practitioner with a clear model for
              transformation.
            </p>
            <a
              href="https://youtu.be/_qtjZkFMejw"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-ghost ${styles.link}`}
            >
              Watch the interview →
            </a>
          </div>

          {/* The Voice */}
          <div className={`${styles.card} fade-up`} style={{ transitionDelay: '80ms' }}>
            <div className={styles.logoLabel}>THE VOICE</div>
            <p className={styles.body}>
              The UK&apos;s leading Black British newspaper featured Jermaine, Our Son, and the
              Forgiveness Framework in a full editorial interview in August 2025.
            </p>
            <a
              href="https://www.voice-online.co.uk/news/uk-news/2025/08/06/love/"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-ghost ${styles.link}`}
            >
              Read the feature →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
