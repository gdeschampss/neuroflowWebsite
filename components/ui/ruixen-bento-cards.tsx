'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RuixenBentoCards() {
  const cards = [
    {
      type: 'text',
      badge: 'Nossa Missão',
      title: 'Sem enrolação no mercado de Inteligência Artificial',
      text: 'Nossa missão é simples: acabar com a enrolação no mercado de inteligência artificial. Criamos soluções que entram na linha de frente da sua empresa para vender e atender 24h por dia. Acreditamos que você deve focar em vender, não em ficar respondendo WhatsApp até meia-noite.',
    },
    {
      type: 'image',
      src: '/images/sobre/escritorio.webp',
      alt: 'Ambiente de Trabalho NeuroFlow',
    },
    {
      type: 'text',
      badge: 'Nosso Objetivo',
      title: 'Sua empresa operando no nível máximo',
      text: 'Nosso objetivo é simples: colocar um agente de IA no seu atendimento que qualifica, responde e agenda sozinho, melhorar sua apresentação digital, uma mistura que potencializa seu projeto da melhor forma.',
    },
    {
      type: 'image',
      src: '/images/sobre/gabriel.webp',
      alt: 'Gabriel - Equipe NeuroFlow',
    },
    {
      type: 'text',
      badge: 'Engenharia & Escala',
      title: 'Foco em ROI Direto & Código Autoral',
      text: 'Sem conversas vagas ou robôs genéricos. Nossas soluções rodam sobre infraestrutura oficial do WhatsApp e Next.js 15, com inteligência treinada sob medida para o seu negócio.',
    },
    {
      type: 'image',
      src: '/images/sobre/joao.webp',
      alt: 'João - Equipe NeuroFlow',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Unified Section Card (Quadrado, Linhas Cinza Claro Coladas) */}
        <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative flex flex-col justify-between overflow-hidden bg-white hover:bg-gray-50/40 transition-colors group"
            >
              {card.type === 'text' ? (
                <div className="p-8 sm:p-10 flex flex-col justify-between h-full min-h-[300px] sm:min-h-[360px]">
                  <div>
                    {card.badge && (
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-[#03AD97] border border-emerald-100/80 mb-6 w-fit">
                        {card.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-extrabold text-[#1F1F1F] tracking-tight mb-4 group-hover:text-[#03AD97] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed font-sans">
                      {card.text}
                    </p>
                  </div>
                </div>
              ) : (
                /* Pure Image Card without overlay text */
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] overflow-hidden bg-gray-100">
                  <Image
                    src={card.src!}
                    alt={card.alt!}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
