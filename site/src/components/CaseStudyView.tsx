"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/content/case-studies";
import { BASE_PATH } from "@/content/config";
import { StatusTag } from "./StatusTag";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ caseStudy }) => {
  const prefersReducedMotion = useReducedMotion();
  const easeOutBezier = [0.22, 1, 0.36, 1];

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-12 pb-6">
      <Link
        href="/"
        className="font-semibold text-[15px] text-accent hover:text-[#0B1F3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        ← All work
      </Link>

      <p className="mt-7 font-mono text-[13px] tracking-[0.08em] text-[#4A5A70] uppercase m-0">
        {caseStudy.eyebrow}
      </p>

      <h1 className="mt-3 text-[44px] sm:text-[64px] lg:text-[88px] leading-none font-extrabold tracking-[-0.04em] text-[#0B1F3A]">
        {caseStudy.title}
      </h1>

      <p className="mt-4 max-w-[760px] text-[20px] sm:text-[21px] leading-relaxed text-[#33435A]">
        {caseStudy.summary}
      </p>

      {/* Metadata bar */}
      <dl className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D5DEEC] bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#D5DEEC]">
        <div className="p-4 sm:p-5">
          <dt className="font-mono text-[12px] text-[#4A5A70] uppercase">MY ROLE</dt>
          <dd className="mt-1.5 font-semibold text-[#0B1F3A] m-0 text-[15px]">
            {caseStudy.role}
          </dd>
        </div>
        <div className="p-4 sm:p-5">
          <dt className="font-mono text-[12px] text-[#4A5A70] uppercase">STACK</dt>
          <dd className="mt-1.5 font-semibold text-[#0B1F3A] m-0 text-[15px]">
            {caseStudy.stack}
          </dd>
        </div>
        <div className="p-4 sm:p-5">
          <dt className="font-mono text-[12px] text-[#4A5A70] uppercase">STATUS</dt>
          <dd className="mt-1.5 font-semibold text-[#0B1F3A] m-0 text-[15px]">
            {caseStudy.status}
          </dd>
        </div>
        <div className="p-4 sm:p-5">
          <dt className="font-mono text-[12px] text-[#4A5A70] uppercase">LINKS</dt>
          <dd className="mt-1.5 font-semibold text-[#0B1F3A] m-0 text-[15px] flex flex-wrap gap-3">
            {caseStudy.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-accent hover:text-[#0B1F3A] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            ))}
          </dd>
        </div>
      </dl>

      {/* Sprites display if present */}
      {caseStudy.sprites && (
        <div className="my-8">
          <div className="bg-accent p-6 sm:p-8 flex justify-center items-end gap-3 sm:gap-10 overflow-hidden">
            {caseStudy.sprites.images.map((img) => {
              const src =
                img.src.startsWith("http") || img.src.startsWith(BASE_PATH)
                  ? img.src
                  : `${BASE_PATH}${img.src.startsWith("/") ? "" : "/"}${img.src}`;
              return (
                <Image
                  key={img.src}
                  src={src}
                  alt={img.alt}
                  width={160}
                  height={160}
                  className="h-[80px] sm:h-[140px] md:h-[160px] w-auto pixelated object-contain"
                  unoptimized
                />
              );
            })}
          </div>
          <p className="mt-2 text-[14px] text-[#4A5A70]">{caseStudy.sprites.caption}</p>
        </div>
      )}

      {/* Field Notes Sections */}
      <div className="mt-10 flex flex-col">
        {caseStudy.sections.map((section) => {
          const sectionHeader = (
            <div>
              <div className="font-mono text-[13px] text-accent font-semibold">
                {section.number}
              </div>
              <h2 className="mt-1.5 text-[28px] sm:text-[30px] font-extrabold tracking-[-0.025em] text-[#0B1F3A]">
                {section.heading}
              </h2>
            </div>
          );

          const animatedHeader = prefersReducedMotion ? (
            sectionHeader
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: easeOutBezier }}
            >
              {sectionHeader}
            </motion.div>
          );

          return (
            <section
              key={section.number}
              className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 py-10 border-t border-[#D5DEEC]"
            >
              {animatedHeader}

              <div className="flex flex-col gap-4 text-[18px] leading-relaxed text-[#22324A]">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="m-0">
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="m-0 pl-5 flex flex-col gap-2.5">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}

                {/* Section 04 checks table */}
                {section.number === "04" && caseStudy.checks && (
                  <div className="mt-2 flex flex-col gap-3">
                    <div className="overflow-x-auto border border-[#D5DEEC] bg-white">
                      <table className="w-full min-w-[560px] border-collapse text-[16px] text-left">
                        <thead>
                          <tr className="bg-[#0B1F3A] text-white">
                            <th className="py-3 px-4 font-semibold">Check</th>
                            <th className="py-3 px-4 font-semibold w-[180px]">Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseStudy.checks.rows.map((row, rIdx) => {
                            const tr = (
                              <tr
                                key={row.check}
                                className="border-t border-[#D5DEEC] hover:bg-[#EEF4FF]/50 transition-colors"
                              >
                                <td className="py-3 px-4">{row.check}</td>
                                <td className="py-3 px-4">
                                  {!prefersReducedMotion ? (
                                    <motion.div
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      whileInView={{ scale: 1, opacity: 1 }}
                                      viewport={{ once: true }}
                                      transition={{
                                        duration: 0.35,
                                        delay: rIdx * 0.08,
                                      }}
                                    >
                                      <StatusTag
                                        text={row.result}
                                        variant={row.variant}
                                      />
                                    </motion.div>
                                  ) : (
                                    <StatusTag
                                      text={row.result}
                                      variant={row.variant}
                                    />
                                  )}
                                </td>
                              </tr>
                            );

                            if (prefersReducedMotion) return tr;

                            return (
                              <motion.tr
                                key={row.check}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                  duration: 0.4,
                                  delay: rIdx * 0.06,
                                  ease: easeOutBezier,
                                }}
                                className="border-t border-[#D5DEEC] hover:bg-[#EEF4FF]/50 transition-colors"
                              >
                                <td className="py-3 px-4">{row.check}</td>
                                <td className="py-3 px-4">
                                  <StatusTag
                                    text={row.result}
                                    variant={row.variant}
                                  />
                                </td>
                              </motion.tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <p className="m-0 text-[15px] text-[#4A5A70]">
                      {caseStudy.checks.footnote}
                    </p>
                  </div>
                )}

                {/* Section 05 What's next */}
                {section.number === "05" && (
                  <div className="flex flex-col gap-4">
                    <p className="m-0">{caseStudy.whatsNext.content}</p>
                    {caseStudy.whatsNext.aiNote && (
                      <div className="bg-[#EEF4FF] border border-[#D5DEEC] p-5 text-[16px] text-[#0B1F3A] leading-relaxed">
                        {caseStudy.whatsNext.aiNote}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};
