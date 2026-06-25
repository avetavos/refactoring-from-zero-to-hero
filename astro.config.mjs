// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/design-patterns-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Design Patterns — From Zero to Hero',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/design-patterns-from-zero-to-hero/enhance.js' } },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/design-patterns-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Principles', items: [{ autogenerate: { directory: 'intro-and-principles' } }] },
        { label: 'Creational Patterns', items: [{ autogenerate: { directory: 'creational' } }] },
        { label: 'Structural Patterns', items: [{ autogenerate: { directory: 'structural' } }] },
        { label: 'Behavioral Patterns I', items: [{ autogenerate: { directory: 'behavioral-essentials' } }] },
        { label: 'Behavioral Patterns II', items: [{ autogenerate: { directory: 'behavioral-advanced' } }] },
      ],
      }), preact()],
});