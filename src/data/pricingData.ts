export interface PricingPlan {
  name: string;
  target: string;
  price: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
  badge: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Paket Starter",
    target: "Cocok untuk UMKM, Personal Branding, atau Single Page Promotion",
    price: "Rp 1.499.000",
    isPopular: false,
    features: [
      "1 Halaman Responsive Landing Page",
      "Gratis Domain (.com) & Hosting 1 Thn",
      "Desain Custom Elegan & Mobile First",
      "Tombol Chat WhatsApp Direct",
      "Integrasi Sosial Media",
      "Waktu Pengerjaan 3 - 5 Hari Kerja",
      "Garansi Maintanance 3 Bulan",
    ],
    ctaText: "Pilih Paket Starter",
    badge: "Hemat",
  },
  {
    name: "Paket Business Pro",
    target: "Solusi Terlengkap Perusahaan, Resto, Jasa & Organization",
    price: "Rp 2.999.000",
    isPopular: true,
    features: [
      "Hingga 7 Halaman Menu Bebas",
      "Gratis Domain Premium & Cloud Hosting",
      "Desain Premium Custom Exclusiv",
      "SEO On-Page Optimization Google #1",
      "Integrasi Google Map & Form Kontak",
      "Fitur CMS Artikel / Blog Berita",
      "Waktu Pengerjaan 5 - 7 Hari Kerja",
      "Garansi Technical Support 1 Tahun",
    ],
    ctaText: "Pilih Business Pro",
    badge: "🔥 PALING POPULER",
  },
  {
    name: "Paket Custom Enterprise",
    target: "Untuk Toko Online (E-Commerce), Portal Web App & System Custom",
    price: "Rp 5.999.000+",
    isPopular: false,
    features: [
      "Fitur Sesuai Permintaan (Custom Logic)",
      "Database Architecture Scalable",
      "Integrasi Payment Gateway & Cek Ongkir",
      "Dashboard Admin POS / CRM / Inventory",
      "Multi Bahasa (Bilingual / Multilingual)",
      "Keamanan Tingkat Tinggi SSL & DDoS Guard",
      "Maintenance & Backup Data Prioritas",
    ],
    ctaText: "Konsultasi Custom",
    badge: "Enterprise",
  },
];
