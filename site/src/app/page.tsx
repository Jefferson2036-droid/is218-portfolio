import React from "react";
import { LayoutSwitcher } from "@/components/LayoutSwitcher";
import { AnimatedHeroB } from "@/components/AnimatedHeroB";
import { TwoAreasSection } from "@/components/TwoAreasSection";
import { ProofStrip } from "@/components/ProofStrip";
import { ResponsibilitySection } from "@/components/ResponsibilitySection";
import fs from "fs";
import path from "path";

export default function HomeB() {
  const resumeFilePath = path.join(process.cwd(), "public", "resume.pdf");
  const hasResumePdf = fs.existsSync(resumeFilePath);

  return (
    <div className="flex flex-col">
      <LayoutSwitcher />
      <AnimatedHeroB hasResumePdf={hasResumePdf} />
      <TwoAreasSection />
      <ProofStrip />
      <ResponsibilitySection />
    </div>
  );
}
