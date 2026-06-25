// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/refactoring-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Refactoring — From Zero to Hero',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/refactoring-from-zero-to-hero/enhance.js' } },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/refactoring-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Principles', items: [{ autogenerate: { directory: 'intro-and-principles' } }] },
        { label: 'Composing Methods', items: [{ autogenerate: { directory: 'composing-methods' } }] },
        { label: 'Moving Features', items: [{ autogenerate: { directory: 'moving-features' } }] },
        { label: 'Organizing Data', items: [{ autogenerate: { directory: 'organizing-data' } }] },
        { label: 'Simplifying Conditionals', items: [{ autogenerate: { directory: 'simplifying-conditionals' } }] },
        { label: 'Simplifying APIs', items: [{ autogenerate: { directory: 'simplifying-apis' } }] },
        { label: 'Generalization & Inheritance', items: [{ autogenerate: { directory: 'generalization-and-inheritance' } }] },
      ],
      }), preact()],
});