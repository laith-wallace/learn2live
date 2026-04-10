'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '../actions/contact';
import styles from './keynote.module.css';

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
      {pending ? 'Sending…' : 'Send booking enquiry'}
    </button>
  );
}

export default function KeynoteBookingForm() {
  const formRef = useRef(null);
  const [state, formAction] = useFormState(submitContactForm, INITIAL_STATE);

  useEffect(() => {
    if (state.ok === true) formRef.current?.reset();
  }, [state]);

  const fieldErrors = state?.errors || {};

  if (state.ok === true) {
    return (
      <div className={styles.formSuccess} role="status" aria-live="polite">
        <div className={styles.formSuccessIcon} aria-hidden="true">✓</div>
        <p className="text-lg">
          Thank you — Jermaine will respond within five working days with
          availability.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className={styles.form}
      noValidate
      aria-label="Keynote booking enquiry form"
    >
      <input type="hidden" name="topic" value="keynote" />

      {/* Honeypot */}
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
        <label htmlFor="kn-website">Website (leave blank)</label>
        <input
          id="kn-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="kn-name" className={styles.formLabel}>
            Your name
          </label>
          <input
            id="kn-name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            className={styles.formInput}
            autoComplete="name"
            aria-invalid={fieldErrors.name ? 'true' : 'false'}
            aria-describedby={fieldErrors.name ? 'kn-name-error' : undefined}
          />
          {fieldErrors.name && (
            <span id="kn-name-error" className={styles.formFieldError}>
              {fieldErrors.name}
            </span>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="kn-org" className={styles.formLabel}>
            Organisation
          </label>
          <input
            id="kn-org"
            name="organisation"
            type="text"
            placeholder="School, conference, venue…"
            className={styles.formInput}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="kn-email" className={styles.formLabel}>
          Email address
        </label>
        <input
          id="kn-email"
          name="email"
          type="email"
          required
          placeholder="you@organisation.org"
          className={styles.formInput}
          autoComplete="email"
          aria-invalid={fieldErrors.email ? 'true' : 'false'}
          aria-describedby={fieldErrors.email ? 'kn-email-error' : undefined}
        />
        {fieldErrors.email && (
          <span id="kn-email-error" className={styles.formFieldError}>
            {fieldErrors.email}
          </span>
        )}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="kn-date" className={styles.formLabel}>
            Event date (if known)
          </label>
          <input
            id="kn-date"
            name="eventDate"
            type="text"
            placeholder="e.g. 14 May 2026 or Autumn 2026"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="kn-audience" className={styles.formLabel}>
            Audience
          </label>
          <input
            id="kn-audience"
            name="eventAudience"
            type="text"
            placeholder="e.g. Year 11 assembly, sector conference"
            className={styles.formInput}
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="kn-message" className={styles.formLabel}>
          What you&apos;re hoping the talk will do
        </label>
        <textarea
          id="kn-message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about the event, the audience, and what you&apos;d like people to leave with."
          className={`${styles.formInput} ${styles.formTextarea}`}
          aria-invalid={fieldErrors.message ? 'true' : 'false'}
          aria-describedby={fieldErrors.message ? 'kn-message-error' : undefined}
        />
        {fieldErrors.message && (
          <span id="kn-message-error" className={styles.formFieldError}>
            {fieldErrors.message}
          </span>
        )}
      </div>

      {state.ok === false && state.code !== 'VALIDATION' && (
        <p className={styles.formErrorMsg} role="alert">
          {state.message || 'Something went wrong. Please try again.'}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
