export default function Privacy() {
    return (
        <main className="bg-charcoal text-cream min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-6xl font-condensed font-bold mb-4">Privacy Policy</h1>
                <p className="text-gray-500 text-sm mb-16">Effective Date: June 20, 2026</p>

                <div className="flex flex-col gap-12 text-gray-300 text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">1. Introduction</h2>
                        <p>
                            Looper ("we," "us," or "our") is committed to protecting your privacy. This Privacy
                            Policy explains what information we collect, how we use it, and your rights regarding
                            your data when you use the Looper app and its services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">2. Information We Collect</h2>

                        <h3 className="text-lg font-semibold text-cream mt-6 mb-3">Account &amp; Profile Information</h3>
                        <p className="mb-3">When you create an account, we collect:</p>
                        <ul className="list-disc list-inside flex flex-col gap-1 text-gray-400">
                            <li>Name</li>
                            <li>Date of birth</li>
                            <li>Gender</li>
                            <li>Phone number</li>
                            <li>Bio (optional)</li>
                            <li>Interests and dislikes</li>
                            <li>Answers to onboarding questions</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-cream mt-6 mb-3">Location Information</h3>
                        <p>
                            With your permission, we collect your geographic location (latitude and longitude) to
                            help you discover nearby activities and connect with people around you. Location is
                            stored only when you provide it and can be removed at any time.
                        </p>

                        <h3 className="text-lg font-semibold text-cream mt-6 mb-3">Voice Conversation Data</h3>
                        <p className="mb-3">When you use Looper's voice assistant, we collect and store:</p>
                        <ul className="list-disc list-inside flex flex-col gap-1 text-gray-400">
                            <li>Transcripts of your voice conversations (what you say and the assistant's replies)</li>
                            <li>Session metadata such as start time, duration, and whether responses were interrupted</li>
                            <li>AI-generated memory facts derived from your conversations (e.g., preferences, availability, goals, and constraints) to personalize future interactions</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-cream mt-6 mb-3">Activity &amp; Social Data</h3>
                        <ul className="list-disc list-inside flex flex-col gap-1 text-gray-400">
                            <li>Activities you create or join</li>
                            <li>Join requests and ticket information</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-cream mt-6 mb-3">Usage &amp; Technical Data</h3>
                        <ul className="list-disc list-inside flex flex-col gap-1 text-gray-400">
                            <li>Device and connection metadata associated with your sessions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">3. How We Use Your Information</h2>
                        <p className="mb-3">We use the information we collect to:</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-gray-400">
                            <li><span className="text-cream font-semibold">Provide and personalize the service</span> — match you with relevant activities and people based on your interests, location, and preferences</li>
                            <li><span className="text-cream font-semibold">Power the voice assistant</span> — use conversation history and learned memory facts to make the AI assistant more helpful and contextually aware over time</li>
                            <li><span className="text-cream font-semibold">Improve the platform</span> — analyze usage patterns to enhance performance and user experience</li>
                            <li><span className="text-cream font-semibold">Send notifications</span> — communicate updates related to your activities, requests, and account</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">4. Third-Party Services</h2>
                        <p className="mb-6">
                            Looper uses the following third-party providers, each with their own privacy practices.
                            By using Looper, you acknowledge that data may be processed by these providers in
                            accordance with their respective privacy policies.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left py-3 pr-8 text-cream font-semibold">Provider</th>
                                        <th className="text-left py-3 text-cream font-semibold">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    {[
                                        ['MongoDB / MongoDB Atlas', 'Storing user profiles, conversations, activities, and AI memory'],
                                        ['Redis', 'Session management and real-time data caching'],
                                        ['OpenRouter', 'Powering AI voice assistant responses & generating vector embeddings for memory search'],
                                        ['Deepgram', 'Text-to-speech for voice assistant audio output'],
                                        ['Weaviate', 'Storing and searching vector embeddings'],
                                        ['Twilio', 'Phone number verification and SMS'],
                                    ].map(([provider, purpose]) => (
                                        <tr key={provider} className="border-b border-gray-800">
                                            <td className="py-3 pr-8 font-medium text-gray-300 whitespace-nowrap">{provider}</td>
                                            <td className="py-3">{purpose}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">5. Data Retention</h2>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-gray-400">
                            <li><span className="text-gray-300">Profile and account data</span> is retained for as long as your account is active.</li>
                            <li><span className="text-gray-300">Conversation transcripts and AI memory</span> are retained to enable personalization over time. You may request deletion at any time (see Section 7).</li>
                            <li><span className="text-gray-300">Location data</span> is stored only when actively provided during a session.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">6. Data Security</h2>
                        <p>
                            We use industry-standard practices to protect your data, including JWT-based
                            authentication, encrypted connections, and access controls. However, no system is
                            completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">7. Your Rights</h2>
                        <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-gray-400">
                            <li><span className="text-gray-300">Access</span> the personal data we hold about you</li>
                            <li><span className="text-gray-300">Correct</span> inaccurate or incomplete data</li>
                            <li><span className="text-gray-300">Delete</span> your account and associated data</li>
                            <li><span className="text-gray-300">Restrict or object</span> to certain processing</li>
                            <li><span className="text-gray-300">Withdraw consent</span> at any time</li>
                        </ul>
                        <p className="mt-4">To exercise any of these rights, contact us at the email address below.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">8. Children's Privacy</h2>
                        <p>
                            Looper is not intended for users under the age of 18. We do not knowingly collect
                            personal information from children under 18. If we become aware that we have collected
                            such information, we will delete it promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. When we do, we will revise the
                            effective date at the top of this document. We encourage you to review this policy
                            periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">10. Contact Us</h2>
                        <p>
                            If you have questions or concerns about this Privacy Policy or your data, please
                            contact us at{' '}
                            <a href="mailto:athult2000@gmail.com" className="text-primary hover:underline">
                                athult2000@gmail.com
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
