export default function Footer() {
    return (
        <footer className="bg-charcoal text-cream py-24 border-t border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h2 className="text-8xl font-condensed font-bold leading-none mb-6">LOOPER.</h2>
                    <p className="max-w-md text-gray-500 text-lg">
                        Made for the movers, the shakers, and the morning run takers.
                    </p>
                </div>
                <div className="flex gap-16">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Socials</h4>
                        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Legal</h4>
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-24 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Looper Inc. Bangalore.
            </div>
        </footer>
    );
}
