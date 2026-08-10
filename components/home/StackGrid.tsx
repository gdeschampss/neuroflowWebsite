'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { MessageCircle, Instagram, MapPin, Globe, Code2, Cpu, Zap, Layers } from 'lucide-react';

export const StackGrid = () => {
  const channels = [
    {
      name: 'WhatsApp Oficial',
      description: 'Atendimento e SDR direto no número principal da empresa.',
      icon: MessageCircle,
      badge: 'Principal',
      color: 'bg-emerald-50 text-[#03AD97] border-emerald-200',
    },
    {
      name: 'Instagram Direct',
      description: 'Qualifica seguidores e responde DMs em segundos.',
      icon: Instagram,
      badge: 'Social',
      color: 'bg-pink-50 text-pink-600 border-pink-200',
    },
    {
      name: 'Google Meu Negócio',
      description: 'Responde dúvidas de localização, horário e orçamento.',
      icon: MapPin,
      badge: 'Local',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      name: 'Webchat Institucional',
      description: 'Widget de chat no site sincronizado com o WhatsApp.',
      icon: Globe,
      badge: 'Site',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
  ];

  const techStack = [
    { name: 'Next.js 15', category: 'Frontend', desc: 'Performance máxima no 4G' },
    { name: 'OpenAI / Claude 3.5', category: 'Engine IA', desc: 'Raciocínio lógico avançado' },
    { name: 'n8n Workflows', category: 'Automação', desc: 'Sincronização nativa com CRM' },
    { name: 'Tailwind CSS v4', category: 'Design', desc: 'Interface moderna e responsiva' },
    { name: 'Vercel Edge', category: 'Infraestrutura', desc: 'Disponibilidade 99.99%' },
    { name: 'Meta Business API', category: 'Conexão', desc: 'API Oficial do WhatsApp' },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
            Onde atuamos & <SerifAccent>como construímos</SerifAccent>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Integração sem complicação nos canais onde seus clientes já estão.
          </p>
        </div>

        {/* Part 1: Channels Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-6 text-center md:text-left flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#03AD97]" />
            1. Onde o Atlas atua na sua empresa:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 hover:border-[#03AD97]/40 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#1F1F1F]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${channel.color}`}>
                        {channel.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#1F1F1F] mb-2">
                      {channel.name}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Tech Stack Grid */}
        <div>
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-6 text-center md:text-left flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#03AD97]" />
            2. Stack técnica de engenharia:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#03AD97] shadow-sm text-center flex flex-col items-center justify-center transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#03AD97] flex items-center justify-center font-bold mb-2 group-hover:bg-[#03AD97] group-hover:text-white transition-colors">
                  <Layers className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors">
                  {tech.name}
                </h5>
                <span className="text-[10px] text-gray-400 font-medium">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
