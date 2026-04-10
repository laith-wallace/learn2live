import styles from './Testimonials.module.css';

/**
 * Testimonials grid. Accepts a list of quote objects and renders them as
 * a three-column (or n-column) responsive grid.
 *
 * Props:
 *   items — array of { quote, attribution, role }
 *   columns — 2 or 3 (default 3)
 *
 * Default items are placeholder captions from the v2 document. Real quotes
 * should be swapped in as Jermaine collects them — each marked with
 * `DRAFT` until that happens.
 */

// DRAFT — JW to supply real attributed quotes. These placeholders are
// taken from the v2 document's video overlay captions so the component
// has content to render until real testimonials arrive.
const DEFAULT_ITEMS = [
  {
    quote: 'This shifted something in me.',
    attribution: 'Audience member',
    role: 'Our Son performance',
  },
  {
    quote: 'I saw myself in it.',
    attribution: 'Participant',
    role: 'Spoken Word programme',
  },
  {
    quote: 'It made me think differently about things I thought I already understood.',
    attribution: 'Audience member',
    role: 'Civic showcase',
  },
];

export default function Testimonials({ items = DEFAULT_ITEMS, columns = 3 }) {
  const gridClass =
    columns === 2 ? styles.gridTwo : styles.gridThree;

  return (
    <div className={`${styles.grid} ${gridClass}`}>
      {items.map((item, i) => (
        <figure key={i} className={styles.card}>
          <div className={styles.mark} aria-hidden="true">&ldquo;</div>
          <blockquote className={styles.quote}>{item.quote}</blockquote>
          <figcaption className={styles.caption}>
            <span className={styles.attribution}>{item.attribution}</span>
            {item.role && (
              <span className={`text-sm ${styles.role}`}>{item.role}</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
