import styles from './TripleCTA.module.css';

/**
 * Three-way closing CTA block. Required on every page per Jermaine's spec —
 * keeps the funding / borough / keynote pathways visible regardless of which
 * page a visitor lands on.
 *
 * Props:
 *   eyebrow   — optional small label above the headline
 *   headline  — optional headline above the buttons
 *   intro     — optional short paragraph of context
 *   variant   — 'dark' (default) or 'surface' for background tone
 */
export default function TripleCTA({
  eyebrow,
  headline,
  intro,
  variant = 'dark',
}) {
  const sectionClass =
    variant === 'surface'
      ? `section section--surface ${styles.section}`
      : `section section--dark ${styles.section}`;

  return (
    <section className={sectionClass}>
      <div className={`container ${styles.inner}`}>
        {(eyebrow || headline || intro) && (
          <div className={styles.header}>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {headline && (
              <h2 className={`display-lg ${styles.headline}`}>{headline}</h2>
            )}
            {intro && <p className={`text-lg text-muted ${styles.intro}`}>{intro}</p>}
          </div>
        )}

        <div className={styles.actions}>
          <a href="/fund" className={`btn-primary ${styles.cta}`}>
            Fund This Initiative
          </a>
          <a href="/fund#borough" className={`btn-ghost ${styles.cta}`}>
            Bring This to Your Borough
          </a>
          <a href="/keynote" className={`btn-ghost ${styles.cta}`}>
            Book Jermaine Wong
          </a>
        </div>
      </div>
    </section>
  );
}
