export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  tags: string[];
  speedScore: string;
  imageSrc: string;
  filename: string;
}

export const portfolioCategories = [
  { id: "all", label: "Semua Proyek" },
  { id: "corporate", label: "Company Profile" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "webapp", label: "Web App / SaaS" },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Logistik Nusantara Enterprise",
    category: "corporate",
    type: "Company Profile & Portal",
    description: "Platform web perusahaan ekspedisi & logistik internasional dengan fitur lacak resi real-time.",
    tags: ["Next.js", "TailwindCSS", "REST API"],
    speedScore: "99/100",
    imageSrc: "/hero-img/hero-img (1).png",
    filename: "logistik-nusantara.id",
  },
  {
    id: 2,
    title: "FlameStore Fashion Hub",
    category: "ecommerce",
    type: "Online Luxury Store",
    description: "Toko online apparel premium dengan payment gateway otomatis, keranjang Ajax, dan filter produk instan.",
    tags: ["React", "Midtrans", "TailwindCSS"],
    speedScore: "98/100",
    imageSrc: "/hero-img/hero-img (2).png",
    filename: "flamestore.id",
  },
  {
    id: 3,
    title: "NusaHealth Clinic Management",
    category: "webapp",
    type: "Medical SaaS Portal",
    description: "Aplikasi rekam medis digital & pendaftaran janji temu dokter online berbasis cloud.",
    tags: ["Next.js", "TypeScript", "Node.js"],
    speedScore: "100/100",
    imageSrc: "/hero-img/hero-img (3).png",
    filename: "nusahealth.id",
  },
  {
    id: 4,
    title: "ArthaProperty Indonesia",
    category: "corporate",
    type: "Real Estate Marketplace",
    description: "Website pencarian properti rumah & apartemen dengan virtual tour 360 & simulasi KPR.",
    tags: ["Next.js", "TailwindCSS", "Mapbox"],
    speedScore: "97/100",
    imageSrc: "/hero-img/hero-img (4).png",
    filename: "arthaproperty.co.id",
  },
  {
    id: 5,
    title: "KopiSangiara Coffee Chain",
    category: "ecommerce",
    type: "Direct-to-Consumer Web",
    description: "Landing page jualan biji kopi lokal premium dengan fitur langganan otomatis tiap bulan.",
    tags: ["React", "TailwindCSS", "Subscript"],
    speedScore: "99/100",
    imageSrc: "/hero-img/hero-img (5).png",
    filename: "kopisangiara.com",
  },
  {
    id: 6,
    title: "OmniFlow Dashboard CRM",
    category: "webapp",
    type: "B2B Analytics Platform",
    description: "Dashboard pemantauan omset penjualan & otomatisasi pesan WhatsApp blast untuk tim sales.",
    tags: ["Next.js", "ChartJS", "WebSockets"],
    speedScore: "98/100",
    imageSrc: "/hero-img/hero-img (6).png",
    filename: "omniflow.app",
  },
];
