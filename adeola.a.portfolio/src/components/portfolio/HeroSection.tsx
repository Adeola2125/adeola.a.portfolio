import { Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32 bg-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="inline-block">
              <span className="text-primary font-semibold text-lg animate-fade-in">Hi, I'm</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Adeola Idayat</span>
              <br />
              <span className="text-foreground">Adeoye</span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                Frontend Developer
              </h2>
              <p className="text-xl text-foreground/80">
                Product Engineer • Team Lead
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Building human-centered digital experiences - one scalable solution at a time. 
              I transform complex ideas into beautiful, functional products that solve real problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-teal-light hover:shadow-glow transition-all duration-300 group"
              >
                Get In Touch
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:adeoyeadeola2125@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover-lift"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/adeola-adeoye-assiduous"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover-lift"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-light rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-foreground shadow-2xl">
                <img 
                  src="/public/adeola.jpeg"
                  alt="Professional Photo"
                  className="w-full h-full object-cover"
                />
                {/* <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <p className="text-lg font-medium">Professional Photo</p>
                    <p className="text-sm mt-2">Place your image here</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
