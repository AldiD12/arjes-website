import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Every route on the site — add new pages here
const routes = [
  '/',
  '/plan-your-trip',
  '/our-standard',
  '/journal',
  '/journal/is-albania-safe',
  '/journal/best-time-to-visit',
  '/journal/theth-vs-valbona',
  '/tours/unesco-heritage-route',
  '/tours/theth-blue-eye-expedition',
  '/tours/albanian-riviera-escape',
  '/tours/valbona-theth-crossing',
  '/tours/cultural-immersion-south',
  '/collections/coastal-riviera',
  '/collections/alpine-adventures',
  '/collections/culture-history',
];

async function prerender() {
  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    'utf-8'
  );

  const { render } = await import('./dist-server/entry-server.js');

  for (const route of routes) {
    const { html, helmet } = render(route);

    let page = template;

    // Inject rendered HTML into the root div
    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Inject helmet head tags (title, meta, link, script/json-ld)
    if (helmet) {
      const headTags = [
        helmet.title?.toString() || '',
        helmet.meta?.toString() || '',
        helmet.link?.toString() || '',
        helmet.script?.toString() || '',
      ]
        .filter(Boolean)
        .join('\n    ');

      if (headTags) {
        page = page.replace('</head>', `    ${headTags}\n  </head>`);
      }
    }

    // Write the file — "/" becomes dist/index.html, "/journal" becomes dist/journal/index.html
    const filePath =
      route === '/'
        ? path.resolve(__dirname, 'dist/index.html')
        : path.resolve(__dirname, `dist${route}/index.html`);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, page);
    console.log(`  ✓ ${route}`);
  }

  console.log(`\nPrerendered ${routes.length} routes successfully.`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
