/**
 * Shared Framer Motion variants used across all sections.
 */

export const easing = [0.25, 0.46, 0.45, 0.94] as const;

/** A single item that fades up into view. */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

/**
 * Container that staggers its `fadeUp` children.
 * @param stagger  delay between each child (seconds)
 */
export const staggerContainer = (stagger = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});
