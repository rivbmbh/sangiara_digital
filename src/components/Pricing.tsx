"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Paket Bansos",
      target:
        "Cocok untuk UMKM gaji UMR/Pengangguran ups🫢, biar profilmu dilirik HRD atau bisnis kaum perintis keliatan niat!",
      price: "Rp 349.000",
      isPopular: false,
      features: [
        "1 Halaman Responsive Landing Page (yang penting tayang dulu yekan)",
        "Desain Standard Anti Ribet Sat-Set",
        "Gratis Domain dan Hosting tapi 1 Tahun doang yeh (atau bisa pakai domain sendiri)",
        "Tombol Chat WhatsApp Direct",
        "Integrasi Sosial Media",
        "Waktu Pengerjaan 1-4 Hari Kerja",
        "Revisi 3x Aja Selama 1 Minggu Setelah Web Tayang",
      ],
      ctaText: "Pilih Paket Bansos",
      badge: "Hemat",
    },
    {
      name: "Paket Mendang-Mending",
      target:
        "Cocok buat UMKM, toko online, atau profesional yang modalnya pas-pasan tapi seleranya pengen keliatan elite",
      price: "Rp 1.299.000",
      isPopular: false,
      features: [
        "5 Halaman Menu Bebas",
        "Gratis Domain Premium & Hosting",
        "Desain Premium Custom Exclusiv",
        "SEO On-Page Optimization Google #1",
        "Integrasi Google Map & Form Kontak",
        "Fitur CMS Artikel / Blog Berita",
        "Integrasi Payment Gateway (Only Midtrans)",
        "Waktu Pengerjaan 30 - 45 Hari Kerja (Antrian Reguler)",
        "Revisi 5x Selama 1 Bulan Setelah Web Tayang",
      ],
      ctaText: "Pilih Paket Mendang-Mending",
      badge: "Hemat",
    },
    {
      name: "Paket Sultan",
      target:
        "Cocok buat yang mampu-mampu aja, pastinya serba lenkap dan eksklusif",
      price: "Rp 2.999.000",
      isPopular: true,
      features: [
        "Extra 7 Halaman Menu Bebas",
        "Gratis Domain Premium & Cloud Hosting",
        "Desain Premium Custom Exclusiv",
        "SEO On-Page Optimization Google #1",
        "Integrasi Google Map & Form Kontak",
        "Fitur CMS Artikel / Blog Berita",
        "Dashboard Admin POS / CRM / Inventory",
        "Integrasi Payment Gateway (Multi Payment)",
        "Pengerjaan Express 5 - 7 Hari Kerja (Prioritas Antrian)",
        "Revisi 7x Selama 1 Bulan Setelah Web Tayang",
      ],
      ctaText: "Pilih Paket Sultan",
      badge: "🔥 PALING POPULER",
    },
  ];

  return (
    <section id="harga" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider border border-red-100">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              Paket Harga Transparan
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Investasi Digital Terbaik Tanpa{" "}
              <span className="gradient-fire-text">Biaya Tersembunyi</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-slate-600 text-base sm:text-lg">
              Semua paket sudah termasuk gratis domain, cloud hosting cepat, dan
              garansi penuh dari tim SANGIARA DIGITAL.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delayMs={idx * 100}>
              <div
                className={`relative rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-white border-2 border-red-500 shadow-fire-lg scale-102 lg:-translate-y-2 z-10"
                    : "bg-white border border-slate-200/90 shadow-sm hover:border-red-200 hover:shadow-md"
                }`}
              >
                {/* Popular Fiery Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-fire-bg text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-md tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    {!plan.isPopular && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mb-6 min-h-8 leading-relaxed">
                    {plan.target}
                  </p>

                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 ml-2 font-medium">
                      /sekali bayar
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700"
                      >
                        <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#kontak"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold transition-all duration-200 ${
                    plan.isPopular
                      ? "gradient-fire-bg text-white shadow-fire-sm hover:shadow-fire-lg"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
