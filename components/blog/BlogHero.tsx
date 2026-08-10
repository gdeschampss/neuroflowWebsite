'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowDown, BookOpen } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const BlogHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stage1Ref = useRef<HTMLHeadingElement>(null);
  const stage2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stage1Ref.current || !stage2Ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1200',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Stage 1 text fades out & slides up
      tl.to(stage1Ref.current, {
        opacity: 0,
        y: -40,
        scale: 0.95,
        duration: 1,
        ease: 'power2.inOut',
      });

      // Stage 2 text fades in & slides up
      tl.fromTo(
        stage2Ref.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.inOut' },
        '<0.5'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToPosts = (e: React.MouseEvent) => {
    e.preventDefault();
    const postsElement = document.getElementById('posts');
    if (postsElement) {
      postsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-white text-[#1F1F1F] flex flex-col justify-between overflow-hidden">

      {/* Minimal Top Nav Bar (Requirement Section 14.1) */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left Button: Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-gray-200 shadow-sm text-sm font-bold text-[#1F1F1F] hover:text-[#03AD97] hover:border-[#03AD97] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Home</span>
        </Link>

        {/* Right Button: Direct Access to Content/Blog Grid */}
        <a
          href="#posts"
          onClick={scrollToPosts}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#03AD97] text-white text-sm font-bold shadow-md hover:bg-[#028F7C] transition-all"
        >
          <span>Ir Direto aos Artigos</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      {/* Hero Content & Text Layout (Alinhado à Esquerda & Centralizado Verticalmente) */}
      <div className="relative z-20 flex-1 flex flex-col items-start justify-center max-w-7xl w-full mx-auto px-6 sm:px-12 text-left">

        <div className="relative min-h-[220px] flex items-center justify-start w-full max-w-3xl">
          {/* Stage 1 H1 Text */}
          <h1
            ref={stage1Ref}
            className="absolute text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-[#1F1F1F] text-left"
          >
            Inteligência Artificial aplicada a <span className="font-serif-accent text-[#03AD97] font-normal">negócios reais</span>.
          </h1>

          {/* Stage 2 H1 Text (Revealed via GSAP ScrollTrigger) */}
          <h1
            ref={stage2Ref}
            className="absolute text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-[#1F1F1F] opacity-0 text-left"
          >
            Bastidores, casos práticos e <span className="font-serif-accent text-[#03AD97] font-normal">análises de ROI</span> sem hype.
          </h1>
        </div>

        {/* Scroll Indicator Subtext */}
        <div className="mt-12 flex items-center gap-3 text-xs font-semibold text-gray-500">
          <div className="w-5 h-8 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#03AD97] animate-bounce" />
          </div>
          <span>Role para continuar lendo a narrativa</span>
        </div>

      </div>

      {/* Hero Backdrop Asset Overlay - 100% Aparente com degradê suave à esquerda */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <Image
          src="/images/blog-hero-section.webp"
          alt="Blog Hero Visual"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent sm:to-transparent" />
      </div>

    </div>
  );
};

