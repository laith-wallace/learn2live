'use client';

import { useEffect, useRef } from 'react';
import YouTubeFacade from '../../shared/YouTubeFacade/YouTubeFacade';
import styles from './FeatureVideo.module.css';

/**
 * Homepage §2 — full-bleed feature video.
 * "Before we explain anything — experience the work."
 */
export default function FeatureVideo() {
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
    <section
      className={`section section--dark ${styles.section}`}
      id="feature-video"
      ref={ref}
    >
      <div className="container">
        <p className={`text-lg text-muted fade-up ${styles.caption}`}>
          The story behind the work
        </p>
        <div className={`${styles.videoWrap} reveal`}>
          <YouTubeFacade
            videoId="D7Lejud5mbU"
            title="The story behind Our Son — Jermaine Wong"
          />
        </div>
        <p className={`text-sm text-muted fade-up ${styles.subCaption}`}>
          The play was finished two weeks before the tragedy. Hear why Jermaine staged it anyway.
        </p>
      </div>
    </section>
  );
}
