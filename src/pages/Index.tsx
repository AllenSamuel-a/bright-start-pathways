import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollingTicker from "@/components/ScrollingTicker";
import ABATherapySection from "@/components/ABATherapySection";
import UnderstandingABASection from "@/components/UnderstandingABASection";
import ComprehensiveServicesSection from "@/components/ComprehensiveServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ScrollingTicker />
      <ABATherapySection />
      <UnderstandingABASection />
      <ComprehensiveServicesSection />
    </div>
  );
};

export default Index;
