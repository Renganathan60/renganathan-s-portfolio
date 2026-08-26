import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Mail, Phone, Github, Linkedin, Code2, Send, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { pressable } from "@/lib/motion-presets";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "renganathans757@gmail.com",
    href: "mailto:renganathans757@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 93606 24890", href: "tel:+919360624890" },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Renganathan60",
    href: "https://github.com/Renganathan60",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/renganathan-s-a17b783a7",
    href: "https://www.linkedin.com/in/renganathan-s-a17b783a7/",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "leetcode.com/u/renganathanselvamani",
    href: "https://leetcode.com/u/renganathanselvamani/",
  },
];

export function Contact() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="bg-surface py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to full-time opportunities and frontend collaborations. The fastest way to reach me is email."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-3">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="card-soft group flex items-center gap-4 p-5 transition-shadow hover:shadow-lift"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:rotate-6">
                    <c.icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-foreground">{c.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="card-soft p-8">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="Internship opportunity"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a little about the role or project…"
                  className={field}
                />
              </div>

              <motion.button
                {...pressable(reduce)}
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover cursor-pointer"
              >
                {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                {sent ? "Message ready to send" : "Send message"}
              </motion.button>
              <p className="text-center text-xs text-muted-foreground">
                This form is a frontend demo — email me directly for a guaranteed reply.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
