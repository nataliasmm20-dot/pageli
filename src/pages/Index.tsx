import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ForWhomSection from "@/components/ForWhomSection";
import StepsSection from "@/components/StepsSection";
import NumbersSection from "@/components/NumbersSection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";
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
    <FaqSection />
    <Footer />
  </div>
);

export default Index;
