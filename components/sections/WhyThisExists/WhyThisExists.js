'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyThisExists.module.css';

/**
 * Homepage §3 — centred narrative about the origin decision + pull quote.
 */
export default function WhyThisExists() {
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
        <div className={styles.inner}>
          <div className="eyebrow fade-up">Why this exists</div>

          {/* DRAFT — JW to approve. Copy supplied verbatim from v2 document. */}
          <div className={`${styles.body} fade-up`}>
            <p>This did not begin as an organisation.</p>
            <p>It began as a question:</p>
            <p className={styles.question}>
              <em>What do you do when harm becomes personal?</em>
            </p>
            <p>
              After the loss of his son to serious youth violence, Jermaine Wong
              was confronted with a decision that had no easy answer.
            </p>
            <p>
              To respond in the way the world understands — or to choose something
              different.
            </p>
            <p>
              Not because it was easy. But because it was necessary.
            </p>
            <p>
              That decision became the foundation of this work.
            </p>
            <p>
              Not as a message. But as a practice. Not as an idea. But as a model.
            </p>
          </div>

          <figure className={`${styles.quote} fade-up`}>
            <blockquote className={`display-md ${styles.quoteText}`}>
              &ldquo;If pain is left unprocessed, it becomes pattern.
              <em> This work creates the space to break it.</em>&rdquo;
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
