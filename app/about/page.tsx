import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import OurStory from '@/components/about/OurStory';
import OurValues from '@/components/about/OurValues';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import OfficePresence from '@/components/about/OfficePresence';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'About Us | ARINTLS',
  description:
    'ARINTLS is a premier international consultancy bridging world-class institutions and global enterprises with the high-growth markets of South and Southeast Asia.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MissionVision />
      <OurStory />
      <OurValues />
      <LeadershipTeam />
      <OfficePresence />
      <CTASection />
    </main>
  );
}
