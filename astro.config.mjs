// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://software-design.avetavos.com',
  base: '/refactoring',
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
        { tag: 'script', attrs: { type: 'module', src: '/refactoring/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/refactoring/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/refactoring/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/refactoring/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#16A34A' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Refactoring" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/refactoring/sw.js',{scope:'/refactoring/'}).catch(function(){})})}" },
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