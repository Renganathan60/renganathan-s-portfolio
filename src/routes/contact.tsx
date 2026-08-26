import { useState, type FormEvent, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Loader2,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { pressable } from "@/lib/motion-presets";
import { sendContactEmail, type ContactFormData } from "@/services/emailService";

const title = "Contact Me — Renganathan S";
const description =
  "Get in touch with Renganathan S for frontend developer roles, collaborations, and project discussions.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "renganathans757@gmail.com",
    href: "mailto:renganathans757@gmail.com",
    action: "Send an email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93606 24890",
    href: "tel:+919360624890",
    action: "Call / WhatsApp",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Trichy, Tamil Nadu, India",
    action: "Open to Relocation",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/renganathan-s-a17b783a7",
    href: "https://www.linkedin.com/in/renganathan-s-a17b783a7/",
    action: "Connect on LinkedIn",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Renganathan60",
    href: "https://github.com/Renganathan60",
    action: "Explore repositories",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "leetcode.com/u/renganathanselvamani",
    href: "https://leetcode.com/u/renganathanselvamani/",
    action: "View coding profile",
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactPage() {
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (data: ContactFormData): FormErrors => {
    const errors: FormErrors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!data.email.trim()) {
      errors.email = "Email address is required";
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@example.com)";
    }

    if (!data.subject.trim()) {
      errors.subject = "Subject is required";
    } else if (data.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const errors = validate(formData);
  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!isFormValid) {
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message || "Message sent successfully! I'll get back to you soon.");
      // Clear form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
    } else {
      setStatus("error");
      setStatusMessage(
        result.error ||
          "Unable to send your message. Please try again or contact me directly by email.",
      );
    }
  };

  const inputBaseClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground ${
      hasError
        ? "border-destructive focus:border-destructive focus:ring-3 focus:ring-destructive/15"
        : "border-border focus:border-primary focus:ring-3 focus:ring-primary/15"
    }`;

  return (
    <PageTransition>
      <div className="section-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="I am actively seeking full-time Frontend Developer opportunities. Whether you have an open role to discuss, a question, or a collaboration idea, send a message below."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] items-start">
          {/* Left Column: Direct Contact & Social Channels */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
              <Sparkles size={18} />
              <span>Contact Channels</span>
            </div>

            <div className="grid gap-3.5">
              {contactChannels.map((c, i) => {
                const isLink = !!c.href;
                const Content = (
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6 shadow-xs">
                      <c.icon size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-foreground mt-0.5 group-hover:text-primary transition-colors">
                        {c.value}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                        {c.action}
                      </p>
                    </div>
                    {isLink && (
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground/60 transition-colors group-hover:text-primary shrink-0 mr-2"
                      />
                    )}
                  </div>
                );

                return (
                  <Reveal key={c.label} delay={i * 0.05}>
                    {isLink ? (
                      <a
                        href={c.href}
                        target={c.href?.startsWith("http") ? "_blank" : undefined}
                        rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
                        className="card-soft group block p-4 sm:p-5 bg-surface/70 transition-all hover:border-primary/40 hover:shadow-lift"
                      >
                        {Content}
                      </a>
                    ) : (
                      <div className="card-soft group p-4 sm:p-5 bg-surface/70">{Content}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <Reveal className="card-soft p-7 sm:p-9 bg-surface/80 shadow-soft">
            <div className="flex items-center gap-3 text-primary mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft">
                <MessageSquare size={20} />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Send a Message</h3>
                <p className="text-xs text-muted-foreground">
                  Fill out the form to send an email directly to my inbox.
                </p>
              </div>
            </div>

            {/* Success Feedback Alert */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                aria-live="polite"
                className="mb-6 flex items-start gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-800 dark:text-emerald-300 text-sm font-medium"
              >
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-emerald-900 dark:text-emerald-200">Message Sent!</p>
                  <p className="mt-0.5 text-xs text-emerald-700 dark:text-emerald-300">
                    {statusMessage}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Feedback Alert */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                aria-live="assertive"
                className="mb-6 flex items-start gap-3 rounded-2xl bg-destructive/10 border border-destructive/30 p-4 text-destructive text-sm font-medium"
              >
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Submission Issue</p>
                  <p className="mt-0.5 text-xs">{statusMessage}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Renganathan S"
                    aria-invalid={touched.name && !!errors.name}
                    aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                    className={inputBaseClass(touched.name && !!errors.name)}
                  />
                  {touched.name && errors.name && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-xs font-medium text-destructive flex items-center gap-1"
                    >
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                    className={inputBaseClass(touched.email && !!errors.email)}
                  />
                  {touched.email && errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-xs font-medium text-destructive flex items-center gap-1"
                    >
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground"
                >
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Full Time Frontend Developer Opportunity"
                  aria-invalid={touched.subject && !!errors.subject}
                  aria-describedby={touched.subject && errors.subject ? "subject-error" : undefined}
                  className={inputBaseClass(touched.subject && !!errors.subject)}
                />
                {touched.subject && errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-1.5 text-xs font-medium text-destructive flex items-center gap-1"
                  >
                    <AlertCircle size={12} />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Hello Renganathan, we came across your portfolio and would like to discuss an opportunity..."
                  aria-invalid={touched.message && !!errors.message}
                  aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                  className={inputBaseClass(touched.message && !!errors.message)}
                />
                {touched.message && errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-xs font-medium text-destructive flex items-center gap-1"
                  >
                    <AlertCircle size={12} />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                {...pressable(reduce)}
                type="submit"
                disabled={
                  status === "sending" ||
                  (Object.keys(touched).some((k) => touched[k as keyof typeof touched]) &&
                    !isFormValid)
                }
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-muted-foreground pt-1">
                Direct email also available:{" "}
                <a
                  href="mailto:renganathans757@gmail.com"
                  className="font-semibold text-primary hover:underline"
                >
                  renganathans757@gmail.com
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  );
}
