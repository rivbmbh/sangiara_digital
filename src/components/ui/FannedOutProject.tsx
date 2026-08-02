import React from "react";
import ScrollReveal from "../ScrollReveal";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const FannedOutProject = () => {
  return (
    <ScrollReveal delayMs={500}>
      <div className="relative w-full h-70 sm:h-100 md:h-125 lg:h-140 z-30 -mb-40 sm:-mb-64 md:-mb-80 pointer-events-auto">
        {/* Card 1: Far Left (-rotate-18) */}
        <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] bottom-6 sm:bottom-12 w-47.5 sm:w-[320px] md:w-105 z-10 transform -rotate-18 translate-y-8 sm:translate-y-12 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300 shadow-2xl group">
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/90 shadow-2xl">
            <div className="bg-slate-950 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[9px] font-mono text-slate-400 truncate max-w-30">
                project-showcase-3.png
              </span>
            </div>
            {/* Real screenshot from public/hero-img */}
            <div className="relative overflow-hidden bg-slate-950">
              <Image
                src="/hero-img/summit.webp"
                alt="Web Showcase 3"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>

        {/* Card 2: Middle Left (-rotate-9) */}
        <div className="absolute left-[14%] sm:left-[16%] bottom-3 sm:bottom-6 w-55 sm:w-95 md:w-120 z-20 transform -rotate-9 translate-y-3 sm:translate-y-6 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300 shadow-2xl group">
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/90 shadow-2xl">
            <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 truncate max-w-37.5">
                project-showcase-1.pngsda
              </span>
            </div>
            <div className="relative overflow-hidden bg-slate-950">
              <Image
                src="/hero-img/valhalla.webp"
                alt="Web Showcase 1"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>

        {/* Card 3: CENTER MAIN FEATURED CARD (rotate-0, scale-105, z-40) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-65 sm:w-105 md:w-120 lg:w-135 z-40 transform hover:scale-108 transition-all duration-300 shadow-2xl shadow-red-950/80 group">
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-2xl">
            <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="px-3 py-0.5 bg-slate-900 rounded-md text-[11px] font-mono text-slate-200 flex items-center gap-1.5 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                https://sangiara.digital
              </div>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div className="relative overflow-hidden bg-slate-950">
              <Image
                src="/hero-img/hotelapp.webp"
                alt="Sangiara Digital Main Showcase"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>

        {/* Card 4: Middle Right (rotate-9) */}
        <div className="absolute right-[14%] sm:right-[16%] bottom-3 sm:bottom-6 w-55 sm:w-95 md:w-120 z-20 transform rotate-9 translate-y-3 sm:translate-y-6 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300 shadow-2xl group">
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/90 shadow-2xl">
            <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 truncate max-w-37.5">
                project-showcase-4.png
              </span>
            </div>
            <div className="relative overflow-hidden bg-slate-950">
              <Image
                src="/hero-img/pos.webp"
                alt="Web Showcase 4"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>

        {/* Card 5: Far Right (rotate-18) */}
        <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] bottom-6 sm:bottom-12 w-47.5 sm:w-[320px] md:w-105 z-10 transform rotate-18 translate-y-8 sm:translate-y-12 hover:rotate-0 hover:scale-108 hover:z-50 transition-all duration-300 shadow-2xl group">
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/90 shadow-2xl">
            <div className="bg-slate-950 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[9px] font-mono text-slate-400 truncate max-w-30">
                project-showcase-5.png
              </span>
            </div>
            <div className="relative overflow-hidden bg-slate-950">
              <Image
                src="/hero-img/instacik.webp"
                alt="Web Showcase 5"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default FannedOutProject;
