"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

interface HeaderProps {
  hasResumePdf?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hasResumePdf = false }) => {
  const pathname = usePathname();

  const isWork =
    pathname === "/" ||
    pathname?.startsWith("/work") ||
    pathname?.startsWith("/option-a");
  const isAbout = pathname?.startsWith("/about");

  const resumeLabel = hasResumePdf ? "Résumé (PDF)" : profile.resumePlaceholder;

  return (
    <header className="border-b border-[#D5DEEC] bg-white sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto px-6 min-h-[72px] flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="text-[#0B1F3A] hover:text-accent font-extrabold text-[20px] tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`px-3.5 py-3 font-semibold text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isWork
                ? "text-accent border-b-[3px] border-accent"
                : "text-[#0B1F3A] hover:text-accent"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about/"
            className={`px-3.5 py-3 font-semibold text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isAbout
                ? "text-accent border-b-[3px] border-accent"
                : "text-[#0B1F3A] hover:text-accent"
            }`}
          >
            About
          </Link>
          <a
            href="#contact"
            className="px-3.5 py-3 font-semibold text-[15px] text-[#0B1F3A] hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Contact
          </a>
          <Link
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2.5 bg-accent hover:bg-accent-hover text-white font-semibold text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            {resumeLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
};
