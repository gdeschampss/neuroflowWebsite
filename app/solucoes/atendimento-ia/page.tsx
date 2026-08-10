'use client';

import React from 'react';
import Image from 'next/image';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Headphones, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function AtendimentoIASolutionPage() {
  return (
    <div className="bg-white text-[#1F1F1F] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#03AD97] text-xs font-bold mb-6">
            <Headphones className="w-4 h-4" />
            ATENDIMENTO COM INTELIGÊNCIA ARTIFICIAL
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Suporte instantâneo 24/7 sem <SerifAccent>filas de espera</SerifAccent>.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ofereça uma experiência de atendimento de classe mundial. Respostas humanizadas em menos de 5 segundos no WhatsApp, Instagram e Web Chat, reduzindo custos operacionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={FORM_URL} size="lg" showArrow>
              Implementar Atendimento IA
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Resposta em Segundos</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              O fim dos clientes irritados esperando atendentes humanos ficarem livres no chat.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Operação 24 Horas / 365 Dias</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sua empresa continua vendendo e atendendo aos finais de semana, feriados e madrugadas.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Transição Humana Fluida</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Caso a questão exija intervenção humana, a IA transfere o histórico completo sem pedir para o cliente repeti-lo.
            </p>
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-slate-900 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">Revolucione o suporte do seu negócio</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Agende uma demonstração ao vivo da velocidade do Atendimento com IA.
          </p>
          <Button href={FORM_URL} size="lg" showArrow>
            Testar Atendimento IA
          </Button>
        </div>

      </div>
    </div>
  );
}
