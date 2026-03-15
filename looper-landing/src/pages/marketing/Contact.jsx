import { motion as Motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="pt-32 pb-24 container mx-auto px-4 min-h-screen flex flex-col justify-center">
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <h1 className="text-6xl md:text-9xl font-condensed font-bold mb-8 text-charcoal leading-none">
                    <br /> <span className="text-primary stroke-text-white">LOOP IN WITH THE TEAM</span>
                </h1>

                <div className="mt-16 border-t border-gray-200 pt-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4">Contact Details</p>
                            <a
                                href="mailto:athul@looper.in"
                                className="text-3xl md:text-4xl font-bold text-charcoal mb-2 inline-flex hover:text-primary transition-colors"
                            >
                                athul@looper.in
                            </a>
                            <div className="mt-8">
                                <p className="text-xl font-bold text-charcoal">Athul Sreekumar</p>
                                <p className="text-primary font-medium tracking-wide">Founder - Looper</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4">Office</p>
                            <p className="text-xl text-charcoal leading-relaxed">
                                Around the neighborhood,<br />
                                Bangalore, Karnataka.
                            </p>
                        </div>
                    </div>
                </div>
            </Motion.div>
        </div>
    )
}
