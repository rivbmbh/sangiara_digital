export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  price: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
  badge: string;
}

export const WA_PHONE_NUMBER = "6282194417430";

export const getPricingWaLink = (planName: string, price: string): string => {
  const message = `Halo SANGIARA DIGITAL, saya berminat untuk mengambil *${planName}* (${price}). Mohon informasi selengkapnya mengenai langkah selanjutnya. Terima kasih!`;
  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "bansos",
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
    id: "mendang-mending",
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
    id: "sultan",
    name: "Paket Sultan",
    target:
      "Cocok buat yang mampu-mampu aja, pastinya serba lengkap dan eksklusif",
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
