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
git clone https://github.com/YOUR_USERNAME/kamilovs-clinic-strategy-presentation.git
cd kamilovs-clinic-strategy-presentation
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Production output: `dist/`

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint                   |
| `npm run typecheck` | TypeScript check      |

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

## Deploy on Vercel

1. Push this repository to GitHub (private or public).
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import the GitHub repository.
4. Framework preset: **Vite** (auto-detected).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

`vercel.json` is included for consistent build settings.

### Environment Variables

No environment variables required for the static presentation site.

## License

Private — Kamilovs' Clinic internal presentation.
