
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollIndicator />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorks />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
