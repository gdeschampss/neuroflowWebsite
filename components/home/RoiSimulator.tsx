'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Calculator, DollarSign, Users, Clock, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

export const RoiSimulator = () => {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(250);
  const [averageTicket, setAverageTicket] = useState<number>(1200);
  const [nightRatio, setNightRatio] = useState<number>(35);

  // Calculations
  // Estimate that ~45% of leads who message outside business hours or wait >15min buy elsewhere
  const nightLeads = Math.round((monthlyLeads * nightRatio) / 100);
  const lostLeads = Math.round(nightLeads * 0.45);
  const monthlyLostRevenue = lostLeads * averageTicket;
  const yearlyLostRevenue = monthlyLostRevenue * 12;

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#03AD97', '#028F7C', '#1F1F1F'],
    });
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
            Quanto você está <SerifAccent>deixando na mesa</SerifAccent> sem o Atlas?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Descubra o faturamento estimado que sua empresa perde todos os meses por não responder leads no WhatsApp em poucos segundos.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Controls Card */}
          <div className="lg:col-span-6 bg-gray-50/80 p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1F1F1F] flex items-center gap-2">
                <Users className="w-5 h-5 text-[#03AD97]" />
                1. Ajuste os dados do seu negócio
              </h3>

              {/* Slider 1: Monthly Leads */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold text-[#1F1F1F]">
                  <span>Leads por mês no WhatsApp:</span>
                  <span className="text-[#03AD97] font-bold text-base">{monthlyLeads} leads</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#03AD97]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>20 leads</span>
                  <span>2.000+ leads</span>
                </div>
              </div>

              {/* Slider 2: Average Ticket */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold text-[#1F1F1F]">
                  <span>Ticket Médio da Venda:</span>
                  <span className="text-[#03AD97] font-bold text-base">{formatCurrency(averageTicket)}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#03AD97]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>R$ 100</span>
                  <span>R$ 10.000+</span>
                </div>
              </div>

              {/* Slider 3: Night & Weekend % */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold text-[#1F1F1F]">
                  <span>% de mensagens fora do horário comercial:</span>
                  <span className="text-[#03AD97] font-bold text-base">{nightRatio}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  step="5"
                  value={nightRatio}
                  onChange={(e) => setNightRatio(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#03AD97]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>10% (pouco)</span>
                  <span>70% (noites & fins de semana)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-500">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>Baseado no tempo médio de resposta humano (35 a 90 minutos) vs Atlas (&lt; 5 segundos).</span>
            </div>
          </div>

          {/* Right Results Card */}
          <div className="lg:col-span-6 bg-[#1F1F1F] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#03AD97]/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#03AD97]/20 text-[#03AD97] text-xs font-bold mb-6">
                <AlertTriangle className="w-4 h-4" />
                ESTIMATIVA DE PERDA ANUAL
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">
                    Leads sem atendimento rápido / mês:
                  </span>
                  <div className="text-2xl font-bold text-gray-200">
                    ~{lostLeads} leads perdidos
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">
                    Perda Mensal Estimada:
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#03AD97]">
                    {formatCurrency(monthlyLostRevenue)} <span className="text-sm font-normal text-gray-400">/mês</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs text-gray-400 block mb-1">
                    Desperdício Anual em Vendas Não Fechadas:
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                    {formatCurrency(yearlyLostRevenue)}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Button
                href={FORM_URL}
                size="lg"
                fullWidth
                showArrow
                onClick={handleConfetti}
              >
                Quero Recuperar esse Faturamento
              </Button>
              <p className="text-center text-[11px] text-gray-400">
                Setup rápido • Treinamento com sua base de dados • Suporte dedicado
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
