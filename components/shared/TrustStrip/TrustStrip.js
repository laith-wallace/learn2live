import styles from './TrustStrip.module.css';

/**
 * Horizontal trust strip for funder-facing pages. Surfaces the signals
 * a grant officer scans for in under 5 seconds: safeguarding, partners,
 * press, compliance.
 *
 * All copy here is placeholder where applicable — Jermaine to confirm
 * actual safeguarding/fiscal status before this page is funder-ready.
 * Lines marked with {/* DRAFT — JW to approve *\/} downstream.
 */
export default function TrustStrip() {
  const items = [
    {
      label: 'Safeguarding',
      value: 'DBS-checked facilitators',
      note: 'Policy on file — available on request',
    },
    {
      label: 'Delivery partners',
      value: 'Kiyan Prince Foundation · Brixton House',
      note: 'Ongoing programme partnerships',
    },
    {
      label: 'Press',
      value: 'Featured in The Voice',
      note: 'National Black British press coverage',
    },
    {
      label: 'Track record',
      value: '15+ years delivering',
      note: 'Theatre-based youth work in South London',
    },
  ];

  return (
    <div className={styles.strip}>
      {items.map(({ label, value, note }) => (
        <div key={label} className={styles.item}>
          <div className={`text-xs ${styles.label}`}>{label}</div>
          <div className={styles.value}>{value}</div>
          <div className={`text-sm ${styles.note}`}>{note}</div>
        </div>
      ))}
    </div>
  );
}
