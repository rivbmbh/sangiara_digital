import React from "react";
import { Sparkles } from "lucide-react";

interface BrowserCardProps {
  imageSrc: string;
  filename?: string;
  alt?: string;
  isMainFeatured?: boolean;
  className?: string;
}

export default function BrowserCard({
  imageSrc,
  filename = "sangiara.digital",
  alt = "Web Showcase",
  isMainFeatured = false,
  className = "",
}: BrowserCardProps) {
  return (
    <div
      className={`bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group ${
        isMainFeatured
          ? "border-2 border-red-500/50 shadow-red-950/80"
          : "border border-slate-700/90"
      } ${className}`}
    >
      {/* Top Browser Bar */}
      <div className="bg-slate-950 px-3 sm:px-4 py-2 flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="px-2.5 py-0.5 bg-slate-900 rounded-md text-[10px] sm:text-[11px] font-mono text-slate-300 flex items-center gap-1.5 border border-slate-800 truncate max-w-[180px]">
          {isMainFeatured && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          )}
          {filename}
        </div>
        {isMainFeatured ? (
          <Sparkles className="w-4 h-4 text-amber-400" />
        ) : (
          <div className="w-4" />
        )}
      </div>

      {/* Real Image Content */}
      <div className="relative overflow-hidden bg-slate-950">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
