'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Cpu,
  Workflow,
  Webhook,
  Calendar,
  CreditCard,
  Database,
  ShieldCheck,
  Zap,
  Bot
} from 'lucide-react';

export const IntegrationsGrid = () => {
  const integrations = [
    {
      name: 'WhatsApp Cloud API',
      category: 'Mensageria',
      description: 'Conexão direta oficial sem risco de banimento.',
      icon: MessageSquare,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
    },
    {
      name: 'OpenAI GPT-4o',
      category: 'Inteligência Artificial',
      description: 'Modelos de linguagem avançados para compreensão de voz e texto.',
      icon: Cpu,
      color: 'bg-sky-500/10 text-sky-600 border-sky-200'
    },
    {
      name: 'N8N Orchestration',
      category: 'Automação',
      description: 'Orquestração de fluxos de trabalho e lógica condicional complexa.',
      icon: Workflow,
      color: 'bg-orange-500/10 text-orange-600 border-orange-200'
    },
    {
      name: 'Webhooks Customizados',
      category: 'Integração',
      description: 'Comunicação em tempo real com qualquer sistema ou ERP existente.',
      icon: Webhook,
      color: 'bg-purple-500/10 text-purple-600 border-purple-200'
    },
    {
      name: 'Google Calendar / CRM',
      category: 'Agendamento',
      description: 'Marcação automática de reuniões e sincronia de leads.',
      icon: Calendar,
      color: 'bg-blue-500/10 text-blue-600 border-blue-200'
    },
    {
      name: 'Gateway de Pagamentos',
      category: 'Cobrança',
      description: 'Envio de links de pagamento Pix e cartão no chat.',
      icon: CreditCard,
      color: 'bg-teal-500/10 text-teal-600 border-teal-200'
    }
  ];

  return (
    <section id="tecnologias" className="py-20 md:py-28 bg-slate-50/60 border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#03AD97] uppercase tracking-wider mb-4 shadow-2xs">
            <Zap className="w-3.5 h-3.5" /> Stack de Alta Performance
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
            Integração nativa com suas ferramentas do dia a dia
          </h2>
          <p className="text-base sm:text-xl text-[#1F1F1F]/70 mt-4 leading-relaxed">
            Não troque seus sistemas. A NeuroFlow conecta a Inteligência Artificial diretamente à infraestrutura que sua empresa já utiliza.
          </p>
        </div>

        {/* 21st.dev style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#03AD97]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#03AD97]" /> Pronta para Produção
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
