import ClientsHero from '@/components/clients/ClientsHero';
import UniversityPartners from '@/components/clients/UniversityPartners';
import CorporateClients from '@/components/clients/CorporateClients';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Clients | ARINTLS',
  description: 'Trusted by leading universities and global corporations to deliver market entry across South and Southeast Asia.',
};

export default function ClientsPage() {
  return (
    <main>
      <ClientsHero />
      <UniversityPartners />
      <CorporateClients />
      <CTASection />
    </main>
  );
}
