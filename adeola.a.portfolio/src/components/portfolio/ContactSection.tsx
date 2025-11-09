import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Linkedin, Github, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRCode from "react-qr-code";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "adeoyeadeola2125@gmail.com",
      href: "mailto:adeoyeadeola2125@gmail.com",
      color: "from-black to-teal-light"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "adeola-adeoye-assiduous",
      href: "https://linkedin.com/in/adeola-adeoye-assiduous",
      color: "from-black to-teal-light"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Adeola2125",
      href: "https://github.com/Adeola2125",
      color: "from-black to-teal-light"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to build scalable, impactful digital experiences together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block glass-effect p-6 rounded-2xl hover-lift group ${
                    isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        {method.label}
                      </div>
                      <div className="text-lg font-semibold text-primary/80 group-hover:text-primary transition-colors">
                        {method.value}
                      </div>
                    </div>
                    <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* WhatsApp QR Section */}
          <div className={`glass-effect p-8 rounded-2xl ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-black">
                Quick WhatsApp Access
              </h3>
            </div>
            
              <div className="flex flex-col items-center">
                {/* WhatsApp QR setup */}
                {/* Number must be in international format without '+' or leading zeros for wa.me */}
                {(() => {
                  const whatsappNumber = "2348121253150"; // 08121253150 -> Nigeria +2348121253150
                  const message =
                    "Hi Adeola, My name is (your name). I just went through your portfolio and i must say (say something nice 🤩).";
                  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                  return (
                    <>
                      <div className="relative mb-6">
                        <div className="bg-gradient-to-br from-secondary to-primary/10 rounded-2xl p-4 shadow-lg">
                          {/* QR code (transparent background) */}
                          <div className="bg-white p-2 rounded">
                            <QRCode
                              value={waUrl}
                              size={240}
                              bgColor="transparent"
                              fgColor="#000"
                              level="M"
                            />
                          </div>

                          {/* Centered WhatsApp image overlay */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gray-100">
                              <img
                                src="https://cdn.simpleicons.org/whatsapp/25D366"
                                alt="WhatsApp"
                                className="w-10 h-10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Open WhatsApp link button (in case user clicks instead of scanning) */}
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute right-2 bottom-2"
                          aria-label="Open WhatsApp chat"
                        >
                          <Button size="sm" className="bg-primary text-primary-foreground">Open in WhatsApp</Button>
                        </a>
                      </div>

                      <p className="text-center text-black/70 leading-relaxed max-w-xs">
                        Scan to instantly start a WhatsApp chat with me. Thank you.
                      </p>
                    </>
                  );
                })()}
              </div>
          </div>
        </div>

        {/* CTA Banner (card) */}
        <div className={`glass-effect rounded-3xl overflow-hidden ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <div className="p-12 text-center">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, and innovative projects. Let's create something extraordinary together!
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:scale-105 transition-all shadow-lg text-lg px-8"
                onClick={() => window.location.href = "mailto:adeoyeadeola2125@gmail.com"}
              >
                <Mail className="mr-2 w-5 h-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.7s" }}>
          <p className="text-muted-foreground">
            © 2025 Adeola Idayat Adeoye. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
