import type { TargetAndTransition, Transition } from "motion/react";

export interface MotionPresetProps {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  transition?: Transition;
}

export const pressable = (reduce: boolean | null): MotionPresetProps =>
  reduce
    ? {}
    : {
        whileHover: { scale: 1.03, y: -1 },
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 400, damping: 25 },
      };

export const secondaryButton = (reduce: boolean | null): MotionPresetProps =>
  reduce
    ? {}
    : {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 400, damping: 25 },
      };

export const liftable = (reduce: boolean | null, y = -4): MotionPresetProps =>
  reduce
    ? {}
    : {
        whileHover: { y, scale: 1.01 },
        transition: { type: "spring", stiffness: 350, damping: 22 },
      };

export const cardLift = (reduce: boolean | null): MotionPresetProps =>
  reduce
    ? {}
    : {
        whileHover: { y: -6, scale: 1.015 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
      };

export const socialHover = (reduce: boolean | null): MotionPresetProps =>
  reduce
    ? {}
    : {
        whileHover: { scale: 1.1, y: -2 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 22 },
      };

export const floating = (reduce: boolean | null, distance = 8, duration = 5): MotionPresetProps =>
  reduce
    ? {}
    : {
        animate: { y: [0, -distance, 0] },
        transition: {
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      };

export const staggerContainer = (staggerChildren = 0.08) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.05,
    },
  },
});

export const fadeInScale = (reduce: boolean | null, delay = 0): MotionPresetProps =>
  reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      };

export const fadeInUp = (reduce: boolean | null, delay = 0, y = 24): MotionPresetProps =>
  reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      };
