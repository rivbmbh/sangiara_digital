"use client";

import React, { useEffect, useRef, useState } from "react";

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

interface HeroCanvasProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroCanvas({ containerRef }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      });
    };

    const handleMouseLeave = () => {
      setMousePos((prev) => ({ ...prev, active: false }));
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef]);

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

    const createEmber = (bottomOnly = false): EmberParticle => ({
      x: Math.random() * width,
      y: bottomOnly ? height + Math.random() * 20 : Math.random() * height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.8 + 0.2,
      color: flameColors[Math.floor(Math.random() * flameColors.length)],
      life: 0,
      maxLife: Math.random() * 200 + 100,
    });

    for (let i = 0; i < maxEmbers; i++) {
      embers.push(createEmber(false));
    }

    let lastMouseX = mousePos.x;
    let lastMouseY = mousePos.y;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Embers
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

      // Cursor Sparks
      if (mousePos.active) {
        const dx = mousePos.x - lastMouseX;
        const dy = mousePos.y - lastMouseY;
        if (Math.hypot(dx, dy) > 2) {
          for (let k = 0; k < 3; k++) {
            cursorSparks.push({
              x: mousePos.x + (Math.random() - 0.5) * 12,
              y: mousePos.y + (Math.random() - 0.5) * 12,
              vx: (Math.random() - 0.5) * 2 - dx * 0.1,
              vy: (Math.random() - 0.5) * 2 - dy * 0.1 - 0.5,
              size: Math.random() * 3.5 + 1.5,
              opacity: 1,
              color: flameColors[Math.floor(Math.random() * flameColors.length)],
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

      // Flame Cursor Glow
      if (mousePos.active) {
        const gradient = ctx.createRadialGradient(
          mousePos.x,
          mousePos.y,
          0,
          mousePos.x,
          mousePos.y,
          140
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
  }, [containerRef, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
