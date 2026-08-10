'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Star, MessageSquareQuote, CheckCircle2, TrendingUp } from 'lucide-react';

export const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Fernando Silva',
      role: 'Diretor Clínico • Odontologia Premium',
      handle: '@clinicapsilva',
      quote:
        'Antes do Atlas, perdíamos pacientes que mandavam mensagem às 22h. Hoje o agente qualifica o plano de saúde, tira dúvidas e encaixa a consulta na agenda sozinho.',
      tag: 'Atlas SDR',
    },
    {
      id: 2,
      name: 'Mariana Costa',
      role: 'Head de Vendas • Grupo Hoster',
      handle: '@marianacosta.vendas',
      quote:
        'A velocidade de resposta mudou nosso jogo. Nosso tempo médio caiu de 40 minutos para 3 segundos. A taxa de agendamento de reuniões subiu 38%.',
      tag: 'Atlas SDR',
    },
    {
      id: 3,
      name: 'Lucas Mendes',
      role: 'CEO • Mendes Advocacia',
      handle: '@mendesadvocacia',
      quote:
        'O site desenvolvido pelo NeuroWeb colocou nosso escritório em outro patamar de autoridade. Carrega instantaneamente e gera leads todos os dias.',
      tag: 'NeuroWeb',
    },
    {
      id: 4,
      name: 'Rafael Oliveira',
      role: 'Sócio • Imobiliária Prime',
      handle: '@rafaelprime.imob',
      quote:
        'O Atlas atende mais de 300 interessados por semana no WhatsApp sem errar uma informação de imóvel. Excelente investimento.',
      tag: 'Atlas SDR',
    },
    {
      id: 5,
      name: 'Camila Rocha',
      role: 'Fundadora • Estética Bella',
      handle: '@camilarocha.estetica',
      quote:
        'Implementamos o Atlas e o novo site com a NeuroFlow. Em menos de 10 dias nossa equipe comercial parou de sofrer com mensagens acumuladas.',
      tag: 'NeuroFlow',
    },
  ];

  // Duplicate list to achieve infinite seamless loop
  const infiniteList = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* Animated Counter Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm mb-16">
          <div className="text-center md:border-r border-gray-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#03AD97]">
              +150
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
              Empresas Atendidas
            </p>
          </div>

          <div className="text-center md:border-r border-gray-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F]">
              24/7
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
              Operação WhatsApp Ativa
            </p>
          </div>

          <div className="text-center md:border-r border-gray-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#03AD97]">
              &lt; 5s
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
              Tempo Médio de Resposta
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F]">
              100%
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
              Zero Mensagens Perdidas
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
            O que dizem quem já <SerifAccent>automatizou</SerifAccent>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Empresas reais que trocaram a demora no atendimento por IA funcional.
          </p>
        </div>

      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Fade gradients on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-4">
          {infiniteList.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#03AD97]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-[#03AD97]/10 text-[#03AD97]">
                  {t.tag}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#03AD97] text-white flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1F1F]">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
