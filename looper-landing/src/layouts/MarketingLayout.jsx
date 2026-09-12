import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Footer from '../components/Footer';
import logo from '../assets/logo-black.png';

const NAV_LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/pitch', label: 'Pitch' },
    { to: '/contact', label: 'Contact' },
];

function navLinkClass({ isActive }) {
    return `transition-colors ${isActive ? 'text-primary' : 'text-[var(--color-text-main)] hover:text-primary'}`;
}

export default function MarketingLayout() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black selection:bg-primary/20 selection:text-primary overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-black/95 backdrop-blur-md border-b border-gray-900/50 transition-all duration-300">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-3xl font-condensed font-bold text-primary tracking-tight">
                        <img src={logo} alt="Looper" className="w-9 h-9 rounded-full" />
                        looper.
                    </Link>

                    <div className="hidden md:flex gap-8 font-bold text-base">
                        {NAV_LINKS.map(({ to, label, end }) => (
                            <NavLink key={to} to={to} end={end} className={navLinkClass}>
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        className="md:hidden text-[var(--color-text-main)] p-2 -mr-2"
                    >
                        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <Motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden overflow-hidden border-t border-gray-900/50"
                        >
                            <div className="container mx-auto px-4 py-6 flex flex-col gap-6 font-bold text-xl">
                                {NAV_LINKS.map(({ to, label, end }) => (
                                    <NavLink key={to} to={to} end={end} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                                        {label}
                                    </NavLink>
                                ))}
                            </div>
                        </Motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
