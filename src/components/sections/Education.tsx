import { GraduationCap, School, BadgeCheck } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const timeline = [
  {
    icon: GraduationCap,
    period: "2023 – 2027",
    title: "Bachelor of Engineering (Computer Science and Engineering)",
    institution: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    meta: "CGPA 7.47",
    detail:
      "Coursework in data structures, DBMS, operating systems and web technologies, alongside hands-on frontend project work.",
  },
  {
    icon: School,
    period: "2022 – 2023",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Government Higher Secondary School",
    meta: "77.83%",
    detail: "Computer Science stream, with strong foundations in programming and mathematics.",
  },
];

const certifications = [
  { title: "Java Programming for Beginners", issuer: "Simplilearn" },
  { title: "Complete HTML & CSS Responsive Web Development", issuer: "Udemy" },
  { title: "GitHub Developer Toolkit", issuer: "NoviTech R&D Private Limited" },
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="Academic background & certifications" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative pl-8">
            <span className="absolute left-2 top-2 bottom-2 w-px bg-border" />
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="relative pb-10 last:pb-0">
                <span className="absolute -left-8 top-1 grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-primary">
                  <item.icon size={16} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{item.institution}</p>
                <p className="mt-2 inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {item.meta}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Certifications
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {certifications.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 0.1}
                  className="card-soft flex items-start gap-4 p-6"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <BadgeCheck size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-foreground">{c.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
