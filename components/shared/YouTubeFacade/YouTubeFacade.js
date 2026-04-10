'use client';

import { useState } from 'react';
import styles from './YouTubeFacade.module.css';

/**
 * Click-to-load YouTube embed. Keeps the iframe off the critical path —
 * the heavy YouTube player chunk only loads when the user presses play.
 *
 * Props:
 *   videoId   — YouTube video ID (required)
 *   title     — accessible title for the iframe and facade button (required)
 *   caption   — optional overlay caption shown on the facade
 *   poster    — optional custom poster. Defaults to YouTube hqdefault.jpg
 *               which exists for every video (unlike maxresdefault which can 404).
 */
export default function YouTubeFacade({ videoId, title, caption, poster }) {
  const [active, setActive] = useState(false);
  const thumbnailUrl = poster || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={styles.wrap}>
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
          type="button"
          className={styles.facade}
          onClick={() => setActive(true)}
          aria-label={`Play: ${title}`}
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <div className={styles.overlay} />
          <div className={styles.playBtn} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
            </svg>
          </div>
          {caption ? <div className={styles.caption}>{caption}</div> : null}
        </button>
      )}
    </div>
  );
}
