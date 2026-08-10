'use client';

import React from 'react';
import Image from 'next/image';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Briefcase, Filter, FileText, Database } from 'lucide-react';

export default function PrestadoresServicoSolutionPage() {
  return (
    <div className="bg-white text-[#1F1F1F] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#03AD97] text-xs font-bold mb-6">
            <Briefcase className="w-4 h-4" />
            SOLUÇÃO PARA PRESTADORES DE SERVIÇO & AGÊNCIAS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Qualifique leads e envie orçamentos em <SerifAccent>minutos</SerifAccent>.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Parem de perder tempo com curiosos que não têm orçamento. O Atlas faz a triagem inicial dos leads, reúne os requisitos do projeto e entrega a reunião qualificada para seu comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={FORM_URL} size="lg" showArrow>
              Qualificar Meus Leads Agora
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Triagem de Perfil & Verba</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Descubra se o lead tem o perfil ideal e orçamento necessário antes de agendar uma reunião do seu time comercial.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pré-Proposta Automática</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Colete escopo, prazos e necessidades para gerar uma estimativa inicial instantânea de serviço no WhatsApp.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sincronia com CRM</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Todos os dados capturados na conversa vão diretamente para o seu HubSpot, Pipefy ou CRM proprietário.
            </p>
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-slate-900 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">Elimine curiosos da sua agenda</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Sua equipe focada apenas em fechar contratos de alto valor.
          </p>
          <Button href={FORM_URL} size="lg" showArrow>
            Solicitar Proposta para Serviços
          </Button>
        </div>

      </div>
    </div>
  );
}
