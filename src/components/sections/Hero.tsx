"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Flame, ArrowRight, Globe } from "lucide-react";

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

    const embers: EmberParticle[] = [];
    const maxEmbers = 70;
    const cursorSparks: CursorSpark[] = [];
    const flameColors = ["#FF2A2A", "#FF6B00", "#FFAA00", "#FFD700", "#FF4500"];

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

    let lastMouseX = mousePos.x;
    let lastMouseY = mousePos.y;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

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
      className="relative min-h-dvh w-full flex items-center bg-[url(/hero-img/meet.jpg)] bg-cover bg-center bg-no-repeat select-none z-10"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="bg-black absolute inset-0 z-1 pointer-events-none opacity-60 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
          <ScrollReveal delayMs={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-950/70 backdrop-blur-3xl text-orange-600 text-xs font-semibold tracking-wide">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span>SANGIARA DIGITAL • Jasa Web Developer #1</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.1]">
              Premium Websites Real Results.
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Desain premium, performa tinggi, SEO friendly, dan siap
              meningkatkan kepercayaan bisnis Anda.
            </p>
          </ScrollReveal>

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
      </div>
    </section>
  );
}
