import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import ContactSection from "@/components/portfolio/ContactSection";
import NavigationBar from "@/components/portfolio/NavigationBar";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <LeadershipSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
