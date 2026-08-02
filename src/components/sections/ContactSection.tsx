"use client";

import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, Clock, Sparkles } from "lucide-react";
import { contactInfo } from "@/data/contactData";

export default function ContactSection() {
  const contactCards = [
    {
      icon: Phone,
      title: "WhatsApp Direct Fast Response",
      value: contactInfo.phone,
      subtext: "Respon Kilat 24 Jam",
      iconBg: "bg-emerald-600 text-white",
      borderHover: "hover:border-emerald-300",
    },
    {
      icon: Mail,
      title: "Email Official Agency",
      value: contactInfo.email,
      subtext: "Untuk Penawaran Resmi & Kerjasama",
      iconBg: "bg-slate-900 text-white",
      borderHover: "hover:border-slate-400",
    },
    {
      icon: Clock,
      title: "Jam Operasional Layanan",
      value: contactInfo.hours,
      subtext: "Siap Melayani Setiap Hari",
      iconBg: "bg-amber-500 text-white",
      borderHover: "hover:border-amber-300",
    },
  ];

  return (
    <section id="kontak" className="py-24 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 text-red-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                Hubungi SANGIARA DIGITAL
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Konsultasikan Kebutuhan Website Anda Bersama Kami
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Tim profesional kami siap membantu merencanakan konsep website
                terbaik untuk meningkatkan omset dan citra bisnis Anda.
              </p>
            </ScrollReveal>
          </div>

          {/* Clean & Refined Contact Info Cards */}
          <ScrollReveal delayMs={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm ${card.borderHover} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-md mb-5`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-medium text-slate-500 mb-1">
                      {card.title}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {card.value}
                    </h3>

                    <p className="text-xs text-slate-400 font-normal">
                      {card.subtext}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
