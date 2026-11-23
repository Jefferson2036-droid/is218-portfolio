"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/content/profile";

export const AboutView: React.FC = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      <Link
        href="/"
        className="font-semibold text-[15px] text-accent hover:text-[#0B1F3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        ← All work
      </Link>

      <p className="mt-7 font-mono text-[13px] tracking-[0.08em] text-[#4A5A70] uppercase m-0">
        {profile.about.eyebrow}
      </p>

      <h1 className="mt-3 max-w-[900px] text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] font-extrabold tracking-[-0.035em] text-[#0B1F3A]">
        {profile.about.title}
      </h1>

      <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#33435A]">
        {profile.about.intro}
      </p>

      {/* Experience */}
      <section className="mt-14">
        <h2 className="mb-2 text-[32px] font-extrabold tracking-[-0.03em] text-[#0B1F3A]">
          Experience
        </h2>
        <div className="flex flex-col">
          {profile.about.experience.map((exp) => (
            <article
              key={exp.company}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 py-7 border-t border-[#D5DEEC]"
            >
              <div className="font-mono text-[13px] text-[#4A5A70]">
                {exp.period}
              </div>
              <div>
                <h3 className="m-0 text-[22px] font-extrabold text-[#0B1F3A]">
                  {exp.role}
                </h3>
                <div className="mt-1 text-[16px] text-[#33435A]">
                  {exp.company}
                </div>
                <ul className="mt-3 pl-5 text-[17px] leading-relaxed text-[#22324A] flex flex-col gap-2">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-12">
        <h2 className="mb-2 text-[32px] font-extrabold tracking-[-0.03em] text-[#0B1F3A]">
          Education
        </h2>
        <div className="flex flex-col">
          {profile.about.education.map((edu) => (
            <article
              key={edu.degree}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 py-7 border-t border-[#D5DEEC]"
            >
              <div className="font-mono text-[13px] text-[#4A5A70]">
                {edu.period}
              </div>
              <div>
                <h3 className="m-0 text-[22px] font-extrabold text-[#0B1F3A]">
                  {edu.degree}
                </h3>
                <div className="mt-1 text-[16px] text-[#33435A]">
                  {edu.institution}
                </div>
                {edu.details && (
                  <ul className="mt-3 pl-5 text-[17px] leading-relaxed text-[#22324A] flex flex-col gap-2">
                    {edu.details.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills / Tools / Languages Cards */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#EEF4FF] border border-[#D5DEEC] p-6 shadow-sm">
          <div className="font-mono text-[13px] text-[#4A5A70] uppercase font-semibold">
            TOOLS I USE
          </div>
          <p className="mt-2.5 text-[17px] leading-relaxed text-[#0B1F3A] m-0">
            {profile.about.tools}
          </p>
        </div>
        <div className="bg-[#EEF4FF] border border-[#D5DEEC] p-6 shadow-sm">
          <div className="font-mono text-[13px] text-[#4A5A70] uppercase font-semibold">
            LEARNING NEXT
          </div>
          <p className="mt-2.5 text-[17px] leading-relaxed text-[#0B1F3A] m-0">
            {profile.about.learningNext}
          </p>
        </div>
        <div className="bg-[#EEF4FF] border border-[#D5DEEC] p-6 shadow-sm">
          <div className="font-mono text-[13px] text-[#4A5A70] uppercase font-semibold">
            LANGUAGES
          </div>
          <p className="mt-2.5 text-[17px] leading-relaxed text-[#0B1F3A] m-0">
            {profile.about.languages}
          </p>
        </div>
      </section>
    </main>
  );
};
