export interface TestimonialItem {
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatarBg: string;
}

export interface FaqItemData {
  q: string;
  a: string;
}

export const testimonialsData: TestimonialItem[] = [
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

export const faqsData: FaqItemData[] = [
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
