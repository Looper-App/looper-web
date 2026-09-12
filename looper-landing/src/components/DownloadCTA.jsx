import { useState } from 'react';
import { motion as Motion } from 'framer-motion';

const WAITLIST_ENDPOINT = 'https://formspree.io/f/xrpgvwdz';

export default function DownloadCTA() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(WAITLIST_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error('Request failed');

            setStatus('success');
            setEmail('');
        } catch {
            setStatus('error');
        }
    }

    return (
        <section id="download-cta" className="py-24 bg-primary text-black select-none">
            <div className="container mx-auto px-4 text-center">
                <Motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-condensed mb-6"
                >
                    Ready to get in the Loop?
                </Motion.h2>
                <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
                    Join the waitlist and be first in line when Looper launches in your city.
                </p>

                {status === 'success' ? (
                    <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md mx-auto bg-black text-primary rounded-xl px-6 py-4 font-medium select-text"
                    >
                        You're on the list! We'll email you the moment Looper is live.
                    </Motion.div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto select-text"
                    >
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@email.com"
                            aria-label="Email address"
                            className="flex-1 px-6 py-4 rounded-xl border-2 border-black bg-white text-charcoal font-medium placeholder:text-gray-400 focus:outline-none"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-charcoal transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {status === 'loading' ? 'Joining…' : 'Join the Waitlist'}
                        </button>
                    </form>
                )}

                {status === 'error' && (
                    <p className="mt-4 text-sm text-red-950 font-medium select-text">
                        Something went wrong — please try again in a moment.
                    </p>
                )}

                <div className="mt-16 text-sm opacity-60">
                    &copy; {new Date().getFullYear()} Looper Inc. All rights reserved.
                </div>
            </div>
        </section>
    );
}
