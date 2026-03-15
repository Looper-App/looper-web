import BentoCard from '../../components/ui/BentoCard';
import mapBackground from '../../assets/map.png';

const flowSteps = [
    {
        title: 'Start a Loop',
        body: 'Set your vibe, tag your location, and invite a handful of people who are as curious as you are.',
    },
    {
        title: 'Commit in Public',
        body: 'Once the plan is live it shows up in every listed participant’s feed, so accountability replaces endless DM threads.',
    },
    {
        title: 'Show Up Together',
        body: 'Looper keeps pace long after the meetup ends: follow-ups, daily reflections, and next steps are all in one place.',
    },
];

const values = [
    { title: 'Commitment over scroll time', body: 'We reward showing up, not double-tapping.' },
    { title: 'Spontaneity over overplanning', body: 'Micro-events, micro-communities, real human feedback.' },
    { title: 'Shared ownership', body: 'Every Loop has clear hosts, roles, and check-ins so momentum keeps going.' },
];

export default function About() {
    return (
        <div className="pt-32 pb-24 container mx-auto px-4 min-h-screen">
            <h1 className="text-6xl md:text-8xl font-condensed font-bold mb-8 text-charcoal">ABOUT <br /><span className="text-primary">LOOPER</span></h1>
            <p className="text-xl max-w-3xl text-gray-600 leading-relaxed mb-4">
                The most meaningful relationships start in the same room. Looper was made to blur the line between “thumb-stopping” and “showing up”.
            </p>
            <p className="text-lg max-w-3xl text-gray-500 leading-relaxed mb-12">
                We weave location, activity, and trust into micro-communities so people can stop re-planning and start doing. Think of Looper as a live pulse of experiences that keep friends, hobbyists, and creators connected without the churn.
            </p>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] mb-12 items-center">
                <div className="space-y-6">
                    <div className="text-sm uppercase tracking-[0.4em] text-gray-400">Why Looper is yours</div>
                    <p className="text-2xl md:text-3xl font-bold text-charcoal max-w-xl">
                        Looper keeps the doers in constant motion. Discover a Loop, commit in public, and feel the momentum of a community that actually shows up.
                    </p>
                </div>
                <div className="relative w-full h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${mapBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                        <span className="text-xs tracking-[0.4em] uppercase text-primary opacity-70">loopers on the move</span>
                        <p className="text-lg leading-relaxed drop-shadow-lg">Behind every Loop is a story of a crowd, a soundtrack, and the energy of people who finally made real plans.</p>
                        <div className="text-sm text-gray-200">Bangalore</div>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <div className="text-sm uppercase tracking-[0.45em] text-gray-400 mb-6">How it works</div>
                <div className="grid gap-6 md:grid-cols-3">
                    {flowSteps.map((step) => (
                        <BentoCard key={step.title} className="p-8 bg-white dark:bg-[#151518] border-none! text-left h-full">
                            <div className="text-lg font-bold text-charcoal dark:text-white">{step.title}</div>
                            <p className="mt-4 text-gray-500 dark:text-gray-300 leading-relaxed">{step.body}</p>
                        </BentoCard>
                    ))}
                </div>
            </div>

            <div>
                <div className="text-sm uppercase tracking-[0.45em] text-gray-400 mb-6">Community values</div>
                <div className="grid gap-6 md:grid-cols-3">
                    {values.map((value) => (
                        <div key={value.title} className="rounded-2xl border border-primary/20 bg-black bg-opacity-40 p-6 text-white shadow-xl">
                            <div className="text-xl font-bold text-primary mb-3">{value.title}</div>
                            <p className="text-gray-200 text-sm leading-relaxed">{value.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
