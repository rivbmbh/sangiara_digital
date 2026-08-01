"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Flame, ArrowRight, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import FireBackground from "./ui/effects/FireBackground";

interface EmberParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface CursorSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tracking state for flame trail
  const [mousePos, setMousePos] = useState<{
    x: number;
    y: number;
    active: boolean;
  }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle arrays
    const embers: EmberParticle[] = [];
    const maxEmbers = 70;
    const cursorSparks: CursorSpark[] = [];

    const flameColors = ["#FF2A2A", "#FF6B00", "#FFAA00", "#FFD700", "#FF4500"];

    // Initialize embers
    const createEmber = (bottomOnly = false): EmberParticle => {
      return {
        x: Math.random() * width,
        y: bottomOnly ? height + Math.random() * 20 : Math.random() * height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.8 + 0.2,
        color: flameColors[Math.floor(Math.random() * flameColors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    for (let i = 0; i < maxEmbers; i++) {
      embers.push(createEmber(false));
    }

    // Animation Loop
    let lastMouseX = mousePos.x;
    let lastMouseY = mousePos.y;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Background Bonfire Embers Floating Upwards
      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];
        p.y -= p.speedY;
        p.x += Math.sin(p.y * 0.02) * p.speedX;
        p.life++;

        const fadeRatio = 1 - p.y / height;
        const currentOpacity = Math.max(0, p.opacity * (1 - fadeRatio * 0.7));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.y < -10 || p.life > p.maxLife) {
          embers[i] = createEmber(true);
        }
      }

      // 2. Spawn Cursor Trail Sparks on Movement
      if (mousePos.active) {
        const dx = mousePos.x - lastMouseX;
        const dy = mousePos.y - lastMouseY;
        const dist = Math.hypot(dx, dy);

        if (dist > 2) {
          for (let k = 0; k < 3; k++) {
            cursorSparks.push({
              x: mousePos.x + (Math.random() - 0.5) * 12,
              y: mousePos.y + (Math.random() - 0.5) * 12,
              vx: (Math.random() - 0.5) * 2 - dx * 0.1,
              vy: (Math.random() - 0.5) * 2 - dy * 0.1 - 0.5,
              size: Math.random() * 3.5 + 1.5,
              opacity: 1,
              color:
                flameColors[Math.floor(Math.random() * flameColors.length)],
            });
          }
        }
        lastMouseX = mousePos.x;
        lastMouseY = mousePos.y;
      }

      // Render & update cursor sparks
      for (let j = cursorSparks.length - 1; j >= 0; j--) {
        const s = cursorSparks[j];
        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= 0.025;
        s.size *= 0.96;

        if (s.opacity <= 0 || s.size <= 0.2) {
          cursorSparks.splice(j, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, s.opacity);
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#FF6B00";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Render Fiery Cursor Glow Aura
      if (mousePos.active) {
        const gradient = ctx.createRadialGradient(
          mousePos.x,
          mousePos.y,
          0,
          mousePos.x,
          mousePos.y,
          140,
        );
        gradient.addColorStop(0, "rgba(255, 100, 0, 0.45)");
        gradient.addColorStop(0.3, "rgba(255, 42, 42, 0.25)");
        gradient.addColorStop(0.7, "rgba(255, 136, 0, 0.08)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 140, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 1;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  // Mouse event handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      id="beranda"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 sm:pt-40 pb-36 sm:pb-48 md:pb-64 w-full bg-[url(/hero-img/meet.jpg)] bg-cover bg-center select-none z-10"
    >
      {/* Canvas for Bonfire Embers & Mouse Flame Trail */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Glassmorphism Dark Layer Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-neutral-950/75 to-slate-950/90 backdrop-blur-md z-1 border-b border-red-500/10 pointer-events-none" /> */}

      {/* Fiery Glow Radial Orbs */}
      {/* <FireBackground /> */}
      <div className="bg-black absolute inset-0 z-1 pointer-events-none opacity-60 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple & Clean Centered Hero Typography Composition */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
          {/* Top Pill Badge */}
          <ScrollReveal delayMs={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-950/70 backdrop-blur-3xl  text-orange-600 text-xs font-semibold tracking-wide">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span className="">SANGIARA DIGITAL • Jasa Web Developer #1</span>
            </div>
          </ScrollReveal>

          {/* Big Bold Headline */}
          <ScrollReveal delayMs={200}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.1]">
              Premium Websites Real Results.
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delayMs={300}>
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Desain premium, performa tinggi, SEO friendly, dan siap
              meningkatkan kepercayaan bisnis Anda.
            </p>
          </ScrollReveal>

          {/* Centered CTA Buttons */}
          <ScrollReveal delayMs={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white gradient-fire-bg shadow-fire-lg hover:shadow-fire-sm transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Mulai Buat Website</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 backdrop-blur-md transition-all duration-200"
              >
                <Globe className="w-5 h-5 text-red-500" />
                <span>Lihat Portofolio</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Dynamic Absolute Fanned-Out Project Showcase Stack */}
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
      </div>
    </section>
  );
}
