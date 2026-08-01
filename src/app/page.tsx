import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import TestimonialsFAQ from "@/components/TestimonialsFAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
        {/* <TestimonialsFAQ /> */}
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
