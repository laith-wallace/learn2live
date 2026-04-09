import styles from './Footer.module.css';

const navLinks = [
  { label: 'About',         href: '/about' },
  { label: 'The Framework', href: '/the-framework' },
  { label: 'Our Son',       href: '/our-son' },
  { label: 'Partners',      href: '/#partners' },
  { label: 'Contact',       href: '/#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.wordmark}>Learn 2 Live Legacy</div>
            <p className={styles.tagline}>
              The Forgiveness Framework — a practical human tool,
              built from lived experience, delivered through theatre.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <ul className={styles.navList}>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.copy}>© {year} Learn 2 Live Legacy. All rights reserved.</span>
          <a
            href="/forgiveness-framework-proposal.pdf"
            download
            className={styles.pdfLink}
          >
            Download the Proposal (PDF)
          </a>
        </div>

      </div>
    </footer>
  );
}
