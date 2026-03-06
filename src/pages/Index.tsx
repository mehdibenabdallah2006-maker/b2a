import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
    </main>
  );
};

export default Index;
