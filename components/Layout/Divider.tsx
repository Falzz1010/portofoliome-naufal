import React from "react";

interface DividerProps {
  variant?: "default" | "dots" | "gradient";
  className?: string;
}

export default function Divider({ variant = "default", className = "" }: DividerProps) {
  if (variant === "dots") {
    return (
      <div className={`flex justify-center items-center my-20 ${className}`}>
        <div className="space-x-2 flex">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-zinc-600"
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div 
        className={`h-[1px] my-20 bg-gradient-to-r from-transparent via-zinc-600 to-transparent ${className}`}
      />
    );
  }

  // Default variant
  return (
    <div 
      className={`h-[1px] my-20 bg-gradient-to-r from-10% to-90% from-background via-zinc-600 to-background ${className}`}
    />
  );
}
