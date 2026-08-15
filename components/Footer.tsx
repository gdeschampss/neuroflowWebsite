import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FORM_URL, WHATSAPP_URL, LINKEDIN_URL } from '@/components/ui/Button';
import { ArrowUpRight, MessageCircle, Instagram, Mail, ShieldCheck, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-24 md:pb-12 text-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/images/logo.webp"
                  alt="Neuroflow"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-logo font-normal text-2xl tracking-tight text-[#2E5E55]">
                Neuroflow
              </span>
            </Link>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
              Agência de Inteligência Artificial aplicada a negócios.
              Implementamos IA de verdade para automatizar seu atendimento no WhatsApp e construir a presença web da sua empresa.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#03AD97]/10 text-[#03AD97] flex items-center justify-center hover:bg-[#03AD97] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ianeuroflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-[#03AD97] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-[#03AD97] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@neuroflow.com.br"
                className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-[#03AD97] hover:text-white transition-all"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 3: Produtos */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">
              Soluções
            </h4>
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li>
                <Link href="/atlas" className="hover:text-[#03AD97] transition-colors flex items-center gap-1.5">
                  Atlas (SDR WhatsApp)
                  <span className="px-1.5 py-0.5 text-[10px] bg-[#03AD97]/10 text-[#03AD97] rounded font-bold">IA</span>
                </Link>
              </li>
              <li>
                <Link href="/neuroweb" className="hover:text-[#03AD97] transition-colors flex items-center gap-1.5">
                  NeuroWeb (Sites High-End)
                </Link>
              </li>
              <li>
                <Link href="/automacoes" className="hover:text-[#03AD97] transition-colors flex items-center gap-1.5">
                  Automações (Workflows IA)
                </Link>
              </li>
              <li>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#03AD97] transition-colors flex items-center gap-1 text-gray-600"
                >
                  Simulador de ROI
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Empresa */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li>
                <Link href="/sobre" className="hover:text-[#03AD97] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#03AD97] transition-colors">
                  Blog & Bastidores IA
                </Link>
              </li>
              <li>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#03AD97] transition-colors flex items-center gap-1 text-gray-600"
                >
                  Formulário de Lead
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Atendimento */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">
              Contato Direto
            </h4>
            <div className="text-sm space-y-2">
              <p className="text-gray-600">
                <strong className="text-[#1F1F1F]">WhatsApp:</strong> +55 47 99961-9049
              </p>
              <p className="text-gray-600">
                <strong className="text-[#1F1F1F]">Instagram:</strong> @ianeuroflow
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-[#03AD97] text-xs font-semibold border border-emerald-100">
                  <ShieldCheck className="w-4 h-4" />
                  Operação IA 24/7 Ativa
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} NeuroFlow Inteligência Artificial Ltda. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Desenvolvido por NeuroWeb</span>
            <span>•</span>
            <span>Sem Hype. Só Resultado.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
