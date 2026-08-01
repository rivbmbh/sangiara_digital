"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  ExternalLink,
  Flame,
  Sparkles,
  Monitor,
  Smartphone,
  Check,
} from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "Semua Proyek" },
    { id: "corporate", label: "Company Profile" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "webapp", label: "Web App / SaaS" },
  ];

  const projects = [
    {
      id: 1,
      title: "Logistik Nusantara Enterprise",
      category: "corporate",
      type: "Company Profile & Portal",
      description:
        "Platform web perusahaan ekspedisi & logistik internasional dengan fitur lacak resi real-time.",
      tags: ["Next.js", "TailwindCSS", "REST API"],
      speedScore: "99/100",
      gradient: "from-slate-900 to-red-950",
      accent: "from-red-500 to-orange-500",
      imageMock: {
        title: "LOGISTIK NUSANTARA",
        subtitle: "Global Supply Chain Solutions",
        heroBg: "bg-slate-900",
      },
    },
    {
      id: 2,
      title: "FlameStore Fashion Hub",
      category: "ecommerce",
      type: "Online Luxury Store",
      description:
        "Toko online apparel premium dengan payment gateway otomatis, keranjang Ajax, dan filter produk instan.",
      tags: ["React", "Midtrans", "TailwindCSS"],
      speedScore: "98/100",
      gradient: "from-red-900 to-amber-900",
      accent: "from-orange-500 to-amber-500",
      imageMock: {
        title: "FLAMESTORE APPAREL",
        subtitle: "Summer New Collection 2026",
        heroBg: "bg-red-950",
      },
    },
    {
      id: 3,
      title: "NusaHealth Clinic Management",
      category: "webapp",
      type: "Medical SaaS Portal",
      description:
        "Aplikasi rekam medis digital & pendaftaran janji temu dokter online berbasis cloud.",
      tags: ["Next.js", "TypeScript", "Node.js"],
      speedScore: "100/100",
      gradient: "from-slate-950 to-red-900",
      accent: "from-red-600 to-rose-600",
      imageMock: {
        title: "NUSAHEALTH DIGITAL",
        subtitle: "Integrated Health Ecosystem",
        heroBg: "bg-slate-900",
      },
    },
    {
      id: 4,
      title: "ArthaProperty Indonesia",
      category: "corporate",
      type: "Real Estate Marketplace",
      description:
        "Website pencarian properti rumah & apartemen dengan virtual tour 360 & simulasi KPR.",
      tags: ["Next.js", "TailwindCSS", "Mapbox"],
      speedScore: "97/100",
      gradient: "from-orange-950 to-slate-900",
      accent: "from-orange-600 to-amber-500",
      imageMock: {
        title: "ARTHA PROPERTY",
        subtitle: "Find Your Dream Residence",
        heroBg: "bg-orange-950",
      },
    },
    {
      id: 5,
      title: "KopiSangiara Coffee Chain",
      category: "ecommerce",
      type: "Direct-to-Consumer Web",
      description:
        "Landing page jualan biji kopi lokal premium dengan fitur langganan otomatis tiap bulan.",
      tags: ["React", "TailwindCSS", "Subscript"],
      speedScore: "99/100",
      gradient: "from-stone-900 to-red-900",
      accent: "from-red-500 to-amber-600",
      imageMock: {
        title: "KOPI SANGIARA ROASTERY",
        subtitle: "Single Origin Specialty Coffee",
        heroBg: "bg-stone-900",
      },
    },
    {
      id: 6,
      title: "OmniFlow Dashboard CRM",
      category: "webapp",
      type: "B2B Analytics Platform",
      description:
        "Dashboard pemantauan omset penjualan & otomatisasi pesan WhatsApp blast untuk tim sales.",
      tags: ["Next.js", "ChartJS", "WebSockets"],
      speedScore: "98/100",
      gradient: "from-slate-900 to-orange-950",
      accent: "from-red-600 to-orange-500",
      imageMock: {
        title: "OMNIFLOW ANALYTICS",
        subtitle: "Real-time Sales Performance",
        heroBg: "bg-slate-950",
      },
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portofolio" className="py-24 bg-gray-100 bg-fixed relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-1">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider border border-red-100">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              Karya Terbaik Kami
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Portofolio Proyek{" "}
              <span className="gradient-fire-text">SANGIARA DIGITAL</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-slate-600 text-base sm:text-lg">
              Bukti nyata dedikasi kami dalam menghadirkan desain kelas atas dan
              performa super cepat.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Category Tabs */}
        <ScrollReveal delayMs={250}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "gradient-fire-bg text-white shadow-fire-sm scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delayMs={idx * 80}>
              <div className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-fire-sm hover:border-red-300 transition-all duration-300 flex flex-col h-full">
                {/* Visual Mockup Top Card */}
                <div
                  className={`relative h-52 ${project.imageMock.heroBg} p-5 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Background Fiery Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

                  {/* Browser Bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Speed {project.speedScore}
                    </span>
                  </div>

                  {/* Mock Content */}
                  <div className="z-10 space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                      {project.type}
                    </span>
                    <h4 className="text-lg font-black text-white leading-tight">
                      {project.imageMock.title}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {project.imageMock.subtitle}
                    </p>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>Lihat Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 text-red-600" />
                    </span>
                  </div>
                </div>

                {/* Card Info Bottom */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
