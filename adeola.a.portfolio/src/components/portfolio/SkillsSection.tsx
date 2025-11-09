import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Palette, Cpu, Users } from "lucide-react";

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "from-teal-light to-black",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
      ]
    },
    {
      icon: Palette,
      title: "Frameworks & Libraries",
      color: "from-teal-light to-black",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Material UI", level: 88 },
      ]
    },
    {
      icon: Cpu,
      title: "Tools & Systems",
      color: "from-teal-light to-black",
      skills: [
        { name: "Git", level: 92 },
        { name: "RESTful APIs", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Redux", level: 88 },
        { name: "Firebase", level: 82 },
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "from-teal-light to-black",
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Collaboration", level: 98 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 92 },
        { name: "Mentorship", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Core Skills</span> & Tools
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A versatile technical skill set combined with strong leadership abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group glass-effect p-8 rounded-2xl hover-lift ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-dark from-primary to-teal-light flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-black/60">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? "animate-progress" : "w-0"
                          }`}
                          style={{
                            "--progress-width": `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="inline-block glass-effecdt bg-foreground/80 px-8 py-4 rounded-full">
            <p className="text-lg text-black">
              💡 Always learning, always growing, always delivering excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
