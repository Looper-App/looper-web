import { motion as Motion } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroBento() {
    return (
        <section className="pt-32 pb-12 px-4 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[800px]">
                {/* Main Hero Card (Left) */}
                <BentoCard className="lg:col-span-8 relative p-8 md:p-12 flex flex-col justify-between overflow-hidden border-none!">
                    <div className="absolute inset-0 bg-[url('/images/pexels-cottonbro-5650910.jpg')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10 transition-colors duration-500"></div>

                    <div>
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-black/5 dark:border-white/10 text-sm font-medium mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Building for iOS & Android
                        </Motion.div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-condensed font-bold leading-[0.9] tracking-tighter mb-8 relative z-20 text-white">
                            FIND YOUR <br /> <span className="text-primary stroke-text-white">LOOP.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed relative z-20 drop-shadow-md">
                            The social network for people who do things. Connect through running, art, music, and spontaneous moments.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-12 relative z-20">
                        <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30 border border-white/10">
                            Download App
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/30 text-white text-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                            View Features
                        </button>
                    </div>
                </BentoCard>

                {/* Right Column Stack */}
                <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                    {/* Visual Card (Top) */}
                    <BentoCard className="flex-1 relative bg-charcoal text-white p-8 flex items-center justify-center overflow-hidden" delay={0.2}>
                        <div className="absolute inset-0 bg-[url('/images/pexels-suguna-14106728.jpg')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-500"></div>
                        <div className="relative z-10 text-center">
                            <div className="text-6xl font-condensed font-bold tracking-tighter text-white drop-shadow-2xl">
                                CREATE
                            </div>
                        </div>
                    </BentoCard>

                    {/* Stat Card (Bottom) */}
                    <BentoCard className="h-48 bg-white dark:bg-[#1E1E22]! p-8 flex flex-col justify-center items-center text-center" delay={0.4}>
                        <div className="text-gray-400 font-medium uppercase tracking-widest text-xs mb-2">Establishing</div>
                        <div className="text-6xl font-condensed font-bold text-charcoal dark:text-white">
                            2026
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
}
