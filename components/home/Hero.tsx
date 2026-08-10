'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Sparkles, Bot, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-36 pb-20 md:py-28">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Main Title with H1 Illumination Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#1F1F1F] tracking-tight leading-[1.1] mb-6">
              IA de verdade <span className="animate-text-glow font-serif-accent font-normal">aplicada</span>, sem hype.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#1F1F1F]/80 leading-relaxed font-normal mb-8 max-w-2xl">
              Implementamos inteligência operacional e comercial dentro da sua empresa. Qualifique leads 24/7 via WhatsApp com o <strong className="text-[#1F1F1F] font-semibold">Atlas</strong> e conquiste autoridade com o <strong className="text-[#1F1F1F] font-semibold">NeuroWeb</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button href={FORM_URL} size="lg" showArrow>
                Quero Automatizar Minhas Vendas
              </Button>
              <Button href="#pilares" variant="outline" size="lg" isExternal={false}>
                Ver Nossos Produtos
              </Button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 w-full max-w-xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
                <span>Atendimento 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
                <span>Setup em Dias</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
                <span>Zero Hype</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual 3D Showcase (Sem balões flutuantes) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/images/logo3d.webp"
                  alt="NeuroFlow 3D Identity"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-[0_20px_40px_rgba(3,173,151,0.2)]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

