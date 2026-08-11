'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl flex flex-col items-start text-left">

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1F1F1F] tracking-tight leading-[1.1] mb-6"
          >
            Aplicando Inteligência Artificial em <span className="text-shimmer">empresas</span>.
          </motion.h1>

          {/* H2 / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl text-[#1F1F1F]/80 font-medium leading-relaxed mb-8 max-w-2xl font-sans"
          >
            Menos trabalho, mais eficiente, operação rodando sozinho.
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
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200/80 w-full max-w-xl">
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
