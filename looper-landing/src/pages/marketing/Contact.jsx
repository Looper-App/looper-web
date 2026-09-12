import { motion as Motion } from 'framer-motion';
import Seo from '../../components/Seo';

export default function Contact() {
    return (
        <div className="pt-32 pb-24 container mx-auto px-4 min-h-screen flex flex-col justify-center">
            <Seo
                title="Contact Looper — Get in Touch with the Team"
                description="Have a question, partnership idea, or investment interest? Reach the Looper team directly — we're building the social layer for real-world activity in Bangalore."
                path="/contact"
            />
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <h1 className="text-6xl md:text-9xl font-condensed font-bold mb-8 leading-none">
                    <br /> <span className="text-primary stroke-text-white">LOOP IN WITH THE TEAM</span>
                </h1>

                <p className="text-xl text-gray-500 max-w-2xl -mt-4 mb-4 font-medium">
                    Investors, press, and potential partners — this is the fastest way to reach us directly.
                </p>

                <div className="mt-16 border-t border-gray-200 pt-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4">Contact Details</p>
                            <a
                                href="mailto:athul@looper.in"
                                className="text-3xl md:text-4xl font-bold mb-2 inline-flex hover:text-primary transition-colors"
                            >
                                athul@looper.in
                            </a>
                            <div className="mt-8">
                                <p className="text-xl font-bold">Athul Sreekumar</p>
                                <p className="text-primary font-medium tracking-wide">Founder - Looper</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4">Office</p>
                            <p className="text-xl leading-relaxed">
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
