import ServicesHero from '@/components/services/ServicesHero';
import EducationPractice from '@/components/services/EducationPractice';
import BusinessImplementation from '@/components/services/BusinessImplementation';
import HowWeWork from '@/components/services/HowWeWork';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Services | ARINTLS',
  description: 'Two distinct practice areas — Education Market Entry and Business Implementation — delivered with precision across South and Southeast Asia.',
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <EducationPractice />
      <BusinessImplementation />
      <HowWeWork />
      <CTASection />
    </main>
  );
}
