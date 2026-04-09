'use server';

/**
 * Contact form server action.
 *
 * Validates input server-side, rate-limits by IP (in-memory — swap to
 * Upstash/Redis for multi-instance deploys), and forwards to Resend if
 * RESEND_API_KEY and CONTACT_EMAIL_TO are set. If those env vars are
 * missing the action logs the submission and still returns success so
 * the form works in development.
 *
 * Required env vars for production email delivery:
 *   RESEND_API_KEY       — API key from https://resend.com
 *   CONTACT_EMAIL_TO     — destination address (e.g. jermaine@…)
 *   CONTACT_EMAIL_FROM   — verified sender (e.g. no-reply@learn2livelegacy.org)
 */

import { headers } from 'next/headers';

// ─── In-memory rate limiter ───────────────────────────────
// Per CLAUDE.md: auth endpoints need rate limiting. Contact forms
// are not auth but are a common spam vector — same rule applies.
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;                    // 5 submissions per window per IP
const rateLimitStore = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now - record.firstAttempt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { firstAttempt: now, count: 1 });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// ─── Validation ───────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX = 120;
const ORG_MAX = 200;
const MESSAGE_MAX = 5000;

function validate(data) {
  const errors = {};

  const name = (data.name || '').trim();
  const organisation = (data.organisation || '').trim();
  const email = (data.email || '').trim().toLowerCase();
  const message = (data.message || '').trim();
  const honeypot = (data.website || '').trim(); // hidden field

  if (honeypot) {
    // Bot filled the honeypot — silently discard but return success
    return { errors, cleaned: null, isBot: true };
  }

  if (!name) errors.name = 'Name is required';
  else if (name.length > NAME_MAX) errors.name = `Name must be under ${NAME_MAX} characters`;

  if (organisation && organisation.length > ORG_MAX) {
    errors.organisation = `Organisation must be under ${ORG_MAX} characters`;
  }

  if (!email) errors.email = 'Email is required';
  else if (!EMAIL_REGEX.test(email)) errors.email = 'Please enter a valid email address';
  else if (email.length > 320) errors.email = 'Email address too long';

  if (!message) errors.message = 'Message is required';
  else if (message.length > MESSAGE_MAX) errors.message = `Message must be under ${MESSAGE_MAX} characters`;

  return {
    errors,
    cleaned: { name, organisation, email, message },
    isBot: false,
  };
}

// ─── Email delivery (Resend REST API, no SDK) ─────────────
async function sendEmail({ name, organisation, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    // Dev/preview environment — log instead of send.
    console.info('[contact] Email env vars not set. Submission:', {
      name,
      organisation,
      email,
      messagePreview: message.slice(0, 80),
    });
    return { delivered: false, reason: 'dev-mode' };
  }

  const subject = `New enquiry from ${name}${organisation ? ` (${organisation})` : ''}`;
  const text = [
    `From:         ${name}`,
    `Organisation: ${organisation || '—'}`,
    `Email:        ${email}`,
    '',
    '— Message —',
    message,
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    // Log server-side only. Per CLAUDE.md, do not leak internals to the client.
    const errBody = await res.text().catch(() => '');
    console.error('[contact] Resend error:', res.status, errBody);
    return { delivered: false, reason: 'provider-error' };
  }

  return { delivered: true };
}

// ─── Public action ────────────────────────────────────────
export async function submitContactForm(_prevState, formData) {
  try {
    // Get IP — falls back to a constant in dev so rate limit still works.
    // Awaited for forward-compat with Next.js 15+ (async headers()).
    const hdrs = await headers();
    const ip =
      hdrs.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      hdrs.get('x-real-ip') ||
      'unknown';

    const { allowed } = checkRateLimit(ip);
    if (!allowed) {
      return {
        ok: false,
        code: 'RATE_LIMITED',
        message: 'Too many submissions. Please try again in a few minutes.',
      };
    }

    const data = {
      name: formData.get('name'),
      organisation: formData.get('organisation'),
      email: formData.get('email'),
      message: formData.get('message'),
      website: formData.get('website'), // honeypot
    };

    const { errors, cleaned, isBot } = validate(data);

    if (isBot) {
      // Pretend success so the bot doesn't retry
      return { ok: true };
    }

    if (Object.keys(errors).length > 0) {
      return {
        ok: false,
        code: 'VALIDATION',
        message: 'Please check the form for errors.',
        errors,
      };
    }

    await sendEmail(cleaned);

    return { ok: true };
  } catch (err) {
    // Never leak internals (CLAUDE.md §Security §Error responses)
    console.error('[contact] Unexpected error:', err);
    return {
      ok: false,
      code: 'INTERNAL',
      message: 'Something went wrong. Please try again or email directly.',
    };
  }
}
