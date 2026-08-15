'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SupportSection } from '@/components/home/SupportSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function AutomacoesPage() {
  const cards = [
    {
      type: 'text',
      badge: 'Workflows Inteligentes',
      title: 'Integração de Sistemas & Pipelines com IA',
      text: 'Conecte seus CRMs (HubSpot, RD Station, Pipefy), ERPs, canais de WhatsApp e bancos de dados em um ecossistema inteligente, resiliente e 100% automatizado.',
    },
    {
      type: 'image',
      src: '/images/products/automacao-page.webp',
      alt: 'Fluxos de Automação de Processos NeuroFlow',
    },
    {
      type: 'text',
      badge: 'Produtividade Máxima',
      title: 'Elimine Erros Manuais e Gargalos Operacionais',
      text: 'Agentes operacionais autônomos que processam dados, emitem alertas, geram relatórios e realizam tarefas complexas 24h por dia sem falhas humanas.',
    },
    {
      type: 'image',
      src: '/images/products/automacao-clawd.webp',
      alt: 'Ecossistema e Inteligência Operacional',
    },
    {
      type: 'text',
      badge: 'Escala Contínua',
      title: 'Roteamento Inteligente & Resposta Imediata',
      text: 'Distribua leads e tarefas no instante em que chegam para o responsável ou canal correto, reduzindo o tempo de resposta e acelerando seu ciclo de vendas.',
    },
    {
      type: 'image',
      src: '/images/logo-automacao.webp',
      alt: 'Automações de Processos NeuroFlow',
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
              Automações — <span className="text-shimmer">Escala e Processos com IA</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-2xl text-gray-600 font-medium leading-relaxed font-sans max-w-2xl"
            >
              Acelerando processos, eliminando tarefas repetitivas e escalando sua operação com inteligência
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
