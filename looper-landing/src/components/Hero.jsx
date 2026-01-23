import { motion as Motion } from 'framer-motion';
import { MapPin, Users, Activity } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
            <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none opacity-10">
                    <Motion.div
                        className="absolute inset-0 rounded-full border-[2px] border-primary/50"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <Motion.div
                        className="absolute inset-0 rounded-full border-[40px] border-primary/5"
                        animate={{ scale: [1, 1.1], opacity: [0.3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                    />
                    {/* Floating Icons for Maximalism */}
                    <Motion.div
                        className="absolute top-1/4 left-1/4 text-primary opacity-20"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Activity className="w-24 h-24" />
                    </Motion.div>
                    <Motion.div
                        className="absolute bottom-1/4 right-1/4 text-charcoal opacity-10"
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Users className="w-32 h-32" />
                    </Motion.div>
                </div>

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/10"
                >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-charcoal-light">Building in Bangalore</span>
                </Motion.div>

                <Motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-charcoal mb-6"
                >
                    Find Your <span className="text-primary">Loop</span>
                </Motion.h1>

                <Motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-charcoal-light max-w-2xl mb-10 font-light leading-relaxed"
                >
                    Connect with people nearby for sports, hobbies, and spontaneous meetups. <br className="hidden md:block" />
                    See what's happening around you, right now.
                </Motion.p>

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    <button className="bg-charcoal text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-charcoal/90 transition-colors shadow-lg shadow-charcoal/20">
                        {/* Apple Icon */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.1 4.12-.66 2.18.51 3.25 1.7 4.18 4-3.75 1.5-3.32 6.51.53 8.89zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                        <div className="text-left leading-none">
                            <span className="block text-xs opacity-70">Download on the</span>
                            <span className="text-lg">App Store</span>
                        </div>
                    </button>
                    <button className="bg-white text-charcoal border border-gray-200 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-lg shadow-gray-200/50">
                        {/* Google Play Icon */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,0.44L6.05,2.66Z" fill="currentColor" /></svg>
                        <div className="text-left leading-none">
                            <span className="block text-xs opacity-70">Get it on</span>
                            <span className="text-lg">Google Play</span>
                        </div>
                    </button>
                </Motion.div>

            </div>
        </section>
    );
}
