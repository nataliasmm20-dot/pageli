import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ForWhomSection from "@/components/ForWhomSection";
import StepsSection from "@/components/StepsSection";
import NumbersSection from "@/components/NumbersSection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaBanner from "@/components/CtaBanner";
import ServicesSection from "@/components/ServicesSection";
import CasesSection from "@/components/CasesSection";
import FaqSection from "@/components/FaqSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <ForWhomSection />
    <StepsSection />
    <NumbersSection />
    <WhyUsSection />
    <CtaBanner />
    <ServicesSection />
    <CasesSection />
    <FaqSection />
    <ContactsSection />
    <Footer />
  </div>
);

export default Index;
