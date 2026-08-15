'use client';

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { ClientMarquee } from '@/components/home/ClientMarquee';
import { VideoBannerSection } from '@/components/home/VideoBannerSection';
import { AnimatedBeamAtlas } from '@/components/atlas/AnimatedBeamAtlas';
import { AboutSection } from '@/components/home/AboutSection';
import { PillarsSection } from '@/components/home/PillarsSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { IntegrationsGrid } from '@/components/home/IntegrationsGrid';
import { SupportSection } from '@/components/home/SupportSection';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <VideoBannerSection />

      {/* Atlas Interactive Section */}
      <section id="ferramentas" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedBeamAtlas />
      </section>

      <AboutSection />
      <PillarsSection />
      <HowItWorks />
      <IntegrationsGrid />
      <SupportSection />

      <FaqAccordion />
      <FinalCta />
    </>
  );
}
