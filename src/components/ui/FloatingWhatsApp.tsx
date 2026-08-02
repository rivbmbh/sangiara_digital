"use client";

import React from "react";
import { getDefaultWaLink } from "@/data/contactData";
import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getDefaultWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Direct"
      className="fixed bottom-25 right-6 z-50 group flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <div className="relative flex items-center justify-center">
        {/* <MessageSquare className="w-6 h-6 fill-white/10" /> */}
        <Image
          src={"/icon-wa.svg"}
          alt="WhatsApp Icon"
          className="w-10 h-10"
          width={24}
          height={24}
        />

        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
      </div>

      {/* Floating Tooltip */}
      <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none opacity-0 group-hover:opacity-100">
        Gabisa denger, chat aja
      </span>
    </a>
  );
}
