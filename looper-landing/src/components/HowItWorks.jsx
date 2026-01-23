import { motion as Motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Create Profile', desc: 'Add your interests and verify identity.' },
    { num: '02', title: 'Find a Loop', desc: 'Browse live map for nearby activities.' },
    { num: '03', title: 'Join & Chat', desc: 'Request to join and coordinate details.' },
    { num: '04', title: 'Show Up', desc: 'Meet in real life and track your activity.' },
];

export default function HowItWorks() {
    return (
        <section className="py-32 bg-cream text-charcoal">
            <div className="container mx-auto px-4">
                <Motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm font-bold tracking-widest uppercase mb-16 text-primary"
                >
                    How it works
                </Motion.h2>

                <div className="space-y-8">
                    {steps.map((step, i) => (
                        <Motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="group border-b border-gray-200 py-12 flex flex-col md:flex-row items-baseline gap-8 hover:bg-white hover:px-8 transition-all duration-300 rounded-2xl cursor-pointer"
                        >
                            <span className="text-sm font-mono text-gray-400">({step.num})</span>
                            <h3 className="text-5xl md:text-7xl font-condensed font-bold group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-xl text-gray-500 md:ml-auto max-w-sm">
                                {step.desc}
                            </p>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
