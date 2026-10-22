// Build-time static rendering: generates real HTML per route so crawlers
// that don't execute JS (or delay JS execution) get actual page content
// instead of an empty <div id="root">. Runs after both the client build
// (`vite build`, -> dist/) and the SSR build
// (`vite build --ssr src/entry-server.jsx --outDir dist-ssr`).
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const ssrEntry = path.join(rootDir, 'dist-ssr', 'entry-server.js');

const ROUTES = ['/', '/about', '/pitch', '/contact', '/privacy', '/child-safety'];

// The same static tags main.jsx strips client-side before Helmet mounts —
// removed here too so the prerendered file doesn't ship duplicate
// title/canonical/og/twitter tags alongside the route-specific ones.
const STATIC_TAG_PATTERNS = [
  /\n?\s*<title>.*?<\/title>/i,
  /\n?\s*<meta name="description"[^>]*\/>/i,
  /\n?\s*<meta name="robots"[^>]*\/>/i,
  /\n?\s*<link rel="canonical"[^>]*\/>/i,
  /\n?\s*<meta property="og:title"[^>]*\/>/i,
  /\n?\s*<meta property="og:description"[^>]*\/>/i,
  /\n?\s*<meta property="og:url"[^>]*\/>/i,
  /\n?\s*<meta property="og:image"[^>]*\/>/i,
  /\n?\s*<meta name="twitter:title"[^>]*\/>/i,
  /\n?\s*<meta name="twitter:description"[^>]*\/>/i,
  /\n?\s*<meta name="twitter:image"[^>]*\/>/i,
];

// React 19 hoists <title>/<meta>/<link>/<base> tags rendered anywhere in the
// tree to the front of the render output. react-helmet-async's React 19
// dispatcher relies on exactly this, so the SSR string starts with one clean
// contiguous block of those tags, followed by the actual body markup.
function splitHeadAndBody(html) {
  const leadingTag = /^\s*(<title>.*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<base\b[^>]*\/?>)/i;
  let head = '';
  let rest = html;
  let match;
  while ((match = rest.match(leadingTag))) {
    head += match[1];
    rest = rest.slice(match[0].length);
  }
  return { head, body: rest };
}

async function main() {
  if (!existsSync(ssrEntry)) {
    throw new Error(`SSR bundle not found at ${ssrEntry} — run the SSR build first.`);
  }

  const template = await readFile(path.join(distDir, 'index.html'), 'utf-8');
  const { render } = await import(pathToFileURL(ssrEntry).href);

  for (const route of ROUTES) {
    const { html } = render(route);
    const { head: routeHead, body } = splitHeadAndBody(html);

    let pageHtml = template;
    for (const pattern of STATIC_TAG_PATTERNS) {
      pageHtml = pageHtml.replace(pattern, '');
    }
    pageHtml = pageHtml.replace(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      `<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    ${routeHead}`,
    );
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route.slice(1), 'index.html');

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, pageHtml, 'utf-8');
    console.log(`prerendered ${route} -> ${path.relative(rootDir, outPath)}`);
  }

  await rm(path.join(rootDir, 'dist-ssr'), { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
