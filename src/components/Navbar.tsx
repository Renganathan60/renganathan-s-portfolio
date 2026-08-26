import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, FileText } from "lucide-react";
import { useScrolled } from "@/hooks/useActiveSection";
import { pressable } from "@/lib/motion-presets";
import { useResumeModal } from "@/context/ResumeContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const scrolled = useScrolled();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const { openResume } = useResumeModal();

  const isLinkActive = (to: string) => {
    if (to === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(to);
  };

  return (
    <motion.header
      initial={reduce ? { opacity: 0 } : { y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-xs"
          : "bg-background/60 backdrop-blur-xs"
      }`}
    >
      <nav className="section-shell flex h-18 items-center justify-between gap-4 py-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
            RS
          </span>
          <span className="truncate font-display text-base font-bold text-foreground transition-colors group-hover:text-primary">
            Renganathan S
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 rounded-full border border-border/80 bg-surface/80 p-1.5 backdrop-blur-md shadow-xs lg:flex">
          {navItems.map((item) => {
            const active = isLinkActive(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-primary-soft shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-2">
          <motion.button
            {...pressable(reduce)}
            onClick={openResume}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift sm:inline-flex cursor-pointer"
          >
            <FileText size={16} /> Resume
          </motion.button>

          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-muted lg:hidden cursor-pointer"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md lg:hidden shadow-lg"
          >
            <ul className="section-shell flex flex-col gap-1 py-4">
              {navItems.map((item) => {
                const active = isLinkActive(item.to);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-primary-soft text-primary font-semibold"
                          : "text-muted-foreground hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && <span className="h-2 w-2 rounded-full bg-primary" />}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    openResume();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary-hover cursor-pointer"
                >
                  <FileText size={16} /> View &amp; Download Resume
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
