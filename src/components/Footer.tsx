import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/", label: "LeetCode" },
  { icon: Mail, href: "mailto:renganathan.dev@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <p className="min-w-0 text-sm text-muted-foreground">
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-foreground">Renganathan S</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:rotate-6 hover:border-primary hover:text-primary"
            >
              <s.icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
