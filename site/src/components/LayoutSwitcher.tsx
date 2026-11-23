"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LayoutSwitcher: React.FC = () => {
  const pathname = usePathname();
  const isOptionA = pathname?.includes("/option-a");

  return (
    <aside
      aria-label="Reviewer layout switcher"
      className="bg-[#0B1F3A] text-white border-b border-[#D5DEEC]/20 text-xs py-2 px-4"
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-[#9DBBFF] tracking-wider uppercase text-[11px]">
          Reviewer layout switcher
        </span>
        <div className="flex items-center gap-1">
          <span className="text-white/70 mr-1">Layout:</span>
          <Link
            href="/"
            className={`px-2.5 py-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              !isOptionA
                ? "bg-accent text-white font-semibold"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            Two areas
          </Link>
          <span className="text-white/40">|</span>
          <Link
            href="/option-a/"
            className={`px-2.5 py-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isOptionA
                ? "bg-accent text-white font-semibold"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            Featured story
          </Link>
        </div>
      </div>
    </aside>
  );
};
