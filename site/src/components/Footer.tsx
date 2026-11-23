"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/content/profile";

interface FooterProps {
  hasResumePdf?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ hasResumePdf = false }) => {
  const resumeLabel = hasResumePdf ? "Résumé (PDF)" : profile.resumePlaceholder;

  return (
    <footer
      id="contact"
      className="max-w-[1200px] mx-auto px-6 pt-16 pb-12 flex flex-col gap-6"
    >
      <h2 className="text-[40px] font-extrabold tracking-[-0.03em] text-[#0B1F3A]">
        Let&apos;s talk.
      </h2>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="px-6 py-4 bg-accent hover:bg-accent-hover text-white font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          {profile.email}
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 border-2 border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          LinkedIn
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 border-2 border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          GitHub
        </a>
        <Link
          href={profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 border-2 border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {resumeLabel}
        </Link>
      </div>
      <div className="mt-6 pt-5 border-t border-[#D5DEEC] flex flex-wrap items-center justify-between gap-4 text-[14px] text-[#4A5A70]">
        <p className="m-0">{profile.footerNote}</p>
        <p className="m-0 flex items-center gap-2">
          <span>← Back to</span>
          <a
            href={profile.researchSiteUrl}
            className="text-accent hover:text-[#0B1F3A] font-medium underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Career Research Site
          </a>
        </p>
      </div>
    </footer>
  );
};
