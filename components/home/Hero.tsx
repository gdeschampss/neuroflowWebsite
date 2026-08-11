'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { TextShimmer } from '@/components/ui/text-shimmer';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-36 sm:pt-44 pb-20 md:pb-28 min-h-[85vh] flex items-center">
      {/* Background Image from herosectionimagem.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt="NeuroFlow Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Subtle overlay gradient to ensure high readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl flex flex-col items-start text-left">

          {/* AbacatePay Inspired Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-[#03AD97]/30 text-[#03AD97] text-xs font-bold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#03AD97]" />
            <span>Integre com IA: Claude, ChatGPT, Atlas, Lovable e mais</span>
          </motion.div>

          {/* H1 Title with Text Shimmer on 'empresas' */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1F1F1F] tracking-tight leading-[1.1] mb-6"
          >
            Aplicando Inteligência Artificial em{' '}
            <TextShimmer
              as="span"
              duration={2.2}
              className="font-extrabold [--base-color:#03AD97] [--base-gradient-color:#6ee7b7] text-[#03AD97]"
            >
              empresas
            </TextShimmer>.
          </motion.h1>

          {/* H2 / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl text-[#1F1F1F]/80 font-medium leading-relaxed mb-8 max-w-2xl font-sans"
          >
            Menos trabalho manual, mais eficiência e operação rodando 24/7.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <Button href={FORM_URL} size="lg" showArrow className="shadow-lg shadow-emerald-500/20">
              Começar agora
            </Button>
            <Button href="#ferramentas" variant="outline" size="lg">
              Nossas ferramentas
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 w-full max-w-xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
              <span>Atendimento 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
              <span>Setup em Dias</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
              <span>Zero Hype, +Vendas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
