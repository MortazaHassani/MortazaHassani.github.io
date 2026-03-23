/* ============================================================
   Mortaza Hassani — Personal Website JavaScript
   ============================================================ */

'use strict';

/* --- Navigation Toggle (Mobile) --- */
(function () {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = menu.querySelector('.nav-menu').classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.querySelector('.nav-menu').classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      menu.querySelector('.nav-menu').classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}());


/* --- Contact Form --- */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  /* Rate limiting: max 3 submissions per 10 minutes */
  const RATE_LIMIT_KEY  = 'cf_submissions';
  const RATE_LIMIT_MAX  = 3;
  const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes

  function getRateData() {
    try {
      return JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
    } catch (_) { return []; }
  }

  function isRateLimited() {
    const now  = Date.now();
    const data = getRateData().filter(t => now - t < RATE_LIMIT_WINDOW);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
    return data.length >= RATE_LIMIT_MAX;
  }

  function recordSubmission() {
    const data = getRateData();
    data.push(Date.now());
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
  }

  /* Sanitize text input */
  function sanitize(str) {
    return String(str).trim().replace(/[<>]/g, '');
  }

  /* Validation rules */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validateField(id, check, errId, msg) {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el || !err) return true;
    const ok = check(el.value);
    el.classList.toggle('is-invalid', !ok);
    err.textContent = ok ? '' : msg;
    err.classList.toggle('visible', !ok);
    return ok;
  }

  function validate() {
    let ok = true;
    ok = validateField('cf-name', v => sanitize(v).length >= 2 && sanitize(v).length <= 100,
      'cf-name-err', 'Name must be 2–100 characters.') && ok;
    ok = validateField('cf-email', v => EMAIL_RE.test(sanitize(v)),
      'cf-email-err', 'Please enter a valid email address.') && ok;
    ok = validateField('cf-subject', v => sanitize(v).length >= 3 && sanitize(v).length <= 200,
      'cf-subject-err', 'Subject must be 3–200 characters.') && ok;
    ok = validateField('cf-message', v => sanitize(v).length >= 10 && sanitize(v).length <= 2000,
      'cf-message-err', 'Message must be 10–2000 characters.') && ok;
    return ok;
  }

  const alertSuccess = document.getElementById('cf-success');
  const alertError   = document.getElementById('cf-error');
  const submitBtn    = document.getElementById('cf-submit');

  function showAlert(el, show) {
    if (el) el.classList.toggle('visible', show);
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Reset alerts
    showAlert(alertSuccess, false);
    showAlert(alertError, false);

    // Honeypot check — if filled, silently "succeed" to fool bots
    const hp = document.getElementById('_hp_website');
    if (hp && hp.value !== '') {
      showAlert(alertSuccess, true);
      form.reset();
      return;
    }

    // Validate
    if (!validate()) return;

    // Rate limit
    if (isRateLimited()) {
      showAlert(alertError, true);
      if (alertError) alertError.textContent =
        'Too many submissions. Please wait a few minutes before trying again.';
      return;
    }

    // Build payload
    const payload = {
      name:    sanitize(document.getElementById('cf-name').value),
      email:   sanitize(document.getElementById('cf-email').value),
      subject: sanitize(document.getElementById('cf-subject').value),
      message: sanitize(document.getElementById('cf-message').value),
    };

    // Loading state
    const origHTML = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.innerHTML = '<span class="spinner"></span> Sending…';
      submitBtn.classList.add('btn-loading');
      submitBtn.disabled = true;
    }

    try {
      // Read form action (Formspree endpoint configured in page front matter / HTML)
      const endpoint = form.getAttribute('action');
      if (!endpoint || endpoint === '#') throw new Error('Form endpoint not configured.');

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        recordSubmission();
        showAlert(alertSuccess, true);
        form.reset();
        // Remove error states
        form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        form.querySelectorAll('.form-error.visible').forEach(el => {
          el.classList.remove('visible');
          el.textContent = '';
        });
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Server error, please try again.');
      }
    } catch (err) {
      showAlert(alertError, true);
      if (alertError) alertError.textContent =
        'Sorry, your message could not be sent. ' + err.message;
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = origHTML;
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
      }
    }
  });

  // Live validation on blur
  ['cf-name', 'cf-email', 'cf-subject', 'cf-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('blur', validate);
  });
}());


/* --- Smooth scroll for anchor links --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
