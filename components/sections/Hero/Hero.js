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
          <div className={`eyebrow ${styles.eyebrow}`}>
            The Forgiveness Framework
          </div>

          <h1 className={`display-xl ${styles.headline}`}>
            A youth resilience programme<br />
            built from <em>lived experience.</em>
          </h1>

          <p className={`text-lg ${styles.sub}`}>
            Learn 2 Live Legacy is a structured, evidence-based programme that uses
            theatre and lived experience to help young people in South London understand
            forgiveness — not as a moral directive, but as a practical human tool for
            building resilience and moving forward.
          </p>

          <div className={styles.actions}>
            <a href="#framework" className={`btn-primary ${styles.ctaPrimary}`}>
              Explore the Framework
            </a>
            <a
              href="/forgiveness-framework-proposal.pdf"
              download
              className={`btn-ghost ${styles.ctaGhost}`}
            >
              Download the Proposal
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
