import Hero from "@/components/Hero";
import BusinessApplications from "@/components/ApplicationsGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import IndustriesSection from "@/components/IndustriesSection";
import Info from "@/components/info";
import Dutycycle from "@/components/Dutycycle";
import Erp90Section from "@/components/erp90";
import Pricing from "@/components/Pricing";
import WHY from "@/components/WHY";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessApplications />
      <FeaturesGrid />
      <IndustriesSection />
      <Info />
      <Dutycycle />
      <Pricing />
      <Erp90Section />
            <WHY />

    </div>
  );
};

export default Index;
