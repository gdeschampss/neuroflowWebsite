'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { GridDivider } from '@/components/ui/GridDivider';
import { Globe, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export const NeuroWebSection = () => {
  return (
    <>
      <GridDivider label="NeuroWeb — High-End Web" />

      <section id="neuroweb-showcase" className="py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
        {/* Soft background radial green glow (AbacatePay style) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#03AD97]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03AD97]/10 border border-[#03AD97]/30 text-[#03AD97] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#03AD97]" />
              <span>Engenharia Web & Alta Performance</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
              Sites corporativos que posicionam sua empresa como <SerifAccent>líder</SerifAccent>.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium">
              Desenvolvimento autoral em Next.js 15, sem WordPress ou templates genéricos. Nota 100/100 no Google.
            </p>
          </div>

          {/* Main Image Showcase Grid (neuroWebcomponent.png in Evidence) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-center space-y-6"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#03AD97]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-[#03AD97]/10 text-[#03AD97] flex items-center justify-center mb-5 border border-[#03AD97]/20">
                  <Globe className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">
                  NeuroWeb — Presença Digital High-End
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Interfaces autorais criadas do zero para transmitir autoridade e converter visitantes em clientes.
                </p>

                {/* 1-Line Benefit List */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
                    <span>Lighthouse 100/100 em SEO & Performance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
                    <span>Carregamento instantâneo no 4G/5G mobile</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#03AD97] shrink-0" />
                    <span>Design exclusivo alinhado ao seu posicionamento</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-6 flex flex-col sm:flex-row gap-3">
                  <Button href="/neuroweb" size="md" showArrow isExternal={false}>
                    Conhecer NeuroWeb
                  </Button>
                  <Button href={FORM_URL} variant="outline" size="md">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Prominent Image Showcase (neuroWebcomponent.png in evidence) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 flex justify-center"
            >
              <div className="relative w-full rounded-3xl p-3 sm:p-5 bg-white border-2 border-[#03AD97]/30 shadow-xl shadow-emerald-500/10 hover:border-[#03AD97]/60 transition-all duration-300 group overflow-hidden">
                
                {/* AbacatePay Texture Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-3 text-xs text-slate-500 bg-slate-50/70 rounded-xl">
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>neuroweb-interface.png</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100/80 text-[#03AD97] border border-emerald-300/60">
                    High Conversion UI
                  </span>
                </div>

                {/* Main Prominent Image */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200/80 group-hover:scale-[1.01] transition-transform duration-500">
                  <Image
                    src="/images/neuroWebcomponent.png"
                    alt="NeuroWeb Component Showcase"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Bottom AbacatePay Detail Badges */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-gray-700">
                    ⚡ 0.3s Carregamento
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-gray-700">
                    🔒 Segurança Edge
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-gray-700">
                    📱 Mobile First
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
};
