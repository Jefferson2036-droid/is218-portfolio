"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import { arenaClimbCaseStudy } from "@/content/case-studies";
import { motion, useReducedMotion } from "framer-motion";

export const FeaturedStoryHeroA: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const easeOutBezier = [0.22, 1, 0.36, 1];

  const codeLink = arenaClimbCaseStudy.links.find((l) => l.label === "Code")?.href || "https://github.com/Jefferson2036-droid/is218-individual-game";

  return (
    <div className="flex flex-col">
      {/* Intro section */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-10 flex flex-col gap-5 w-full">
        <p className="m-0 font-mono text-[13px] tracking-[0.08em] text-[#4A5A70] uppercase">
          {profile.tagline}
        </p>
        <h1 className="m-0 max-w-[980px] text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.04] font-extrabold tracking-[-0.035em] text-[#0B1F3A]">
          {profile.headline}
        </h1>
        <p className="m-0 text-[18px] text-[#33435A]">
          {profile.homeASubtitle}
        </p>
      </section>

      {/* Featured Case Study Hero */}
      <section id="work" className="max-w-[1200px] mx-auto px-6 pb-16 w-full">
        <article className="grid grid-cols-1 lg:grid-cols-2 border border-[#D5DEEC] shadow-sm bg-white">
          {/* Blue left pane */}
          <div className="bg-accent text-white p-8 sm:p-10 flex flex-col justify-between gap-8 min-h-[380px]">
            <div>
              <p className="m-0 font-mono text-[13px] tracking-[0.08em] text-white/90 uppercase">
                FEATURED CASE STUDY · CUSTOMER-FACING BUILD
              </p>
              <h2 className="mt-3 text-[44px] sm:text-[56px] font-extrabold tracking-[-0.035em] text-white leading-none">
                {arenaClimbCaseStudy.title}
              </h2>
              <p className="mt-3 text-[19px] leading-relaxed text-white/95">
                {arenaClimbCaseStudy.summary}
              </p>
            </div>

            <div className="flex items-end justify-center sm:justify-start gap-3 sm:gap-5 bg-[#0848C0] px-4 sm:px-6 pt-4 sm:pt-5 pb-0 rounded-t overflow-hidden">
              <Image
                src="/img/knight-px.png"
                alt="Knight sprite"
                width={120}
                height={120}
                className="h-[80px] sm:h-[120px] w-auto pixelated object-contain"
                unoptimized
              />
              <Image
                src="/img/archer-px.png"
                alt="Archer sprite"
                width={120}
                height={120}
                className="h-[80px] sm:h-[120px] w-auto pixelated object-contain"
                unoptimized
              />
              <Image
                src="/img/wizard-px.png"
                alt="Wizard sprite"
                width={120}
                height={120}
                className="h-[80px] sm:h-[120px] w-auto pixelated object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* White right pane */}
          <div className="p-8 sm:p-10 flex flex-col gap-5 bg-white">
            <div className="border-t border-[#D5DEEC] pt-3.5">
              <div className="font-mono text-[12px] font-semibold text-accent uppercase">
                PROBLEM
              </div>
              <div className="text-[17px] mt-1.5 text-[#22324A] leading-relaxed">
                Rock paper scissors gives players no reason to play a second match.
              </div>
            </div>

            <div className="border-t border-[#D5DEEC] pt-3.5">
              <div className="font-mono text-[12px] font-semibold text-accent uppercase">
                WHAT I BUILT
              </div>
              <div className="text-[17px] mt-1.5 text-[#22324A] leading-relaxed">
                A rank climb on Flask with sign-in, server-decided rounds and saved results.
              </div>
            </div>

            <div className="border-t border-[#D5DEEC] pt-3.5">
              <div className="font-mono text-[12px] font-semibold text-accent uppercase">
                HOW I CHECKED IT
              </div>
              <div className="text-[17px] mt-1.5 text-[#22324A] leading-relaxed">
                Unit, integration and browser tests; an A/B playtest with classmates (planned).
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto pt-4">
              <Link
                href="/work/arena-climb/"
                className="px-6 py-4 bg-accent hover:bg-accent-hover text-white font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                Read the case study
              </Link>
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 border-2 border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Code
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
