'use client';

import { useEffect, useRef } from 'react';
import styles from './TheGap.module.css';

/**
 * Homepage §4 — "The Gap" split layout.
 * Text left, vertical accent column right.
 */
export default function TheGap() {
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
    <section className={`section section--dark ${styles.section}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <div className="eyebrow fade-up">The gap</div>
            <h2 className={`display-lg fade-up ${styles.headline}`}>
              We are not short of intervention.<br />
              We are short of <em>space.</em>
            </h2>

            {/* DRAFT — JW to approve */}
            <div className={`fade-up ${styles.body}`}>
              <p>
                Most youth violence work tries to change behaviour. It works on the
                outside. It tells young people what not to do, what not to become,
                what not to carry into the world after them.
              </p>
              <p>
                The inside — what a young person is actually holding, the patterns
                they have inherited, the way they have learned to survive — gets
                left alone.
              </p>
              <p>
                This work creates space. Space to reflect. Space to process. Space
                to choose differently.
              </p>
            </div>
          </div>

          <div className={`${styles.stack} reveal`}>
            <div className={styles.pill}>
              <div className={`text-xs ${styles.pillLabel}`}>Space to</div>
              <div className={styles.pillValue}>Reflect</div>
            </div>
            <div className={styles.pill}>
              <div className={`text-xs ${styles.pillLabel}`}>Space to</div>
              <div className={styles.pillValue}>Process</div>
            </div>
            <div className={styles.pill}>
              <div className={`text-xs ${styles.pillLabel}`}>Space to</div>
              <div className={styles.pillValue}>Choose differently</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
