'use client';

import React from 'react';
import Image from 'next/image';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Store, Calendar, Bell, Users, CheckCircle2 } from 'lucide-react';

export default function MicroEmpresasSolutionPage() {
  return (
    <div className="bg-white text-[#1F1F1F] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#03AD97] text-xs font-bold mb-6">
            <Store className="w-4 h-4" />
            SOLUÇÃO PARA MICROEMPRESAS & NEGÓCIOS LOCAIS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Preencha sua agenda com atendimento automatizado <SerifAccent>24 horas</SerifAccent>.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Clínicas, barbearias, escritórios e estabelecimentos locais perdem clientes por não responder no WhatsApp na hora. O Atlas realiza agendamentos e confirma horários automaticamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={FORM_URL} size="lg" showArrow>
              Automatizar Meu Negócio Local
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Agendamento Automático</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              O cliente escolhe o melhor horário disponível na sua agenda sem você precisar responder mensagem por mensagem.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lembrete Antifaltas</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Disparo automático de confirmação 24h antes do atendimento, reduzindo faltas e cancelamentos de última hora.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Captação Local</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Receba os clientes que encontram sua empresa no Google ou Instagram com respostas imediatas e calorosas.
            </p>
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-slate-900 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">Agenda cheia sem estresse de atendimento</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Descubra como colocar a recepção do seu negócio no autopiloto hoje mesmo.
          </p>
          <Button href={FORM_URL} size="lg" showArrow>
            Falar com um Consultor
          </Button>
        </div>

      </div>
    </div>
  );
}
