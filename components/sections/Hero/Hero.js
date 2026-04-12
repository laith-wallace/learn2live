'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Desktop only + respect reduced-motion preference
    const desktopMQ = window.matchMedia('(min-width: 768px)');
    const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (desktopMQ.matches && !reducedMQ.matches) {
      setShowVideo(true);
    }
  }, []);

  // Pause when tab hidden (battery courtesy)
  useEffect(() => {
    if (!showVideo) return;
    const handler = () => {
      const v = videoRef.current;
      if (!v) return;
      if (document.hidden) v.pause();
      else v.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, [showVideo]);

  return (
    <section className={styles.hero} id="hero">
      {/* Poster — always rendered, first-paint + mobile fallback */}
      <div className={styles.poster} aria-hidden="true" />

      {/* Video — desktop only, no reduced motion */}
      {showVideo ? (
        <video
          ref={videoRef}
          className={`${styles.video} ${videoReady ? styles.videoReady : ''}`}
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setVideoReady(true)}
        />
      ) : null}

      {/* Dual-gradient overlay (darken for legibility) */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Grain texture */}
      <div className={styles.grain} aria-hidden="true" />

      {/* Vertical yellow accent line */}
      <div className={styles.accentLine} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* DRAFT — JW to approve */}
          <div className={`eyebrow ${styles.eyebrow}`}>
            welcome
          </div>

          <h1 className={`display-xl ${styles.headline}`}>
            This work was built from a decision<br />
            most people <em>avoid.</em>
          </h1>

          <p className={`text-lg ${styles.sub}`}>
            After the loss of his son to serious youth violence, Jermaine Wong chose
            not to reproduce harm — but to interrupt it. That decision is now a model:
            a structured, repeatable framework that connects culture, youth voice and
            civic dialogue.
          </p>

          <div className={styles.actions}>
            <a href="/fund" className={`btn-primary ${styles.ctaPrimary}`}>
              Fund This Initiative
            </a>
            <a href="#ourson" className={`btn-ghost ${styles.ctaGhost}`}>
              Watch the Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scroll} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span className="text-xs text-muted">Scroll</span>
        </div>
      </div>
    </section>
  );
}
