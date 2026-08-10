'use client';

import React from 'react';

export const VideoBannerSection = () => {
  return (
    <section className="w-full relative overflow-hidden bg-black py-24 sm:py-40 my-0 border-y border-transparent min-h-[480px] sm:min-h-[650px] flex items-center justify-center">
      {/* Full width video background with zero blur/overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/intro-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Crisp clean video banner */}
      </div>
    </section>
  );
};
