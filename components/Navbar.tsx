'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button, FORM_URL } from '@/components/ui/Button';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Do not render global navbar inside /blog if blog has a custom minimal navbar
  const isBlogRoot = pathname === '/blog';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Atlas (SDR IA)', href: '/atlas', badge: 'Atendimento' },
    { name: 'NeuroWeb', href: '/neuroweb', badge: 'Web Dev' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
  ];

  if (isBlogRoot) {
    // Return null so /blog can use its specialized minimal navbar (Section 14 requirement)
    return null;
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-40 py-5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.webp"
              alt="NeuroFlow Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#1F1F1F] group-hover:text-[#03AD97] transition-colors">
              Neuro<span className="text-[#03AD97]">Flow</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-50/90 backdrop-blur-md p-1.5 rounded-full border border-gray-200/80 shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#03AD97] shadow-sm font-semibold'
                    : 'text-[#1F1F1F]/80 hover:text-[#1F1F1F] hover:bg-gray-100/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href={FORM_URL} size="sm" showArrow>
              Começar Agora
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl border border-gray-200 text-[#1F1F1F] hover:bg-gray-50 transition-colors"
            aria-label="Alternar Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer (Estilo AbacatePay) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white p-6 flex flex-col justify-between animate-fadeIn">
          {/* Header inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="relative w-9 h-9 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <Image
                  src="/images/logo.webp"
                  alt="NeuroFlow Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#1F1F1F]">
                Neuro<span className="text-[#03AD97]">Flow</span>
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full border border-gray-200 text-[#1F1F1F] hover:bg-gray-100 transition-colors"
              aria-label="Fechar Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-8 flex flex-col justify-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-xl font-semibold transition-all ${
                    isActive
                      ? 'bg-[#03AD97]/10 text-[#03AD97]'
                      : 'text-[#1F1F1F] hover:bg-gray-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </Link>
              );
            })}
          </div>

          {/* Clean Footer inside Drawer without bottom CTA buttons */}
          <div className="pt-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} NeuroFlow. Todos os direitos reservados.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

