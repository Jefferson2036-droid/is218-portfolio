"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/content/profile";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedHeroBProps {
  hasResumePdf?: boolean;
}

export const AnimatedHeroB: React.FC<AnimatedHeroBProps> = ({
  hasResumePdf = false,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const resumeLabel = hasResumePdf ? "Résumé (PDF)" : profile.resumePlaceholder;

  // Staggered rise and fade in lines for headline
  const headlineWords = [
    "I build data and AI tools",
    "alongside the people who use them.",
  ];

  if (prefersReducedMotion) {
    return (
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-end">
        <div className="flex flex-col gap-6">
          <p className="m-0 font-mono text-[13px] tracking-[0.08em] text-[#4A5A70] uppercase">
            {profile.tagline}
          </p>
          <h1 className="m-0 text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] font-extrabold tracking-[-0.035em] text-[#0B1F3A]">
            {profile.headline}
          </h1>
          <p className="m-0 max-w-[620px] text-[19px] leading-[1.55] text-[#33435A]">
            {profile.subheadline}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#work"
              className="px-6 py-4 bg-accent hover:bg-accent-hover text-white font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              See my work
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
        </div>

        <aside
          aria-label="Right now"
          className="bg-accent text-white p-8 flex flex-col gap-4 shadow-sm"
        >
          <p className="m-0 font-mono text-[13px] tracking-[0.08em] uppercase text-white/90">
            RIGHT NOW
          </p>
          {profile.rightNow.map((item) => (
            <div key={item.title} className="border-t border-white/45 pt-4">
              <div className="font-extrabold text-[20px] leading-tight">
                {item.title}
              </div>
              <div className="text-[15px] mt-1 text-white/90">
                {item.description}
              </div>
            </div>
          ))}
        </aside>
      </section>
    );
  }

  const easeOutBezier = [0.22, 1, 0.36, 1];

  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-end">
      <div className="flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutBezier }}
          className="m-0 font-mono text-[13px] tracking-[0.08em] text-[#4A5A70] uppercase"
        >
          {profile.tagline}
        </motion.p>

        <h1 className="m-0 text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] font-extrabold tracking-[-0.035em] text-[#0B1F3A]">
          {headlineWords.map((line, idx) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.08 * (idx + 1),
                ease: easeOutBezier,
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: easeOutBezier }}
          className="m-0 max-w-[620px] text-[19px] leading-[1.55] text-[#33435A]"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: easeOutBezier }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <a
            href="#work"
            className="px-6 py-4 bg-accent hover:bg-accent-hover text-white font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 hover:-translate-y-0.5"
          >
            See my work
          </a>
          <Link
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 border-2 border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 hover:-translate-y-0.5"
          >
            {resumeLabel}
          </Link>
        </motion.div>
      </div>

      <motion.aside
        aria-label="Right now"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: easeOutBezier }}
        className="bg-accent text-white p-8 flex flex-col gap-4 shadow-sm"
      >
        <p className="m-0 font-mono text-[13px] tracking-[0.08em] uppercase text-white/90">
          RIGHT NOW
        </p>
        {profile.rightNow.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.45 + idx * 0.08,
              ease: easeOutBezier,
            }}
            className="border-t border-white/45 pt-4"
          >
            <div className="font-extrabold text-[20px] leading-tight">
              {item.title}
            </div>
            <div className="text-[15px] mt-1 text-white/90">
              {item.description}
            </div>
          </motion.div>
        ))}
      </motion.aside>
    </section>
  );
};
