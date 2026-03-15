import { motion as Motion } from 'framer-motion';

const stats = [
    { label: "Active Loops", value: "12k+" },
    { label: "Cities", value: "45" },
    { label: "Daily Meetups", value: "850+" },
];

export default function Community() {
    return (
        <section className="py-32 bg-charcoal text-white relative overflow-hidden">
            {/* Background Noise/Gradient */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E7C21D_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <Motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
                >
                    <h2 className="text-6xl md:text-8xl font-condensed font-bold leading-[0.9]">
                        JOIN THE <br /> <span className="text-primary">MOVEMENT</span>
                    </h2>
                    <p className="max-w-md text-gray-400 text-lg">
                        Looper is growing fast. Every day, thousands of people step out, get active, and meet someone new.
                    </p>
                </Motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-16">
                    {stats.map((stat, idx) => (
                        <Motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="text-center md:text-left"
                        >
                            <div className="text-7xl md:text-9xl font-condensed font-bold text-transparent stroke-text hover:text-white transition-colors duration-500 cursor-default">
                                {stat.value}
                            </div>
                            <div className="text-xl text-primary font-medium mt-2 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
