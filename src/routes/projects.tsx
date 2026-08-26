import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ExternalLink, Github, CheckCircle2, Sparkles, Layers } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/Reveal";
import { liftable, pressable } from "@/lib/motion-presets";
import studymate from "@/assets/studymate.jpg";
import sportshub from "@/assets/sportshub.jpg";

const title = "Projects — Renganathan S";
const description =
  "Featured software and frontend development projects built by Renganathan S, including StudyMate and SportsHub.";

export const Route = createFileRoute("/projects")({
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
  component: ProjectsPage,
});

const projectsList = [
  {
    title: "StudyMate",
    subtitle: "Student Productivity Web Application",
    image: studymate,
    description:
      "A comprehensive, responsive student productivity application built to help learners manage academic subjects, study schedules, daily tasks, organized notes, target goals, Pomodoro sessions, and progress analytics.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS", "Vite", "LocalStorage"],
    features: [
      "Dashboard",
      "Subject Manager",
      "Study Planner",
      "Task Management",
      "Notes",
      "Goals",
      "Pomodoro Study Timer",
      "Progress Analytics",
      "LocalStorage persistence",
    ],
    github: "https://github.com/Renganathan60",
    demo: "#",
  },
  {
    title: "SportsHub",
    subtitle: "Full Stack Sports E-Commerce Website",
    image: sportshub,
    description:
      "A complete full-stack e-commerce web platform for sports gear and accessories. Features comprehensive product catalog browsing, secure user authentication with JWT, seamless shopping cart, and order checkout flows connected to a MongoDB database.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    features: [
      "Product management",
      "Cart management",
      "Order management",
      "JWT authentication",
      "REST APIs",
      "Responsive UI",
    ],
    github: "https://github.com/Renganathan60",
    demo: "#",
  },
];

function ProjectsPage() {
  const reduce = useReducedMotion();

  return (
    <PageTransition>
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Engineered with Code & Purpose"
          description="Explore my recent full-stack and frontend projects, demonstrating clean architecture, component design, responsive layouts, and robust application state."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {projectsList.map((project, i) => (
            <motion.article
              key={project.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              {...liftable(reduce)}
              className="card-soft flex flex-col overflow-hidden bg-surface/70 transition-all duration-300 hover:border-primary/40 hover:shadow-lift"
            >
              {/* Project Image Preview */}
              <div className="relative overflow-hidden bg-muted group">
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-foreground border border-border shadow-xs">
                  {project.title}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={14} />
                  <span>{project.subtitle}</span>
                </div>

                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Layers size={13} className="text-primary" />
                    <span>Technologies</span>
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground border border-primary/10"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features List */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Key Features
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/80 bg-background/80 rounded-xl px-3 py-2 border border-border/60"
                      >
                        <CheckCircle2 size={13} className="text-primary shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                  <motion.a
                    {...pressable(reduce)}
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    {...pressable(reduce)}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:bg-surface hover:border-primary/40"
                  >
                    <Github size={16} />
                    <span>GitHub Repository</span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
