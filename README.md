# SILVA. — Portfolio

Personal portfolio of João Silva, a fullstack developer specialized in web applications, UI/UX and problem solving.

**Live:** [silva-portfolio.vercel.app](https://silva-portfolio.vercel.app) &nbsp;·&nbsp; **GitHub:** [joaosilva-web/silva-portfolio](https://github.com/joaosilva-web/silva-portfolio)

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Framer Motion** — animations
- **CSS Modules** — scoped styling
- **Lucide React** — icons

---

## Features

- Smooth scroll navigation with active section tracking
- Project carousel with animated transitions
- **Light / Dark theme** — persisted in `localStorage`, respects `prefers-color-scheme`
- **PT / EN language toggle** — persisted in `localStorage`, auto-detected from browser language
- Parallax effects on Hero section
- Fully responsive (mobile, tablet, desktop)
- Google Analytics (gtag.js)

---

## Project Structure

```
src/
├── assets/               # Images and SVGs
├── components/
│   ├── Header/           # Sticky nav with theme + language toggle
│   ├── Hero/             # Hero section with parallax
│   ├── AboutService/     # Services cards
│   ├── Process/          # 4-step process section
│   ├── MyWork/           # Project carousel
│   ├── Contact/          # Contact links
│   ├── Footer/           # Footer
│   ├── Card/             # Reusable service card
│   └── Cursor/           # Custom cursor
├── data/
│   ├── projects.ts       # Projects data
│   ├── services.ts       # Services data
│   └── translations.ts   # PT/EN strings
├── hooks/
│   ├── useTheme.ts       # Light/dark theme hook
│   └── useLanguage.ts    # PT/EN language hook
└── lib/
    └── motionVariants.ts # Shared Framer Motion variants
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |
