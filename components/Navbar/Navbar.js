'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

// Top-level menu. "Programmes" is a dropdown parent — its children render
// in a desktop flyout and as a collapsible group in the mobile drawer.
const navLinks = [
  { label: 'The Framework',    href: '/the-framework' },
  {
    label: 'Programmes',
    href: '/programmes',
    children: [
      { label: 'Spoken Word',      href: '/programmes/spoken-word' },
      { label: 'Filmmaking',       href: '/programmes/filmmaking' },
      { label: 'Keynote Speaking', href: '/keynote' },
    ],
  },
  { label: 'Our Son',          href: '/our-son' },
  { label: 'Keynote Speaking', href: '/keynote' },
  { label: 'About',            href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(null);
  const dropdownTimer = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on route change / link click
  const handleLinkClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileGroupOpen(null);
  };

  // Desktop dropdown hover — small delay on close for forgiving mouse paths
  const handleDropdownEnter = (label) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const toggleMobileGroup = (label) => {
    setMobileGroupOpen((prev) => (prev === label ? null : label));
  };

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
          {navLinks.map((item) => {
            if (item.children) {
              const isOpen = openDropdown === item.label;
              return (
                <li
                  key={item.label}
                  className={styles.dropdownParent}
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={item.href}
                    className={styles.link}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <span className={styles.chevron} aria-hidden="true">▾</span>
                  </a>
                  {isOpen && (
                    <ul className={styles.dropdown} role="menu">
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <a
                            href={child.href}
                            className={styles.dropdownLink}
                            role="menuitem"
                            onClick={handleLinkClick}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a href="/fund" className={`btn-primary ${styles.cta}`}>
          Fund This Initiative
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {navLinks.map((item) => {
            if (item.children) {
              const isOpen = mobileGroupOpen === item.label;
              return (
                <li key={item.label} className={styles.drawerGroup}>
                  <button
                    type="button"
                    className={styles.drawerGroupToggle}
                    onClick={() => toggleMobileGroup(item.label)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <span className={styles.chevron} aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <ul className={styles.drawerSublinks}>
                      <li>
                        <a
                          href={item.href}
                          className={styles.drawerSublink}
                          onClick={handleLinkClick}
                        >
                          All programmes
                        </a>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className={styles.drawerSublink}
                            onClick={handleLinkClick}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.drawerLink}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/fund"
              className={`btn-primary ${styles.drawerCta}`}
              onClick={handleLinkClick}
            >
              Fund This Initiative
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
