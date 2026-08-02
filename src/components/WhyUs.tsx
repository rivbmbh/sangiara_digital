"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Zap,
  Palette,
  Search,
  Smartphone,
  ShieldCheck,
  HeartHandshake,
  Flame,
  CheckCircle2,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Zap,
      title: "Loading Super Cepat (<2 Detik)",
      description:
        "Website dioptimalkan menggunakan teknologi Next.js & Tailwind CSS modern untuk kecepatan maksimal dan skor Google PageSpeed di atas 95+.",
    },
    {
      icon: Palette,
      title: "Desain Custom & Eksklusif",
      description:
        "Bukan sekadar template pasaran. Kami merancang UI/UX yang mencerminkan karakter unik brand Anda dengan estetika tinggi.",
    },
    {
      icon: Search,
      title: "SEO-Ready Struktur Google",
      description:
        "Struktur HTML5 semantik, meta tags dinamis, sitemap XML, dan schema markup agar website cepat muncul di urutan atas hasil pencarian Google.",
    },
    {
      icon: Smartphone,
      title: "Responsi Sempurna di HP",
      description:
        "Website tampil presisi, nyaman dibaca, dan lancar digunakan pada semua perangkat smartphone, tablet, laptop, maupun desktop.",
    },
    {
      icon: ShieldCheck,
      title: "Keamanan SSL & Backup Otomatis",
      description:
        "Dilengkapi inskripsi SSL gratis, perlindungan firewall dari peretas, dan backup data otomatis berkala agar bisnis selalu aman.",
    },
    {
      icon: HeartHandshake,
      title: "Garansi & Support 1 Tahun Full",
      description:
        "Tim teknis SANGIARA DIGITAL siap membantu kendala teknis dan pembaruan konten kapan pun Anda membutuhkan.",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="py-24 bg-slate-50/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 text-red-700 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-red-600" />
              Mengapa Memilih Kami
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Alasan SANGIARA DIGITAL Menjadi{" "}
              <span className="gradient-fire-text">Pilihan Utama</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-slate-600 text-base sm:text-lg">
              Kami tidak hanya membuat website indah, tetapi membangun aset
              digital yang memajukan omset bisnis Anda.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} delayMs={idx * 100}>
                <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-fire-sm hover:border-red-200 transition-all duration-300 space-y-4 h-full">
                  <div className="w-12 h-12 rounded-xl gradient-fire-bg text-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner Stats */}
        <ScrollReveal delayMs={300}>
          <div className="p-8 sm:p-12 rounded-3xl gradient-fire-bg text-white shadow-fire-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20">
              <div className="space-y-1 pt-4 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  150+
                </div>
                <div className="text-xs sm:text-sm font-medium text-red-100">
                  Website Selesai Tepat Waktu
                </div>
              </div>
              <div className="space-y-1 pt-4 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  99.4%
                </div>
                <div className="text-xs sm:text-sm font-medium text-red-100">
                  Kepuasan Klien Partner
                </div>
              </div>
              <div className="space-y-1 pt-4 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  &lt; 2 Detik
                </div>
                <div className="text-xs sm:text-sm font-medium text-red-100">
                  Rata-Rata Loading Speed
                </div>
              </div>
              <div className="space-y-1 pt-4 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  24/7
                </div>
                <div className="text-xs sm:text-sm font-medium text-red-100">
                  Layanan Support Teknis
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
