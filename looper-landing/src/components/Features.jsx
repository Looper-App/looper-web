import { Radio, MessageCircle, Calendar } from 'lucide-react';

const features = [
    {
        icon: Radio,
        title: "Live Discovery",
        description: "See active users and activities on a real-time map. Filter by distance, gender, or interest.",
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        icon: MessageCircle,
        title: "Instant Connection",
        description: "Join activities with one tap. Chat with groups or individuals to coordinate details.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Calendar,
        title: "Activity Tracking",
        description: "Keep track of your upcoming runs, games, and meetups. Earn badges and climb leaderboards.",
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-charcoal">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
