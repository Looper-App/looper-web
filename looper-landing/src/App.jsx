import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis'
import { useEffect, useRef, Suspense, lazy } from 'react';

// Layouts
import MarketingLayout from './layouts/MarketingLayout';

// Pages (Home is the primary landing route, kept in the main bundle;
// secondary routes are code-split so first-time visitors don't pay for them)
import Home from './pages/marketing/Home';
const About = lazy(() => import('./pages/marketing/About'));
const Contact = lazy(() => import('./pages/marketing/Contact'));
const Privacy = lazy(() => import('./pages/marketing/Privacy'));
const ChildSafety = lazy(() => import('./pages/marketing/ChildSafety'));

// React Router doesn't reset scroll on navigation, and Lenis keeps its own
// scroll target that would otherwise fight a plain window.scrollTo, so both
// need to be reset together whenever the route changes.
function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // `behavior: 'instant'` is required here: the plain two-arg
    // window.scrollTo(0, 0) still defers to the global CSS
    // `scroll-behavior: smooth`, which animates the jump and fights
    // with Lenis's own raf loop, leaving the page stuck mid-scroll.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname, lenisRef]);

  return null;
}

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop lenisRef={lenisRef} />
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
