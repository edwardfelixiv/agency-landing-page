# Escape Velocity AI — Landing Page

## Before you go live — checklist

- [ ] **Pick a hero headline** — open `index.html`, find the "HERO HEADLINE" comment block, uncomment your preferred option (1, 2, or 3), and comment out the others. Also swap in the matching subhead.
- [ ] **Replace placeholder testimonials** — search for `PLACEHOLDER` comments in `index.html` and swap in real client quotes.
- [ ] **Set up Formspree** — go to [formspree.io](https://formspree.io), create a free account, create a form, and replace `REPLACE_WITH_YOUR_ID` in the `<form action="...">` tag with your actual form ID.
- [ ] **Add your calendar embed** — replace the `calendar-placeholder` div in the Booking section with your Cal.com or Calendly inline embed code. Instructions are in the HTML comment above that block.
- [ ] **Update your email** — replace `hello@escapevelocityai.com` in the footer with your real email.
- [ ] **Add an OG image** — put a `1200×630` PNG at `assets/og-image.png` for social sharing previews.
- [ ] **Update your domain** — once deployed, add your real domain to Formspree's allowed origins and update any absolute URLs.

---

## File structure

```
agency-landing-page/
├── index.html      — single page, all sections
├── styles.css      — all styles (mobile-first)
├── script.js       — nav toggle + FAQ accordion
├── assets/
│   └── og-image.png  — 1200×630 social preview image (add this)
└── README.md
```

---

## Deploying for free

### Option A — Netlify (recommended, easiest)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. From your dashboard, click **"Add new site" → "Deploy manually"**
3. Drag your entire `agency-landing-page/` folder onto the upload area
4. Netlify gives you a live URL instantly (e.g. `https://random-name.netlify.app`)
5. To use a custom domain: Site settings → Domain management → Add custom domain

To redeploy after changes: drag the folder again, or connect to a GitHub repo for automatic deploys on push.

### Option B — Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign in
2. Click **"Create a project" → "Direct Upload"**
3. Upload your project folder
4. You get a `*.pages.dev` URL immediately
5. Add a custom domain in the Pages dashboard for free

### Option C — GitHub Pages

1. Push this folder to a GitHub repository
2. Go to repo Settings → Pages → Source: "Deploy from branch"
3. Select `main` branch and `/ (root)` folder
4. Your page is live at `https://yourusername.github.io/repo-name`

---

## Local preview

No server needed — just open `index.html` directly in your browser:

```
# macOS / Linux
open index.html

# Windows
start index.html
```

Or right-click `index.html` → Open With → your browser.

---

## Swapping hero headlines

Three options are in `index.html`. Only one should be active at a time.

**To use Option 2 ("Your business, on camera. Without you."):**
1. Comment out the Option 1 `<h1>` and its `<p>` subhead
2. Uncomment the Option 2 block
3. Save and reload

Each option has its own matching subhead — make sure to swap both the headline and the subhead together.

---

## Adding real testimonials

Find the four `<!-- PLACEHOLDER -->` comment blocks in the testimonials section. Replace:
- The quote text inside `<p class="testimonial-text">`
- The initials inside `<div class="testimonial-avatar">`
- The name inside `<strong>`
- The role/location inside `<span>`
