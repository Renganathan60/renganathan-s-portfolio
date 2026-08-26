import { useEffect, useState } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";

export function InteractiveBackground() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(true);

  const mouseX = useSpring(0, { stiffness: 45, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 45, damping: 25 });

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(pointer: fine)");
    setIsPointerFine(media.matches);

    const handleMedia = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    media.addEventListener("change", handleMedia);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (media.matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      media.removeEventListener("change", handleMedia);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft Ambient Corner Gradients */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl opacity-70" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-primary/8 via-primary-soft to-transparent blur-3xl opacity-60" />
      <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary-soft via-accent/10 to-transparent blur-3xl opacity-50" />

      {/* Mouse Follow Glow - Only on desktop pointer devices without reduced motion */}
      {!reduce && isPointerFine && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute top-0 left-0 h-[480px] w-[480px] rounded-full bg-radial from-primary/8 via-primary/3 to-transparent blur-2xl transition-opacity duration-500"
        />
      )}

      {/* Floating subtle geometric decorative orbs */}
      {!reduce && (
        <>
          <motion.div
            animate={{
              y: [0, -18, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[18%] left-[8%] h-32 w-32 rounded-full bg-primary/5 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 22, 0],
              x: [0, -12, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[55%] right-[12%] h-44 w-44 rounded-full bg-accent/8 blur-xl"
          />
        </>
      )}
    </div>
  );
}
