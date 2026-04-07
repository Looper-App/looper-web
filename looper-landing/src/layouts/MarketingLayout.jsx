import { Outlet, NavLink, Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function MarketingLayout() {
    return (
        <div className="min-h-screen bg-black selection:bg-primary/20 selection:text-primary overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-black/95 backdrop-blur-md border-b border-gray-900/50 transition-all duration-300">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link to="/" className="text-3xl font-condensed font-bold text-primary tracking-tight">looper.</Link>
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex gap-8 font-bold text-base">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `transition-colors ${isActive ? 'text-primary' : 'text-[var(--color-text-main)] hover:text-primary'}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `transition-colors ${isActive ? 'text-primary' : 'text-[var(--color-text-main)] hover:text-primary'}`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `transition-colors ${isActive ? 'text-primary' : 'text-[var(--color-text-main)] hover:text-primary'}`
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
