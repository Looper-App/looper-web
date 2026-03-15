import { motion as Motion } from 'framer-motion';

export default function DownloadCTA() {
    return (
        <section id="download-cta" className="py-24 bg-primary text-black select-none">
            <div className="container mx-auto px-4 text-center">
                <Motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-condensed mb-6"
                >
                    Ready to get in the Loop?
                </Motion.h2>
                <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
                    Join thousands of other active people in your neighborhood today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-transparent text-black border-2 border-black px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-colors shadow-lg">
                        {/* Apple Icon */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.1 4.12-.66 2.18.51 3.25 1.7 4.18 4-3.75 1.5-3.32 6.51.53 8.89zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                        <div className="text-left leading-none">
                            <span className="block text-xs opacity-70">Download on the</span>
                            <span className="text-lg">App Store</span>
                        </div>
                    </button>
                    <button className="bg-transparent text-black border-2 border-black px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-colors">
                        {/* Google Play Icon */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,0.44L6.05,2.66Z" /></svg>
                        <div className="text-left leading-none">
                            <span className="block text-xs opacity-70">Get it on</span>
                            <span className="text-lg">Google Play</span>
                        </div>
                    </button>
                </div>

                <div className="mt-16 text-sm opacity-60">
                    &copy; {new Date().getFullYear()} Looper Inc. All rights reserved.
                </div>
            </div>
        </section>
    );
}
