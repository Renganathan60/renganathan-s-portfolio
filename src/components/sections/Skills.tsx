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
} from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import { liftable } from "@/lib/motion-presets";

const skills = [
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Paintbrush },
  { name: "JavaScript", icon: FileCode2 },
  { name: "React.js", icon: Atom },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Bootstrap", icon: LayoutGrid },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Node.js", icon: Server },
  { name: "REST APIs", icon: Plug },
];

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with"
          description="Tools I reach for daily when turning an idea into a shipped interface."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={{
                hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              {...liftable(reduce)}
              className="card-soft group flex flex-col items-center gap-3 p-6 text-center transition-shadow hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:rotate-6">
                <skill.icon size={22} />
              </span>
              <span className="text-sm font-semibold text-foreground">{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
