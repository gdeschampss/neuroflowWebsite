import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsapp } from '@/components/FloatingWhatsapp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-serif-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NeuroFlow — Inteligência Artificial Aplicada a Negócios Reais',
  description:
    'A NeuroFlow implementa IA de verdade em operações reais. Conheça o Atlas (SDR de WhatsApp) e o NeuroWeb (Desenvolvimento web de alto padrão).',
  keywords: [
    'IA para empresas',
    'Atendimento WhatsApp IA',
    'SDR WhatsApp',
    'Atlas IA',
    'NeuroWeb',
    'Desenvolvimento Web High-End',
    'Automação de Vendas',
  ],
  authors: [{ name: 'NeuroFlow' }],
  openGraph: {
    title: 'NeuroFlow — Inteligência Artificial Aplicada a Negócios Reais',
    description:
      'Sem hype, só resultado. O ecossistema completo de IA aplicada: Atlas (SDR WhatsApp) e NeuroWeb (Sites de Alta Conversão).',
    url: 'https://neuroflow.com.br',
    siteName: 'NeuroFlow',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-white text-[#1F1F1F] antialiased selection:bg-[#03AD971f] selection:text-[#03AD97]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}

