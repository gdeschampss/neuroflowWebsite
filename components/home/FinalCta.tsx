'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button, FORM_URL, WHATSAPP_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCta = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#1F1F1F] via-[#252525] to-[#141414] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden text-center max-w-5xl mx-auto border border-gray-800"
        >
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#03AD97]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            Você chegou até aqui. Então já sabe que <SerifAccent colorHex="#03AD97">precisa disso</SerifAccent>.
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Não deixe seus leads esfriarem na fila do WhatsApp nem continue com uma presença digital amadora. Vamos entender seu cenário e implementar em dias.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            <Button href={FORM_URL} size="lg" fullWidth showArrow>
              Preencher Diagnóstico
            </Button>
            <Button
              href={WHATSAPP_URL}
              variant="outline"
              size="lg"
              fullWidth
              className="border-white/20 text-white hover:bg-white/10 hover:border-white"
            >
              Falar no WhatsApp
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#03AD97]" />
            <span>Sem compromisso • Resposta rápida de um especialista humano</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
