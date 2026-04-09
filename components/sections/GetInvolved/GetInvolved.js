'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '../../../app/actions/contact';
import styles from './GetInvolved.module.css';

const INITIAL_STATE = { ok: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`btn-primary ${styles.submit}`}
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? 'Sending…' : 'Send message'}
    </button>
  );
}

export default function GetInvolved() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [state, formAction] = useFormState(submitContactForm, INITIAL_STATE);

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

  // Reset the form after a successful submit
  useEffect(() => {
    if (state.ok === true) {
      formRef.current?.reset();
    }
  }, [state]);

  const fieldErrors = state?.errors || {};

  return (
    <section className={`section section--dark ${styles.section}`} id="contact" ref={ref}>
      <div className="container">

        <div className={styles.header}>
          <div className="eyebrow fade-up">Get Involved</div>
          <h2 className={`display-lg fade-up ${styles.headline}`}>
            Let&apos;s build this together.
          </h2>
          <p className={`text-lg text-muted fade-up ${styles.intro}`}>
            I&apos;m looking for partners, funders, and commissioners who understand
            that this kind of work doesn&apos;t happen without investment — and that the
            return on that investment is measurable, lasting, and visible in communities.
          </p>
        </div>

        <div className={styles.grid}>

          {/* Contact form */}
          <div className={`${styles.formCard} reveal`}>
            <h3 className={`display-md ${styles.cardTitle}`}>Start a conversation</h3>

            {state.ok === true ? (
              <div className={styles.successMsg} role="status" aria-live="polite">
                <div className={styles.successIcon} aria-hidden="true">✓</div>
                <p className="text-lg">Thank you — Jermaine will be in touch shortly.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                action={formAction}
                className={styles.form}
                noValidate
                aria-label="Contact Jermaine Wong"
              >
                {/* Honeypot — hidden from users, bots will fill it */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: 1,
                    height: 1,
                    overflow: 'hidden',
                  }}
                >
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                      className={styles.input}
                      autoComplete="name"
                      aria-invalid={fieldErrors.name ? 'true' : 'false'}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    />
                    {fieldErrors.name && (
                      <span id="name-error" className={styles.fieldError}>
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="org" className={styles.label}>Organisation</label>
                    <input
                      id="org"
                      name="organisation"
                      type="text"
                      placeholder="Arts Council, School, etc."
                      className={styles.input}
                      autoComplete="organization"
                      aria-invalid={fieldErrors.organisation ? 'true' : 'false'}
                    />
                    {fieldErrors.organisation && (
                      <span className={styles.fieldError}>{fieldErrors.organisation}</span>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={styles.input}
                    autoComplete="email"
                    aria-invalid={fieldErrors.email ? 'true' : 'false'}
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  />
                  {fieldErrors.email && (
                    <span id="email-error" className={styles.fieldError}>
                      {fieldErrors.email}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your interest — funding, partnership, booking Our Son..."
                    className={`${styles.input} ${styles.textarea}`}
                    aria-invalid={fieldErrors.message ? 'true' : 'false'}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  />
                  {fieldErrors.message && (
                    <span id="message-error" className={styles.fieldError}>
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {state.ok === false && state.code !== 'VALIDATION' && (
                  <p className={styles.errorMsg} role="alert">
                    {state.message || 'Something went wrong. Please try again.'}
                  </p>
                )}

                <SubmitButton />
              </form>
            )}
          </div>

          {/* PDF download + info */}
          <div className={styles.aside}>
            <div className={`${styles.pdfCard} fade-up`}>
              <div className={styles.pdfIcon} aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={`${styles.cardTitle}`}>Download the Proposal</h3>
              <p className="text-sm text-muted">
                The full Forgiveness Framework Proposal — including the delivery model,
                financial framework, evidence base, and scalability plan.
                Everything you need to make the case internally.
              </p>
              <a
                href="/forgiveness-framework-proposal.pdf"
                download
                className={`btn-ghost ${styles.downloadBtn}`}
              >
                Download PDF
              </a>
            </div>

            <div className={`${styles.infoCard} fade-up`} style={{ transitionDelay: '80px' }}>
              <h3 className={styles.infoTitle}>What partnership looks like</h3>
              <ul className={styles.infoList}>
                <li>Full programme delivery into schools and community venues</li>
                <li>Our Son performances for civic and institutional audiences</li>
                <li>Framework training for educators and youth workers</li>
                <li>Bespoke delivery models for borough commissioning</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
