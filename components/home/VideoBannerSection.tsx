'use client';

import React from 'react';

export const VideoBannerSection = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white py-20 sm:py-36 my-0 border-y border-transparent min-h-[480px] sm:min-h-[650px] flex items-center justify-center">
      {/* Full width video background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/video-project-10.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        {/* Top White Blur/Fade for seamless section blend */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none z-10" />

        {/* Bottom White Blur/Fade for seamless section blend */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};
