# Shorem Tech Limited — Website

React + Vite website for Shorem Tech Limited, an electrical power solutions company in Lagos, Nigeria.

**Powering Today • Sustaining Tomorrow**

---

## Getting started

```bash
npm install
npm run dev
```

The dev server opens at `http://localhost:5173`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

Requires Node.js 18 or newer.

---

## Project structure

```
shorem-tech/
├── index.html                 # HTML shell, meta tags, Google Fonts
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # App entry, router mount
    ├── App.jsx                # Routes and layout shell
    ├── data/
    │   └── company.js         # ALL site content lives here
    ├── styles/
    │   ├── global.css         # Design tokens, buttons, layout helpers
    │   └── pages.css          # Shared page blocks
    ├── components/
    │   ├── Navbar.jsx/.css
    │   ├── Footer.jsx/.css
    │   ├── Hero.jsx/.css      # Home hero + single-line diagram
    │   ├── PageHero.jsx/.css  # Inner page headers
    │   ├── ServiceCard.jsx/.css
    │   ├── ContactForm.jsx/.css
    │   ├── CTABand.jsx/.css
    │   ├── SectionHeading.jsx/.css
    │   ├── Logo.jsx/.css
    │   ├── Icons.jsx          # Inline SVG icon set
    │   └── ScrollToTop.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Projects.jsx
        ├── Industries.jsx
        ├── SafetyQuality.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

---

## Editing content

Almost all copy lives in **`src/data/company.js`** — company details, contact info, the five
services with their scope lists, value propositions, industries, projects, safety commitments
and the process steps. Change it there and every page updates.

The `projects` array holds placeholder records. Replace them with real jobs as they are
documented.

---

## Design tokens

Colors, spacing, radii, shadows and fonts are CSS custom properties at the top of
`src/styles/global.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--navy` | `#063B82` | Primary brand color, headers, dark sections |
| `--navy-deep` | `#052E68` | Footer, high-contrast panels |
| `--orange` | `#F58213` | Accent, calls to action, icons |
| `--blue-light` | `#EAF2FB` | Subtle section backgrounds |
| `--gray-light` | `#F4F6F8` | Alternating sections, cards |
| `--gray-medium` | `#6B7280` | Secondary text |
| `--text-dark` | `#172033` | Body text on light backgrounds |

Headings use **Montserrat**, body text uses **Inter**, and technical labels use **JetBrains Mono**
for the engineering-drawing feel. Fonts load from Google Fonts in `index.html`.

---

## Replacing the logo

`src/components/Logo.jsx` draws the ST monogram as inline SVG. To use the real logo file:

1. Drop the file into `src/assets/` (e.g. `logo.png`).
2. In `Logo.jsx`, import it and swap the `<svg>` for an `<img>`:

```jsx
import logo from '../assets/logo.png'
// ...
<img className="logo__mark" src={logo} alt="Shorem Tech Limited" />
```

---

## Wiring up the contact form

The form in `src/components/ContactForm.jsx` currently composes a pre-filled email and opens the
visitor's mail client — no backend needed. To post to a form service instead, replace the
`window.location.href = ...` line in `handleSubmit` with a fetch call:

```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
})
```

---

## Adding photography

The design is built for real engineering imagery — substations, transformers, breakers, testing
work. Add photos to `src/assets/`, import them into a page and place them in the hero or section
areas. Avoid generic stock photography; site photos of actual work carry more credibility.

---

## Deploying

Run `npm run build` and upload the `dist/` folder.

Because the site uses client-side routing, the host must serve `index.html` for unknown paths:

- **Netlify** — add a `public/_redirects` file containing `/*  /index.html  200`
- **Vercel** — works out of the box for Vite projects
- **Apache** — add an `.htaccess` rewrite to `index.html`
- **Nginx** — `try_files $uri $uri/ /index.html;`

---

© Shorem Tech Limited — Safety. Quality. Reliability.
