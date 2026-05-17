import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact | ARINTLS',
  description: 'Get in touch with ARINTLS. Offices in Lahore, Karachi, and Kuala Lumpur — ready to discuss your international market entry.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMain />
      <ContactFAQ />
    </main>
  );
}
