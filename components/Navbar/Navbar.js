'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About',         href: '/about' },
  { label: 'The Framework', href: '/the-framework' },
  { label: 'Our Son',       href: '/our-son' },
  { label: 'Partners',      href: '/#partners' },
  { label: 'Contact',       href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on route change / link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="/" className={styles.logo} onClick={handleLinkClick} aria-label="Learn 2 Live Legacy — Home">
          <Image
            src="/learn2live-logo.jpg"
            alt="Learn 2 Live Legacy"
            width={120}
            height={44}
            className={styles.logoImg}
            priority
            fetchPriority="high"
          />
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className={`btn-primary ${styles.cta}`}>
          Work With Us
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.drawerLink} onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`btn-primary ${styles.drawerCta}`} onClick={handleLinkClick}>
              Work With Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
