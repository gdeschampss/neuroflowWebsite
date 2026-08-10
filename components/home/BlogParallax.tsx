'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export const BlogParallax = () => {
  const articles = [
    {
      slug: 'como-ia-transforma-atendimento-whatsapp',
      title: 'Como a Inteligência Artificial Transforma o Atendimento no WhatsApp em Vendas Reais',
      excerpt: 'Descubra como empresas estão eliminando o tempo de espera no chat e aumentando as conversões em mais de 300%.',
      category: 'Estratégia & Vendas',
      readTime: '4 min de leitura',
      image: '/images/blog-hero-section.webp'
    },
    {
      slug: 'agentes-de-ia-vs-chatbots-antigos',
      title: 'Agentes de IA Autônomos vs Chatbots Antigos: Por que os Robôs Tradicionais Falham',
      excerpt: 'Entenda a diferença técnica entre árvores de decisão engessadas e a inteligência contextual de voz e texto do Atlas.',
      category: 'Tecnologia',
      readTime: '6 min de leitura',
      image: '/images/whatsapp-component.webp'
    },
    {
      slug: 'neuroweb-landing-pages-alta-conversao',
      title: 'Neuroweb: Como Construir Landing Pages que Convertem Visitas em Contatos',
      excerpt: 'Os elementos cruciais de design, velocidade e arquitetura de informação que transformam tráfego em vendas.',
      category: 'Design & UX',
      readTime: '5 min de leitura',
      image: '/images/neuroweb-component.webp'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" /> Blog & Conhecimento
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Aprenda a aplicar IA no seu negócio
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors mt-4 md:mt-0"
          >
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Parallax / Horizontal Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-emerald-400 border border-slate-700">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:underline"
                >
                  Ler Artigo Completo <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
