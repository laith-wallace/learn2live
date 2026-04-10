import styles from './Footer.module.css';

const navGroups = [
  {
    heading: 'Explore',
    links: [
      { label: 'The Framework', href: '/the-framework' },
      { label: 'Our Son',       href: '/our-son' },
      { label: 'About',         href: '/about' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'Spoken Word',      href: '/programmes/spoken-word' },
      { label: 'Filmmaking',       href: '/programmes/filmmaking' },
      { label: 'Keynote Speaking', href: '/keynote' },
    ],
  },
  {
    heading: 'Work with us',
    links: [
      { label: 'Fund This Initiative',  href: '/fund' },
      { label: 'Bring to Your Borough', href: '/fund#borough' },
      { label: 'Book Jermaine',         href: '/keynote#book' },
    ],
  },
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
              The Forgiveness Framework — a structured, repeatable model for
              breaking cycles of harm. Built from lived experience. Delivered
              through theatre.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            {navGroups.map(({ heading, links }) => (
              <div key={heading} className={styles.navGroup}>
                <h3 className={styles.navHeading}>{heading}</h3>
                <ul className={styles.navList}>
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} className={styles.navLink}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
