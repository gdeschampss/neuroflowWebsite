'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { ShieldCheck, Target, Zap, Bot, Globe, CheckCircle2, Instagram } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="bg-white text-[#1F1F1F]">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#03AD97] text-xs font-bold mb-6 border border-emerald-100">
                SOBRE A NEUROFLOW
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Inteligência operacional para quem precisa de <SerifAccent>resultado</SerifAccent>.
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nossa missão é simples: acabar com a enrolação no mercado de inteligência artificial. Criamos soluções que entram na linha de frente da sua empresa para vender e atender 24h por dia.
              </p>

              <div className="flex items-center gap-4">
                <Button href={FORM_URL} size="lg" showArrow>
                  Falar com a Equipe
                </Button>
              </div>
            </div>

            {/* Instagram Social Proof Asset Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] bg-white rounded-3xl p-4 border border-gray-200 shadow-xl overflow-hidden group">
                <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 mb-3">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span className="text-xs font-bold text-gray-800">@neuroflow.ai</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#03AD97] bg-emerald-50 px-2 py-0.5 rounded-full">
                    Oficial
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden relative aspect-square border border-gray-100">
                  <Image
                    src="/images/instagram-showcase.webp"
                    alt="NeuroFlow Instagram Presença Digital"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-[#03AD97]/10 text-[#03AD97] flex items-center justify-center font-bold mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">1. Foco em ROI Direto</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Toda linha de código e todo agente treinado tem uma meta clara: aumentar a conversão de vendas ou reduzir o custo operacional do seu atendimento.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-[#03AD97]/10 text-[#03AD97] flex items-center justify-center font-bold mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">2. Código Autoral sob Medida</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Não usamos robôs genéricos ou plugins instáveis. Nossas soluções rodam sobre infraestruturas oficiais (WhatsApp Business API, Next.js 15, Vercel).
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-[#03AD97]/10 text-[#03AD97] flex items-center justify-center font-bold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">3. Velocidade de Execução</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Implementação em dias, não em meses. Você não espera 6 meses para ver seu primeiro agente respondendo clientes e agendando reuniões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Umbrella Structure */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#1F1F1F] mb-6">
            Estrutura do Ecossistema NeuroFlow
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Assim como grandes empresas de tecnologia possuem braços focados, a NeuroFlow opera com marcas de alta especialização:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#03AD97] flex items-center justify-center font-bold shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">Atlas — SDR WhatsApp</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  O produto vivo que atende, qualifica e converte mensagens em vendas 24/7 no WhatsApp.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-800 flex items-center justify-center font-bold shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">NeuroWeb — Web Dev High-End</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A engenharia web de alto nível responsável pela construção de sites com nota 100 no Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] mb-6">
            Quer transformar a operação da sua empresa?
          </h2>
          <Button href={FORM_URL} size="lg" showArrow>
            Falar com a Equipe NeuroFlow
          </Button>
        </div>
      </section>

    </div>
  );
}
