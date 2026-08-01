"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  life: number;
  decay: number;
  hueShift: number;
}

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: height + Math.random() * 50,
    size: Math.random() * 6 + 3,
    speedY: Math.random() * 2.5 + 1.5,
    speedX: (Math.random() - 0.5) * 1.2,
    life: 1,
    decay: Math.random() * 0.012 + 0.006,
    hueShift: Math.random(),
  };
}

export default function FireBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      width = canvas.width = parent?.clientWidth ?? window.innerWidth;
      height = canvas.height = parent?.clientHeight ?? window.innerHeight;
    };

    resize();
    particles = Array.from({ length: 120 }, () =>
      createParticle(width, height),
    );

    const animate = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.02) * 0.6;
        p.life -= p.decay;
        p.size *= 0.985;

        if (p.life <= 0 || p.size <= 0.3) {
          Object.assign(p, createParticle(width, height));
        }

        const g = Math.floor(80 + p.hueShift * 140);
        const b = Math.floor(p.hueShift * 40);
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = `rgb(255, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size, 0), 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-1 pointer-events-none opacity-60 blur-md"
    />
  );
}
