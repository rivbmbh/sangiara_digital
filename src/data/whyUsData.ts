import { Zap, Palette, Search, Smartphone, ShieldCheck, HeartHandshake } from "lucide-react";

export interface WhyUsFeature {
  icon: typeof Zap;
  title: string;
  description: string;
}

export const whyUsFeatures: WhyUsFeature[] = [
  {
    icon: Zap,
    title: "Loading Super Cepat (<2 Detik)",
    description: "Website dioptimalkan menggunakan teknologi Next.js & Tailwind CSS modern untuk kecepatan maksimal dan skor Google PageSpeed di atas 95+.",
  },
  {
    icon: Palette,
    title: "Desain Custom & Eksklusif",
    description: "Bukan sekadar template pasaran. Kami merancang UI/UX yang mencerminkan karakter unik brand Anda dengan estetika tinggi.",
  },
  {
    icon: Search,
    title: "SEO-Ready Struktur Google",
    description: "Struktur HTML5 semantik, meta tags dinamis, sitemap XML, dan schema markup agar website cepat muncul di urutan atas hasil pencarian Google.",
  },
  {
    icon: Smartphone,
    title: "Responsi Sempurna di HP",
    description: "Website tampil presisi, nyaman dibaca, dan lancar digunakan pada semua perangkat smartphone, tablet, laptop, maupun desktop.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan SSL & Backup Otomatis",
    description: "Dilengkapi inskripsi SSL gratis, perlindungan firewall dari peretas, dan backup data otomatis berkala agar bisnis selalu aman.",
  },
  {
    icon: HeartHandshake,
    title: "Garansi & Support 1 Tahun Full",
    description: "Tim teknis SANGIARA DIGITAL siap membantu kendala teknis dan pembaruan konten kapan pun Anda membutuhkan.",
  },
];

export const whyUsStats = [
  { value: "150+", label: "Website Selesai Tepat Waktu" },
  { value: "99.4%", label: "Kepuasan Klien Partner" },
  { value: "< 2 Detik", label: "Rata-Rata Loading Speed" },
  { value: "24/7", label: "Layanan Support Teknis" },
];
