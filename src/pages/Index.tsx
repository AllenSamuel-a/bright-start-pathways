import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollingTicker from "@/components/ScrollingTicker";
import ABATherapySection from "@/components/ABATherapySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ScrollingTicker />
      <ABATherapySection />
    </div>
  );
};

export default Index;
