'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Bot, Globe, BookOpen, ArrowRight, Check } from 'lucide-react';

export const PillarsSection = () => {
  const pillars = [
    {
      id: 'atlas',
      title: 'Atlas — SDR de WhatsApp',
      tagline: 'Atendimento & Qualificação 24/7',
      description:
        'Nunca mais perca um lead por demorar a responder. O Atlas atende no WhatsApp em segundos, tira dúvidas da sua empresa, qualifica o cliente e agenda a reunião.',
      features: [
        'Responde em segundos a qualquer hora da noite',
        'Treinado com o manual do seu produto',
        'Integração nativa com WhatsApp e CRM',
      ],
      href: '/atlas',
      image: '/images/logos-atlas.webp',
      alt: 'Atlas SDR 3D Logo',
    },
    {
      id: 'neuroweb',
      title: 'NeuroWeb — Sites High-End',
      tagline: 'Desenvolvimento Web sob Medida',
      description:
        'Landing pages e sites institucionais ultrarrápidos que posicionam sua empresa no topo do mercado. Código limpo em Next.js 15, sem WordPress ou templates lentos.',
      features: [
        'Score 100/100 no Google Lighthouse',
        'Design autoral focado em alta conversão',
        'Carregamento instantâneo no 4G mobile',
      ],
      href: '/neuroweb',
      image: '/images/logos-neuroweb.webp',
      alt: 'NeuroWeb 3D Logo',
    },
    {
      id: 'neuroflow',
      title: 'NeuroFlow — Hub & Bastidores',
      tagline: 'Autoridade & Inteligência de Mercado',
      description:
        'A marca-mãe do ecossistema. Produzimos artigos práticos, análises de caso e notícias sobre como aplicar IA em operações reais para gerar lucro.',
      features: [
        'Casos reais de implementação',
        'Guia prático sem jargão técnico',
        'Análises de ROI de IA em empresas',
      ],
      href: '/blog',
      image: '/images/logos-neuroflow.webp',
      alt: 'NeuroFlow 3D Logo',
    },
  ];

  return (
    <section id="pilares" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
            Três braços. Uma <SerifAccent>missão</SerifAccent>: gerar resultado.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Conheça as soluções que compõem o nosso guarda-chuva de inteligência aplicada.
          </p>
        </div>

        {/* Pillars Grid (Cards AbacatePay Style with Texture) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Textured Image Container (AbacatePay Style) */}
                  <div className="p-3">
                    <div className="card-abacate-texture card-white-shadows rounded-2xl h-56 flex items-center justify-center p-6 border border-gray-100/80 transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={pillar.image}
                        alt={pillar.alt}
                        width={180}
                        height={180}
                        className="object-contain max-h-44 drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                      />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="p-6 sm:p-8 pt-4">
                    <h3 className="text-2xl font-bold text-[#1F1F1F] mb-1 group-hover:text-[#03AD97] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#03AD97] uppercase tracking-wider mb-4">
                      {pillar.tagline}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {pillar.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                          <Check className="w-4 h-4 text-[#03AD97] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-gray-50 group-hover:bg-[#03AD97]/10 text-sm font-bold text-[#1F1F1F] group-hover:text-[#03AD97] transition-all duration-300"
                  >
                    <span>Conhecer em Detalhes</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

