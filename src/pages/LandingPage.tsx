import { Navigation } from '../components/Navigation';
import { NewHero } from '../components/NewHero';
import { HowItWorks } from '../components/HowItWorks';
import { Solutions } from '../components/Solutions';
import { Capabilities } from '../components/Capabilities';
import { NewImpact } from '../components/NewImpact';
import { WhoWeServe } from '../components/WhoWeServe';
import { Footer } from '../components/Footer';
import { Partners } from '../components/Partners';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1A3A3A]">
      <Navigation />
      <NewHero />
      <HowItWorks />
      <Solutions />
      <Capabilities />
      <NewImpact />
      <WhoWeServe />
      <Partners />
      <Footer />
    </div>
  );
}