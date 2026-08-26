import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-soft blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-32 h-72 w-72 rounded-full bg-surface blur-3xl" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for Internship
          </motion.span>

          <motion.h1 {...fade(0.08)} className="mt-6 text-4xl font-bold sm:text-6xl">
            <span className="block text-muted-foreground text-2xl font-medium sm:text-3xl">
              Hi, I&apos;m
            </span>
            <span className="mt-1 block text-foreground">Renganathan S</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-3 font-display text-xl font-semibold text-gradient sm:text-2xl"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            {...fade(0.24)}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I build responsive, accessible web applications with React, JavaScript, HTML and CSS —
            focused on clean interfaces, smooth interactions and performance that holds up on every
            screen size.
          </motion.p>

          <motion.div {...fade(0.32)} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary-hover"
            >
              View Projects <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              <Download size={16} /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            {...fade(0.4)}
            className="mt-10 flex flex-wrap gap-8 border-t border-border pt-6"
          >
            {[
              { k: "7.455", v: "CGPA" },
              { k: "2+", v: "Projects shipped" },
              { k: "10+", v: "Tools & tech" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-2xl font-bold text-foreground">{s.k}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 h-28 w-28 rounded-full bg-primary/15 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            <div className="card-soft relative overflow-hidden p-3">
              <img
                src={portrait}
                alt="Portrait of Renganathan S, frontend developer"
                width={912}
                height={1104}
                className="w-full rounded-[calc(var(--radius)-0.5rem)] object-cover"
              />
            </div>
            <motion.div
              animate={reduce ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="card-soft absolute -bottom-6 -left-6 flex items-center gap-2 px-4 py-3"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-xs font-semibold text-foreground">React · Tailwind</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
