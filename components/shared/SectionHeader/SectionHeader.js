import styles from './SectionHeader.module.css';

/**
 * Shared eyebrow + headline + subhead pattern used across sections and pages.
 * Keeps typography consistent and removes duplicate markup.
 *
 * Props:
 *   eyebrow   — short uppercase label (optional)
 *   headline  — main headline string (required)
 *   subhead   — supporting paragraph (optional)
 *   align     — 'left' (default) or 'center'
 *   size      — 'lg' (default) or 'xl' for hero-scale headlines
 */
export default function SectionHeader({
  eyebrow,
  headline,
  subhead,
  align = 'left',
  size = 'lg',
}) {
  const alignClass = align === 'center' ? styles.center : styles.left;
  const headlineClass = size === 'xl' ? 'display-xl' : 'display-lg';

  return (
    <div className={`${styles.header} ${alignClass}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={`${headlineClass} ${styles.headline}`}>{headline}</h2>
      {subhead && <p className={`text-lg text-muted ${styles.subhead}`}>{subhead}</p>}
    </div>
  );
}
