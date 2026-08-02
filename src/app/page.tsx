import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyUs from "@/components/sections/WhyUs";
import Pricing from "@/components/sections/Pricing";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <Pricing />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
