'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import YouTubeFacade from '../../shared/YouTubeFacade/YouTubeFacade';
import styles from './OurSonFeature.module.css';

/**
 * Homepage §8 — Our Son flagship feature.
 * Distinct from the full OurSon section that lives on /our-son.
 * This is a single full-width video with overlay headline and a CTA
 * driving visitors to the dedicated page.
 */
export default function OurSonFeature() {
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
      id="our-son-feature"
      ref={ref}
    >
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow fade-up">Our Son — the flagship</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            This is where the work begins.
          </h2>
          {/* DRAFT — JW to approve */}
          <p className={`text-lg text-muted fade-up ${styles.intro}`}>
            Our Son is more than a performance. It is the cultural anchor of a
            wider model — creating space for reflection, dialogue and change.
            The play does not provide answers. It creates the conditions for them.
          </p>
        </div>

        <div className={`${styles.videoWrap} reveal`}>
          <YouTubeFacade
            videoId="moaDBwlF1r0"
            title="Our Son — Award-Winning Production"
          />
        </div>

        <div className={`${styles.cta} fade-up`}>
          <Link href="/our-son" className="btn-primary">
            Bring Our Son to your venue →
          </Link>
        </div>
      </div>
    </section>
  );
}
