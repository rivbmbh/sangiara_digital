import ScrollReveal from "@/components/ScrollReveal";
import { MessageSquare } from "lucide-react";
import React from "react";

const DirectWhatsApp = () => {
  const whatsappMessage = encodeURIComponent(
    `Halo SANGIARA DIGITAL, saya berminat konsultasi pembuatan website Bisakah kita berdiskusi?`,
  );
  return (
    <ScrollReveal delayMs={400}>
      <div className="w-full inline-flex justify-center">
        <a
          href={`https://wa.me/6282194417430?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-max inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 "
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat WhatsApp Langsung (Fast Response)</span>
        </a>
      </div>
    </ScrollReveal>
  );
};

export default DirectWhatsApp;
