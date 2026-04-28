// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav-open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close nav when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Contact form — AJAX submit with success message + honeypot guard
const contactForm = document.querySelector('.contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot: if filled, it's a bot — silently bail
    if (contactForm.querySelector('[name="_gotcha"]').value) return;

    const submitBtn = contactForm.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        contactForm.hidden = true;
        formSuccess.hidden = false;
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        alert('Something went wrong — please try again or email us directly.');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      alert('Something went wrong — please try again or email us directly.');
    }
  });
}

// FAQ accordion — click to expand, closes siblings
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item   = question.parentElement;
    const isOpen = item.classList.contains('faq-open');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('faq-open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open the clicked item if it was closed
    if (!isOpen) {
      item.classList.add('faq-open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

// Pre-fill contact form when arrived via ?demo=1 (from link-in-bio "Get Free Demo" card)
(function initDemoPreFill() {
  if (new URLSearchParams(window.location.search).get('demo') !== '1') return;

  const bookingSection = document.getElementById('booking');
  const messageField   = document.querySelector('#contact-form [name="message"]');

  if (messageField && !messageField.value) {
    messageField.value = "I'd like to see a free demo video for my business.";
  }

  if (bookingSection) {
    // Small delay lets the page paint before scrolling
    setTimeout(() => {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
}());
