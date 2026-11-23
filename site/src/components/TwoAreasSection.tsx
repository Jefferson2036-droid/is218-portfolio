"use client";

import React from "react";
import Link from "next/link";
import { workAreas } from "@/content/projects";
import { StatusTag } from "./StatusTag";
import { motion, useReducedMotion } from "framer-motion";

export const TwoAreasSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="bg-[#EEF4FF] border-t border-b border-[#D5DEEC] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-[-0.03em] text-[#0B1F3A] m-0">
            Two areas of work
          </h2>
          {/* Blue rule line drawing from left to right */}
          {!prefersReducedMotion ? (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="h-[3px] bg-accent w-24"
            />
          ) : (
            <div className="h-[3px] bg-accent w-24" />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {workAreas.map((area, areaIdx) => {
            const articleContent = (
              <article
                key={area.id}
                className="bg-white border border-[#D5DEEC] flex flex-col shadow-sm"
              >
                <div className="p-6 sm:p-7 border-b-4 border-accent">
                  <div className="font-mono text-[13px] text-accent font-semibold">
                    {area.number}
                  </div>
                  <h3 className="mt-1.5 text-[24px] sm:text-[26px] font-extrabold tracking-[-0.02em] text-[#0B1F3A]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-[16px] text-[#33435A] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="flex flex-col flex-1 divide-y divide-[#D5DEEC]">
                  {area.projects.map((project) => {
                    const inner = (
                      <>
                        <div className="flex justify-between items-start gap-3 flex-wrap">
                          <strong className="text-[18px] font-bold text-[#0B1F3A] group-hover:text-accent transition-colors flex items-center gap-1.5">
                            {project.title}
                            {project.href && (
                              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                                →
                              </span>
                            )}
                          </strong>
                          <StatusTag
                            text={project.statusText}
                            variant={project.tagVariant}
                          />
                        </div>
                        <div className="text-[15px] text-[#33435A] mt-1.5 leading-normal">
                          {project.description}
                        </div>
                      </>
                    );

                    if (project.href) {
                      const isExternal = project.href.startsWith("http");
                      if (isExternal) {
                        return (
                          <a
                            key={project.id}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-5 sm:px-7 text-[#0B1F3A] no-underline hover:bg-[#EEF4FF]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {inner}
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={project.id}
                          href={project.href}
                          className="group block p-5 sm:px-7 text-[#0B1F3A] no-underline hover:bg-[#EEF4FF]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {inner}
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={project.id}
                        className="p-5 sm:px-7 text-[#0B1F3A]"
                      >
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </article>
            );

            if (prefersReducedMotion) {
              return articleContent;
            }

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: areaIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {articleContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
