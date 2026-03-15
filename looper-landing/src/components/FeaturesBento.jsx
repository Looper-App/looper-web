import BentoCard from './ui/BentoCard';
import { MapPin, Activity, Zap, ArrowRight } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import mapBackground from '../assets/map.png';

export default function FeaturesBento() {
    return (
        <section id="features-bento" className="py-24 px-4 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                <h2 className="text-6xl md:text-8xl font-condensed font-bold leading-[0.9]">
                    BUILT FOR <br /> <span className="text-primary stroke-text-transparent">MOVEMENT.</span>
                </h2>
                <p className="max-w-md text-gray-500 text-lg text-right mt-8 md:mt-0">
                    Everything you need to find your rhythm and your people.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[360px]">
                {/* Card 1: Live Map (Large) */}
                <BentoCard className="md:col-span-2 lg:col-span-2 relative group" delay={0.1}>
                    <div className="absolute inset-0 bg-[url('/images/pexels-mannydream-6561813.jpg')] bg-cover bg-center transition-all duration-700 group-hover:scale-105"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                        {/* <div className="flex items-center gap-2 mb-2 text-green-400 font-bold uppercase tracking-widest text-xs">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Live Now
                        </div> */}
                        <h3 className="text-4xl font-condensed font-bold text-white mb-2">Real-time Map</h3>
                        <p className="text-gray-300 max-w-sm">See who's running, cycling, or hanging out nearby instantly.</p>
                    </div>
                </BentoCard>

                {/* Card 2: Activity Stats */}
                <BentoCard
                    className="relative overflow-hidden p-8 flex flex-col justify-between text-white"
                    delay={0.2}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${mapBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-black/10" />
                    <Activity className="w-12 h-12 text-primary relative z-10" />
                    <div className="relative z-10">
                        <div className="text-6xl font-condensed font-bold text-white">CITY PULSE</div>
                        <p className="text-gray-200 mt-2">See activity happening around you in real time. Running. Coffee walks. or anything, really</p>
                    </div>
                </BentoCard>

                {/* Card 3: Instant Chat */}
                <BentoCard className="bg-cream dark:bg-[#151518]! p-8 flex flex-col items-center justify-center text-center group" delay={0.3}>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-condensed font-bold mb-2">Instant Sync</h3>
                    <p className="text-gray-500">Coordinate meetups in seconds.</p>
                </BentoCard>

                {/* Card 4: Community (Wide) */}
                <BentoCard className="md:col-span-2 lg:col-span-2 relative overflow-hidden flex items-center bg-[#E7C21D] text-white" delay={0.4}>
                    <div className="absolute inset-0 opacity-100 bg-[url('/images/pexels-ashford-marx-1565533-7150075.jpg')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
                    <div className="relative z-10 p-12 flex flex-col md:flex-row gap-8 items-center w-full">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-5xl font-condensed font-bold mb-4 text-white drop-shadow-2xl">Join the Tribe</h3>
                            <p className="text-white text-xl font-medium drop-shadow-lg max-w-lg">Connect with people in your city.</p>
                        </div>
                        <div className="hidden md:block">
                            <ArrowRight className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
}
