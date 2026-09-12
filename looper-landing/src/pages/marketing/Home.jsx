import HeroBento from '../../components/HeroBento';
import Marquee from '../../components/Marquee';
import FeaturesBento from '../../components/FeaturesBento';
import StatsGrid from '../../components/StatsGrid';
import AppShowcase from '../../components/AppShowcase';
import HowItWorks from '../../components/HowItWorks';
import DownloadCTA from '../../components/DownloadCTA';
import Seo from '../../components/Seo';

export default function Home() {
    return (
        <>
            <Seo
                title="Looper — Find Your Loop | Social Activities & Spontaneous Meetups"
                description="Looper connects people nearby for sports, hobbies, and spontaneous meetups. Discover live activities happening around you and commit in public, right now."
                path="/"
            />
            <HeroBento />
            <Marquee />
            <FeaturesBento />
            <HowItWorks />
            <StatsGrid />
            <AppShowcase />
            <DownloadCTA />
        </>
    );
}
