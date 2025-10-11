import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import DubaiExperienceSection from "@/components/sections/DubaiExperienceSection";
import FleetSection from "@/components/sections/FleetSection";
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
      <ContactSection />
    </div>
  );
};

export default Index;
