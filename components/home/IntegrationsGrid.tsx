'use client';

import React from 'react';
import { GridDivider } from '@/components/ui/GridDivider';
import OrbitingCirclesGlobeDemo from '@/components/ui/orbiting-circles-02';

export const IntegrationsGrid = () => {
  return (
    <>
      <GridDivider label="Integrações & Ecossistema" />

      <section id="tecnologias" className="py-20 md:py-28 bg-slate-50/60 relative overflow-hidden">
        {/* Soft background green ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#03AD97]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
              Integração nativa com suas ferramentas do dia a dia
            </h2>
            <p className="text-base sm:text-xl text-[#1F1F1F]/70 mt-4 leading-relaxed font-medium">
              A IA se conecta à infraestrutura que sua empresa já utiliza.
            </p>
          </div>

          {/* 🪐 Orbiting Circles Globe Animation Element */}
          <div className="relative rounded-3xl border border-slate-200/90 bg-white/70 backdrop-blur-xs p-4 sm:p-6 shadow-sm overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-2 relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#03AD97] font-bold block">
                CONEXÃO EM TEMPO REAL
              </span>
            </div>
            
            <OrbitingCirclesGlobeDemo />
          </div>

        </div>
      </section>
    </>
  );
};
