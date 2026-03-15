import { motion as Motion } from 'framer-motion';

export default function AppShowcase() {
    return (
        <section className="py-24 overflow-hidden relative">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl font-bold text-charcoal mb-4">Designed for Motion</h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    A clean, intuitive interface that gets you out of the app and into the real world.
                </p>
            </div>

            {/* Mock Showcase - Replace with real screenshots later */}
            <div className="flex justify-center gap-8 md:gap-16 px-4 overflow-x-auto pb-12 snap-x pt-12">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none -z-10 flex items-center justify-center opacity-5">
                    <span className="text-[20vw] font-bold font-condensed whitespace-nowrap text-primary">DISCOVER</span>
                </div>

                {/* Screen 1: Discovery */}
                <Motion.div
                    whileHover={{ y: -20, rotate: -2 }}
                    className="snap-center shrink-0 w-[280px] h-[580px] bg-charcoal rounded-[2.5rem] p-2 shadow-2xl border-2 border-gray-800"
                >
                    <div className="w-full h-full bg-cream rounded-[2.2rem] overflow-hidden relative flex flex-col items-center pt-8 px-4">
                        {/* Simple UI Mockup */}
                        <div className="w-full text-center">
                            <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Lower East Side</div>
                            <div className="text-2xl font-condensed font-bold text-charcoal">Discovery</div>
                        </div>
                        <div className="mt-8 relative w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping absolute" />
                            <div className="w-24 h-24 rounded-full border border-primary/10" />
                            {/* Coffee Icon */}
                            <div className="absolute top-4 right-8 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs">☕️</div>
                        </div>
                    </div>
                </Motion.div>

                {/* Screen 2: Activity Card */}
                <Motion.div
                    whileHover={{ y: -20, scale: 1.05 }}
                    className="snap-center shrink-0 w-[280px] h-[580px] bg-charcoal rounded-[2.5rem] p-2 shadow-2xl border-2 border-gray-800 translate-y-12 md:translate-y-0"
                >
                    <div className="w-full h-full bg-cream rounded-[2.2rem] overflow-hidden relative flex flex-col justify-end pb-8 px-4">
                        <div className="bg-white p-4 rounded-2xl shadow-lg mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="font-bold text-charcoal">5k Run Club</span>
                                <span className="ml-auto text-gray-400 text-xs">300m</span>
                            </div>
                            <div className="text-sm text-gray-500">Starting in 10 mins • 12 people</div>
                        </div>
                    </div>
                </Motion.div>

                {/* Screen 3: Chat */}
                <Motion.div
                    whileHover={{ y: -20, rotate: 2 }}
                    className="snap-center shrink-0 w-[280px] h-[580px] bg-charcoal rounded-[2.5rem] p-2 shadow-2xl border-2 border-gray-800"
                >
                    <div className="w-full h-full bg-cream rounded-[2.2rem] overflow-hidden relative flex flex-col pt-8 px-4">
                        <div className="text-center mb-6">
                            <div className="text-2xl font-condensed font-bold text-charcoal">Run Club Chat</div>
                            <div className="text-xs text-green-500">12 Online</div>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                                <p className="text-xs text-gray-400 mb-1">Sarah</p>
                                <p className="text-sm text-charcoal">Where are we meeting?</p>
                            </div>
                            <div className="bg-primary/10 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%] ml-auto">
                                <p className="text-sm text-charcoal">Main entrance!</p>
                            </div>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
}
