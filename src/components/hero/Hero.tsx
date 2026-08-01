"use client";

import React, { useRef } from "react";
import HeroCanvas from "./HeroCanvas";
import HeroContent from "./HeroContent";
import HeroProjectStack from "./HeroProjectStack";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="beranda"
      ref={containerRef}
      className="relative pt-32 sm:pt-40 pb-36 sm:pb-48 md:pb-64 bg-slate-950 select-none z-10"
    >
      <HeroCanvas containerRef={containerRef} />

      {/* Glassmorphism Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-neutral-950/75 to-slate-950/90 backdrop-blur-md z-1 border-b border-red-500/10 pointer-events-none" />

      {/* Fiery Radial Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-red-600/20 via-orange-600/15 to-amber-500/10 rounded-full blur-3xl z-1 pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeroContent />
        <HeroProjectStack />
      </div>
    </section>
  );
}
