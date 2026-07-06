# Escape Velocity AI — Landing Page

The public site for escape-velocity-ai.com. Repositioned July 6, 2026 from
the old "done for you AI video" offer to **The Invisible Back Office**
(books, reviews, follow up, newsletter for local service businesses).

## File structure

```
agency-landing-page/
├── index.html        — single page, all sections
├── styles.css        — all styles (mobile first, light "paper and ink" system)
├── script.js         — nav toggle, FAQ accordion, form AJAX, ?demo=1/?check=1 prefill
├── og.html           — source card for the social preview image (regenerate below)
├── assets/
│   └── og-image.png  — 1200×630 social preview, generated from og.html
└── README.md
```

## Live integrations (do not lose these)

- **Formspree contact form:** `action="https://formspree.io/f/xzdyajpe"`
- **Cal.com embed:** `escape-velocity-ai-gj1u70/20-min-intro-call`
- **Link-in-bio prefill:** `?demo=1` or `?check=1` prefills the message field
  and scrolls to booking.

## Content rules

- All copy is in Edward's voice: **no dashes, ever** (see memory note
  `edward-no-dashes-in-messages`).
- Prices must match `code-projects\lead-tracker\config\rates.json`. If rates
  change there, change them here the same day.
- No fabricated testimonials. Proof section = "runs on my own business first."

## Local preview

`npx serve . -l 3001` (or use the `agency-landing-page (static)` entry in
`.claude\launch.json`), then open http://localhost:3001.

## Regenerating the OG image after design/copy changes

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new ^
  --disable-gpu --user-data-dir=%TEMP%\chrome-og ^
  --screenshot="%CD%\assets\og-image.png" --window-size=1200,630 ^
  --hide-scrollbars --virtual-time-budget=10000 "file:///%CD%/og.html"
```

## Deploying

Repo: github.com/edwardfelixiv/agency-landing-page. **Deploy method for the
live domain is unconfirmed** — before pushing and assuming it ships, confirm
whether escape-velocity-ai.com is wired to auto-deploy from this repo
(Cloudflare Pages / Netlify) or was a manual upload. If manual: drag the
folder to the host again after changes.
