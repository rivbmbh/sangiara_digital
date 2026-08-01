import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "whatsapp" | "outline";
  href?: string;
  icon?: LucideIcon;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  icon: Icon = ArrowRight,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-300 transform active:scale-95 focus:outline-none";

  const variantStyles = {
    primary: "gradient-fire-bg text-white shadow-fire-sm hover:shadow-fire-lg hover:-translate-y-0.5",
    secondary: "bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 backdrop-blur-md",
    dark: "bg-slate-900 hover:bg-slate-800 text-white",
    whatsapp: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:-translate-y-0.5",
    outline: "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
}
