import React from "react";
import ScrollReveal from "../common/ScrollReveal";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { Globe } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="text-center max-w-4xl mx-auto space-y-6 mb-12 sm:mb-16">
      <ScrollReveal delayMs={100}>
        <Badge variant="fiery">SANGIARA DIGITAL • Jasa Web Developer #1</Badge>
      </ScrollReveal>

      <ScrollReveal delayMs={200}>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
          Websites That Every <br className="hidden sm:inline" />
          <span className="gradient-fire-text">Business Should Have</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delayMs={300}>
        <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Solusi pembuatan website premium berdesain eksklusif, super cepat (
          <strong className="text-white font-semibold">&lt; 2d</strong>), SEO
          friendly, dan siap mendatangkan banyak pelanggan.
        </p>
      </ScrollReveal>

      <ScrollReveal delayMs={400}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button href="#kontak" variant="primary">
            Mulai Buat Website
          </Button>

          <Button href="#portofolio" variant="secondary" icon={Globe}>
            Lihat Portofolio
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
}
