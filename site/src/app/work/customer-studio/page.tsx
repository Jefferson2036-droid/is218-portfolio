import React from "react";
import { CaseStudyView } from "@/components/CaseStudyView";
import { customerStudioCaseStudy } from "@/content/case-studies";

export const metadata = {
  title: "Customer Studio (team) – Case Study | Jefferson Rodas",
  description:
    "A workflow agreed with a customer; in progress.",
};

export default function CustomerStudioPage() {
  return <CaseStudyView caseStudy={customerStudioCaseStudy} />;
}
