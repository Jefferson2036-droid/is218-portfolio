"use client";

import React from "react";
import { profile } from "@/content/profile";
import { motion, useReducedMotion } from "framer-motion";

export const ResponsibilitySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section className="bg-[#0B1F3A] text-white">
      <motion.div
        {...containerAnimation}
        className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
      >
        <div>
          <p className="font-mono text-[13px] tracking-[0.08em] text-[#9DBBFF] uppercase m-0">
            {profile.tdResponsibility.eyebrow}
          </p>
          <h2 className="mt-3 text-[32px] sm:text-[40px] leading-[1.1] font-extrabold tracking-[-0.03em] m-0">
            {profile.tdResponsibility.title}
          </h2>
        </div>
        <ul className="m-0 p-0 list-none flex flex-col gap-4 text-[17px] leading-relaxed">
          {profile.tdResponsibility.points.map((point) => (
            <li
              key={point}
              className="border-t border-white/30 pt-3.5 text-white/90"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
