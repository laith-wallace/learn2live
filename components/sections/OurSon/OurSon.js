'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './OurSon.module.css';

function YouTubeFacade({ videoId, title }) {
  const [active, setActive] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className={styles.videoWrap}>
      {active ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          className={styles.facade}
          onClick={() => setActive(true)}
          aria-label={`Play: ${title}`}
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          {/* Fallback gradient if thumbnail fails */}
          <div className={styles.facadeOverlay} />
          <div className={styles.playBtn} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v14l11-7-11-7z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.facadeTitle}>{title}</div>
        </button>
      )}
    </div>
  );
}

/**
 * Native-video facade.
 *
 * Renders only a poster + play button until the user clicks. This keeps the
 * 13 MB MP4 off the critical path and means the file never loads for crawlers,
 * LCP measurements, or users who don't press play.
 */
function NativeVideoFacade({ src, poster, title }) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.videoWrap}>
      {active ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          preload="metadata"
          className={styles.iframe}
          aria-label={title}
        />
      ) : (
        <button
          type="button"
          className={styles.facade}
          onClick={() => setActive(true)}
          aria-label={`Play: ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className={styles.facadeImg}
          />
          <div className={styles.facadeOverlay} />
          <div className={styles.playBtn} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
            </svg>
          </div>
          <div className={styles.facadeTitle}>{title}</div>
        </button>
      )}
    </div>
  );
}

export default function OurSon() {
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
      { rootMargin: '-60px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section section--dark ${styles.section}`} id="ourson" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <div className="eyebrow fade-up">Our Son</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            The production that opens the door.
          </h2>
          <p className={`text-lg text-muted fade-up ${styles.intro}`}>
            Before anyone can engage with the framework, they have to feel it.
            <em> Our Son</em> is a one-hour, award-winning theatrical production
            that puts the audience inside the consequence of unforgiveness.
            It doesn't argue for forgiveness. It makes the case by showing what happens
            when it's absent. That's different. And it works.
          </p>
        </div>

        {/* Hero video — click-to-load facade. The 13MB mp4 never downloads
            until the user presses play, keeping it off the LCP critical path. */}
        <div className={`${styles.heroVideo} reveal`}>
          <NativeVideoFacade
            src="/learn-2-live-our-son.mp4"
            poster="/hero-poster.jpg"
            title="Our Son — Production Footage"
          />
          <div className={styles.videoLabel}>
            <span className="text-xs text-muted">Our Son — Production Footage</span>
          </div>
        </div>

        {/* YouTube embeds */}
        <div className={styles.youtubeGrid}>
          <div className="fade-up">
            <p className={`text-xs ${styles.videoMeta}`}>Award-Winning Production · December 2025</p>
            <YouTubeFacade
              videoId="moaDBwlF1r0"
              title="Award Winning Playwright brings back his OUR SON Production — December 2025"
            />
          </div>
          <div className="fade-up" style={{ transitionDelay: '80ms' }}>
            <p className={`text-xs ${styles.videoMeta}`}>Audience Testimonials</p>
            <YouTubeFacade
              videoId="T8NhYIEi_a0"
              title="Our Son — Audience Testimonials"
            />
          </div>
        </div>

        {/* Pull quote — founder's note */}
        <figure className={`${styles.quote} fade-up`}>
          <blockquote
            className={`display-md ${styles.quoteText}`}
            cite="https://learn2livelegacy.org/our-son"
          >
            &ldquo;This isn&apos;t a show about what happened.{' '}
            <em>It&apos;s a show about what keeps happening</em> when nothing changes.&rdquo;
          </blockquote>
          <figcaption className={`text-sm text-muted ${styles.quoteSource}`}>
            — Jermaine Wong, Playwright &amp; Director
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
