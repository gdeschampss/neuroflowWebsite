'use client';

import React from 'react';
import Image from 'next/image';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Cpu, Bot, Workflow, Sparkles } from 'lucide-react';

export default function AgenteIASolutionPage() {
  return (
    <div className="bg-white text-[#1F1F1F] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#03AD97] text-xs font-bold mb-6">
            <Cpu className="w-4 h-4" />
            AGENTES DE IA AUTÔNOMOS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Funcionários virtuais executando <SerifAccent>tarefas complexas</SerifAccent>.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Vá muito além de responder mensagens. Crie agentes autônomos capazes de consultar bancos de dados, emitir faturas, atualizar planilhas e orquestrar processos operacionais inteiros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={FORM_URL} size="lg" showArrow>
              Construir Meu Agente Autônomo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tomada de Decisão Autônoma</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              O agente pondera variáveis e escolhe a melhor ação conforme regras de negócio predefinidas.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Execução em Múltiplos Sistemas</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Integração simultânea com N8N, Webhooks, APIs de terceiros e sistemas legados sem erros manuais.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Aprendizado & Evolução</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Refinamento constante das respostas e otimização dos fluxos de trabalho a cada nova interação.
            </p>
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-slate-900 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">Sua empresa rodando no piloto automático</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Desenvolvemos agentes sob medida para a dor exata do seu fluxo de trabalho.
          </p>
          <Button href={FORM_URL} size="lg" showArrow>
            Desenvolver Agente Autônomo
          </Button>
        </div>

      </div>
    </div>
  );
}
