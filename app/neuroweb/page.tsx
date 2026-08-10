'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Globe, Gauge, Code2, Smartphone, ShieldCheck, CheckCircle2, ArrowRight, Zap, Play } from 'lucide-react';

export default function NeuroWebPage() {
  const steps = [
    { number: '01', title: 'Briefing & Estratégia de Conversão', desc: 'Entendemos o seu posicionamento e definimos a arquitetura de informação focada em gerar leads.' },
    { number: '02', title: 'Design Autoral no Figma', desc: 'Criamos a interface do zero, alinhada à sua identidade visual, sem usar templates prontos de banco.' },
    { number: '03', title: 'Desenvolvimento em Next.js 15', desc: 'Codificamos com a tecnologia mais rápida do mercado para garantir carregamento instantâneo.' },
    { number: '04', title: 'Auditoria de Performance 100/100', desc: 'Ajustamos métricas de Core Web Vitals para obter notas máximas no Google Lighthouse.' },
    { number: '05', title: 'Lançamento & Suporte Contínuo', desc: 'Publicação na infraestrutura Vercel Edge com garantia de uptime e atualizações contínuas.' },
  ];

  return (
    <div className="bg-white text-[#1F1F1F]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03AD97]/10 border border-[#03AD97]/30 text-[#03AD97] text-xs font-bold mb-6">
                <Globe className="w-4 h-4" />
                NEUROWEB — DESENVOLVIMENTO WEB HIGH-END
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Sites institucionais que posicionam como <SerifAccent>líder</SerifAccent>.
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Desenvolvemos landing pages e portais corporativos ultrarrápidos sob medida. Esqueça o WordPress lento e templates genéricos. Entregamos código limpo em Next.js 15 focado em alta conversão.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                <Button href={FORM_URL} size="lg" showArrow>
                  Quero um Site Assim
                </Button>
                <Button href="#processo" variant="outline" size="lg" isExternal={false}>
                  Ver Nosso Processo
                </Button>
              </div>

              <div className="flex items-center gap-6 text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#03AD97]" />
                  Google Lighthouse 100/100
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#03AD97]" />
                  Zero Template Pronto
                </span>
              </div>
            </div>

            {/* Video GIF Showcase Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full bg-slate-900 p-3 sm:p-4 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden group">
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px]">neuroweb-showcase.mp4</span>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    High Performance
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950">
                  <video
                    src="/videos/neuroweb-showcase.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] mb-4">
              Nosso Processo de Trabalho em 5 Etapas
            </h2>
            <p className="text-gray-600">
              Metodologia transparente com prazos definidos do início ao fim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-[#03AD97] font-mono block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-[#1F1F1F] mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Sua empresa merece um site de alto padrão.
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Receba um orçamento detalhado e uma análise da sua presença digital atual sem compromisso.
          </p>
          <Button href={FORM_URL} size="lg" showArrow>
            Solicitar Orçamento NeuroWeb
          </Button>
        </div>
      </section>

    </div>
  );
}
