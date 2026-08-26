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
} from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import { liftable } from "@/lib/motion-presets";

const skillCategories = [
  {
    category: "Programming & Markup Languages",
    icon: Code2,
    description: "Core languages used to structure, style, and build logic.",
    skills: [
      { name: "JavaScript", icon: FileCode2, level: "Advanced" },
      { name: "HTML5", icon: Code2, level: "Advanced" },
      { name: "CSS3", icon: Paintbrush, level: "Advanced" },
      { name: "Java", icon: Coffee, level: "Intermediate" },
      { name: "SQL", icon: Database, level: "Intermediate" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: Layers,
    description: "Modern frameworks and styling tools for building performant UIs.",
    skills: [
      { name: "React.js", icon: Atom, level: "Advanced" },
      { name: "Tailwind CSS", icon: Wind, level: "Advanced" },
      { name: "Bootstrap", icon: LayoutGrid, level: "Advanced" },
      { name: "Node.js", icon: Server, level: "Intermediate" },
      { name: "Express.js", icon: Boxes, level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    description: "Development environment, version control, and APIs.",
    skills: [
      { name: "Git", icon: GitBranch, level: "Proficient" },
      { name: "GitHub", icon: Github, level: "Proficient" },
      { name: "REST APIs", icon: Plug, level: "Proficient" },
      { name: "VS Code", icon: Terminal, level: "Proficient" },
      { name: "Vite", icon: Wind, level: "Proficient" },
    ],
  },
];

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="Technologies I work with"
          description="A categorized breakdown of languages, frameworks, and developer tools I use to build scalable web applications."
        />

        <div className="mt-14 space-y-12">
          {skillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="rounded-3xl border border-border/80 bg-surface/50 p-6 sm:p-8 backdrop-blur-sm shadow-soft"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <group.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {group.category}
                    </h3>
                    <p className="text-xs text-muted-foreground">{group.description}</p>
                  </div>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                  {group.skills.length} skills
                </span>
              </div>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    variants={{
                      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    {...liftable(reduce)}
                    className="card-soft group flex flex-col items-center gap-2.5 p-5 text-center transition-all hover:border-primary/40 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <skill.icon size={22} />
                    </span>
                    <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {skill.level}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
