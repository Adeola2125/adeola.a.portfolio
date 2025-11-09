import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Target, Lightbulb, MessageSquare } from "lucide-react";

const LeadershipSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const leadershipPoints = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Frontend Team Lead across multiple collaborative projects, ensuring agile workflows, mentorship, and clean code standards",
      color: "from-primary to-teal-light"
    },
    {
      icon: Lightbulb,
      title: "Mentorship",
      description: "Mentored junior developers and interns, strengthening their problem-solving & frontend skills",
      color: "from-primary to-teal-light"
    },
    {
      icon: MessageSquare,
      title: "Cross-Functional Collaboration",
      description: "Bridged communication between design, product, and backend teams, translating complex requirements into actionable results",
      color: "from-primary to-teal-light"
    }
  ];

  const stats = [
    { number: "4+", label: "Team Members Led", icon: Users },
    { number: "3", label: "Major Projects", icon: Target },
    { number: "100%", label: "Excellence", icon: Lightbulb },
  ];

  return (
    <section id="leadership" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Empowering teams, fostering innovation, delivering results
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {leadershipPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`glafss-effect p-8 rounded-2xl hover-lift group ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-black-to-r ${point.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {point.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-3 gap-8 mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-efffect p-8 rounded-2xl text-center group hover-lift"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-foreground/80">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className={`text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="max-w-4xl mx-auto glass-effect p-10 rounded-3xl relative">
            <div className="absolute top-8 left-8 text-7xl text-primary/20 font-serif">"</div>
            <blockquote className="text-2xl text-black/80 italic font-medium relative z-10">
              Effective leadership is about empowering teams, fostering collaboration, and turning complex challenges into elegant solutions.
            </blockquote>
            <div className="absolute bottom-8 right-8 text-7xl text-primary/20 font-serif rotate-180">"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
