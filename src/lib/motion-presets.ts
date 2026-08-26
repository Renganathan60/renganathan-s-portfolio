/** Motion prop helpers that stay compatible with exactOptionalPropertyTypes. */

export const pressable = (reduce: boolean | null) =>
  reduce ? {} : { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 } };

export const liftable = (reduce: boolean | null) => (reduce ? {} : { whileHover: { y: -8 } });

export const floating = (reduce: boolean | null, distance = 14, duration = 6) =>
  reduce
    ? {}
    : {
        animate: { y: [0, -distance, 0] },
        transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
      };
