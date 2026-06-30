# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Start dev server (localhost:3000)
npm run build    # Production build
npm test         # Run tests (watch mode)
npm test -- --watchAll=false  # Run tests once
```

## Architecture

This is a Create React App single-page portfolio website. The app renders a single scrollable page with anchor-linked sections.

**Data flow:** `src/data/data.json` drives section content. `App.jsx` loads it once on mount via `useEffect` and passes relevant sub-objects as `data` props to section components. Components render fallback placeholder text when `props.data` is undefined.

**Section components** (`src/components/`):
- `navigation.jsx` — fixed top navbar; link labels are hardcoded strings (not data-driven)
- `header.jsx` — hero/banner; uses `props.data.title` and `props.data.paragraph`
- `about.jsx` — receives `data={landingPageData.About}` but **ignores `props.data` entirely**; all bio text, skills lists, and the profile image path are hardcoded JSX
- `project01.jsx`, `project02.jsx`, `project03.jsx` — each renders a section with `props.data.paragraph` and `props.data.features1` (string array); the image `src`, section `<h2>` title, and CTA button `href` are hardcoded inside each component, not in `data.json`
- `contact.jsx` — exists but is commented out in `App.jsx` and `navigation.jsx`

**Unused data.json keys:** `Gallery`, `Services`, `Testimonials`, `Team`, `Features`, and `About` (data-driven fields) are all leftovers from the original template and are not rendered anywhere. `emailjs-com` is installed but unused (contact is disabled).

**Styling:** `src/App.css` contains all custom styles. `src/index.css` handles base Bootstrap-based styles from the original template. Custom CSS uses breakpoints at 576px, 768px, 991px, and 1199px. Section titles use a `::after` pseudo-element for the blue gradient underline.

**Images:** Stored in `/public/img/`. Project screenshots go in `/public/img/portfolio/`. The about profile photo is `/public/img/about.jpeg`.

## Adding a New Project Section

1. Create `src/components/project04.jsx` following the pattern of `project01.jsx` — use `id="project04"` and `className="project-section"` on the root div. Hardcode the image `src`, title `<h2>`, and CTA `href` directly in JSX.
2. Add content to `data.json` under a `"Project04"` key with `paragraph` and `features1` fields.
3. Import and render `<Project04 data={landingPageData.Project04} />` in `App.jsx`.
4. Add a nav link with a hardcoded label in `navigation.jsx`.

## Key Decisions

- Contact section is intentionally disabled (commented out in `App.jsx` and `navigation.jsx`).
- `smooth-scroll` is initialized at module level in `App.jsx` and targets all `a[href*="#"]` links automatically.
- `about.jsx` is fully hardcoded rather than data-driven to allow rich, persona-specific markup without constraining it to a JSON schema.
