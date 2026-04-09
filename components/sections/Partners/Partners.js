'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Partners.module.css';

export default function Partners() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.fade-up, .reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      }),
      { rootMargin: '-60px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section section--surface ${styles.section}`} id="partners" ref={ref}>
      <div className="container">

        <div className={styles.header}>
          <div className="eyebrow fade-up">Partners & Press</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            Trusted by the organisations<br />doing the real work.
          </h2>
        </div>

        <div className={styles.grid}>

          {/* Kiyan Prince Foundation */}
          <div className={`${styles.partnerCard} fade-up`}>
            <div className={styles.partnerLogo}>
              <Image
                src="/kiyan-prince-foundation.jpg"
                alt="Kiyan Prince Foundation"
                width={160}
                height={72}
                className={styles.logoImg}
              />
            </div>
            <div>
              <h3 className={`${styles.partnerName}`}>Kiyan Prince Foundation</h3>
              <p className="text-sm text-muted">
                An established partnership delivering the programme alongside one of
                London's most respected youth-focused organisations. Their reach directly
                extends the framework's impact across South London communities.
              </p>
            </div>
          </div>

          {/* Brixton House */}
          <div className={`${styles.partnerCard} fade-up`} style={{ transitionDelay: '80ms' }}>
            <div className={`${styles.partnerLogo} ${styles.textLogo}`}>
              <span className={styles.textLogoText}>Brixton House</span>
            </div>
            <div>
              <h3 className={styles.partnerName}>Brixton House</h3>
              <p className="text-sm text-muted">
                Our civic arts venue partner — a borough landmark that provides the
                platform and legitimacy for Our Son to reach audiences beyond
                school settings and into the broader community.
              </p>
            </div>
          </div>

        </div>

        {/* Press: The Voice */}
        <div className={`${styles.press} reveal`}>
          <div className="eyebrow">In the press</div>
          <div className={styles.pressCard}>
            <div className={styles.pressImageWrap}>
              <Image
                src="/thevoice-news-article.jpg"
                alt="The Voice — feature on Jermaine Wong and Learn 2 Live Legacy"
                fill
                className={styles.pressImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.pressText}>
              <span className={`text-xs ${styles.pressSource}`}>The Voice</span>
              <h3 className={`display-md ${styles.pressHeadline}`}>
                Award-Winning Playwright Brings the Conversation South London Needs
              </h3>
              <p className="text-base text-muted">
                As featured in The Voice — the UK's leading Black newspaper —
                learn why Jermaine Wong's work with Learn 2 Live Legacy is being
                recognised as a genuine model for community-led arts education.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
