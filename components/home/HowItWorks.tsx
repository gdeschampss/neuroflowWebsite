'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Link2, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Operacional',
      subtitle: 'Mapeamento Completo',
      description:
        'Mapeamos seus canais de atendimento, o volume mensal de mensagens e onde os leads estão esfriando por falta de resposta rápida.',
      icon: Search,
      badge: 'Fase 1'
    },
    {
      number: '02',
      title: 'Treinamento & Personalização',
      subtitle: 'IA com a Cara do seu Negócio',
      description:
        'Alimentamos a IA com a base de conhecimento do seu produto, regras de precificação, tom de voz e diretrizes comerciais.',
      icon: Cpu,
      badge: 'Fase 2'
    },
    {
      number: '03',
      title: 'Integração sem Fricção',
      subtitle: 'Conexão Nativa aos Canais',
      description:
        'Conectamos o agente diretamente ao WhatsApp da sua empresa, Instagram Direct ou CRM em poucos dias, sem parar a operação.',
      icon: Link2,
      badge: 'Fase 3'
    },
    {
      number: '04',
      title: 'Operação Rodando Sozinho',
      subtitle: 'ROI & Atendimento 24/7',
      description:
        'O Atlas assume a linha de frente qualificando leads de dia e de noite, enviando reuniões prontas para seus vendedores fecharem.',
      icon: TrendingUp,
      badge: 'Fase 4'
    },
  ];

  return (
    <section id="implementacao" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#03AD97] uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Metodologia NeuroFlow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
            Como funciona a implementação
          </h2>
          <p className="text-base sm:text-xl text-[#1F1F1F]/70 mt-4 leading-relaxed">
            Do primeiro diagnóstico à inteligência artificial vendendo no seu WhatsApp em 4 etapas cirúrgicas.
          </p>
        </div>

        {/* 3D Interactive Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Central Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-200 via-[#03AD97] to-emerald-200 rounded-full" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card Side */}
                  <div className="w-full lg:w-1/2 px-4 lg:px-8">
                    <div className="bg-gray-50/90 border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#03AD97]/40 transition-all duration-300 group relative">
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-[#03AD97] border border-emerald-200/60">
                          {step.badge}
                        </span>
                        <span className="text-3xl font-black text-gray-300 font-mono">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">
                        {step.subtitle}
                      </p>
                      
                      <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="my-6 lg:my-0 relative z-20 flex items-center justify-center shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#03AD97] shadow-xl shadow-emerald-500/20 flex items-center justify-center text-[#03AD97] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Spacer Side for desktop grid balance */}
                  <div className="hidden lg:block w-1/2 px-8" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
