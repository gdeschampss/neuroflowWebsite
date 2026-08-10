import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SerifAccent } from '@/components/ui/SerifAccent';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#1F1F1F] flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center">
        
        {/* Robot 3D Image with Magnifying Glass */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
          <Image
            src="/images/logo3d1.webp"
            alt="Robô NeuroFlow 404"
            width={280}
            height={280}
            className="object-contain drop-shadow-[0_15px_30px_rgba(3,173,151,0.2)] animate-pulse"
            priority
          />
        </div>

        {/* Error Code & Heading */}
        <span className="text-sm font-mono font-bold tracking-widest text-[#03AD97] uppercase mb-2">
          Erro 404
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
          Página não <SerifAccent>encontrada</SerifAccent>
        </h1>

        {/* Small Explanatory Text */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
          Ops! O conteúdo que você tentou acessar não existe, foi alterado ou está temporariamente indisponível.
        </p>

        {/* Back to Home Button */}
        <Button href="/" size="lg">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a Home
        </Button>

      </div>
    </div>
  );
}
