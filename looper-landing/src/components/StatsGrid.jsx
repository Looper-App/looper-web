import BentoCard from './ui/BentoCard';
import { motion as Motion } from 'framer-motion';

const stats = [
    "Commit to real-life activities with others. No endless planning threads.",
    "Meet people who actually follow through.",
    "Loops keep communities tight and accountable.",
    "Build habits by committing to real-world loops.",
];

export default function StatsGrid() {
    return (
        <section className="py-12 px-4 container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px] md:auto-rows-[250px]">
                {stats.map((stat, i) => (
                    <BentoCard
                        key={i}
                        className="p-8 text-center bg-white dark:bg-[#151518] border-none! flex flex-col justify-center"
                        delay={0.1 * i}
                    >
                        <div className="text-base md:text-lg font-semibold uppercase tracking-[0.3em] text-primary leading-relaxed">
                            {stat}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
