import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis'
import { useEffect, Suspense, lazy } from 'react';

// Layouts
import MarketingLayout from './layouts/MarketingLayout';

// Pages (Home is the primary landing route, kept in the main bundle;
// secondary routes are code-split so first-time visitors don't pay for them)
import Home from './pages/marketing/Home';
const About = lazy(() => import('./pages/marketing/About'));
const Contact = lazy(() => import('./pages/marketing/Contact'));
const Privacy = lazy(() => import('./pages/marketing/Privacy'));
const ChildSafety = lazy(() => import('./pages/marketing/ChildSafety'));

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/child-safety" element={<ChildSafety />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
