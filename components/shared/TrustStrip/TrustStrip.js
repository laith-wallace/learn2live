import styles from './TrustStrip.module.css';

export default function TrustStrip() {
  const items = [
    {
      label: 'Safeguarding',
      value: 'DBS-checked facilitators',
      note: 'Policy on file — available on request',
    },
    {
      label: 'Delivery partners',
      value: 'Kiyan Prince Foundation (Official Collaborating Partner) · Brixton House · Saint Gabriel\'s College (Confirmed Educational Partner)',
      note: 'Ongoing programme partnerships',
    },
    {
      label: 'Press',
      value: 'BBC News (2025) · The Voice (August 2025)',
      note: 'National press coverage of the work and the framework',
    },
    {
      label: 'Track record',
      value: 'Nearly 30 years in inner-city London secondary education',
      note: 'Combined with 15+ years of theatre-based youth engagement',
    },
  ];

  return (
    <div>
      <div className={styles.strip}>
        {items.map(({ label, value, note }) => (
          <div key={label} className={styles.item}>
            <div className={`text-xs ${styles.label}`}>{label}</div>
            <div className={styles.value}>{value}</div>
            <div className={`text-sm ${styles.note}`}>{note}</div>
          </div>
        ))}
      </div>
      <div className={styles.links}>
        <a
          href="https://youtu.be/_qtjZkFMejw"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Watch BBC Interview →
        </a>
        <a
          href="https://www.voice-online.co.uk/news/uk-news/2025/08/06/love/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Read The Voice Feature →
        </a>
      </div>
    </div>
  );
}
