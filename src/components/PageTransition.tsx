import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-[calc(100vh-18rem)] pt-28 pb-20 sm:pt-36 sm:pb-24 ${className}`}
    >
      {children}
    </motion.div>
  );
}
