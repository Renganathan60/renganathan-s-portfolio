import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Paintbrush,
  FileCode2,
  Atom,
  Wind,
  LayoutGrid,
  GitBranch,
  Github,
  Server,
  Plug,
  Coffee,
  Database,
  Terminal,
  Layers,
  Wrench,
  Boxes,
  Smartphone,
  CheckCircle,
  Cpu,
  Send,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/Reveal";
import { liftable } from "@/lib/motion-presets";

const title = "Skills & Expertise — Renganathan S";
const description =
  "Technical skills and competencies of Renganathan S: Frontend, Programming, Backend, Databases, and Developer Tools.";

export const Route = createFileRoute("/skills")({
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
  component: SkillsPage,
});

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Atom,
    description: "Modern component-driven UI development, responsive styling, and web standards.",
    skills: [
      { name: "HTML5", icon: Code2, level: "Advanced", desc: "Semantic structure & accessibility" },
      { name: "CSS3", icon: Paintbrush, level: "Advanced", desc: "Flexbox, Grid, Animations" },
      {
        name: "JavaScript",
        icon: FileCode2,
        level: "Advanced",
        desc: "ES6+, DOM, Asynchronous JS",
      },
      { name: "React.js", icon: Atom, level: "Advanced", desc: "Hooks, Router, State & Context" },
      { name: "Tailwind CSS", icon: Wind, level: "Advanced", desc: "Utility-first modern styling" },
      { name: "Bootstrap", icon: LayoutGrid, level: "Advanced", desc: "Responsive layout grids" },
      {
        name: "Responsive Web Design",
        icon: Smartphone,
        level: "Advanced",
        desc: "Mobile-first interfaces",
      },
    ],
  },
  {
    category: "Programming Languages",
    icon: Cpu,
    description: "Core languages used for problem solving, logic building, and data structures.",
    skills: [
      { name: "Java", icon: Coffee, level: "Intermediate", desc: "OOP, Core Java & DSA" },
      {
        name: "JavaScript",
        icon: FileCode2,
        level: "Advanced",
        desc: "Functional & Object-Oriented",
      },
    ],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    description: "Server runtime environments, API endpoints, and authentication handling.",
    skills: [
      {
        name: "Node.js",
        icon: Server,
        level: "Intermediate",
        desc: "Server-side JavaScript runtime",
      },
      { name: "Express.js", icon: Boxes, level: "Intermediate", desc: "Backend web frameworks" },
      { name: "REST APIs", icon: Plug, level: "Proficient", desc: "RESTful architecture & JSON" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    description: "Data modeling, schema design, and persistent storage management.",
    skills: [
      {
        name: "MongoDB",
        icon: Database,
        level: "Intermediate",
        desc: "NoSQL document store & Mongoose",
      },
      { name: "MySQL", icon: Database, level: "Intermediate", desc: "Relational database queries" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: Wrench,
    description: "Development environment, version control, build tools, and API testing.",
    skills: [
      { name: "Git", icon: GitBranch, level: "Proficient", desc: "Branching, merge & workflow" },
      { name: "GitHub", icon: Github, level: "Proficient", desc: "Collaboration & open-source" },
      { name: "VS Code", icon: Terminal, level: "Proficient", desc: "Primary IDE & debugging" },
      { name: "Postman", icon: Send, level: "Proficient", desc: "API testing & documentation" },
      { name: "Vite", icon: Wind, level: "Proficient", desc: "Fast build tool & bundling" },
    ],
  },
];

function SkillsPage() {
  const reduce = useReducedMotion();

  return (
    <PageTransition>
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="Technologies & Tools I Work With"
          description="A comprehensive categorized overview of my technical stack across frontend engineering, programming, backend systems, and developer workflow."
        />

        <div className="mt-14 space-y-10">
          {skillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              className="rounded-3xl border border-border/80 bg-surface/60 p-6 sm:p-8 backdrop-blur-xs shadow-soft"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-5">
                <div className="flex items-center gap-3.5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary shadow-xs">
                    <group.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      {group.category}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{group.description}</p>
                  </div>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Skills Grid */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    {...liftable(reduce)}
                    className="card-soft group flex flex-col justify-between p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lift bg-background"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <skill.icon size={20} />
                        </span>
                        <span className="rounded-full bg-primary-soft/60 px-2.5 py-0.5 text-[11px] font-semibold text-accent-foreground flex items-center gap-1">
                          <CheckCircle size={10} className="text-primary" />
                          {skill.level}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
