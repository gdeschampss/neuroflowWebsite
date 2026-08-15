'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SupportSection } from '@/components/home/SupportSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function AtlasPage() {
  const cards = [
    {
      type: 'text',
      badge: 'Atendimento 24/7',
      title: 'Atendimento em Segundos & Qualificação Instantânea',
      text: 'O Atlas responde contatos em menos de 5 segundos, filtra curiosos, esclarece dúvidas técnicas sobre seus serviços e agenda reuniões diretamente na sua agenda oficial.',
    },
    {
      type: 'image',
      src: '/images/products/atlas-whatsapp.webp',
      alt: 'Interface de Conversação WhatsApp Atlas SDR',
    },
    {
      type: 'text',
      badge: 'Inteligência Própria',
      title: 'Não é um Chatbot. É uma IA Treinada para sua Empresa.',
      text: 'Compreende contextos, gírias e áudios com linguagem natural e humanizada. Sem menus engessados ou respostas pré-programadas que frustram clientes.',
    },
    {
      type: 'image',
      src: '/images/products/atlas-chatgpt.webp',
      alt: 'Arquitetura e Fluxo de Atendimento Atlas',
    },
    {
      type: 'text',
      badge: 'Planos & Investimento',
      title: 'Planos flexíveis com custo previsível',
      text: 'Sem encargos trabalhistas, férias ou rotatividade de equipe. O Atlas opera 24/7 com planos sob medida e custo fixo previsível.',
    },
    {
      type: 'image',
      src: '/images/products/atlas-hero.webp',
      alt: 'Plataforma Atlas SDR NeuroFlow',
    },
  ];

  return (
    <div className="bg-white text-[#1F1F1F]">
      {/* Header Section (Same structure as Sobre page) */}
      <section className="pt-36 pb-12 sm:pt-44 sm:pb-16 bg-gradient-to-b from-emerald-50/40 via-white to-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Title with Text Shimmer Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-[#1F1F1F]"
            >
              Atlas — <span className="text-shimmer">SDR de IA no WhatsApp</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-2xl text-gray-600 font-medium leading-relaxed font-sans max-w-2xl"
            >
              Atendimento 24/7 que qualifica leads, responde dúvidas instantaneamente e agenda reuniões no automático
            </motion.p>

          </div>
        </div>
      </section>

      {/* Unified Section Card (3 Text Cards + 3 Pure Image Cards) */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
                  /* Pure Image Card */
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

      {/* Support Section */}
      <SupportSection />

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
