'use client';

import { useEffect, useRef } from 'react';
import YouTubeFacade from '../../shared/YouTubeFacade/YouTubeFacade';
import styles from './VideoProofGrid.module.css';

const VIDEOS = [
  {
    videoId: 'T8NhYIEi_a0',
    title: 'Audience response — Our Son',
    caption: '"So powerful, honest and moving." — ★★★★★ Audience member, Our Son',
  },
  {
    videoId: 'KSyVRZz_0r0',
    title: 'Audience testimonials — Our Son',
    caption: '"I shed tears. I laughed. I reflected. It was raw, authentic and faithful." — Audience member, Our Son',
  },
  {
    videoId: 'D7Lejud5mbU',
    title: 'Spoken Word — participant voices',
    caption: '"The play is off the scale. It needs to be at the Young Vic." — Theatre professional',
  },
];

/**
 * Homepage §6 — three-column grid of YouTube facades. Each clip shows
 * actual audience/participant reaction so visitors see the work landing
 * before they read a single claim.
 */
export default function VideoProofGrid() {
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
        <div className={styles.header}>
          <div className="eyebrow fade-up">From the room</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            The work, landing.
          </h2>
        </div>

        <div className={styles.grid}>
          {VIDEOS.map((v, i) => (
            <div
              key={v.videoId}
              className={`${styles.item} fade-up`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <YouTubeFacade
                videoId={v.videoId}
                title={v.title}
                caption={v.caption}
              />
            </div>
          ))}
        </div>

        <figure className={`fade-up ${styles.markPrince}`}>
          <blockquote className={styles.markPrinceQuote}>
            &ldquo;This changes families. This changes communities. This changes society.&rdquo;
          </blockquote>
          <figcaption className={`text-sm ${styles.markPrinceAttrib}`}>
            — Mark Prince, Kiyan Prince Foundation
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
