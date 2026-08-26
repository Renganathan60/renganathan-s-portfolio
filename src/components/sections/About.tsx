import { MapPin, Mail, Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const quickInfo = [
  { icon: MapPin, label: "Location", value: "Trichy, Tamil Nadu" },
  { icon: Mail, label: "Email", value: "renganathans757@gmail.com" },
  { icon: Briefcase, label: "Experience", value: "Open to Full Time Role" },
];

const highlights = [
  { icon: GraduationCap, title: "Education", value: "BE Computer Science, 2023 – 2027" },
  { icon: Award, title: "CGPA", value: "7.47 / 10" },
  { icon: CheckCircle2, title: "Availability", value: "Immediately available for Full Time Role" },
];

export function About() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A frontend developer who cares about the details"
          description="I'm a Computer Science undergraduate building production-minded interfaces — from layout systems and component libraries to the small interaction touches that make a product feel finished."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="card-soft p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              I started with HTML and CSS, fell for JavaScript, and now spend most of my time in
              React and Tailwind CSS. I enjoy translating designs into responsive, accessible
              interfaces and wiring them up to REST APIs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Outside coursework I ship side projects like StudyMate and SportsHub, practise data
              structures on LeetCode, and keep everything version-controlled on GitHub.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl bg-surface p-4">
                  <h.icon size={18} className="text-primary" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {h.title}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{h.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {quickInfo.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.08}
                className="card-soft flex items-center gap-4 p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <item.icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
