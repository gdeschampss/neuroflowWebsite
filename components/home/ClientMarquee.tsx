'use client';

import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { GridDivider } from '@/components/ui/GridDivider';

export const ClientMarquee = () => {
  const row1Testimonials = [
    {
      name: 'Bruno Rodrigues',
      handle: '@brunocroh',
      company: 'Nexus Tech',
      rating: 5,
      quote: 'Se você tem um negócio e precisa automatizar o atendimento no WhatsApp, o Atlas é surreal. A velocidade de resposta mudou nosso jogo.'
    },
    {
      name: 'Dr. Lucas Silveira',
      handle: '@drlucassilveira',
      company: 'OdontoPrime',
      rating: 4.5,
      quote: 'O Atlas responde nossos pacientes no WhatsApp em menos de 5 segundos. Acabou a perda de agendamentos fora do horário comercial.'
    },
    {
      name: 'Mariana Duarte',
      handle: '@mduarte_ops',
      company: 'Lumina E-commerce',
      rating: 5,
      quote: 'A automação da NeuroFlow conversa com o cliente que abandonou o carrinho como se fosse uma pessoa real da nossa equipe.'
    },
    {
      name: 'Matheus Costa',
      handle: '@matheus_dev',
      company: 'SaaS Flow',
      rating: 4,
      quote: 'Realmente a integração é muito simples e rápida. Em menos de 3 dias já estava tudo rodando em produção.'
    }
  ];

  const row2Testimonials = [
    {
      name: 'Carlos Eduardo',
      handle: '@carlos_edu',
      company: 'Nexus Serviços',
      rating: 4.5,
      quote: 'Eliminamos a triagem manual de orçamentos. O lead já chega qualificado com dados completos para nosso time comercial fechar.'
    },
    {
      name: 'Fernanda Rocha',
      handle: '@fe_rocha',
      company: 'Solaris Imóveis',
      rating: 5,
      quote: 'Sem surpresas nem respostas genéricas de robô antigo. A inteligência do Atlas é cirúrgica na captura de interesse do cliente.'
    },
    {
      name: 'Brahma Dev',
      handle: '@codigo_brahma',
      company: 'Agência Digital',
      rating: 4,
      quote: 'Incrível como é fácil implementar. O time da NeuroFlow entregou o agente treinado rodando liso no nosso WhatsApp.'
    },
    {
      name: 'Micael M.',
      handle: '@micael_m',
      company: 'E-com Brasil',
      rating: 5,
      quote: 'Atendimento nota 10. A taxa de conversão nos finais de semana subiu mais de 200% desde que ativamos o agente.'
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const emptyCount = 5 - Math.ceil(rating);

    return (
      <div className="flex text-amber-400 gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-3.5 h-3.5 fill-current" />
        ))}
        {hasHalf && <StarHalf className="w-3.5 h-3.5 fill-current" />}
        {[...Array(emptyCount)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-3.5 h-3.5 text-slate-300" />
        ))}
      </div>
    );
  };

  return (
    <>
      <GridDivider label="Depoimentos" />

      <section className="py-14 bg-slate-50/60 relative overflow-hidden">
        {/* Constrained Container - Aligned with the body central column */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#03AD97] uppercase tracking-widest block mb-2 font-mono">
              DEPOIMENTOS & PROVA SOCIAL
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] tracking-tight">
              O que dizem os clientes da NeuroFlow
            </h3>
          </div>

          {/* Marquee Wrapper - Strictly limited to max-w-7xl with soft edge blur fade */}
          <div
            className="relative w-full overflow-hidden py-2"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          >
            {/* Left Edge Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent z-10 pointer-events-none" />
            
            {/* Right Edge Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/60 to-transparent z-10 pointer-events-none" />

            <div className="space-y-4">
              {/* Row 1: Scroll Right to Left */}
              <div className="relative w-full flex overflow-hidden">
                <div className="flex space-x-5 animate-marquee py-1 whitespace-nowrap">
                  {row1Testimonials.concat(row1Testimonials).map((item, idx) => (
                    <div
                      key={idx}
                      className="inline-block w-[300px] sm:w-[360px] bg-white border border-slate-200/80 rounded-2xl p-5 shrink-0 shadow-xs hover:border-[#03AD97]/40 transition-all whitespace-normal"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-sm font-bold text-[#1F1F1F] leading-snug">{item.name}</h4>
                          <p className="text-xs text-gray-400 font-sans">{item.handle} • <span className="text-gray-500 font-medium">{item.company}</span></p>
                        </div>
                        {renderStars(item.rating)}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                        "{item.quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Scroll Left to Right */}
              <div className="relative w-full flex overflow-hidden">
                <div
                  className="flex space-x-5 py-1 whitespace-nowrap"
                  style={{
                    animation: 'marqueeReverse 38s linear infinite',
                    width: 'max-content'
                  }}
                >
                  {row2Testimonials.concat(row2Testimonials).map((item, idx) => (
                    <div
                      key={idx}
                      className="inline-block w-[300px] sm:w-[360px] bg-white border border-slate-200/80 rounded-2xl p-5 shrink-0 shadow-xs hover:border-[#03AD97]/40 transition-all whitespace-normal"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-sm font-bold text-[#1F1F1F] leading-snug">{item.name}</h4>
                          <p className="text-xs text-gray-400 font-sans">{item.handle} • <span className="text-gray-500 font-medium">{item.company}</span></p>
                        </div>
                        {renderStars(item.rating)}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                        "{item.quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style jsx global>{`
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </>
  );
};
