'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FORM_URL } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCta = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Block with Dark Green Background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#028F7C] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#027A6A]"
        >
          {/* Left Column: Title, Copy & CTA Button */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Você chegou no fim da página.
            </h2>

            <p className="text-base sm:text-xl text-emerald-50/90 font-medium leading-relaxed mb-8 max-w-xl font-sans">
              Se chegou até aqui, é porque tá interessado.<br />
              Então vai lá, bora escalar seu negócio.
            </p>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-[#028F7C] font-extrabold text-sm sm:text-base shadow-lg hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <span>Vai, clica nesse botão</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-[#028F7C]" />
            </a>
          </div>

          {/* Right Column: thumbs up.gif */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              <Image
                src="/images/thumbs-up.gif"
                alt="Thumbs Up CTA Final NeuroFlow"
                width={400}
                height={400}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
