import { motion, useReducedMotion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import { liftable, pressable } from "@/lib/motion-presets";
import studymate from "@/assets/studymate.jpg";
import sportshub from "@/assets/sportshub.jpg";

const projects = [
  {
    title: "StudyMate",
    subtitle: "Student productivity web app",
    image: studymate,
    description:
      "An all-in-one workspace for students: plan study blocks, track tasks, capture notes and stay focused with a built-in Pomodoro timer.",
    features: [
      "Dashboard",
      "Study Planner",
      "Task Manager",
      "Notes",
      "Pomodoro Timer",
      "Goals",
      "Analytics",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
  },
  {
    title: "SportsHub",
    subtitle: "Full stack sports e-commerce",
    image: sportshub,
    description:
      "A complete storefront with secure authentication, product catalogue, cart and order flow backed by a MongoDB database.",
    features: ["JWT Authentication", "Cart", "Orders", "Products", "Admin control"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
];

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="bg-surface py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Work I'm proud to show"
          description="Two builds that cover both ends of the stack — interface craft and real application logic."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              {...liftable(reduce)}
              className="card-soft flex flex-col overflow-hidden transition-shadow hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3 pt-1">
                  <motion.a
                    {...pressable(reduce)}
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.a>
                  <motion.a
                    {...pressable(reduce)}
                    href="https://github.com/Renganathan60"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                  >
                    <Github size={16} /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
