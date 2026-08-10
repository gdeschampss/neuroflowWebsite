'use client';

import React from 'react';
import Image from 'next/image';
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

        {/* 2 Main Side-by-Side Divs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Card - Qualificação & Agendamento */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-[#03AD97]/40 transition-all">
            <div>
              {/* Pure white image container without any grey box */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-white mb-6">
                <Image
                  src="/images/whatsapp-principal-2.webp"
                  alt="Atlas Qualificação & Respostas no WhatsApp"
                  fill
                  className="object-contain p-0"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F]">Qualificação & Agendamento Instantâneo</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed font-sans">
                O Atlas tira dúvidas sobre seu serviço, verifica disponibilidade e realiza agendamentos na agenda oficial sem intervenção humana.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#03AD97] font-sans flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> 24 Horas por Dia
              </span>
              <a
                href="/atlas"
                className="inline-flex items-center gap-1 text-xs font-bold text-gray-800 hover:text-[#03AD97] font-sans"
              >
                Saber Mais <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Card - Atendimento & Fechamento */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-[#03AD97]/40 transition-all">
            <div>
              {/* Pure white image container without any grey box */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-white mb-6">
                <Image
                  src="/images/whatsapp-principal-1.webp"
                  alt="Atlas SDR Engine Atendimento"
                  fill
                  className="object-contain p-0"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F]">Atendimento Inteligente & SDR</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed font-sans">
                Respostas rápidas e precisas no WhatsApp em menos de 5 segundos, filtrando curiosos e conduzindo apenas os leads prontos para o fechamento.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#03AD97] font-sans flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Resposta em &lt; 5s
              </span>
              <a
                href="/atlas"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1F1F1F] hover:text-[#03AD97] font-sans"
              >
                Ver Demonstração <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
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
