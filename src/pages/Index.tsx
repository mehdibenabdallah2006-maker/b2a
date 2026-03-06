import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import MarqueeSection from "@/components/MarqueeSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
    </main>
  );
};

export default Index;
