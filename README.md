# Refactoring — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on **refactoring** — improving the internal structure of code without changing what it does. The discipline (small behavior-preserving steps backed by tests), recognizing code smells, and a curated catalog of refactorings — each shown as a **before → after** in **TypeScript, Python, Go, and Rust**, with the smell it cures, mechanics, and trade-offs. Diagrams are **Mermaid**, and there's a **read-mode** toggle.

All content is original: original explanations of the public refactoring catalog, original code, original diagrams.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Code examples | Starlight built-in `<Tabs syncKey="lang">` + `<TabItem>` — one fenced block per language (TypeScript, Python, Go, Rust), each showing a `before` and `after`, with expressive-code copy buttons. `syncKey` keeps the chosen language in sync across the page. |
| Diagrams | Client-side, theme-aware **Mermaid** (`<Mermaid>` + `public/enhance.js`) |
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
    intro-and-principles/          # what refactoring is, why/when, small steps + tests, code smells
    composing-methods/             # Extract/Inline Function, Extract Variable, Replace Temp with Query, Split Phase
    moving-features/               # Move Function/Field, Extract/Inline Class, Hide Delegate
    organizing-data/               # Encapsulate, Replace Magic Literal, Replace Primitive with Object, Type Code → Subclasses
    simplifying-conditionals/      # Decompose/Consolidate, Guard Clauses, Polymorphism, Null Object
    simplifying-apis/              # Rename, Parameterize, Parameter Object, Remove Flag Argument, Factory
    generalization-and-inheritance/# Pull Up/Push Down, Extract Superclass/Interface, Replace Inheritance with Delegation
    index.mdx                      # EN landing (splash)
  th/                              # Thai — served at /th/...
    (same module directories)
    index.mdx
```

## Components & Lesson Template

- **`Mermaid.astro`** `{ code, title }` — hoist the diagram as `export const ...Diagram = \`flowchart ...\`` and render `<Mermaid code={...Diagram} title="..."/>`.
- **`Callout.astro`** `{ title }`, **`Quiz.tsx`** `{ id, questions }` (0-based `answer`, field `q`), **`ProgressTracker.tsx`** `{ id }`.
- Multi-language code uses Starlight's **`{ Tabs, TabItem }`** from `@astrojs/starlight/components` — no custom component.

Per-refactoring lesson order: frontmatter → imports → **Intent** → **The smell** → **Before → After** (`<Tabs syncKey="lang">` with TypeScript/Python/Go/Rust `<TabItem>`s) → **Mechanics** (small, test-backed steps) → **When to use / trade-offs** (and the inverse) → **Related** → `<Callout>` → `<Quiz>` → `<ProgressTracker>` (last). IDs follow `<module>/<slug>`.

> **⚠️ Authoring notes:**
> - **Code lives in fenced blocks inside `<TabItem>`** (literal — no `${`/backtick escaping). The four languages in order: TypeScript, Python, Go, Rust. (Go and Rust lack class inheritance — the Generalization module shows the idiomatic composition/embedding/trait equivalent and says so.)
> - **Never a bare `{...}`/`${...}` in prose** — keep code in fenced blocks / Tabs; Mermaid source in `export const`. **Diagrams are Mermaid `flowchart`/`classDiagram`, not ASCII.**
> - **Each lesson must end on its `<ProgressTracker .../>`** — no stray trailing tags.
> - **Internal links include the base path** and the matching locale (`/refactoring-from-zero-to-hero/en/...` on EN, `/th/...` on TH).

## Deployment

Fully static → `dist/`. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/refactoring-from-zero-to-hero'`.

Deployed to GitHub Pages via **branch-source** (`gh-pages`): build `dist/`, add `.nojekyll`, push to `gh-pages`, set **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/`**, then **request a Pages build** (`gh api -X POST repos/<owner>/<repo>/pages/builds`) — flipping the source alone does not trigger one. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
