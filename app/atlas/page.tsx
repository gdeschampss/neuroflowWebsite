'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL, WHATSAPP_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { AnimatedBeamAtlas } from '@/components/atlas/AnimatedBeamAtlas';
import { Bot, MessageCircle, Clock, ShieldCheck, Zap, CheckCircle2, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function AtlasPage() {
  const [activeTab, setActiveTab] = useState<'qualification' | 'support' | 'booking'>('qualification');

  const chatScenarios = {
    qualification: [
      { sender: 'user', time: '23:14', text: 'Olá! Vi o anúncio de vocês. Qual o valor da consultoria para minha clínica?' },
      { sender: 'atlas', time: '23:14', text: 'Olá! Sou o Atlas, especialista virtual da empresa. Para te passar o orçamento exato, quantos médicos atendem na sua clínica hoje?' },
      { sender: 'user', time: '23:15', text: 'Temos 4 médicos e 2 secretárias.' },
      { sender: 'atlas', time: '23:15', text: 'Perfeito! Para o seu porte, o plano recomendado atende perfeitamente. Gostaria de agendar uma demonstração de 15 min amanhã às 10h ou 14h com nosso consultor?' },
    ],
    support: [
      { sender: 'user', time: '02:30', text: 'Qual o horário de atendimento no sábado e onde fica o estacionamento?' },
      { sender: 'atlas', time: '02:30', text: 'Abertos no sábado das 08h às 13h! O estacionamento conveniado fica na Rua das Flores, 120 (cortesia para clientes).' },
      { sender: 'user', time: '02:31', text: 'Excelente, obrigado!' },
      { sender: 'atlas', time: '02:31', text: 'Por nada! Qualquer outra dúvida estou por aqui 24 horas por dia. Boas vindas!' },
    ],
    booking: [
      { sender: 'user', time: '19:45', text: 'Quero agendar uma visita técnica para esta semana.' },
      { sender: 'atlas', time: '19:45', text: 'Com certeza! Tenho horário disponível nesta Quinta às 14:30h ou Sexta às 09h. Qual prefere?' },
      { sender: 'user', time: '19:46', text: 'Quinta às 14:30h fica ótimo.' },
      { sender: 'atlas', time: '19:46', text: 'Agendado com sucesso! Enviei a confirmação para o seu e-mail e nosso técnico estará no local. Até lá!' },
    ],
  };

  return (
    <div className="bg-white text-[#1F1F1F]">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start pt-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#03AD97] text-xs font-bold mb-6 border border-emerald-100">
                <Bot className="w-4 h-4" /> ATLAS — SDR INTELIGENTE VIA WHATSAPP
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Seu melhor vendedor atende em <SerifAccent>segundos</SerifAccent>, 24h por dia.
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                O Atlas é o agente de IA especializado em WhatsApp. Ele qualifica leads, responde dúvidas sobre seu produto, quebra objeções e agenda reuniões diretamente no seu CRM sem deixar nenhuma mensagem sem resposta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                <Button href={FORM_URL} size="lg" showArrow>
                  Testar o Atlas na Prática
                </Button>
                <Button href={WHATSAPP_URL} variant="outline" size="lg">
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

            {/* Right Chat Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] bg-gray-900 rounded-[36px] p-4 shadow-2xl border-4 border-gray-800">
                <div className="w-32 h-4 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-700" />
                </div>

                <div className="bg-[#075E54] text-white p-3 rounded-t-2xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#03AD97] flex items-center justify-center font-bold text-sm">
                    A
                  </div>
                  <div>
                    <div className="text-xs font-bold flex items-center gap-1">
                      Atlas SDR (Sua Empresa)
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-[10px] text-emerald-100">online agora • IA 24/7</div>
                  </div>
                </div>

                <div className="flex gap-1 p-2 bg-gray-800 text-[11px] font-medium text-gray-300">
                  <button
                    onClick={() => setActiveTab('qualification')}
                    className={`flex-1 py-1 rounded transition-colors ${activeTab === 'qualification' ? 'bg-[#03AD97] text-white font-bold' : 'hover:bg-gray-700'
                      }`}
                  >
                    Qualificação
                  </button>
                  <button
                    onClick={() => setActiveTab('support')}
                    className={`flex-1 py-1 rounded transition-colors ${activeTab === 'support' ? 'bg-[#03AD97] text-white font-bold' : 'hover:bg-gray-700'
                      }`}
                  >
                    Atendimento
                  </button>
                  <button
                    onClick={() => setActiveTab('booking')}
                    className={`flex-1 py-1 rounded transition-colors ${activeTab === 'booking' ? 'bg-[#03AD97] text-white font-bold' : 'hover:bg-gray-700'
                      }`}
                  >
                    Agendamento
                  </button>
                </div>

                <div className="bg-[#E5DDD5] p-3 h-[320px] overflow-y-auto space-y-3 font-sans text-xs">
                  {chatScenarios[activeTab].map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                        }`}
                    >
                      <div
                        className={`p-2.5 rounded-2xl shadow-sm text-gray-800 ${msg.sender === 'user'
                            ? 'bg-[#DCF8C6] rounded-tr-none'
                            : 'bg-white rounded-tl-none border border-gray-200'
                          }`}
                      >
                        {msg.text}
                        <span className="block text-[9px] text-gray-400 text-right mt-1">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800 p-2 rounded-b-2xl flex items-center gap-2 text-xs text-gray-400">
                  <div className="flex-1 bg-gray-700 py-1.5 px-3 rounded-full text-gray-300">
                    Digite uma mensagem...
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#03AD97] text-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Animated Beam Architecture Component Section */}
      <section className="py-16 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedBeamAtlas />
      </section>

      {/* Visual Showcase Section */}
      <section className="py-20 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] mb-4">
              Interface Real do Atlas no WhatsApp
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Veja como o Atlas atende seus clientes diretamente na tela do aplicativo, de forma natural, rápida e eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-5xl mx-auto">
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-md flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 mb-4">
                <Image
                  src="/images/whatsapp-principal-1.webp"
                  alt="Atlas SDR WhatsApp Atendimento Real 1"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-1">Qualificação & Resposta Instantânea</h3>
              <p className="text-xs text-gray-500 text-center">Atendimento imediato filtrando as principais dúvidas do lead.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-md flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 mb-4">
                <Image
                  src="/images/whatsapp-principal-2.webp"
                  alt="Atlas SDR WhatsApp Atendimento Real 2"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-1">Agendamento & Envio de Propostas</h3>
              <p className="text-xs text-gray-500 text-center">Direcionamento do cliente pronto para a reunião com a equipe comercial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Resolved */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] mb-4">
              Dores que o Atlas resolve na sua operação
            </h2>
            <p className="text-gray-600">
              Veja o impacto imediato na produtividade da sua equipe comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">Leads perdidos à noite</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                68% dos clientes navegam e enviam dúvidas fora do horário comercial. O Atlas responde em 3 segundos às 02h da manhã.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">Falta de filtro comercial</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seus vendedores perdem tempo com curioso sem orçamento. O Atlas faz o filtro prévio e entrega só o lead pronto.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center font-bold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">Escala ilimitada de atendimento</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Receba 10 ou 10.000 mensagens no mesmo dia sem precisar contratar 50 novos atendentes ou pagar horas extras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] mb-6">
            Pronto para colocar o Atlas para rodar na sua empresa?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Configuração completa de 3 a 7 dias úteis com suporte dedicado.
          </p>
          <Button href={FORM_URL} size="lg" showArrow>
            Preencher Formulário de Implementação
          </Button>
        </div>
      </section>

    </div>
  );
}
