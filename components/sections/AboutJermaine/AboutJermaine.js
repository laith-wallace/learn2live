'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AboutJermaine.module.css';

export default function AboutJermaine() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.fade-up, .reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      }),
      { rootMargin: '-80px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section section--surface ${styles.section}`} id="about" ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          {/* Text column */}
          <div className={styles.text}>
            <div className="eyebrow fade-up">The founder</div>

            {/* DRAFT — JW to approve */}
            <h2 className={`display-lg fade-up ${styles.headline}`}>
              The architect of the<br />
              <em>Forgiveness Framework.</em>
            </h2>

            <div className={`fade-up ${styles.body}`}>
              <p>
                Jermaine Wong is a theatre-maker, educator and the architect of the
                Forgiveness Framework. His work sits at the intersection of culture,
                youth engagement and civic response.
              </p>
              <p>
                But this work is not theoretical. It is built from lived experience.
                Following the loss of his son to serious youth violence, Jermaine made a
                decision that now underpins everything he builds: not to reproduce harm —
                but to interrupt it.
              </p>
              <p>
                That decision has been translated into a structured, scalable model now
                being developed for borough-level implementation.
              </p>
            </div>

            <div className={`fade-up ${styles.signature}`}>
              <span className={styles.name}>Jermaine Wong</span>
              <span className="text-sm text-muted">Playwright · Director · Founder, Learn 2 Live Legacy</span>
            </div>
          </div>

          {/* Image column */}
          <div className={`${styles.imageCol} reveal`}>
            <div className={styles.imageWrap}>
              <Image
                src="/thevoice-news-article.jpg"
                alt="Jermaine Wong — The Voice feature"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className={styles.imageCaption}>
                <span className="text-xs text-muted">As featured in The Voice</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
