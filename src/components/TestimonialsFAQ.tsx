"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Star, ChevronDown, Flame, Quote, HelpCircle } from "lucide-react";

export default function TestimonialsFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO Logistik Nusantara",
      rating: 5,
      comment: "Layanan SANGIARA DIGITAL sangat luar biasa! Website company profile perusahaan kami dikerjakan hanya dalam 5 hari dengan skor Google Speed 99. Omset dan kepercayaan klien langsung naik!",
      avatarBg: "bg-red-500",
    },
    {
      name: "Rina Wijaya",
      role: "Owner FlameStore Apparel",
      rating: 5,
      comment: "Toko online kami jadi jauh lebih keren dan transaksi otomatis via WhatsApp & Payment Gateway lancar tanpa kendala. Desainnya benar-benar eksklusif!",
      avatarBg: "bg-orange-500",
    },
    {
      name: "Dr. Hendra Gunawan",
      role: "Founder NusaHealth",
      rating: 5,
      comment: "Sangat puas dengan pengerjaan Web App SaaS klinik kami. Timnya komunikatif, profesional, dan selalu memberikan garansi teknis cepat.",
      avatarBg: "bg-amber-500",
    },
  ];

  const faqs = [
    {
      q: "Berapa lama proses pengerjaan pembuatan website?",
      a: "Rata-rata waktu pengerjaan untuk Paket Starter adalah 3 - 5 hari kerja, Paket Business Pro 5 - 7 hari kerja, dan Paket Custom Enterprise 10 - 14 hari kerja tergantung pada kompleksitas fitur yang Anda butuhkan.",
    },
    {
      q: "Apakah saya perlu menyiapkan hosting dan domain sendiri?",
      a: "Tidak perlu. Seluruh paket pengerjaan di SANGIARA DIGITAL sudah mencakup GRATIS domain pilihan (.com / .id) serta Cloud Hosting cepat untuk tahun pertama.",
    },
    {
      q: "Apakah website buatan SANGIARA DIGITAL mudah dikelola sendiri?",
      a: "Sangat mudah! Kami membuatkan dashboard pengelola konten yang user-friendly serta menyertakan video panduan panduan cara meng-update produk, artikel, maupun foto portofolio.",
    },
    {
      q: "Bagaimana dengan jaminan SEO di Google?",
      a: "Setiap website yang kami buat sudah menerapkan standar teknik SEO On-Page Google terbaru (Semantic HTML5, Fast Load Speed, Mobile Responsive, Clean Code, & OpenGraph Tags).",
    },
    {
      q: "Apakah ada biaya bulanan atau tersembunyi?",
      a: "Tidak ada biaya bulanan tersembunyi. Pembayaran bersifat sekali di awal proyek untuk pengembangan web. Di tahun berikutnya Anda hanya membayar biaya perpanjangan domain & hosting tahunan biasa.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 text-red-700 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-red-600" />
                Testimoni Klien
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Kata Mereka Tentang <span className="gradient-fire-text">SANGIARA DIGITAL</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <ScrollReveal key={item.name} delayMs={idx * 100}>
                <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-fire-sm transition-all duration-300 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm italic leading-relaxed">
                      &quot;{item.comment}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Section 2: FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
                Pertanyaan Umum (FAQ)
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Punya Pertanyaan Sebelum Memulai Proyek?
              </h3>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={faq.q} delayMs={idx * 60}>
                  <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-red-600 transition-colors focus:outline-none"
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-red-600" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
