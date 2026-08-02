"use client";

import React, { useState, useEffect } from "react";
import { Flame, Menu, X, PhoneCall, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Harga", href: "#harga" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#beranda" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl gradient-fire-bg flex items-center justify-center shadow-fire-sm group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-white fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-xl tracking-tight leading-none ${isScrolled ? "text-slate-900" : "text-white"}`}
              >
                SANGIARA<span className="gradient-fire-text">.</span>
              </span>
              <span
                className={`text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${isScrolled ? "text-slate-500" : "text-red-400"}`}
              >
                DIGITAL AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all ${
                  isScrolled
                    ? "text-slate-600 hover:text-red-600"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-fire-bg shadow-fire-sm hover:shadow-fire-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-600 hover:bg-slate-100"
                : "text-white hover:bg-slate-900"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-red-950/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-center text-sm font-semibold text-white gradient-fire-bg shadow-fire-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi Gratis Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
