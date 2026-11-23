import { TagVariant } from "./projects";

export interface ProofRow {
  skill: string;
  proof: string;
  proofLink?: string;
  status: string;
  variant: TagVariant;
}

export interface ProofStripData {
  title: string;
  description: string;
  researchLinkText: string;
  researchLinkUrl: string;
  rows: ProofRow[];
}

export const proofStrip: ProofStripData = {
  title: "What these roles ask for → my proof",
  description:
    "Skills shared by three postings I researched in Nov 2026 (Palantir, OpenAI, JPMorganChase). Research, not applications.",
  researchLinkText: "Career research site",
  researchLinkUrl: "/is218-portfolio/",
  rows: [
    {
      skill: "Python",
      proof: "Arena Climb game rules, opponent strategies and tests (GitHub)",
      proofLink: "https://github.com/Jefferson2036-droid/is218-individual-game",
      status: "SHOWN",
      variant: "done",
    },
    {
      skill: "Working with the people who use it",
      proof: "TD Bank customer consultations; Customer Studio (in progress)",
      proofLink: "/about/",
      status: "SHOWN",
      variant: "done",
    },
    {
      skill: "Owning a problem end to end",
      proof: "Arena Climb: research → plan → build → checks, in a public project record",
      proofLink: "https://github.com/Jefferson2036-droid/is218-individual-game/blob/main/docs/project-record.md",
      status: "SHOWN",
      variant: "done",
    },
    {
      skill: "Handling data responsibly",
      proof: "TD Bank compliance and fraud procedures; Arena Climb privacy checks (planned)",
      proofLink: "/about/",
      status: "SHOWN",
      variant: "done",
    },
    {
      skill: "SQL and databases",
      proof: "Coursework; Arena Climb PostgreSQL schema (in progress)",
      proofLink: "https://github.com/Jefferson2036-droid/is218-individual-game",
      status: "PARTIAL",
      variant: "experience",
    },
    {
      skill: "Building with LLMs / AI workflows",
      proof: "AI-assisted builds documented in project records; no LLM feature shipped yet",
      proofLink: "https://github.com/Jefferson2036-droid/is218-individual-game/blob/main/docs/project-record.md",
      status: "LEARNING",
      variant: "progress",
    },
    {
      skill: "Cloud data tools (AWS, Databricks, Snowflake)",
      proof: "Not yet — next learning step",
      status: "LEARNING",
      variant: "progress",
    },
  ],
};
