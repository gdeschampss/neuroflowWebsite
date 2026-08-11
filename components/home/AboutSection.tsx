'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { GridDivider } from '@/components/ui/GridDivider';
import { Button, FORM_URL } from '@/components/ui/Button';
import { Sparkles, Play, Globe } from 'lucide-react';
import { TemplateCarousel } from '@/components/home/TemplateCarousel';

export const AboutSection = () => {
  return (
    <>
      <GridDivider label="NeuroWeb — Engenharia Web" />

      <section id="neuroweb" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        
        {/* Ambient soft green radial glow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#03AD97]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header section with Title & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03AD97]/10 border border-[#03AD97]/30 text-[#03AD97] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#03AD97]" />
              <span>Desenvolvimento Web Autoral</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
              NeuroWeb — Presença Digital High-End com <SerifAccent>Performance Máxima</SerifAccent>.
            </h2>
            
            <p className="text-base sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Desenvolvimento web sob medida em Next.js 15 para posicionar sua empresa como líder com nota 100/100 no Google.
            </p>
          </div>

          {/* Featured Image (neuroWebcomponent.png sem fundo, somente ela em evidencia) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-16 relative"
          >
            <div className="relative w-full max-w-4xl hover:scale-[1.01] transition-transform duration-500">
              <Image
                src="/images/neuroWebcomponent.png"
                alt="NeuroWeb Component Showcase"
                width={1200}
                height={700}
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(3,173,151,0.15)]"
                priority
              />
            </div>
          </motion.div>

          {/* 2-Column Grid: Left Carousel of Done Templates + Right Video Project 9 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Interactive Templates Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TemplateCarousel />
            </motion.div>

            {/* Right Column: Video Showcase (Video Project 9.mp4) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 group">
                
                {/* Developer UI Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-1 text-slate-300">neuroweb-presentation.mp4</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#03AD97]/20 text-[#03AD97] border border-[#03AD97]/40">
                    <Play className="w-3 h-3 fill-current" />
                    Demonstração Viva
                  </span>
                </div>

                {/* Video Container */}
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  <video
                    src="/videos/video-project-9.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </motion.div>

          </div>

          {/* Action Call to Action */}
          <div className="mt-14 text-center">
            <Button href={FORM_URL} size="lg" showArrow className="shadow-lg shadow-emerald-500/20">
              Quero um Site Assim para Minha Empresa
            </Button>
          </div>

        </div>
      </section>
    </>
  );
};
