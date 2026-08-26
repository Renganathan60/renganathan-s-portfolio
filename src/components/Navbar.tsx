import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, FileText } from "lucide-react";
import { useActiveSection, useScrolled } from "@/hooks/useActiveSection";
import { pressable } from "@/lib/motion-presets";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const ids = links.map((l) => l.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const scrolled = useScrolled();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={reduce ? { opacity: 0 } : { y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-18 items-center justify-between gap-4 py-4">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            RS
          </span>
          <span className="truncate font-display text-base font-bold text-foreground">
            Renganathan S
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary-soft"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            {...pressable(reduce)}
            href="/resume.pdf"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            <FileText size={16} /> Resume
          </motion.a>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="section-shell flex flex-col py-3">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-3 text-sm font-medium ${
                      active === link.id
                        ? "bg-primary-soft text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="/resume.pdf"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <FileText size={16} /> Resume
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
