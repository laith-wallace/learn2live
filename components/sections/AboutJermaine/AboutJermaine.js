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
            <div className="eyebrow fade-up">Where this began</div>

            <h2 className={`display-lg fade-up ${styles.headline}`}>
              I built this framework<br />
              because I <em>needed</em> it.
            </h2>

            <div className={`fade-up ${styles.body}`}>
              <p>
                My name is Jermaine Wong. I'm a playwright, director, and the founder of
                Learn 2 Live Legacy. I didn't come to this work from a textbook —
                I came to it through loss, through watching people I love carry wounds
                that were slowly destroying them, and through my own reckoning with what
                it means to keep going when everything has broken.
              </p>
              <p>
                <em>Our Son</em> — the production that anchors this framework — was born
                from that place. It's not a lecture about forgiveness. It's a story about
                what happens when you don't. It puts audiences inside that experience. And
                it changes the conversation before the conversation even begins.
              </p>
              <p>
                The Forgiveness Framework is what grew out of decades of delivering that
                story into schools, community spaces, and civic venues across South London.
                It's structured. It's evidenced. And it works — because it starts with the
                human, not the curriculum.
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
