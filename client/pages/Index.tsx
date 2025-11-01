import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import DubaiExperienceSection from "@/components/sections/DubaiExperienceSection";
import FleetSection from "@/components/sections/FleetSection";
import FounderSection from "@/components/sections/FounderSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

const Index = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <FleetSection />
      <ServicesSection />
      <DubaiExperienceSection />
      <FounderSection />
      <ContactSection />
    </div>
  );
};

export default Index;
