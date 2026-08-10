'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como a NeuroFlow se diferencia de agências de marketing ou consultorias de IA?',
      answer:
        'Não vendemos apresentações em PDF nem promessas genéricas. Nós construímos sistemas funcionais em código. O Atlas é um produto rodando no seu WhatsApp e o NeuroWeb entrega sites com nota 100/100 no Google.',
    },
    {
      question: 'Quanto tempo demora a implementação do Atlas (SDR WhatsApp)?',
      answer:
        'A implementação completa leva de 3 a 7 dias úteis. Nesse período, alinhamos a base de conhecimento do seu negócio, treinamos o agente, realizamos testes de homologação e ativamos o fluxo.',
    },
    {
      question: 'O agente de IA corre o risco de inventar informações para o cliente?',
      answer:
        'Não. O Atlas é estritamente delimitado pela base de conhecimento da sua empresa. Se um cliente fizer uma pergunta fora do escopo treinado, o agente faz o transbordo inteligente para um atendente humano da sua equipe.',
    },
    {
      question: 'O que está incluído na vertical NeuroWeb de desenvolvimento web?',
      answer:
        'Desenvolvimento sob medida em Next.js 15, design autoral no Figma sem templates prontos, SEO técnico completo, copy focado em conversão, integração com WhatsApp/Formulários e hospedagem de altíssima velocidade.',
    },
    {
      question: 'Como é feito o suporte e a manutenção após a entrega?',
      answer:
        'Oferecemos acompanhamento contínuo, ajustes no treinamento conforme seu produto evolui, relatórios operacionais e suporte direto via WhatsApp para garantir estabilidade 24 horas por dia.',
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-gray-50/60 border-y border-gray-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
            Perguntas & <SerifAccent>Respostas</SerifAccent> diretas
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Sem jargão corporativo. Tudo o que você precisa saber antes de contratar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-[#100%] w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1F1F1F] hover:text-[#03AD97] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#03AD97] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#03AD97]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
