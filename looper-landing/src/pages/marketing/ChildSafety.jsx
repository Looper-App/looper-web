export default function ChildSafety() {
    return (
        <main className="bg-charcoal text-cream min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-6xl font-condensed font-bold mb-4">Child Safety Standards</h1>
                <p className="text-gray-500 text-sm mb-16">Effective Date: June 24, 2026</p>

                <div className="flex flex-col gap-12 text-gray-300 text-lg leading-relaxed">

                    <section>
                        <p>
                            Looper is a social activity platform that helps people discover and join local events
                            and experiences. The safety of all users — and especially minors — is a foundational
                            principle of how we design, operate, and moderate the platform.
                        </p>
                        <p className="mt-4">
                            This page describes Looper's standards and practices against Child Sexual Abuse and
                            Exploitation (CSAE), in compliance with Google Play's Child Safety Standards policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">1. Age Requirement</h2>
                        <p>
                            Looper is intended exclusively for users who are <span className="text-cream font-semibold">18 years of age or older</span>.
                            We require users to confirm their date of birth during sign-up. Accounts found to
                            belong to individuals under 18 are terminated immediately and their data is deleted.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">2. Prohibited Content and Conduct</h2>
                        <p className="mb-4">
                            The following are strictly prohibited on Looper and will result in immediate account
                            termination and, where required by law, reporting to the relevant authorities:
                        </p>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-gray-400">
                            <li>Any content that sexually exploits, abuses, or depicts minors (CSAM / CSAE)</li>
                            <li>Grooming, solicitation, or any predatory communication targeting minors</li>
                            <li>Sharing, distributing, or linking to CSAE material in any form</li>
                            <li>Creating activities or events with intent to exploit or harm minors</li>
                            <li>Any use of the platform to facilitate trafficking, abuse, or exploitation of children</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">3. How We Detect and Prevent CSAE</h2>
                        <ul className="list-disc list-inside flex flex-col gap-3 text-gray-400">
                            <li>
                                <span className="text-gray-300 font-semibold">Age verification at sign-up:</span>{' '}
                                Users must provide their date of birth and confirm they are 18+. Accounts that
                                appear to belong to minors are flagged and reviewed.
                            </li>
                            <li>
                                <span className="text-gray-300 font-semibold">In-app reporting:</span>{' '}
                                Any user can report child safety concerns directly from within the app via
                                Settings → Report Child Safety Concern. Reports are reviewed promptly.
                            </li>
                            <li>
                                <span className="text-gray-300 font-semibold">Immediate suspension:</span>{' '}
                                Accounts reported or suspected of CSAE-related activity are suspended immediately
                                pending investigation.
                            </li>
                            <li>
                                <span className="text-gray-300 font-semibold">Data deletion:</span>{' '}
                                Upon confirmed violation, all account data, activity history, and conversation
                                data associated with the offending account is permanently deleted.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">4. How to Report a Child Safety Concern</h2>

                        <div className="bg-black/30 border border-gray-700 rounded-xl p-6 mb-6">
                            <p className="text-cream font-semibold mb-2">In-app reporting (preferred)</p>
                            <p className="text-gray-400">
                                Open the Looper app → Settings → Report Child Safety Concern. Describe the
                                concern and submit. Our team will respond within 24 hours.
                            </p>
                        </div>

                        <p className="mb-4">
                            You may also report directly by email to{' '}
                            <a href="mailto:athult2000@gmail.com" className="text-primary hover:underline">
                                athult2000@gmail.com
                            </a>{' '}
                            with the subject line <span className="text-cream font-semibold">"Child Safety Report"</span>.
                            Include as much detail as possible — user ID, activity ID, description of the
                            concern. All reports are treated confidentially.
                        </p>

                        <p className="mb-4">To report CSAM to national authorities:</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-gray-400">
                            <li>
                                <span className="text-gray-300">India:</span>{' '}
                                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    cybercrime.gov.in
                                </a>{' '}
                                — National Cyber Crime Reporting Portal
                            </li>
                            <li>
                                <span className="text-gray-300">USA:</span>{' '}
                                <a href="https://www.missingkids.org/gethelpnow/cybertipline" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    NCMEC CyberTipline
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-300">Global:</span>{' '}
                                <a href="https://www.iwf.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    Internet Watch Foundation (IWF)
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">5. Our Response to Reports</h2>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-gray-400">
                            <li>All child safety reports are acknowledged within <span className="text-gray-300">24 hours</span>.</li>
                            <li>Reported accounts are suspended immediately while under review.</li>
                            <li>
                                Confirmed CSAE violations are reported to the appropriate national authority
                                (NCPCR in India, NCMEC in the USA, or equivalent).
                            </li>
                            <li>
                                We cooperate fully with law enforcement investigations and provide data as
                                required by applicable law.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">6. Compliance</h2>
                        <p>
                            Looper complies with all applicable child safety laws, including but not limited to
                            the Protection of Children from Sexual Offences Act (POCSO) in India and the PROTECT
                            Our Children Act in the USA. We are committed to staying current with evolving legal
                            requirements and best practices in child online safety.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-cream mb-4">7. Contact — Designated Safety Point of Contact</h2>
                        <div className="bg-black/30 border border-gray-700 rounded-xl p-6">
                            <p className="text-cream font-semibold mb-3">Child Safety Contact</p>
                            <p className="text-gray-400 mb-1">
                                Email:{' '}
                                <a href="mailto:athult2000@gmail.com" className="text-primary hover:underline">
                                    athult2000@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-400 mb-4">Subject line: <span className="text-gray-300 italic">Child Safety Report</span></p>
                            <p className="text-gray-500 text-base">
                                This contact is designated to speak about Looper's CSAM prevention practices
                                and compliance. All child safety communications are handled with strict
                                confidentiality.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
