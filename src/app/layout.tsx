import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "SANGIARA DIGITAL - Jasa Pembuatan Website Professional & SEO Friendly",
  description:
    "Jasa pembuatan website profesional, toko online, dan web app custom dengan desain eksklusif, super cepat (<2d), responsive, dan teroptimasi SEO Google Page 1. Konsultasi gratis sekarang!",
  keywords: [
    "Sangiara Digital",
    "Jasa Pembuatan Website",
    "Jasa Web Indonesia",
    "Jasa web",
    "Joki tugas coding",
    "Jasa web murah",
    "Jasa joki tugas coding murah",
    "Joki web skripsi",
    "Joki coding",
    "Jasa pembuatan web",
    "Buat Website Company Profile",
    "Toko Online E-Commerce",
    "Web App Custom",
    "Redesign Website",
    "SEO Optimization",
    "Web Developer Jakarta",
  ],
  authors: [{ name: "SANGIARA DIGITAL", url: "https://sangiara.digital" }],
  creator: "SANGIARA DIGITAL",
  publisher: "SANGIARA DIGITAL",
  metadataBase: new URL("https://sangiara.digital"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "SANGIARA DIGITAL - Jasa Pembuatan Website Professional & High-Converting",
    description:
      "Solusi pembuatan website impian bisnis Anda dengan desain eksklusif beraksen fiery modern, loading super cepat, dan garansi full 1 tahun.",
    url: "https://sangiara.digital",
    siteName: "SANGIARA DIGITAL",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANGIARA DIGITAL - Jasa Pembuatan Website Professional",
    description:
      "Website impian bisnis Anda dengan desain eksklusif beraksen api modern, super cepat, dan SEO ready.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SANGIARA DIGITAL",
  image: "https://sangiara.digital/og-image.jpg",
  description:
    "Jasa pembuatan website profesional, company profile, toko online e-commerce, dan web application custom berkecepatan tinggi dan teroptimasi SEO.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  priceRange: "Rp 1.499.000 - Rp 5.999.000+",
  telephone: "+6281234567890",
  url: "https://sangiara.digital",
  sameAs: ["https://instagram.com", "https://linkedin.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-roboto-flex min-h-screen bg-white text-slate-900 antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
