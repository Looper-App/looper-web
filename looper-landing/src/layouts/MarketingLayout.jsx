import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function MarketingLayout() {
    return (
        <div className="min-h-screen bg-cream selection:bg-primary/20 selection:text-primary overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-white/85 dark:bg-[#050505]/85 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5 transition-all duration-300">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link to="/" className="text-3xl font-condensed font-bold text-primary tracking-tight">looper.</Link>
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex gap-8 font-bold text-base text-[var(--color-text-main)]">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
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
