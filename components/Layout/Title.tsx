import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function Title({ 
  children, 
  subtitle,
  align = "left",
  className = ""
}: TitleProps) {
  return (
    <div className={`space-y-2 mb-5 ${align === "center" ? "text-center" : ""} ${className}`}>
      <h1 className="text-3xl font-extrabold relative flex group cursor-pointer items-center">
        {/* Decorative element */}
        <span className="absolute -left-6 text-[#0e705e] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          #
        </span>

        {/* Main title */}
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0e705e] group-hover:w-full transition-all duration-300" />
        </span>
      </h1>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="text-sm text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
