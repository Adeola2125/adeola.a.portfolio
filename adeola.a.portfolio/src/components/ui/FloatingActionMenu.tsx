import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const actions = [
  {
    id: "contact",
    label: "Email",
    href: "mailto:adeoyeadeola2125@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/adeola-adeoye-assiduous",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Adeola2125",
    icon: <Github className="w-5 h-5" />,
  },
];

const FloatingActionMenu = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fab-root">
      <div className="relative flex flex-col items-end gap-3">
        {/* Expanded items */}
        <div
          className={`flex flex-col items-end space-y-3 transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"}`}
        >
          {actions.map((a) => (
            <a
              key={a.id}
              href={a.href}
              target="_blank"
              rel="noreferrer noopener"
              title={a.label}
              className="fab-item hover:scale-105 transform-gpu"
            >
              {a.icon}
            </a>
          ))}

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fab-item hover:scale-105 transform-gpu"
            title="Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Main FAB */}
        <button
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((s) => !s)}
          className="fab-button relative overflow-visible"
        >
          <span className="fab-backdrop" aria-hidden />
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M12 5v14M5 12h14" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingActionMenu;
