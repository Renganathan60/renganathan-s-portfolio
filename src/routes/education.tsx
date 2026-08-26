import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  GraduationCap,
  School,
  BadgeCheck,
  Calendar,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { liftable } from "@/lib/motion-presets";

const title = "Education & Certifications — Renganathan S";
const description =
  "Academic qualifications, Bachelor of Engineering degree details, CGPA, and professional certifications of Renganathan S.";

export const Route = createFileRoute("/education")({
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
  component: EducationPage,
});

const educationList = [
  {
    icon: GraduationCap,
    period: "2023 – 2027",
    degree: "Bachelor of Engineering (B.E.)",
    major: "Computer Science and Engineering",
    institution: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    score: "CGPA: 7.47 / 10",
    status: "Currently Pursuing (Active)",
    details: [
      "Rigorous core curriculum in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
      "Hands-on laboratory work and project-oriented engineering development in full-stack and frontend ecosystems.",
      "Active participant in technical symposiums, coding challenges, and collaborative software projects.",
    ],
  },
  {
    icon: School,
    period: "2022 – 2023",
    degree: "Higher Secondary Certificate (HSC - 12th Grade)",
    major: "Computer Science & Mathematics Stream",
    institution: "Government Higher Secondary School",
    score: "Percentage: 77.83%",
    status: "Completed",
    details: [
      "Specialized in Computer Science, Mathematics, Physics, and Chemistry.",
      "Built strong foundational fundamentals in programming logic, mathematical problem solving, and analytical thinking.",
    ],
  },
];

const certifications = [
  {
    title: "Java Programming for Beginners",
    issuer: "Simplilearn",
    date: "Certified",
    topics: "Core Java, Object-Oriented Programming, Exception Handling",
  },
  {
    title: "Complete HTML & CSS Responsive Web Development",
    issuer: "Udemy",
    date: "Certified",
    topics: "Modern HTML5, CSS3, Flexbox, Grid, Responsive Media Queries",
  },
  {
    title: "GitHub Developer Toolkit",
    issuer: "NoviTech R&D Private Limited",
    date: "Certified",
    topics: "Git Version Control, Remote Repositories, Branching & CI Workflows",
  },
];

function EducationPage() {
  const reduce = useReducedMotion();

  return (
    <PageTransition>
      <div className="section-shell">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Certifications"
          description="My formal academic qualifications in Computer Science and Engineering alongside verified technical training and certifications."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Left Column: Academic Timeline */}
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-6">
              <BookOpen size={18} />
              <span>Academic Timeline</span>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-10">
              {/* Timeline continuous vertical line */}
              <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-border" />

              {educationList.map((item, i) => (
                <Reveal key={item.degree} delay={i * 0.12} className="relative">
                  {/* Timeline node icon */}
                  <span className="absolute -left-6 sm:-left-8 top-0 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-soft">
                    <item.icon size={16} />
                  </span>

                  <div className="card-soft p-6 sm:p-7 bg-surface/70 shadow-soft">
                    {/* Period & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary-soft px-3 py-1 rounded-full">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">{item.major}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>

                    {/* Score Badge */}
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary-soft/60 px-3.5 py-1.5 text-xs font-bold text-accent-foreground">
                      <Award size={14} className="text-primary" />
                      <span>{item.score}</span>
                    </div>

                    {/* Details */}
                    <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                      {item.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-6">
              <Sparkles size={18} />
              <span>Certifications</span>
            </div>

            <div className="space-y-4">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.1}>
                  <motion.div
                    {...liftable(reduce)}
                    className="card-soft flex items-start gap-4 p-5 sm:p-6 bg-surface/70 transition-all duration-300 hover:border-primary/40 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary shadow-xs">
                      <BadgeCheck size={22} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          {c.issuer}
                        </span>
                        <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border">
                          {c.date}
                        </span>
                      </div>
                      <h4 className="mt-1 text-sm sm:text-base font-bold text-foreground">
                        {c.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        {c.topics}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
