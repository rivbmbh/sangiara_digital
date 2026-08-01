import React from "react";
import ScrollReveal from "../common/ScrollReveal";
import Badge from "./Badge";
import { LucideIcon, Flame } from "lucide-react";

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: LucideIcon;
  badgeVariant?: "fiery" | "neutral" | "dark" | "outline";
  title: string;
  highlightText?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  badgeText,
  badgeIcon = Flame,
  badgeVariant = "neutral",
  title,
  highlightText,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 ${className}`}>
      <ScrollReveal>
        <Badge icon={badgeIcon} variant={badgeVariant}>
          {badgeText}
        </Badge>
      </ScrollReveal>

      <ScrollReveal delayMs={100}>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {title}{" "}
          {highlightText && (
            <span className="gradient-fire-text">{highlightText}</span>
          )}
        </h2>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal delayMs={200}>
          <p className="text-slate-600 text-base sm:text-lg">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
