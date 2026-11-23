import React from "react";
import { CaseStudyView } from "@/components/CaseStudyView";
import { arenaClimbCaseStudy } from "@/content/case-studies";

export const metadata = {
  title: "Arena Climb – Case Study | Jefferson Rodas",
  description:
    "A Knight / Archer / Wizard game where you climb ranks against a computer that reads your habits.",
};

export default function ArenaClimbPage() {
  return <CaseStudyView caseStudy={arenaClimbCaseStudy} />;
}
