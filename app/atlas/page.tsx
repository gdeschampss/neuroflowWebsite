'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL, WHATSAPP_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { AnimatedBeamAtlas } from '@/components/atlas/AnimatedBeamAtlas';
import { Bot, CheckCircle2, Clock, UserCheck, Zap, ExternalLink } from 'lucide-react';

const ATLAS_PLATFORM_URL = 'https://atlas-navy-ten.vercel.app/';

export default function AtlasPage() {
  return (
    <div className="bg-white text-[#1F1F1F]">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#03AD97] text-xs font-bold mb-6 border border-emerald-100/80 shadow-2xs">
                <Bot className="w-4 h-4 text-[#03AD97]" />
                <span>ATLAS — SDR INTELIGENTE VIA WHATSAPP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-[#1F1F1F]">
                Seu melhor vendedor atende em <SerifAccent>segundos</SerifAccent>, 24h por dia.
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                O Atlas é o agente de IA especializado em WhatsApp. Ele qualifica leads, responde dúvidas sobre seu produto, quebra objeções e agenda reuniões diretamente no seu CRM sem deixar nenhuma mensagem sem resposta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                <Button href={ATLAS_PLATFORM_URL} target="_blank" size="lg" showArrow className="shadow-lg shadow-emerald-500/20">
                  Acessar Plataforma Atlas
                </Button>
                <Button href={WHATSAPP_URL} target="_blank" variant="outline" size="lg">
                  Falar via WhatsApp
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#03AD97]" />
                  API Oficial WhatsApp
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#03AD97]" />
                  Treinamento sob medida
                </span>
              </div>
            </div>

            {/* Right: ChatGPT Diagram Workflow Image (Substitui o celular) */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full rounded-3xl overflow-hidden bg-white p-3 sm:p-4 border border-slate-200/90 shadow-2xl hover:border-[#03AD97]/40 transition-all duration-300"
              >
                <Image
                  src="/images/atlas-workflow.png"
                  alt="Fluxo de Atendimento e Automação do Atlas SDR"
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Resumed Architecture Component */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedBeamAtlas />
      </section>

      {/* Pain Points Resolved (Resumido & Direto) */}
      <section className="py-16 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] mb-3">
              Por que sua operação precisa do Atlas hoje
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              Elimine gargalos de atendimento e multiplique sua taxa de conversão no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">Atendimento Noturno 24/7</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                68% dos contatos chegam fora do horário comercial. O Atlas responde em segundos em qualquer horário.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">Filtro Inteligente de Leads</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                Qualifica a intenção do cliente e repassa apenas oportunidades quentes para seus vendedores humanos.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center font-bold mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">Escala sem Limites</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                Atenda 10 ou 10.000 contatos simultâneos sem aumentar custos fixos com equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Link CTA Card Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Pronto para testar o Atlas na sua empresa?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans">
              Acesse a plataforma oficial do Atlas e veja a automação de inteligência em ação.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={ATLAS_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#03AD97] text-white text-sm font-bold shadow-lg hover:bg-[#028F7C] transition-all"
              >
                <span>Acessar Plataforma Atlas (atlas-navy-ten.vercel.app)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
