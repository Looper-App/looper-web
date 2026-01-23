export default function About() {
    return (
        <div className="pt-32 pb-24 container mx-auto px-4 min-h-screen">
            <h1 className="text-6xl md:text-8xl font-condensed font-bold mb-8 text-charcoal">ABOUT <br /><span className="text-primary">LOOPER</span></h1>
            <p className="text-xl max-w-2xl text-gray-600 leading-relaxed mb-12">
                We believe the best social network is the one that gets you off your phone and into the real world.
                Looper was built to connect people through shared activities, passions, and moments of spontaneity.
            </p>
            <div className="w-full h-96 bg-gray-200 rounded-3xl mb-12 flex items-center justify-center text-gray-400">
                [Team Photo Placeholder]
            </div>
        </div>
    )
}
