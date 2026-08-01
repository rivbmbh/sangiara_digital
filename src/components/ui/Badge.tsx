import React from "react";
import { Flame, LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "fiery" | "neutral" | "dark" | "outline";
  className?: string;
}

export default function Badge({
  children,
  icon: Icon = Flame,
  variant = "fiery",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    fiery: "bg-red-950/80 border border-red-500/40 text-red-400 shadow-fire-sm backdrop-blur-md",
    neutral: "bg-red-100/80 text-red-700 border border-red-200/80",
    dark: "bg-slate-900 border border-slate-800 text-slate-300",
    outline: "bg-red-50 text-red-600 border border-red-100",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />}
      <span>{children}</span>
    </div>
  );
}
