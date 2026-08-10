'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { Target, Zap, ShieldCheck } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50/50 border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[380px] bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-[#03AD97]/10 text-[#03AD97] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                Operação Real vs Promessa de Slides
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Muitas empresas vendem "transformação digital" em apresentações de PDF. Nós construímos sistemas de IA funcionais que integram diretamente com seu WhatsApp, CRM e site.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#03AD97] shrink-0" />
                <div className="text-xs text-gray-700 font-medium">
                  <strong className="block text-[#1F1F1F]">Compromisso NeuroFlow:</strong>
                  Zero teoria genérica. Apenas código, agentes treinados e resultados mensuráveis.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-6">
              Nós não especulamos sobre IA. Nós <SerifAccent>implementamos</SerifAccent> na prática.
            </h2>


            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                A NeuroFlow é a autoridade central que abriga duas verticais altamente especializadas. Nós pegamos modelos avançados de IA e os colocamos para trabalhar na linha de frente do seu negócio.
              </p>
              <p>
                Sem jargões vazios ou mistério: em poucos minutos de conversa, você entende exatamente o que construímos, quanto custa e em quantos dias a operação estará rodando.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
