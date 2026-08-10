"use client";

import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";

const orbits = [
  {
    size: "w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]",
    duration: 20,
    icons: [
      { src: "https://img.icons8.com/color/96/whatsapp--v1.png", alt: "WhatsApp", angle: -60 },
      { src: "https://img.icons8.com/color/96/chatgpt.png", alt: "ChatGPT", angle: 0 },
      { src: "https://images.shadcnspace.com/assets/svgs/clude.svg", alt: "Claude", angle: 60 },
    ],
  },
  {
    size: "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[540px] md:h-[540px]",
    duration: 26,
    icons: [
      { src: "https://img.icons8.com/color/96/instagram-new.png", alt: "Instagram", angle: 0 },
      { src: "https://images.shadcnspace.com/assets/svgs/gemini.svg", alt: "Gemini", angle: -90 },
    ],
  },
  {
    size: "w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] md:w-[660px] md:h-[660px]",
    duration: 32,
    icons: [
      { src: "https://img.icons8.com/color/96/gmail-new.png", alt: "Gmail", angle: -60 },
      { src: "https://img.icons8.com/color/96/google-calendar--v2.png", alt: "Google Calendar", angle: 60 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden flex justify-center items-center">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square pointer-events-none w-[180px] sm:w-[260px] md:w-[320px] z-10">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/20 ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-6 sm:-ml-7 origin-bottom flex flex-col justify-start items-center"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="p-2 sm:p-3 border border-emerald-500/30 rounded-full bg-white shadow-md -mt-5 sm:-mt-6 relative z-20 hover:scale-110 transition-transform"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={iconData.src}
                    alt={iconData.alt}
                    width={28}
                    height={28}
                    className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
