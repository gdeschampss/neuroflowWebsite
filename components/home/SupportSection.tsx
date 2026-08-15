'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { GridDivider } from '@/components/ui/GridDivider';

export const SupportSection = () => {
  return (
    <>
      <GridDivider label="Suporte & Conexão NeuroFlow" />

      <section id="suporte" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Card Container inspired by AbacatePay layout */}
          <div className="relative rounded-3xl border border-gray-200/80 bg-white overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Column: soporteIMG photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] w-full"
            >
              <Image
                src="/images/suporte.webp"
                alt="Suporte NeuroFlow que não te deixa na mão"
                fill
                className="object-cover object-center w-full h-full"
                priority
              />
            </motion.div>

            {/* Right Column: Badge, H1 Title, P Description, Link CTA */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start text-left bg-white"
            >
              {/* Suporte Pill Badge */}
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-gray-50 border border-gray-200/80 text-gray-700 text-xs font-semibold mb-6 shadow-2xs">
                Suporte
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-[1.18] mb-6">
                E tudo isso com um suporte que não te deixa na mão.
              </h2>

              {/* Paragraph Description */}
              <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mb-8 max-w-xl font-sans">
                Com Neuroflow priorizamos a conexão com o cliente, suporte eficiente que te acompanha desde da implementação e por toda vida do Produto.
              </p>

              {/* Entre em contato Link */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#03AD97] hover:text-[#028F7C] transition-all group"
              >
                <span>Entre em contato</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#03AD97]" />
              </a>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
};
