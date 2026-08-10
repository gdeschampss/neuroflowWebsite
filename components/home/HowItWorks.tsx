'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Search, Cpu, Link2, TrendingUp } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Operacional',
      description:
        'Mapeamos seus canais de atendimento, o volume mensal de mensagens e onde os leads estão esfriando por falta de resposta rápida.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Treinamento & Customização',
      description:
        'Alimentamos o modelo com a base de conhecimento do seu produto, regras de precificação, tom de voz e diretrizes comerciais.',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Integração sem Fricção',
      description:
        'Conectamos o agente diretamente ao WhatsApp da sua empresa, Instagram Direct ou CRM em poucos dias, sem parar a operação.',
      icon: Link2,
    },
    {
      number: '04',
      title: 'Operação 24/7 & ROI',
      description:
        'O Atlas assume a linha de frente qualificando leads de dia e de noite, enviando reuniões prontas para seus vendedores fecharem.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-gray-50/60 border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
            Como funciona a <SerifAccent>implementação</SerifAccent>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Do primeiro diagnóstico à IA rodando e vendendo no seu WhatsApp em 4 passos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-[#03AD97]/20 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#03AD97] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-[#03AD97]">
                  Etapa {step.number} de 04
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
