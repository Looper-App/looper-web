import { useCallback, useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Seo from '../../components/Seo';

const SLIDE_COUNT = 8;
const slides = Array.from({ length: SLIDE_COUNT }, (_, i) => `/pitch/${i + 1}.png`);

export default function Pitch() {
    const [index, setIndex] = useState(0);

    const goTo = useCallback((i) => {
        setIndex((i + SLIDE_COUNT) % SLIDE_COUNT);
    }, []);

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === 'ArrowRight') goTo(index + 1);
            if (e.key === 'ArrowLeft') goTo(index - 1);
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [index, goTo]);

    return (
        <div className="pt-28 pb-12 min-h-screen">
            <Seo
                title="Pitch Deck — Looper"
                description="Looper's investor pitch deck: the problem, our solution, safety-first design, business model, market strategy, and financials."
                path="/pitch"
                noindex
            />

            <div className="container mx-auto px-4">
                <h1 className="text-6xl md:text-8xl font-condensed font-bold mb-4 text-charcoal">
                    PITCH <span className="text-primary">DECK</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mb-8">
                    An overview of the problem, our solution, and where Looper is headed.
                </p>
            </div>

            <div className="relative w-full mx-auto px-2 sm:px-4">
                <div className="relative w-full aspect-video md:aspect-auto md:h-[80vh] rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-black">
                    <AnimatePresence mode="wait">
                        <Motion.img
                            key={index}
                            src={slides[index]}
                            alt={`Looper pitch deck, slide ${index + 1} of ${SLIDE_COUNT}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                    </AnimatePresence>

                    <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={() => goTo(index - 1)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next slide"
                        onClick={() => goTo(index + 1)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => goTo(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                        />
                    ))}
                </div>

                <div className="text-center text-sm text-gray-400 mt-3 font-medium">
                    {index + 1} / {SLIDE_COUNT}
                </div>
            </div>
        </div>
    );
}
