import React from 'react';
import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { PillarsSection } from '@/components/home/PillarsSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { RoiSimulator } from '@/components/home/RoiSimulator';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { StackGrid } from '@/components/home/StackGrid';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PillarsSection />
      <HowItWorks />
      <RoiSimulator />
      <TestimonialsCarousel />
      <StackGrid />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}
