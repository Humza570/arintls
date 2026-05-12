import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ClientsSection from "@/components/ClientsSection";
import AboutStrip from "@/components/AboutStrip";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ClientsSection />
      <AboutStrip />
      <CTASection />
    </>
  );
}
