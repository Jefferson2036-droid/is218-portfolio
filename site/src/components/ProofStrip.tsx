"use client";

import React from "react";
import Link from "next/link";
import { proofStrip } from "@/content/proof-strip";
import { StatusTag } from "./StatusTag";
import { motion, useReducedMotion } from "framer-motion";

export const ProofStrip: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col gap-6">
      <div className="flex flex-wrap justify-between items-end gap-4">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-[-0.03em] text-[#0B1F3A]">
          {proofStrip.title}
        </h2>
        <p className="max-w-[440px] text-[14px] text-[#4A5A70] leading-relaxed m-0">
          {proofStrip.description}{" "}
          <a
            href={proofStrip.researchLinkUrl}
            className="text-accent hover:text-[#0B1F3A] underline underline-offset-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {proofStrip.researchLinkText}
          </a>
        </p>
      </div>

      <div className="overflow-x-auto border border-[#D5DEEC] bg-white">
        <table className="w-full min-w-[640px] border-collapse text-[16px] text-left">
          <thead>
            <tr className="bg-[#0B1F3A] text-white">
              <th className="py-3.5 px-5 font-semibold text-[15px]">Skill</th>
              <th className="py-3.5 px-5 font-semibold text-[15px]">Proof you can open</th>
              <th className="py-3.5 px-5 font-semibold text-[15px] w-[140px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {proofStrip.rows.map((row, index) => {
              const content = (
                <tr
                  key={row.skill}
                  className="border-t border-[#D5DEEC] hover:bg-[#EEF4FF]/50 transition-colors"
                >
                  <td className="py-4 px-5 font-semibold text-[#0B1F3A]">{row.skill}</td>
                  <td className="py-4 px-5 text-[#33435A]">
                    {row.proofLink ? (
                      row.proofLink.startsWith("http") ? (
                        <a
                          href={row.proofLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#33435A] hover:text-accent underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {row.proof}
                        </a>
                      ) : (
                        <Link
                          href={row.proofLink}
                          className="text-[#33435A] hover:text-accent underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {row.proof}
                        </Link>
                      )
                    ) : (
                      row.proof
                    )}
                  </td>
                  <td className="py-4 px-5">
                    <StatusTag text={row.status} variant={row.variant} />
                  </td>
                </tr>
              );

              if (prefersReducedMotion) {
                return content;
              }

              return (
                <motion.tr
                  key={row.skill}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-t border-[#D5DEEC] hover:bg-[#EEF4FF]/50 transition-colors"
                >
                  <td className="py-4 px-5 font-semibold text-[#0B1F3A]">{row.skill}</td>
                  <td className="py-4 px-5 text-[#33435A]">
                    {row.proofLink ? (
                      row.proofLink.startsWith("http") ? (
                        <a
                          href={row.proofLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#33435A] hover:text-accent underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {row.proof}
                        </a>
                      ) : (
                        <Link
                          href={row.proofLink}
                          className="text-[#33435A] hover:text-accent underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {row.proof}
                        </Link>
                      )
                    ) : (
                      row.proof
                    )}
                  </td>
                  <td className="py-4 px-5">
                    <StatusTag text={row.status} variant={row.variant} />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
