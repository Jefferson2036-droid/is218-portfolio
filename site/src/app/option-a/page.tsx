import React from "react";
import { LayoutSwitcher } from "@/components/LayoutSwitcher";
import { FeaturedStoryHeroA } from "@/components/FeaturedStoryHeroA";
import { MoreWorkSection } from "@/components/MoreWorkSection";
import { ProofStrip } from "@/components/ProofStrip";
import { ResponsibilitySection } from "@/components/ResponsibilitySection";

export const metadata = {
  title: "Jefferson Rodas – Home (Featured Story)",
  description: "Featured story layout for portfolio of Jefferson Rodas",
};

export default function HomeA() {
  return (
    <div className="flex flex-col">
      <LayoutSwitcher />
      <FeaturedStoryHeroA />
      <MoreWorkSection />
      <ProofStrip />
      <ResponsibilitySection />
    </div>
  );
}
