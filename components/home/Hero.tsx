'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 sm:pt-40 pb-16 md:pb-24 min-h-[75vh] flex items-center">
      {/* Background Image from backgroundHeroSection.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-hero.webp"
          alt="NeuroFlow Background"
          fill
          className="object-cover object-center opacity-100"
          priority
        />
        {/* Soft overlay gradient ensuring both high image visibility and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4 max-w-2xl text-center"
          >
            Pare de responder no manual.<br />
            <span className="text-shimmer">Comece a vender no automático</span>
          </motion.h1>

          {/* H2 / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg text-[#1F1F1F]/80 font-medium leading-relaxed mb-6 max-w-xl text-center font-sans"
          >
            Automações com IA para Escalar Vendas e Desenvolvimento de Sites.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-8"
          >
            <Button href={FORM_URL} size="md" showArrow className="shadow-lg shadow-emerald-500/20">
              Começar agora
            </Button>
            <Button href="#ferramentas" variant="outline" size="md">
              Nossas ferramentas
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-5 border-t border-gray-200/80 w-full max-w-lg">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 font-sans">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#03AD97] shrink-0" />
              <span>Atendimento 24/7</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 font-sans">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#03AD97] shrink-0" />
              <span>Setup em Dias</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 font-sans">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#03AD97] shrink-0" />
              <span>Zero Hype, +Vendas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
