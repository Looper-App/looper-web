import { motion as Motion } from 'framer-motion';

const words = ["RUNNING", "CYCLING", "EXHIBITIONS", "MEETUPS", "HIKING", "YOGA", "FOOTBALL", "ARTISTS", "CLUBS"];

export default function Marquee() {
    return (
        <div className="w-full py-12 bg-charcoal overflow-hidden flex items-center transform -rotate-2 origin-left scale-110 border-y-4 border-primary/20">
            <div className="flex whitespace-nowrap">
                <Motion.div
                    className="flex gap-16 pr-16"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...words, ...words, ...words, ...words].map((word, i) => (
                        <span key={i} className="text-6xl md:text-8xl font-condensed font-bold text-primary opacity-90">
                            {word}
                        </span>
                    ))}
                </Motion.div>
                <Motion.div
                    className="flex gap-16 pr-16"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...words, ...words, ...words, ...words].map((word, i) => (
                        <span key={`dup-${i}`} className="text-6xl md:text-8xl font-condensed font-bold text-primary opacity-90">
                            {word}
                        </span>
                    ))}
                </Motion.div>
            </div>
        </div>
    );
}
