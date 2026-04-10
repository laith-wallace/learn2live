'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '../actions/contact';
import styles from './fund.module.css';

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
      {pending ? 'Sending…' : 'Send funding enquiry'}
    </button>
  );
}

export default function FundingEnquiryForm() {
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
          Thank you — Jermaine will respond within five working days.
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
      aria-label="Funding enquiry form"
    >
      {/* Topic marker so the server routes this to the funder inbox */}
      <input type="hidden" name="topic" value="funding" />

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
        <label htmlFor="fund-website">Website (leave blank)</label>
        <input
          id="fund-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="fund-name" className={styles.formLabel}>
            Your name
          </label>
          <input
            id="fund-name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            className={styles.formInput}
            autoComplete="name"
            aria-invalid={fieldErrors.name ? 'true' : 'false'}
            aria-describedby={fieldErrors.name ? 'fund-name-error' : undefined}
          />
          {fieldErrors.name && (
            <span id="fund-name-error" className={styles.formFieldError}>
              {fieldErrors.name}
            </span>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="fund-org" className={styles.formLabel}>
            Organisation
          </label>
          <input
            id="fund-org"
            name="organisation"
            type="text"
            placeholder="Trust, foundation, local authority…"
            className={styles.formInput}
            autoComplete="organization"
            aria-invalid={fieldErrors.organisation ? 'true' : 'false'}
          />
          {fieldErrors.organisation && (
            <span className={styles.formFieldError}>{fieldErrors.organisation}</span>
          )}
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="fund-email" className={styles.formLabel}>
          Email address
        </label>
        <input
          id="fund-email"
          name="email"
          type="email"
          required
          placeholder="you@organisation.org"
          className={styles.formInput}
          autoComplete="email"
          aria-invalid={fieldErrors.email ? 'true' : 'false'}
          aria-describedby={fieldErrors.email ? 'fund-email-error' : undefined}
        />
        {fieldErrors.email && (
          <span id="fund-email-error" className={styles.formFieldError}>
            {fieldErrors.email}
          </span>
        )}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="fund-amount" className={styles.formLabel}>
            Amount bracket (optional)
          </label>
          <select
            id="fund-amount"
            name="fundingAmount"
            className={styles.formInput}
            defaultValue=""
          >
            <option value="">Select a bracket…</option>
            <option value="Under £5,000">Under £5,000</option>
            <option value="£5,000 – £15,000">£5,000 – £15,000</option>
            <option value="£15,000 – £35,000">£15,000 – £35,000</option>
            <option value="£35,000 – £75,000">£35,000 – £75,000</option>
            <option value="£75,000 – £100,000">£75,000 – £100,000</option>
            <option value="£100,000+">£100,000+</option>
            <option value="Open — would like to discuss">
              Open — would like to discuss
            </option>
          </select>
        </div>
        <div className={styles.formField}>
          <label htmlFor="fund-timeline" className={styles.formLabel}>
            Timeline (optional)
          </label>
          <input
            id="fund-timeline"
            name="fundingTimeline"
            type="text"
            placeholder="e.g. Q3 2026 panel"
            className={styles.formInput}
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="fund-message" className={styles.formLabel}>
          How you&apos;re thinking about this
        </label>
        <textarea
          id="fund-message"
          name="message"
          rows={6}
          required
          placeholder="Tell me about the fund, what you&apos;re looking to support, any reporting constraints, and when a decision is needed."
          className={`${styles.formInput} ${styles.formTextarea}`}
          aria-invalid={fieldErrors.message ? 'true' : 'false'}
          aria-describedby={fieldErrors.message ? 'fund-message-error' : undefined}
        />
        {fieldErrors.message && (
          <span id="fund-message-error" className={styles.formFieldError}>
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
