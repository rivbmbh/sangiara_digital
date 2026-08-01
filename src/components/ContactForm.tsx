"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  MessageSquare,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Flame,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Company Profile",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo SANGIARA DIGITAL, saya ${formData.name || "Klien"} berminat konsultasi pembuatan website (${formData.service}). Bisakah kita berdiskusi?`,
  );

  return (
    <section id="kontak" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-8 items-start px-20">
          {/* Left Column: Contact Info & WhatsApp Direct */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delayMs={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-center">
                Konsultasikan Kebutuhan Website Anda Bersama kami
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <p className="text-slate-600 text-base leading-relaxed text-center">
                Tim profesional kami siap membantu merencanakan konsep website
                terbaik untuk meningkatkan omset dan citra bisnis Anda.
              </p>
            </ScrollReveal>

            {/* Quick Contact Badges */}
            <ScrollReveal delayMs={300}>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      WhatsApp Direct Fast Response
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      +62 821-9441-7430
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      Email Official Agency
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      sangiaradigital@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl text-black border-2 border-black flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      Jam Operasional Layanan
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      1x24 Jam (24/7) Fast Response
                      <p className="text-sm font-medium">
                        Slow response di jam 21.00 - 08.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Direct WhatsApp CTA Button */}
            <ScrollReveal delayMs={400}>
              <a
                href={`https://wa.me/6282194417430?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat WhatsApp Langsung (Fast Response)</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Form */}
          {/* <div className="lg:col-span-7">
            <ScrollReveal delayMs={200}>
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/50 rounded-full blur-2xl pointer-events-none" />

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Kirim Pesan Proyek
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Isi formulir di bawah ini, tim SANGIARA DIGITAL akan
                    menghubungi Anda dalam waktu kurang dari 2 jam.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
                    <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                    <h4 className="text-xl font-bold text-emerald-900">
                      Pesan Terkirim!
                    </h4>
                    <p className="text-sm text-emerald-700">
                      Terima kasih{" "}
                      <strong className="font-bold">{formData.name}</strong>.
                      Tim SANGIARA DIGITAL akan segera membalas konsultasi Anda.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Contoh: Andi Pratama"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-slate-900 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          No. WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="0812xxxxxxx"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-slate-900 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Alamat Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="email@bisnis.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-slate-900 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Jenis Layanan
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-slate-900 text-sm outline-none transition-all"
                        >
                          <option value="Company Profile">
                            Company Profile
                          </option>
                          <option value="Toko Online / E-Commerce">
                            Toko Online / E-Commerce
                          </option>
                          <option value="Web App / SaaS Custom">
                            Web App / SaaS Custom
                          </option>
                          <option value="Redesign & Speed Up Web">
                            Redesign & Speed Up Web
                          </option>
                          <option value="SEO Optimization & Maintenance">
                            SEO Optimization & Maintenance
                          </option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Detail Rencana Proyek *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Jelaskan secara singkat jenis usaha Anda, referensi desain web yang disukai, atau fitur utama yang dibutuhkan..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-slate-900 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white gradient-fire-bg shadow-fire-sm hover:shadow-fire-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <span>Kirim Formulir Konsultasi</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div> */}
        </div>
      </div>
    </section>
  );
}
