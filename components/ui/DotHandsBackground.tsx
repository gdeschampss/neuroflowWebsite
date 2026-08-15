'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export interface DotHandsBackgroundProps {
  /** Additional CSS classes for the outer absolute container */
  className?: string;
  /** Base opacity on desktop (0.05 to 0.25). Defaults to 0.12 (12%) */
  opacity?: number;
  /** Base opacity on mobile screens (< 768px). Defaults to 0.07 (7%) */
  mobileOpacity?: number;
  /** Enable/disable subtle scroll parallax movement. Defaults to true */
  enableScroll?: boolean;
  /** Enable/disable idle floating breathing animation. Defaults to true */
  enableBreathing?: boolean;
  /** Maximum scroll parallax movement distance in pixels. Defaults to 50px */
  scrollDistance?: number;
}

/**
 * <DotHandsBackground />
 * Decorative background component inspired by Michelangelo's "Creation of Adam",
 * rendered as halftone dots in teal (#03AD97).
 * Metaphor for Human + AI Automação (Atlas/NeuroFlow).
 */
export const DotHandsBackground: React.FC<DotHandsBackgroundProps> = ({
  className = '',
  opacity = 0.12,
  mobileOpacity = 0.07,
  enableScroll = true,
  enableBreathing = true,
  scrollDistance = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll Parallax targeting container scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scroll progress using Framer Motion spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // 2. Parallax Transform: Left hand moves right & slightly up towards center
  const leftX = useTransform(
    smoothProgress,
    [0, 1],
    [0, enableScroll ? scrollDistance : 0]
  );
  const leftY = useTransform(
    smoothProgress,
    [0, 1],
    [0, enableScroll ? -scrollDistance * 0.35 : 0]
  );

  // Right hand moves left & slightly down towards center
  const rightX = useTransform(
    smoothProgress,
    [0, 1],
    [0, enableScroll ? -scrollDistance : 0]
  );
  const rightY = useTransform(
    smoothProgress,
    [0, 1],
    [0, enableScroll ? scrollDistance * 0.35 : 0]
  );

  // 3. Idle Breathing Animation (Smooth 4.5s Y loop)
  const breathingConfig = enableBreathing
    ? {
      duration: 4.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as const,
    }
    : undefined;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {/* LEFT HAND — Anchored at bottom-left, reaching towards center-right */}
        <motion.div
          style={{ x: leftX, y: leftY }}
          animate={enableBreathing ? { y: [-5, 5] } : undefined}
          transition={breathingConfig}
          className="absolute -left-16 sm:-left-6 md:left-0 -bottom-16 sm:-bottom-8 md:bottom-0 w-[300px] sm:w-[440px] md:w-[520px] lg:w-[620px] aspect-square will-change-transform opacity-[0.07] md:opacity-[0.12] transition-opacity duration-300"
        >
          <Image
            src="/assets/dot-hand-left.svg"
            alt="Mão esquerda em pontos halftone"
            width={600}
            height={600}
            className="w-full h-full object-contain pointer-events-none"
            priority
          />
        </motion.div>

        {/* RIGHT HAND — Anchored at top-right, reaching towards center-left */}
        <motion.div
          style={{ x: rightX, y: rightY }}
          animate={enableBreathing ? { y: [5, -5] } : undefined}
          transition={breathingConfig}
          className="absolute -right-16 sm:-right-6 md:right-0 -top-16 sm:-top-8 md:top-0 w-[300px] sm:w-[440px] md:w-[520px] lg:w-[620px] aspect-square will-change-transform opacity-[0.07] md:opacity-[0.12] transition-opacity duration-300"
        >
          <Image
            src="/assets/dot-hand-right.svg"
            alt="Mão direita em pontos halftone"
            width={600}
            height={600}
            className="w-full h-full object-contain pointer-events-none"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};
