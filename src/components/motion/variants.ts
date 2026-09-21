import { Variants, Transition } from "framer-motion";

// Studio-grade easing curves (as featured in high-end Framer designs)
export const studioEase = [0.22, 1, 0.36, 1] as const;
export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 0.8,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
};

export const bounceSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 15,
};

// Fade up reveal for sections and headings
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: studioEase,
    },
  },
};

// Stagger container for lists, grids, and multi-element sections
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Child item for stagger
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: studioEase,
    },
  },
};

// Card spring hover physics
export const cardHoverMotion = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
    transition: gentleSpring,
  },
  hover: {
    y: -7,
    scale: 1.015,
    boxShadow: "0 20px 35px -10px rgba(102, 65, 123, 0.18)",
    transition: gentleSpring,
  },
};

// Floating ambient oscillation for hero elements
export const ambientFloat: Variants = {
  animate: {
    y: [-5, 5, -5],
    rotate: [-0.6, 0.6, -0.6],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
