'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, FORM_URL } from '@/components/ui/Button';
import { Search, Clock, ArrowRight, Tag, Calendar, User, Sparkles } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  isFeatured?: boolean;
  contentPlaceholder?: string;
}

export const samplePosts: BlogPost[] = [
  {
    slug: 'como-o-atlas-sdr-revolucionou-atendimento-whatsapp',
    title: 'Como o Atlas SDR aumentou em 38% os agendamentos de reuniões no WhatsApp',
    excerpt:
      'Estudo de caso detalhado mostrando como uma clínica odontológica e um escritório de advocacia eliminaram a fila de espera noturna e automatizaram a qualificação de leads.',
    category: 'Casos Práticos',
    readTime: '5 min de leitura',
    date: '08 Ago, 2026',
    author: 'Equipe NeuroFlow',
    isFeatured: true,
    contentPlaceholder: '[SUBSTITUIR PELO ARTIGO REAL — CASE ATLAS SDR]',
  },
  {
    slug: 'ia-de-verdade-vs-hype-corporativo-2026',
    title: 'IA de Verdade vs Hype Corporativo: O que realmente gera lucro em 2026',
    excerpt:
      'Por que a maioria das empresas gasta fortunas com consultorias de IA que só entregam slides em PDF, e como implementar agentes operacionais reais na linha de frente.',
    category: 'Estratégia',
    readTime: '6 min de leitura',
    date: '05 Ago, 2026',
    author: 'NeuroFlow Lab',
    contentPlaceholder: '[SUBSTITUIR PELO ARTIGO REAL — HYPE VS REALIDADE]',
  },
  {
    slug: 'por-que-seu-site-precisa-de-nota-100-no-google-lighthouse',
    title: 'Por que a velocidade do seu site define o custo do seu tráfego pago',
    excerpt:
      'Sites lentos em WordPress perdem até 53% dos visitantes antes mesmo da página carregar. Descubra como a arquitetura em Next.js 15 do NeuroWeb reduz o CPA.',
    category: 'NeuroWeb',
    readTime: '4 min de leitura',
    date: '01 Ago, 2026',
    author: 'Dev Web Team',
    contentPlaceholder: '[SUBSTITUIR PELO ARTIGO REAL — SPEED & CPA]',
  },
  {
    slug: 'como-qualificar-leads-automaticamente-com-ia',
    title: 'Guia definitivo: Como qualificar leads no WhatsApp sem depender de equipe manual',
    excerpt:
      'Aprenda como estruturar fluxos inteligentes de qualificação via IA no WhatsApp, filtrando curiosos e direcionando apenas clientes com orçamento para seus vendedores.',
    category: 'Automação',
    readTime: '7 min de leitura',
    date: '28 Jul, 2026',
    author: 'Especialistas NeuroFlow',
    contentPlaceholder: '[SUBSTITUIR PELO ARTIGO REAL — GUIA QUALIFICAÇÃO]',
  },
  {
    slug: 'tendencias-de-atendimento-inteligente-para-2026',
    title: 'Tendências de Atendimento com IA: O que muda para médias e grandes empresas',
    excerpt:
      'Análise de mercado com as tecnologias que estão redefinindo a experiência do cliente no Brasil e no mundo através de inteligência artificial aplicada.',
    category: 'Estratégia',
    readTime: '5 min de leitura',
    date: '20 Jul, 2026',
    author: 'NeuroFlow Trends',
    contentPlaceholder: '[SUBSTITUIR PELO ARTIGO REAL — TENDÊNCIAS 2026]',
  },
];


export const BlogGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Casos Práticos', 'Estratégia', 'NeuroWeb', 'Automação'];

  const filteredPosts = samplePosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = samplePosts.find((p) => p.isFeatured) || samplePosts[0];

  return (
    <section id="posts" className="py-20 bg-gray-50/50 border-t border-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#03AD97] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#03AD97] bg-gray-50 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Featured Post Hero Banner */}
        {selectedCategory === 'Todos' && !searchTerm && (
          <div className="mb-12">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 hover:border-[#03AD97]/40 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center block"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#03AD97]/10 text-[#03AD97]">
                    Destaque da Semana
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-gray-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#03AD97]" />
                    {featuredPost.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center justify-end">
                <div className="w-full h-48 sm:h-56 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center p-6 text-center group-hover:bg-[#03AD97] group-hover:text-white transition-colors duration-300">
                  <Sparkles className="w-8 h-8 text-[#03AD97] group-hover:text-white mb-3 transition-colors" />
                  <span className="text-sm font-bold">Ler Artigo Completo</span>
                  <ArrowRight className="w-4 h-4 mt-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl p-6 border border-gray-200 hover:border-[#03AD97]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full block"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-gray-100 text-gray-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1F1F1F] group-hover:text-[#03AD97]">
                  <span>Ler publicação</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Inline Lead Capture Banner */}
        <div className="mt-20 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] mb-3">
            Quer implementar IA na sua empresa ainda esta semana?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl mx-auto">
            Agende um diagnóstico gratuito e descubra como o Atlas e o NeuroWeb podem acelerar seus resultados.
          </p>
          <Button href={FORM_URL} size="md" showArrow>
            Preencher Formulário de Diagnóstico
          </Button>
        </div>

      </div>
    </section>
  );
};
