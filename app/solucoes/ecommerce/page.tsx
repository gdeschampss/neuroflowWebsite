'use client';

import React from 'react';
import Image from 'next/image';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { ShoppingBag, ArrowRight, CheckCircle2, TrendingUp, RefreshCw, MessageSquare } from 'lucide-react';

export default function EcommerceSolutionPage() {
  return (
    <div className="bg-white text-[#1F1F1F] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#03AD97] text-xs font-bold mb-6">
            <ShoppingBag className="w-4 h-4" />
            SOLUÇÃO PARA E-COMMERCE & LOJAS VIRTUAIS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Recupere vendas e automatize o suporte do seu <SerifAccent>e-commerce</SerifAccent>.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Transforme o WhatsApp da sua loja em um canal de vendas ativas. Recupere carrinhos abandonados com conversas humanas e tire dúvidas de produtos em segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={FORM_URL} size="lg" showArrow>
              Aumentar Vendas do E-commerce
            </Button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Recuperação de Carrinho</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mensagens personalizadas via WhatsApp no momento exato em que o cliente abandona o checkout.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Status de Pedido & Rastreio</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reduza o volume de chamados repetitivos de SAC respondendo código de rastreio automaticamente.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#03AD97] flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Vendas Cruzadas & Upsell</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recomende produtos complementares com base no histórico de compras do cliente de forma inteligente.
            </p>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl mb-16">
          <Image
            src="/images/whatsapp-principal-1.webp"
            alt="Recuperação de vendas e-commerce no WhatsApp"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CTA Box */}
        <div className="p-10 rounded-3xl bg-slate-900 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">Pronto para acelerar seu e-commerce?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Fale com nossos especialistas e veja a demonstração da IA recuperando vendas em tempo real.
          </p>
          <Button href={FORM_URL} size="lg" showArrow>
            Agendar Demonstração E-commerce
          </Button>
        </div>

      </div>
    </div>
  );
}
