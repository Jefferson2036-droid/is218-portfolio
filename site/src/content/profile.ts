export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details?: string[];
}

export interface RightNowItem {
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  homeASubtitle: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
  resumePlaceholder: string;
  researchSiteUrl: string;
  rightNow: RightNowItem[];
  tdResponsibility: {
    eyebrow: string;
    title: string;
    points: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    tools: string;
    learningNext: string;
    languages: string;
    experience: ExperienceItem[];
    education: EducationItem[];
  };
  footerNote: string;
}

export const profile: ProfileData = {
  name: "JEFFERSON RODAS",
  tagline: "BUSINESS INFORMATION SYSTEMS · NJIT · CLASS OF DEC 2027",
  headline: "I build data and AI tools alongside the people who use them.",
  subheadline:
    "Forward-deployed style: I start with the people who have the problem — bank customers, players, a client team — then build the tool, check that it works, and explain it plainly.",
  homeASubtitle:
    "Associate Banker II at TD Bank · building web apps at NJIT · forward-deployed style.",
  email: "rodas5@outlook.com",
  githubUrl: "https://github.com/Jefferson2036-droid",
  linkedinUrl: "https://www.linkedin.com/in/jefferson-rodas",
  resumePath: "/resume.pdf",
  resumePlaceholder: "[ADD résumé PDF]",
  researchSiteUrl: "/is218-portfolio/",
  rightNow: [
    {
      title: "Associate Banker II, TD Bank",
      description: "Since June 2026 · compliance, fraud and data-integrity procedures",
    },
    {
      title: "Building Arena Climb",
      description: "Flask web app with accounts, saved results and tests",
    },
    {
      title: "Customer Studio (team)",
      description: "A workflow built with a customer, in progress",
    },
  ],
  tdResponsibility: {
    eyebrow: "REAL-WORLD RESPONSIBILITY",
    title: "Trusted with real customers' money and data.",
    points: [
      "Run daily transactions and account operations in the bank's core systems.",
      "Hold needs-based consultations to match customers with the right products.",
      "Follow strict compliance, fraud-prevention and data-integrity procedures on every account.",
    ],
  },
  about: {
    eyebrow: "ABOUT",
    title: "From the bank counter to building data and AI tools.",
    intro:
      "I study Business Information Systems at NJIT and work as an Associate Banker at TD Bank. Both teach me the same thing: start with the person in front of you, get the details right, and be clear about what you checked. [Write the rest in your own words.]",
    tools: "Python · SQL · Excel (PivotTables) · Git & GitHub · Flask · Next.js · Bloomberg terminal",
    learningNext: "Machine-learning basics · a cloud data tool (AWS, Databricks or Snowflake) · building with LLMs",
    languages: "English · Spanish (fluent)",
    experience: [
      {
        period: "JUNE 2026 – PRESENT",
        role: "Associate Banker II",
        company: "TD Bank",
        bullets: [
          "Run daily transactions and account operations in the bank's core systems.",
          "Hold needs-based consultations to recommend banking, credit and deposit products.",
          "Follow strict compliance, fraud-prevention and data-integrity procedures.",
        ],
      },
      {
        period: "JULY 2023 – PRESENT",
        role: "Sales Support",
        company: "Dick's Sporting Goods",
        bullets: [
          "Match customers with footwear and apparel based on what they need.",
          "Keep inventory data accurate by tracking stock and restocking the floor.",
        ],
      },
    ],
    education: [
      {
        period: "EXPECTED DEC 2027",
        degree: "B.S. Business Information Systems",
        institution: "New Jersey Institute of Technology (NJIT), Newark, NJ",
        details: ["Investment Club, research member."],
      },
      {
        period: "MAY 2025",
        degree: "A.S. Computer Information Systems and Technology",
        institution: "Union County College, Cranford, NJ",
      },
    ],
  },
  footerNote: "© 2026 Jefferson Rodas · Plainfield, NJ · English and Spanish · Site code on GitHub",
};
