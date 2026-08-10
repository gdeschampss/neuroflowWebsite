import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { samplePosts } from '@/components/blog/BlogGrid';
import { Button, FORM_URL } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const post = samplePosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white text-[#1F1F1F] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#03AD97] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Blog
        </Link>

        {/* Article Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-gray-100">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#03AD97]/10 text-[#03AD97]">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 pt-2">
            <span className="flex items-center gap-1.5 text-[#1F1F1F]">
              <User className="w-4 h-4 text-[#03AD97]" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed mb-16">
          <p className="text-xl font-medium text-[#1F1F1F] leading-relaxed">
            {post.excerpt}
          </p>

          <div className="p-6 bg-emerald-50/60 border border-emerald-100 rounded-2xl text-xs text-gray-600 font-mono">
            {post.contentPlaceholder || '[SUBSTITUIR PELO ARTIGO REAL]'}
          </div>

          <h2 className="text-2xl font-bold text-[#1F1F1F] mt-8 mb-4">
            O Impacto da Resposta Instantânea nas Vendas
          </h2>

          <p>
            Quando um lead entra em contato via WhatsApp, o tempo de resposta é o fator isolado de maior peso na conversão. Pesquisas de mercado mostram que responder em até 5 minutos aumenta as chances de qualificação em até 9 vezes em relação a uma resposta em 30 minutos.
          </p>

          <p>
            Com o <strong className="text-[#1F1F1F]">Atlas SDR</strong>, esse tempo é reduzido para segundos. O agente não apenas saúda o cliente, mas analisa a solicitação, faz perguntas de filtro e agenda a reunião diretamente na agenda do vendedor humano.
          </p>

          <blockquote className="border-l-4 border-[#03AD97] pl-4 italic text-gray-800 font-medium my-6">
            "A velocidade de atendimento não é apenas um diferencial de suporte — é a maior alavanca de vendas que uma empresa pode implementar em 2026."
          </blockquote>
        </div>

        {/* Strategic CTA Footer */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1F1F1F] to-[#2b2b2b] text-white text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03AD97]/20 text-[#03AD97] text-xs font-bold">
            <Sparkles className="w-4 h-4 text-[#03AD97]" />
            TECNOLOGIA EM AÇÃO
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold max-w-xl mx-auto">
            Quer implementar uma solução assim na sua empresa?
          </h3>

          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Conheça o Atlas e o NeuroWeb e veja como transformar seu atendimento em uma máquina de vendas.
          </p>

          <div className="pt-2">
            <Button href={FORM_URL} size="lg" showArrow>
              Preencher Diagnóstico Gratuito
            </Button>
          </div>
        </div>

      </div>
    </article>
  );
}
