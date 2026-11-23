"use client";

import React from "react";
import { TagVariant } from "@/content/projects";

interface StatusTagProps {
  text: string;
  variant?: TagVariant;
  className?: string;
}

export const StatusTag: React.FC<StatusTagProps> = ({
  text,
  variant = "progress",
  className = "",
}) => {
  const getColors = () => {
    switch (variant) {
      case "done":
        return "bg-[#E7F6EC] text-[#0E5E2D]";
      case "experience":
        return "bg-[#EEF4FF] text-[#0A3FA8]";
      case "progress":
      default:
        return "bg-[#FFF1E0] text-[#8A4B00]";
    }
  };

  return (
    <span
      className={`inline-block font-mono text-[12px] font-medium tracking-wide uppercase px-2 py-1 leading-none ${getColors()} ${className}`}
    >
      {text}
    </span>
  );
};
