import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// index.html ships static SEO tags so crawlers that don't execute JS (most
// social link-preview bots) still get a correct title/description/image for
// the site. react-helmet-async has no awareness of those static tags though,
// so it would otherwise append its own per-page versions alongside them
// instead of replacing them, leaving every route with duplicate <title>,
// canonical, and og/twitter tags. Clearing them before mount means clients
// that do run this script end up with exactly one, page-accurate set.
[
  'title',
  'meta[name="description"]',
  'meta[name="robots"]',
  'link[rel="canonical"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[property="og:image"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:image"]',
].forEach((selector) => document.head.querySelector(selector)?.remove());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
