import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Download,
  Target,
  User,
  Sparkles,
  Code2,
  Zap,
  Layout,
  Layers,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { pressable } from "@/lib/motion-presets";
import { useResumeModal } from "@/context/ResumeContext";

const title = "About Me — Renganathan S";
const description =
  "Learn more about Renganathan S, Frontend Developer specializing in React, JavaScript, and modern web applications.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Trichy, Tamil Nadu, India" },
  {
    icon: Mail,
    label: "Email",
    value: "renganathans757@gmail.com",
    href: "mailto:renganathans757@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 93606 24890", href: "tel:+919360624890" },
  { icon: Briefcase, label: "Role Status", value: "Open to Full Time Roles" },
];

const educationHighlights = [
  {
    icon: GraduationCap,
    title: "Degree",
    value: "B.E. Computer Science and Engineering",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    year: "2023 – 2027",
  },
  {
    icon: Award,
    title: "Academic Score",
    value: "CGPA: 7.47 / 10",
    institution: "Current Academic Standing",
    year: "Semester Active",
  },
  {
    icon: CheckCircle2,
    title: "Availability",
    value: "Immediately Available",
    institution: "Full-Time Frontend Developer",
    year: "Ready to Join",
  },
];

const coreStrengths = [
  {
    icon: Layout,
    title: "Responsive UI & Design Systems",
    desc: "Crafting fluid, pixel-accurate layouts that scale seamlessly across devices.",
  },
  {
    icon: Code2,
    title: "Modern React & Component Patterns",
    desc: "Reusable, declarative component structures powered by hooks and state management.",
  },
  {
    icon: Zap,
    title: "Performance & Web Standards",
    desc: "Fast load times, semantic HTML, accessibility, and clean code principles.",
  },
];

function AboutPage() {
  const reduce = useReducedMotion();
  const { openResume } = useResumeModal();

  return (
    <PageTransition>
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Building polished, high-performance web experiences"
          description="A Computer Science undergraduate dedicated to frontend craftsmanship, responsive design systems, and writing clean, maintainable code."
        />

        {/* Main Two-Column Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Left Column: Bio, Objective & Highlights */}
          <div className="space-y-8">
            {/* Story Card */}
            <Reveal className="card-soft p-8 sm:p-10 bg-surface/60 backdrop-blur-xs">
              <div className="flex items-center gap-3 text-primary mb-4">
                <User size={22} />
                <h3 className="font-display text-xl font-bold text-foreground">My Background</h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                I am a dedicated Frontend Developer with a deep interest in modern web development
                and interactive user interfaces. I began by mastering HTML5 and CSS3 fundamentals,
                advanced into JavaScript and TypeScript architectures, and currently specialize in
                React.js, Tailwind CSS, and full-stack integration with REST APIs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I take pride in transforming design concepts into pixel-perfect, accessible, and
                lightning-fast web applications. Beyond coursework, I build full-fledged
                applications like StudyMate (productivity workspace) and SportsHub (e-commerce),
                regularly solve data structure problems on LeetCode, and contribute to open projects
                on GitHub.
              </p>

              {/* Career Objective */}
              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary-soft/50 p-5">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Target size={18} />
                  <span>Career Objective</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                  Seeking a Frontend Developer role where I can contribute to shipping scalable web
                  applications, collaborate with cross-functional engineering teams, and
                  continuously push the boundaries of user experience and frontend architecture.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  {...pressable(reduce)}
                  onClick={openResume}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift cursor-pointer"
                >
                  <Download size={16} />
                  <span>View &amp; Download Resume</span>
                </motion.button>
              </div>
            </Reveal>

            {/* Academic & Availability Highlights */}
            <div className="grid gap-4 sm:grid-cols-3">
              {educationHighlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 0.08} className="card-soft p-5 bg-surface/80">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary mb-3">
                    <h.icon size={20} />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {h.title}
                  </p>
                  <p className="mt-1 text-sm font-bold text-foreground">{h.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.institution}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Developer Overview & Core Focus & Personal Info */}
          <div className="space-y-6">
            {/* Developer Overview Header Card (replaces photo on About page) */}
            <Reveal className="card-soft p-7 sm:p-8 bg-surface/80 shadow-soft">
              <div className="flex items-center gap-4 border-b border-border/70 pb-6">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-soft">
                  RS
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-semibold text-primary mb-1">
                    <Sparkles size={12} />
                    <span>Frontend Developer</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">Renganathan S</h4>
                  <p className="text-xs text-muted-foreground">Trichy, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="mt-6 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Core Engineering Focus
                </p>
                {coreStrengths.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary mt-0.5">
                      <item.icon size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Personal Information Cards */}
            <div className="grid gap-3.5">
              {personalInfo.map((info, idx) => (
                <Reveal
                  key={info.label}
                  delay={idx * 0.06}
                  className="card-soft flex items-center gap-4 p-5 bg-surface/70 hover:border-primary/40 transition-colors"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <info.icon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="truncate text-sm font-semibold text-foreground hover:text-primary transition-colors block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-semibold text-foreground">{info.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
