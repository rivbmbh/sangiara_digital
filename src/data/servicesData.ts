import { Layout, ShoppingBag, Cpu, RefreshCw, TrendingUp } from "lucide-react";

export interface ServiceItem {
  icon: typeof Layout;
  title: string;
  description: string;
  features: string[];
  badge: string;
  color: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: Layout,
    title: "Company Profile Premium",
    description: "Website profil perusahaan profesional dengan desain modern, cepat, dan meyakinkan calon klien atau investor.",
    features: ["Desain Responsive 100%", "SEO On-Page Optimal", "Integrasi WhatsApp & Map"],
    badge: "Paling Populer",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: ShoppingBag,
    title: "Toko Online / E-Commerce",
    description: "Platform jualan online lengkap dengan sistem keranjang belanja, cek ongkir otomatis, dan payment gateway lokal.",
    features: ["Payment Gateway Otomatis", "Katalog Produk & Stok", "Notifikasi Order WA"],
    badge: "High Converting",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Cpu,
    title: "Web App & SaaS Custom",
    description: "Aplikasi berbasis web sesuai alur kerja bisnis Anda (ERP, CRM, POS, Portal Membership, Dashboard Admin).",
    features: ["Arsitektur Scalable", "Security Encryption", "Custom Database API"],
    badge: "Custom Logic",
    color: "from-red-600 to-rose-600",
  },
  {
    icon: RefreshCw,
    title: "Redesign & Speed Up Web",
    description: "Ubah website lama Anda yang lambat & kurang menarik menjadi ultra modern dan loading kurang dari 2 detik.",
    features: ["PageSpeed Score 95+", "UI/UX Redesign Total", "Clean Code Standards"],
    badge: "Fast Turnaround",
    color: "from-orange-600 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization & Maintenance",
    description: "Dorong posisi website ke halaman pertama Google untuk mendatangkan traffic organik secara terus-menerus.",
    features: ["Target Kata Kunci Utama", "Security & Backup Rutin", "Laporan Performa Bulanan"],
    badge: "Organic Growth",
    color: "from-amber-500 to-orange-600",
  },
];
