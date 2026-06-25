# Design Patterns — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on software **design patterns** — OOP design principles (SOLID, composition over inheritance), then all 23 Gang-of-Four patterns grouped Creational / Structural / Behavioral. Each pattern covers intent, the problem it solves, a **Mermaid UML diagram**, a worked example in **TypeScript, Python, Go, and Rust** (synced tabs), trade-offs, and related patterns. Diagrams are **Mermaid**, and there's a **read-mode** toggle.

All content is original: original explanations of the (public) patterns, original code, original diagrams.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Code examples | Starlight built-in `<Tabs syncKey="lang">` + `<TabItem>` — one fenced block per language (TypeScript, Python, Go, Rust), with expressive-code copy buttons. `syncKey` keeps the chosen language in sync across every tab group on the page. |
| Diagrams | Client-side, theme-aware **Mermaid** `classDiagram` (`<Mermaid>` + `public/enhance.js`) |
| Reading | **Read-mode** toggle (hides sidebar/TOC, widens content) via `public/enhance.js` |
| Unit tests | [Vitest](https://vitest.dev) + `@testing-library/preact` |
| i18n | Starlight built-in, `defaultLocale: 'en'`, locales: `en` + `th` |

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
npm test           # Run Vitest unit tests
```

## Content Structure

```
src/content/docs/
  en/                              # English — served at /en/...
    intro-and-principles/          # what patterns are, SOLID, composition, reading UML
    creational/                    # Singleton, Factory Method, Abstract Factory, Builder, Prototype
    structural/                    # Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
    behavioral-essentials/         # Strategy, Observer, Command, State, Template Method, Iterator
    behavioral-advanced/           # Chain of Responsibility, Mediator, Memento, Visitor, Interpreter
    index.mdx                      # EN landing (splash)
  th/                              # Thai — served at /th/...
    (same module directories)
    index.mdx
```

### Components & Lesson Template

- **`Mermaid.astro`** `{ code, title }` — hoist the UML as `export const ...Uml = \`classDiagram ...\`` and render `<Mermaid code={...Uml} title="..."/>`.
- **`Callout.astro`** `{ title }`, **`Quiz.tsx`** `{ id, questions }` (0-based `answer`, field `q`), **`ProgressTracker.tsx`** `{ id }`.
- Multi-language code uses Starlight's **`{ Tabs, TabItem }`** from `@astrojs/starlight/components` — no custom component.

Per-pattern lesson order: frontmatter → imports → **Intent** → **Problem** → **Structure** (`<Mermaid>` + participants) → **Example** (`<Tabs syncKey="lang">` with TypeScript/Python/Go/Rust `<TabItem>`s) → **When to use / trade-offs** → **Related patterns** → `<Callout>` → `<Quiz>` → `<ProgressTracker>` (last). IDs follow `<module>/<slug>`.

> **⚠️ Authoring notes:**
> - **Code lives in fenced blocks inside `<TabItem>`** (literal — no `${`/backtick escaping). The four languages in order: TypeScript, Python, Go, Rust, implementing the same example.
> - **Never a bare `{...}`/`${...}` in prose** — keep code in fenced blocks / Tabs; Mermaid source in `export const`. **Diagrams are Mermaid `classDiagram`, not ASCII UML.**
> - **Internal links include the base path** and the matching locale (`/design-patterns-from-zero-to-hero/en/...` on EN pages, `/th/...` on TH pages); cross-course links use the full `https://avetavos.github.io/<course>/...` URL.

## Deployment

Fully static → `dist/`. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/design-patterns-from-zero-to-hero'`.

Deployed to GitHub Pages via **branch-source** (`gh-pages`): build `dist/`, add `.nojekyll`, push to `gh-pages`, set **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/`**, then **request a Pages build** (`gh api -X POST repos/<owner>/<repo>/pages/builds`) — flipping the source alone does not trigger one. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
