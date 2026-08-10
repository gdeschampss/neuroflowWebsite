'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { GridDivider } from '@/components/ui/GridDivider';
import { ArrowRight } from 'lucide-react';

export const PillarsSection = () => {
  const pillars = [
    {
      id: 'atlas',
      title: 'Agente de IA',
      description: 'Agentes inteligentes no WhatsApp que atendem, qualificam e agendam reuniões 24/7.',
      href: '/atlas',
      image: '/images/logos-atlas.webp',
      alt: 'Agente de IA Logo',
    },
    {
      id: 'neuroweb',
      title: 'Websites',
      description: 'Landing pages e sites corporativos autorais com pontuação 100/100 no Google.',
      href: '/neuroweb',
      image: '/images/logos-neuroweb.webp',
      alt: 'Websites Logo',
    },
    {
      id: 'neuroflow',
      title: 'Neuroflow',
      description: 'Conheça a NeuroFlow e entenda como podemos transformar a operação da sua empresa e o nosso objetivo.',
      href: '/sobre',
      image: '/images/logos-neuroflow.webp',
      alt: 'Neuroflow Logo',
    },
  ];

  return (
    <>
      <GridDivider label="Nossos Pilares" />

      <section id="pilares" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
              Três braços. Uma <SerifAccent>missão</SerifAccent>: gerar resultado.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-medium">
              Soluções integradas para atendimento, presença digital e automação.
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
                  className="group relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#03AD97]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Top Textured Image Container (AbacatePay Style) */}
                    <div className="p-3">
                      <div className="card-abacate-texture card-white-shadows rounded-2xl h-52 flex items-center justify-center p-6 border border-slate-100 transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                          src={pillar.image}
                          alt={pillar.alt}
                          width={180}
                          height={180}
                          className="object-contain max-h-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                        />
                      </div>
                    </div>

                    {/* Bottom Text Content (Only Title & Simple 1-Line Text) */}
                    <div className="p-6 sm:p-8 pt-4">
                      <h3 className="text-2xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#03AD97] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-slate-50 group-hover:bg-[#03AD97]/10 text-sm font-bold text-[#1F1F1F] group-hover:text-[#03AD97] transition-all duration-300 border border-slate-100 group-hover:border-[#03AD97]/30"
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
    </>
  );
};
