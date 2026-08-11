'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { GridDivider } from '@/components/ui/GridDivider';
import { Button, FORM_URL } from '@/components/ui/Button';
import { Sparkles } from 'lucide-react';
import ThreeDMarquee from '@/components/ui/3d-marquee';

export const AboutSection = () => {
  return (
    <>
      <GridDivider label="NeuroWeb — Websites High-End" />

      <section id="neuroweb" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        
        {/* Ambient soft green radial glow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#03AD97]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
          
          {/* Top Row: H1 + P side-by-side with neuroWebcomponent.png */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Headline & Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col justify-center text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03AD97]/10 border border-[#03AD97]/30 text-[#03AD97] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs w-fit">
                <Sparkles className="w-4 h-4 text-[#03AD97]" />
                <span>Desenvolvimento Web Autoral</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-6">
                Construímos websites <SerifAccent>focados na conversão</SerifAccent>.
              </h2>

              <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mb-8">
                Além de construirmos pensando na segurança, design system e o design ideal para seu negócio, estruturamos o seu site ou landing page focada em venda. É mais que um produto, é resolução de uma dor.
              </p>

              <div>
                <Button href={FORM_URL} size="lg" showArrow className="shadow-lg shadow-emerald-500/20">
                  Solicitar Orçamento
                </Button>
              </div>
            </motion.div>

            {/* Right: neuroWebcomponent.png sem fundo, somente ela em evidencia */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative w-full max-w-xl hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/neuroWebcomponent.png"
                  alt="NeuroWeb Component"
                  width={1000}
                  height={650}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(3,173,151,0.2)]"
                  priority
                />
              </div>
            </motion.div>

          </div>

          {/* Bottom Row: 3D Marquee Templates + Video Project 9 (Somente o vídeo, sem borda sem nada) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-slate-100">
            
            {/* Left: 3D Marquee component showcasing craitivos templates */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <ThreeDMarquee />
            </motion.div>

            {/* Right: Pure Video Project 9 without border or header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black w-full shadow-2xl">
                <video
                  src="/videos/video-project-9.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
};
