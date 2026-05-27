# Kamilovs' Clinic — Strategy Presentation

Premium executive presentation website for **Kamilovs' Clinic** — a management strategy deck for clinic leadership covering operations, marketing, IT, finance, and growth.

## Overview

Single-page presentation with smooth scroll, section navigation, and a clean minimal aesthetic (Apple / Linear / Notion style). All content is data-driven and in Russian.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **Framer Motion** — subtle scroll & UI animations
- **Lenis** — smooth scrolling
- **Lucide React** — icons
- **shadcn-style UI** — Button (CVA + Radix Slot)

## Requirements

- Node.js **20+**
- npm **10+**

## Install

```bash
git clone https://github.com/Samandar90/manager_presentation.git
cd manager_presentation
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:5173/manager_presentation/](http://localhost:5173/manager_presentation/) (base path matches production).

## Build

```bash
npm run build
npm run preview
```

Production output: `dist/`

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build + `404.html` for GitHub Pages |
| `npm run preview` | Preview build at `/manager_presentation/` |
| `npm run deploy` | Build and publish to `gh-pages` branch |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer, Section, PageBackground
    sections/     # Page sections (Hero, IT, Finance, …)
    ui/           # Reusable UI primitives
  data/           # Presentation content (JSON-like TS modules)
  hooks/          # Lenis, scroll progress, active section
  constants/      # Motion variants
  App.tsx
  main.tsx
public/           # favicon, OG preview image
```

## Deploy on GitHub Pages

**Live URL:** [https://samandar90.github.io/manager_presentation/](https://samandar90.github.io/manager_presentation/)

1. Install dependencies: `npm install`
2. Deploy: `npm run deploy`
3. In GitHub → **Settings → Pages** → Source: branch **`gh-pages`**, folder **`/ (root)`**

The project uses `base: '/manager_presentation/'` in `vite.config.ts`. Navigation uses in-page anchors (`#overview`, `#it`, …), not React Router — no extra routing setup required.

### Local preview (production paths)

```bash
npm run preview
```

## License

Private — Kamilovs' Clinic internal presentation.
