'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ImpactStats.module.css';

const stats = [
  { value: 5,  suffix: '+', label: 'Audience events delivered', description: 'across South London schools, colleges, and civic venues' },
  { value: 4,  suffix: '',  label: 'Phase delivery model',      description: 'structured from recognition through to recommitment' },
  { value: 3,  suffix: '+', label: 'Borough partnerships',      description: 'with established community and cultural organisations' },
  { value: 30, suffix: '+', label: 'Years of lived practice',   description: 'informing every element of the framework\'s design' },
];

function useCountUp(target, isVisible, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ stat, isVisible }) {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>
        <span className={styles.statNumber}>{count}</span>
        <span className={styles.statSuffix}>{stat.suffix}</span>
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
      <div className={`text-sm text-muted ${styles.statDesc}`}>{stat.description}</div>
    </div>
  );
}

export default function ImpactStats() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-80px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section section--surface ${styles.section}`} ref={ref}>
      <div className="container">

        <div className={styles.header}>
          <div className="eyebrow">The evidence</div>
          <h2 className={`display-lg ${styles.headline}`}>
            Numbers that come<br />from the room.
          </h2>
          <p className="text-lg text-muted">
            These aren't projections. They are the record of what has actually been delivered —
            in front of real audiences, in real communities, with real outcomes.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        <p className={`text-xs text-muted ${styles.source}`}>
          Source: Learn 2 Live Legacy delivery records, 2009–2025.
          Verified through partnership with Brixton House and Kiyan Prince Foundation.
          As featured in The Voice and BBC News.
        </p>

      </div>
    </section>
  );
}
