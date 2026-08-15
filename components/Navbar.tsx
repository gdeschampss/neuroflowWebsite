'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button, FORM_URL } from '@/components/ui/Button';
import {
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  Store,
  Briefcase,
  Headphones,
  Cpu
} from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'produtos' | 'solucoes' | null>(null);
  const [mobileSection, setMobileSection] = useState<'produtos' | 'solucoes' | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isBlogRoot = pathname === '/blog';

  const handleMouseEnter = (dropdown: 'produtos' | 'solucoes') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  if (isBlogRoot) {
    return null;
  }

  const produtos = [
    {
      name: 'Agente de IA no whatsapp',
      description: 'Tenha Atlas no seu atendimento, trabalhando 24h qualificando suas vendas.',
      href: '/atlas',
      logo: '/images/logo-atlas-circular.webp'
    },
    {
      name: 'Sites',
      description: 'Aumente sua presença digital',
      href: '/neuroweb',
      logo: '/images/logo-neuroweb.webp'
    },
    {
      name: 'Automações',
      description: 'Acelerando processos e escalando com estratégia',
      href: '/automacoes',
      logo: '/images/logo-automacao.webp'
    }
  ];

  const solucoes = [
    {
      name: 'E-commerce',
      description: 'Recuperação de carrinho, rastreio e vendas ativas via WhatsApp.',
      href: '/solucoes/ecommerce',
      icon: ShoppingBag
    },
    {
      name: 'Microempresas Presenciais',
      description: 'Agendamentos automáticos, lembretes e captação local.',
      href: '/solucoes/micro-empresas',
      icon: Store
    },
    {
      name: 'Prestadores de Serviço',
      description: 'Triagem rápida de orçamentos, qualificação de leads e CRM.',
      href: '/solucoes/prestadores-de-servico',
      icon: Briefcase
    },
    {
      name: 'Atendimento com IA',
      description: 'Suporte instantâneo em segundos sem filas de espera.',
      href: '/solucoes/atendimento-ia',
      icon: Headphones
    },
    {
      name: 'Agente de IA Autônomo',
      description: 'Execução de rotinas operacionais e fluxos complexos.',
      href: '/solucoes/agente-ia',
      icon: Cpu
    }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Elms Sans Font */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.webp"
              alt="Neuroflow Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-logo font-normal text-2xl tracking-tight text-[#2E5E55]">
              Neuroflow
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-gray-200/80 shadow-xs">
          
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              pathname === '/'
                ? 'bg-gray-100 text-[#03AD97] shadow-xs font-semibold'
                : 'text-[#1F1F1F]/80 hover:text-[#1F1F1F] hover:bg-gray-100/60'
            }`}
          >
            Home
          </Link>

          {/* Produtos Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('produtos')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeDropdown === 'produtos' || pathname.startsWith('/atlas') || pathname.startsWith('/neuroweb') || pathname.startsWith('/automacoes')
                  ? 'bg-gray-100 text-[#03AD97] shadow-xs font-semibold'
                  : 'text-[#1F1F1F]/80 hover:text-[#1F1F1F] hover:bg-gray-100/60'
              }`}
            >
              <span>Produtos</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'produtos' ? 'rotate-180 text-[#03AD97]' : 'text-gray-400'}`} />
            </button>

            {/* Dropdown Menu - Produtos */}
            {activeDropdown === 'produtos' && (
              <div
                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl p-3 border border-gray-100 shadow-xl shadow-gray-200/50 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                onMouseEnter={() => handleMouseEnter('produtos')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                  Nossas Ferramentas
                </div>
                <div className="space-y-1">
                  {produtos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform overflow-hidden">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Soluções Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('solucoes')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeDropdown === 'solucoes' || pathname.startsWith('/solucoes')
                  ? 'bg-gray-100 text-[#03AD97] shadow-xs font-semibold'
                  : 'text-[#1F1F1F]/80 hover:text-[#1F1F1F] hover:bg-gray-100/60'
              }`}
            >
              <span>Soluções</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solucoes' ? 'rotate-180 text-[#03AD97]' : 'text-gray-400'}`} />
            </button>

            {/* Dropdown Menu - Soluções */}
            {activeDropdown === 'solucoes' && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[460px] bg-white rounded-2xl p-4 border border-gray-100 shadow-xl shadow-gray-200/50 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                onMouseEnter={() => handleMouseEnter('solucoes')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-2">
                  Soluções por Nível de Operação
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {solucoes.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#03AD97] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors block">
                            {item.name}
                          </span>
                          <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-tight">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/sobre"
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              pathname === '/sobre'
                ? 'bg-gray-100 text-[#03AD97] shadow-xs font-semibold'
                : 'text-[#1F1F1F]/80 hover:text-[#1F1F1F] hover:bg-gray-100/60'
            }`}
          >
            Sobre
          </Link>

          <Link
            href="/blog"
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              pathname.startsWith('/blog')
                ? 'bg-gray-100 text-[#03AD97] shadow-xs font-semibold'
                : 'text-[#1F1F1F]/80 hover:text-[#1F1F1F] hover:bg-gray-100/60'
            }`}
          >
            Blog
          </Link>

        </nav>

        {/* Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href={FORM_URL} size="sm" showArrow>
              Começar agora
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-gray-200 bg-white/90 text-[#1F1F1F] hover:bg-gray-50 transition-colors"
            aria-label="Alternar Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (AbacatePay Inspired - Static behavior) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white p-6 flex flex-col justify-between animate-in fade-in duration-200 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/images/logo.webp"
                    alt="Neuroflow Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-logo font-normal text-2xl tracking-tight text-[#2E5E55]">
                  Neuroflow
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-gray-200 text-[#1F1F1F] hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-6 space-y-3">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-[#1F1F1F] rounded-xl hover:bg-gray-50"
              >
                Home
              </Link>

              {/* Mobile Produtos Accordion */}
              <div>
                <button
                  onClick={() => setMobileSection(mobileSection === 'produtos' ? null : 'produtos')}
                  className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold text-[#1F1F1F] rounded-xl hover:bg-gray-50"
                >
                  <span>Produtos</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileSection === 'produtos' ? 'rotate-180 text-[#03AD97]' : ''}`} />
                </button>
                {mobileSection === 'produtos' && (
                  <div className="ml-4 pl-4 border-l-2 border-emerald-100 space-y-2 py-2">
                    {produtos.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#03AD97] py-1.5"
                      >
                        <Image src={p.logo} alt={p.name} width={20} height={20} className="object-contain" />
                        <span>{p.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Soluções Accordion */}
              <div>
                <button
                  onClick={() => setMobileSection(mobileSection === 'solucoes' ? null : 'solucoes')}
                  className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold text-[#1F1F1F] rounded-xl hover:bg-gray-50"
                >
                  <span>Soluções</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileSection === 'solucoes' ? 'rotate-180 text-[#03AD97]' : ''}`} />
                </button>
                {mobileSection === 'solucoes' && (
                  <div className="ml-4 pl-4 border-l-2 border-emerald-100 space-y-2 py-2">
                    {solucoes.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm font-medium text-gray-700 hover:text-[#03AD97] py-1.5"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/sobre"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-[#1F1F1F] rounded-xl hover:bg-gray-50"
              >
                Sobre
              </Link>

              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-[#1F1F1F] rounded-xl hover:bg-gray-50"
              >
                Blog
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <Button href={FORM_URL} size="lg" className="w-full justify-center">
              Começar agora
            </Button>
            <p className="text-xs text-center text-gray-400">
              © {new Date().getFullYear()} NeuroFlow. Todos os direitos reservados.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
