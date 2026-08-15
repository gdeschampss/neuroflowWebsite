'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AnimatedBeamAtlas = () => {
  return (
    <div className="w-full bg-white">
      {/* 2 Side-by-Side Cards (Pure White Backgrounds, No Grey Squares) */}
      <div className="bg-white border border-gray-100 rounded-3xl p-4 sm:p-8 mb-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#03AD97] uppercase tracking-widest block mb-2 font-sans">
            ARQUITETURA DO ATLAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] tracking-tight">
            Como o Atlas converte leads no WhatsApp
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 font-sans">
            Fluxo contínuo entre entrada da mensagem, análise pelo agente de IA e resposta cirúrgica com agendamento direto.
          </p>
        </div>

        {/* Single Unified Card with 2 Sides (Support Card Style) */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 lg:p-12 shadow-xs hover:border-[#03AD97]/30 transition-all">
          
          {/* 2 Columns inside the single card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start pb-8 border-b border-gray-100">
            
            {/* Left Side */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white mb-6"
              >
                <Image
                  src="/images/whatsapp-principal-2.webp"
                  alt="Personalizado e treinado para sua empresa"
                  fill
                  className="object-contain p-0"
                />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F1F1F] tracking-tight mb-3">
                Personalizado e treinado para sua empresa
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans font-medium">
                O Atlas tira dúvidas sobre seu serviço, verifica disponibilidade e realiza agendas ou qualificação de venda, ele não é um chatbot. Ele é uma Inteligência Artificial própria para sua empresa.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white mb-6"
              >
                <Image
                  src="/images/whatsapp-principal-1.webp"
                  alt="Automatizando seu Atendimento WhatsApp"
                  fill
                  className="object-contain p-0"
                />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F1F1F] tracking-tight mb-3">
                Automatizando seu Atendimento WhatsApp
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans font-medium">
                Ele opera 24 horas por dia, sem descanso, perfeito para escala e aquecimento de Lead. Filtrando curiosos e conduzindo apenas os leads prontos para o fechamento.
              </p>
            </div>

          </div>

          {/* Single Footer Row with Saiba Mais */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm font-bold text-[#03AD97] font-sans flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#03AD97]" />
              Agente de IA NeuroFlow
            </span>

            <a
              href="/atlas"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#03AD97] hover:text-[#028F7C] transition-all group font-sans"
            >
              <span>Saiba mais</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </div>

      {/* Short Section with ONLY atlaslogogif.gif and exact Black Background (#000000) */}
      <section className="w-full bg-black py-10 sm:py-14 rounded-3xl flex items-center justify-center border border-black shadow-2xl overflow-hidden">
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-[4/3] flex items-center justify-center">
          <Image
            src="/images/atlaslogogif.gif"
            alt="Atlas AI Logo Gif"
            width={400}
            height={300}
            className="object-contain"
            unoptimized
          />
        </div>
      </section>
    </div>
  );
};
