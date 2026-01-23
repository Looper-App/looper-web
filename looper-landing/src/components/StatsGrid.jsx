import BentoCard from './ui/BentoCard';
import { motion as Motion } from 'framer-motion';

const stats = [
    { label: "Active Loops", value: "85K" },
    { label: "Cities", value: "45" },
    { label: "Avg Rating", value: "4.9" },
    { label: "Downloads", value: "2M+" },
];

export default function StatsGrid() {
    return (
        <section className="py-12 px-4 container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <BentoCard key={i} className="p-8 text-center bg-white dark:bg-[#151518] border-none!" delay={0.1 * i}>
                        <div className="text-5xl md:text-7xl font-condensed font-bold text-transparent stroke-text-white dark:stroke-text-white mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm font-bold uppercase tracking-widest text-gray-500">
                            {stat.label}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
