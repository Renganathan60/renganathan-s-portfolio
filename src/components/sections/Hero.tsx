import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Sparkles, CheckCircle2 } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { pressable } from "@/lib/motion-presets";
import { useResumeModal } from "@/context/ResumeContext";

export function Hero() {
  const reduce = useReducedMotion();
  const { openResume } = useResumeModal();
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setCardTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to Full Time Role
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
            <span className="block text-muted-foreground text-2xl font-medium sm:text-3xl mb-1">
              Hi, I&apos;m
            </span>
            <span className="text-foreground">Renganathan S</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 font-display text-2xl font-bold text-gradient sm:text-3xl">
            Frontend Developer
          </p>

          {/* Introduction */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build responsive, accessible web applications with React, JavaScript, HTML and CSS —
            focused on clean interfaces, smooth interactions and performance that holds up on every
            screen size.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div {...pressable(reduce)}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.button
              {...pressable(reduce)}
              onClick={openResume}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:bg-muted hover:border-primary/40 cursor-pointer"
            >
              <Download size={16} className="text-primary" />
              <span>View &amp; Download Resume</span>
            </motion.button>
          </div>

          {/* Key Statistics Strip */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border/80 pt-8 max-w-lg">
            <div className="rounded-2xl bg-surface/70 border border-border/60 p-4 text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground">7.47</p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                CGPA
              </p>
            </div>
            <div className="rounded-2xl bg-surface/70 border border-border/60 p-4 text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground">2+</p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Projects Shipped
              </p>
            </div>
            <div className="rounded-2xl bg-surface/70 border border-border/60 p-4 text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground">10+</p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tools &amp; Tech
              </p>
            </div>
          </div>
        </motion.div>

        {/* Profile Visual with Subtle Parallax Tilt */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.y}deg) rotateY(${cardTilt.x}deg)`,
              transition: "transform 0.2s ease-out",
            }}
            className="relative w-full max-w-sm"
          >
            {/* Soft backdrop glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-accent/20 to-transparent blur-xl -z-10" />

            <div className="card-soft relative overflow-hidden p-3.5 shadow-lift bg-background">
              <img
                src={portrait}
                alt="Portrait of Renganathan S, Frontend Developer"
                width={912}
                height={1104}
                className="w-full rounded-[calc(var(--radius)-0.5rem)] object-cover aspect-[4/5]"
              />

              {/* Status Overlay */}
              <div className="absolute top-6 left-6 rounded-full bg-background/90 backdrop-blur-md border border-border/80 px-3 py-1 text-[11px] font-semibold text-foreground flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 size={13} className="text-primary" />
                <span>Available Now</span>
              </div>
            </div>

            {/* Badge Floating on Bottom Left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="card-soft absolute -bottom-5 -left-4 sm:-left-6 flex items-center gap-2.5 px-4 py-3 shadow-lift bg-background/95 backdrop-blur-md"
            >
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-primary-soft text-primary">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">React · Tailwind</p>
                <p className="text-[10px] text-muted-foreground">Modern UI Stack</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
