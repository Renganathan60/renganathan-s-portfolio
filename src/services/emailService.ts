import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SendEmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Anti-spam rate limiter: minimum 10 seconds between submissions
let lastSubmissionTimestamp = 0;
const SUBMISSION_COOLDOWN_MS = 10000;

export async function sendContactEmail(data: ContactFormData): Promise<SendEmailResponse> {
  const now = Date.now();
  if (now - lastSubmissionTimestamp < SUBMISSION_COOLDOWN_MS) {
    const waitSeconds = Math.ceil(
      (SUBMISSION_COOLDOWN_MS - (now - lastSubmissionTimestamp)) / 1000,
    );
    return {
      success: false,
      error: `Please wait ${waitSeconds} second${
        waitSeconds > 1 ? "s" : ""
      } before sending another message.`,
    };
  }

  const serviceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"];
  const templateId = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"];
  const publicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"];

  if (!serviceId || !templateId || !publicKey) {
    console.error(
      "EmailJS configuration missing. Please ensure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are defined in your .env file.",
    );
    return {
      success: false,
      error:
        "Email service is not configured yet. Please configure EmailJS credentials or reach out directly by email.",
    };
  }

  // Template parameters matching {{name}}, {{email}}, {{subject}}, {{message}}
  const templateParams = {
    name: data.name.trim(),
    email: data.email.trim(),
    subject: data.subject.trim(),
    message: data.message.trim(),
    submitted_at: new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "medium",
    }),
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200 || response.text === "OK") {
      lastSubmissionTimestamp = Date.now();
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      };
    } else {
      return {
        success: false,
        error: "Unable to send your message. Please try again or contact me directly by email.",
      };
    }
  } catch (err: unknown) {
    console.error("EmailJS submission error:", err);
    return {
      success: false,
      error: "Unable to send your message. Please try again or contact me directly by email.",
    };
  }
}
