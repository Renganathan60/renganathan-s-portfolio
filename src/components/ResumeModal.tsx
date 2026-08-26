import { motion, AnimatePresence } from "motion/react";
import { X, Printer, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open("/resume.html", "_blank");
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden"
        >
          {/* Header Controls Bar */}
          <div className="flex shrink-0 items-center justify-between border-b border-border bg-background px-4 sm:px-6 py-3.5">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-base sm:text-lg font-bold text-foreground">
                Renganathan S — Resume
              </h2>
              <span className="hidden sm:inline-block rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                PDF View
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-surface-hover hover:border-primary/50 cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>
              <a
                href="/resume.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-hover"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">Open in New Tab</span>
              </a>
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-xl border border-border text-muted-foreground transition hover:bg-surface hover:text-foreground cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Iframe Document Viewer */}
          <div className="flex-1 w-full bg-zinc-200 dark:bg-zinc-900 overflow-hidden">
            <iframe
              src="/resume.html"
              title="Renganathan S Resume"
              className="w-full h-full border-0 bg-white"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
