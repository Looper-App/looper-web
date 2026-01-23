import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis'
import { useEffect } from 'react';

// Layouts
import MarketingLayout from './layouts/MarketingLayout';

// Pages
import Home from './pages/marketing/Home';
import About from './pages/marketing/About';
import Contact from './pages/marketing/Contact';

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
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
