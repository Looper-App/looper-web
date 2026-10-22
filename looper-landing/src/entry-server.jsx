import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MarketingLayout from './layouts/MarketingLayout';
import Home from './pages/marketing/Home';
import About from './pages/marketing/About';
import Pitch from './pages/marketing/Pitch';
import Contact from './pages/marketing/Contact';
import Privacy from './pages/marketing/Privacy';
import ChildSafety from './pages/marketing/ChildSafety';

// Prerendering-only entry point. The client bundle code-splits these pages
// with React.lazy for smaller initial downloads, but a build-time static
// render needs the real content synchronously, so this imports every page
// eagerly instead of duplicating a shared route config for six routes.
export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <Routes>
            <Route element={<MarketingLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pitch" element={<Pitch />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/child-safety" element={<ChildSafety />} />
            </Route>
          </Routes>
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );

  return { html, helmet: helmetContext.helmet };
}
