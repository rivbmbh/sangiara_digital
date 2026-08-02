"use client";

import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Layout,
  ShoppingBag,
  Cpu,
  RefreshCw,
  TrendingUp,
  CheckCircle,
  Flame,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: "Company Profile Premium",
      description:
        "Website profil perusahaan profesional dengan desain modern, cepat, dan meyakinkan calon klien atau investor.",
      features: [
        "Desain Responsive 100%",
        "SEO On-Page Optimal",
        "Integrasi WhatsApp & Map",
      ],
      badge: "Paling Populer",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: ShoppingBag,
      title: "Toko Online / E-Commerce",
      description:
        "Platform jualan online lengkap dengan sistem keranjang belanja, cek ongkir otomatis, dan payment gateway lokal.",
      features: [
        "Payment Gateway Otomatis",
        "Katalog Produk & Stok",
        "Notifikasi Order WA",
      ],
      badge: "High Converting",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Cpu,
      title: "Web App & SaaS Custom",
      description:
        "Aplikasi berbasis web sesuai alur kerja bisnis Anda (ERP, CRM, POS, Portal Membership, Dashboard Admin).",
      features: [
        "Arsitektur Scalable",
        "Security Encryption",
        "Custom Database API",
      ],
      badge: "Custom Logic",
      color: "from-red-600 to-rose-600",
    },
    {
      icon: RefreshCw,
      title: "Redesign & Speed Up Web",
      description:
        "Ubah website lama Anda yang lambat & kurang menarik menjadi ultra modern dan loading kurang dari 2 detik.",
      features: [
        "PageSpeed Score 95+",
        "UI/UX Redesign Total",
        "Clean Code Standards",
      ],
      badge: "Fast Turnaround",
      color: "from-orange-600 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization & Maintenance",
      description:
        "Dorong posisi website ke halaman pertama Google untuk mendatangkan traffic organik secara terus-menerus.",
      features: [
        "Target Kata Kunci Utama",
        "Security & Backup Rutin",
        "Laporan Performa Bulanan",
      ],
      badge: "Organic Growth",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="layanan" className="pt-32 pb-24 bg-slate-50/70 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 text-red-700 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-red-600" />
              Layanan Utama Kami
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solusi Digital Lengkap Berstandar{" "}
              <span className="gradient-fire-text">Internasional</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-slate-600 text-base sm:text-lg">
              Setiap proyek dikembangkan secara khusus sesuai identitas brand
              Anda untuk memaksimalkan hasil bisnis.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delayMs={idx * 100}>
                <div className="group relative bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-fire-sm hover:border-red-300 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-red-500 transition-opacity" />
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    {service.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
