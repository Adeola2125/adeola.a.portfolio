import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, TrendingUp, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      name: "AutoCredit",
      subtitle: "Payment Gateway Platform",
      role: "Lead Frontend Developer & Product Engineer",
      description:
        "Engineered a sophisticated real-time payment monitoring system handling cross-currency transactions at scale.",
      stack: ["Vue.js", "Vuetify", "Vuex", "Javascript"],
      icon: Shield,
      gradient: "from-black/80 to-teal-light",
      achievements: [
        { metric: "40%", label: "Faster Load Times" },
        { metric: "30%", label: "Feature Rollout Speed" },
        { metric: "3", label: "Currencies Supported" },
      ],
      highlights: [
        "Real-time transaction monitoring for USD, NGN, EUR",
        "Optimized page load with efficient rendering & caching",
        "Modular UI architecture for rapid feature deployment",
        "Cross-functional collaboration for product-business alignment",
      ],
    },
    {
      name: "Launchpad",
      subtitle: "E-Commerce Platform",
      role: "Lead Frontend Developer",
      description:
        "Built a comprehensive e-commerce solution with responsive vendor dashboards and secure payment integration.",
      stack: ["React.js", "Javascript", "Node.js"],
      icon: TrendingUp,
      gradient: "from-black/80 to-teal-light",
      achievements: [
        { metric: "50%", label: "Performance Boost" },
        { metric: "6", label: "Team Members Led" },
        { metric: "100%", label: "Secure Checkout" },
      ],
      highlights: [
        "Responsive vendor dashboards and product management",
        "Secure checkout and wallet system integration",
        "Lazy loading & code splitting for optimization",
        "Led frontend team with clean architecture standards",
      ],
    },
    {
      name: "Social Connector",
      subtitle: "Blockchain Platform",
      role: "Frontend Developer",
      description:
        "Pioneered Web3 integration for decentralized transactions with intuitive user experience.",
      stack: ["Angular.js", "Typescript", "Tailwind CSS"],
      icon: Zap,
      gradient: "from-black/80 to-teal-light",
      achievements: [
        { metric: "25%", label: "User Retention Increase" },
        { metric: "2", label: "Wallet Integrations" },
        { metric: "Web3", label: "Technology" },
      ],
      highlights: [
        "Web3 wallet integration & design (MetaMask & WalletConnect)",
        "Smart contract interaction visualizations",
        "Blockchain-UI/UX design",
        "Improved retention through consistent, intuitive design",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Transforming ideas into impactful digital solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group glass-effect rounded-3xl overflow-hidden hover-lift ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Left Column - Header & Stack */}
                  <div className="lg:col-span-1 space-y-6">
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text mb-2">{project.name}</h3>
                      <p className="text-lg text-primary font-semibold mb-2">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>

                    <p className="text-black/70 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className={`text-center p-4 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} text-white bg-clip-text text-transparent mb-1`}>{achievement.metric}</div>
                          <div className="text-sm text-foreground/70">{achievement.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 text-black/80">
                      <h4 className="font-semibold text-lg">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex gap-3 items-start group/item">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform`}></span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
