import { motion as Motion } from 'framer-motion';

export default function BentoCard({ children, className = "", delay = 0 }) {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={`bg-white/5 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-[2rem] overflow-hidden ${className}`}
        >
            {children}
        </Motion.div>
    );
}
