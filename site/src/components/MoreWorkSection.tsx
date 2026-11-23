"use client";

import React from "react";
import Link from "next/link";
import { allProjects } from "@/content/projects";
import { StatusTag } from "./StatusTag";
import { motion, useReducedMotion } from "framer-motion";

export const MoreWorkSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Exclude arena-climb because it's featured above in Option A
  const secondaryProjects = allProjects.filter((p) => p.id !== "arena-climb" && p.id !== "banking-dashboard");

  return (
    <section className="bg-[#EEF4FF] border-t border-b border-[#D5DEEC]">
      <div className="max-w-[1200px] mx-auto px-6 py-14 flex flex-col gap-6">
        <h2 className="text-[32px] font-extrabold tracking-[-0.03em] text-[#0B1F3A] m-0">
          More work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryProjects.map((project, idx) => {
            const cardContent = (
              <div className="h-full bg-white border border-[#D5DEEC] border-t-4 border-t-accent p-5 flex flex-col gap-2.5 shadow-sm hover:shadow-md transition-shadow">
                <StatusTag
                  text={project.statusText}
                  variant={project.tagVariant}
                  className="self-start"
                />
                <strong className="text-[19px] font-bold text-[#0B1F3A] leading-snug group-hover:text-accent transition-colors">
                  {project.shortTitle || project.title}
                </strong>
                <span className="text-[15px] text-[#33435A] leading-normal">
                  {project.description}
                </span>
                <span className="mt-auto pt-2 font-mono text-[12px] text-[#4A5A70] tracking-wide uppercase">
                  {project.category}
                </span>
              </div>
            );

            if (project.href) {
              const isExternal = project.href.startsWith("http");
              const linkElem = isExternal ? (
                <a
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={project.id}
                  href={project.href}
                  className="group block no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {cardContent}
                </Link>
              );

              if (prefersReducedMotion) return linkElem;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {linkElem}
                </motion.div>
              );
            }

            if (prefersReducedMotion) {
              return <div key={project.id}>{cardContent}</div>;
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
