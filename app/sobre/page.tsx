'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards';
import { SupportSection } from '@/components/home/SupportSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function SobrePage() {
  return (
    <div className="bg-white text-[#1F1F1F]">
      {/* Header Section */}
      <section className="pt-36 pb-12 sm:pt-44 sm:pb-16 bg-gradient-to-b from-emerald-50/40 via-white to-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Title with Hero Text Shimmer Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-[#1F1F1F]"
            >
              Conheça a <span className="text-shimmer">Neuroflow</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-2xl text-gray-600 font-medium leading-relaxed font-sans max-w-2xl"
            >
              Entenda nosso objetivo e quem trabalha por trás
            </motion.p>

          </div>
        </div>
      </section>

      {/* Unified Section Card (3 Text Cards + 3 Pure Image Cards) */}
      <RuixenBentoCards />

      {/* Support Section */}
      <SupportSection />

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
