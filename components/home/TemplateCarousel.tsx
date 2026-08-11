'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';

const templates = [
  {
    id: 1,
    title: 'Nexus SaaS Platform',
    category: 'High-End SaaS & Tech',
    image: '/images/neuroWebcomponent.png',
    badge: '100/100 Lighthouse',
    speed: '< 0.3s'
  },
  {
    id: 2,
    title: 'Lumina E-Commerce',
    category: 'Vendas & Alta Conversão',
    image: '/images/hero-bg.webp',
    badge: 'Next.js 15 Edge',
    speed: '< 0.4s'
  },
  {
    id: 3,
    title: 'OdontoPrime Corporate',
    category: 'Portal Saúde & Clínicas',
    image: '/images/logos-neuroweb.webp',
    badge: 'Design Autoral',
    speed: '< 0.3s'
  }
];

export const TemplateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  return (
    <div className="relative w-full bg-slate-900/90 rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl text-white overflow-hidden group">
      
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#03AD97]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Templates & Cases Neuroweb
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#03AD97] transition-all cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#03AD97] transition-all cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="relative h-[260px] sm:h-[300px] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-inner">
        {templates.map((template, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={template.id}
              className={`absolute inset-0 transition-all duration-500 ease-out flex flex-col justify-between p-4 ${
                isActive
                  ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                  : 'opacity-0 scale-95 z-0 pointer-events-none'
              }`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-800 group/img">
                <Image
                  src={template.image}
                  alt={template.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#03AD97] uppercase tracking-wider block">
                        {template.category}
                      </span>
                      <h4 className="text-lg font-bold text-white leading-snug">
                        {template.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#03AD97]/20 text-[#03AD97] border border-[#03AD97]/40">
                        {template.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {templates.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === currentIndex ? 'w-6 bg-[#03AD97]' : 'w-2 bg-slate-700'
            }`}
          />
        ))}
      </div>

    </div>
  );
};
