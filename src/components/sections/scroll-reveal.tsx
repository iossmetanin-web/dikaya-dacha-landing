"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

type ScrollRevealVariant = "fade" | "slide-left" | "slide-right" | "scale" | "blur";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  variant?: ScrollRevealVariant;
}

// Elegant, softer easing curves for a luxury feel
const ELEGANT_EASE = [0.22, 1, 0.36, 1] as const;
const SMOOTH_EASE = [0.25, 0.46, 0.45, 0.94] as const;

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

function getDirectionVariants(
  direction: ScrollRevealProps["direction"],
  duration: number,
  delay: number
): Variants {
  return {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: ELEGANT_EASE,
      },
    },
  };
}

function getVariantConfig(
  variant: ScrollRevealVariant,
  duration: number,
  delay: number
): Variants {
  const baseTransition = {
    duration,
    delay,
    ease: ELEGANT_EASE,
  };

  switch (variant) {
    case "fade":
      return {
        hidden: {
          opacity: 0,
          y: 24,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ...baseTransition,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      };

    case "slide-left":
      return {
        hidden: {
          opacity: 0,
          x: 80,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            ...baseTransition,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };

    case "slide-right":
      return {
        hidden: {
          opacity: 0,
          x: -80,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            ...baseTransition,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };

    case "scale":
      return {
        hidden: {
          opacity: 0,
          scale: 0.88,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            ...baseTransition,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

    case "blur":
      return {
        hidden: {
          opacity: 0,
          filter: "blur(12px)",
          y: 12,
        },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          transition: {
            ...baseTransition,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      };
  }
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  variant,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants: Variants =
    variant !== undefined
      ? getVariantConfig(variant, duration, delay)
      : getDirectionVariants(direction, duration, delay);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}