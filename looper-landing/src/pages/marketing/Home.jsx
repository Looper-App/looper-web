import HeroBento from '../../components/HeroBento';
import Marquee from '../../components/Marquee';
import FeaturesBento from '../../components/FeaturesBento';
import StatsGrid from '../../components/StatsGrid';
import AppShowcase from '../../components/AppShowcase';
import HowItWorks from '../../components/HowItWorks';
import DownloadCTA from '../../components/DownloadCTA';

export default function Home() {
    return (
        <>
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
