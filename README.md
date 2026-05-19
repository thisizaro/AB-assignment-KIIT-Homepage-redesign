# KIIT University – Redesigned Website

A modular, scalable React app recreation of the KIIT University homepage with improved UI/UX.

## Brand Identity
- **Primary Color**: `#00A651` (KIIT Signature Green)
- **Dark Green**: `#007A3D`, `#004F25`
- **Logo**: Official KIIT logo (gear + "KiiT" wordmark)
- **Fonts**: Merriweather (headings) + Nunito (body)

## Project Structure

```
kiit-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx           # Entry point
    ├── App.jsx            # Root component (assembles all sections)
    ├── styles/
    │   └── global.css     # CSS variables, reset, shared utilities
    ├── data/
    │   └── index.js       # All app data (nav, rankings, news, etc.)
    ├── assets/
    │   ├── kiit-logo.png  # Official KIIT logo
    │   └── kiit-icon.jpg  # KIIT icon / favicon
    └── components/
        ├── Navbar.jsx / .css       # Sticky nav with mega menu
        ├── MobileMenu.jsx / .css   # Slide-in mobile menu
        ├── Hero.jsx / .css         # Full-screen hero section
        ├── Rankings.jsx / .css     # Rankings/accreditation cards
        ├── StatsBanner.jsx / .css  # Key numbers strip
        ├── Academics.jsx / .css    # Schools & programs cards
        ├── Campus.jsx / .css       # Bento-grid campus life
        ├── Admissions.jsx / .css   # Admissions + deadlines
        ├── News.jsx / .css         # News & highlights
        ├── Footer.jsx / .css       # Full footer with links
        └── Chatbot.jsx / .css      # AI chatbot (Claude-powered)
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Features

- ✅ Responsive (mobile, tablet, desktop)
- ✅ Sticky navbar with mega menu dropdowns
- ✅ Slide-in mobile menu with hamburger
- ✅ Hero with animated floating cards
- ✅ Rankings strip (NIRF, NAAC, QS, ARIIA)
- ✅ Stats banner
- ✅ Academic programs grid
- ✅ Campus life bento grid
- ✅ Admissions section with deadline tracker
- ✅ News & highlights
- ✅ AI chatbot (powered by Claude / Anthropic API)
- ✅ Full footer with social links and accreditation badges
- ✅ KIIT official branding (green + logo)

## Chatbot
The chatbot widget calls the Anthropic API (Claude Sonnet) when deployed with an API key. In standalone mode, it uses local FAQ replies for common questions.

## Customisation Tips
- All data lives in `src/data/index.js` — update rankings, stats, news there.
- Color tokens are in `src/styles/global.css` under `:root`.
- Each section is a standalone component — easy to add, remove, or reorder in `App.jsx`.
