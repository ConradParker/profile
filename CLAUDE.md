# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio SPA at https://sunseasolutions.com — vanilla JavaScript (ES6 modules), HTML5, CSS3. No frameworks, no build step.

## Development

**Run locally:** Use VS Code Live Server extension with root set to `/src` (already configured in `.vscode/settings.json`).

**Lint:** `npx eslint src/**/*.js` (ESLint with airbnb-base + prettier config; no npm script defined).

**Format:** Prettier on save (VS Code configured).

**Test:** No test suite exists.

**Deploy:** Push to `master` triggers GitHub Actions → Azure Static Web Apps. App location is `/src`, served as-is with no build.

## Architecture

Hash-based SPA router. `src/index.js` bootstraps the app, listens for `hashchange`/`load` events, and delegates to `src/services/router.js`.

**Routing flow:** URL hash → `router.parseRequestURL()` → lookup in `routes.js` map → call page's `render()` (returns HTML) → inject into `#page-container` → call page's `after_render()` (event binding, data fetching).

**Page pattern:** Each page in `src/views/pages/` exports `{ render, after_render }`. Most pages have a companion `.html` template loaded via `utils.getPage()`.

**Web Components (Shadow DOM):**
- `header-block` — site header/navigation, registered globally in `index.js`
- `project-item` — project card, used by projects page; data set via `.project` property setter

**Key services (`src/services/`):**
- `router.js` — SPA routing and page lifecycle
- `routes.js` — route-to-page mapping
- `utils.js` — `getPage()` (fetch HTML templates), `updateMenu()`, `injectCss()`, `getNested()`
- `fear-and-greed.js` — D3.js gauge chart (loaded from CDN)

## Conventions

- **CSS:** BEM naming, CSS custom properties for theming (`--primary-color: #fdb813`, `--secondary-color: #2f4858`), mobile-first responsive breakpoints at 600px and 720px
- **JS:** ES6 modules with `import/export`, async/await in page lifecycle hooks
- **Linting:** Airbnb base rules, `import/extensions` off, `linebreak-style` off
- **Project data:** `src/data/projects.json` — array of `{ name, description, imageSrc, link }`

## Deployment Notes

- `src/web.config` handles IIS rewrites: force HTTPS, redirect www → non-www
- Azure Static Web Apps workflow in `.github/workflows/`
- No build output — `/src` is the deployment artifact
