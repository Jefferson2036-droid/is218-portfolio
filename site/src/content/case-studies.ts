import { TagVariant } from "./projects";
import { BASE_PATH } from "./config";

export interface CheckRow {
  check: string;
  result: string;
  variant: TagVariant;
}

export interface CaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  stack: string;
  status: string;
  links: { label: string; href: string; placeholder?: boolean }[];
  sprites?: {
    images: { src: string; alt: string }[];
    caption: string;
  };
  sections: {
    number: string;
    heading: string;
    content: string[];
    bullets?: string[];
  }[];
  checks?: {
    rows: CheckRow[];
    footnote: string;
  };
  whatsNext: {
    content: string;
    aiNote?: string;
  };
}

export const arenaClimbCaseStudy: CaseStudy = {
  slug: "arena-climb",
  title: "Arena Climb",
  eyebrow: "CASE STUDY · CUSTOMER-FACING BUILDS · IS218, FALL 2026",
  summary:
    "A Knight / Archer / Wizard game where you climb ranks against a computer that reads your habits.",
  role: "Solo: research, decisions, build (AI-assisted)",
  stack: "Flask, Flask-Login, PostgreSQL, pytest, Playwright, GitHub Actions",
  status: "First slice built · 51 tests passing (CI green)",
  links: [
    { label: "Code", href: "https://github.com/Jefferson2036-droid/is218-individual-game" },
    {
      label: "Pull request #2",
      href: "https://github.com/Jefferson2036-droid/is218-individual-game/pull/2",
    },
    {
      label: "Project record",
      href: "https://github.com/Jefferson2036-droid/is218-individual-game/blob/main/docs/project-record.md",
    },
    { label: "Live demo [ADD]", href: "#", placeholder: true },
  ],
  sprites: {
    images: [
      { src: `${BASE_PATH}/img/knight-px.png`, alt: "Knight sprite" },
      { src: `${BASE_PATH}/img/archer-px.png`, alt: "Archer sprite" },
      { src: `${BASE_PATH}/img/wizard-px.png`, alt: "Wizard sprite" },
    ],
    caption: "Fighters rendered in Blender from free CC0 models (Quaternius), then pixelated.",
  },
  sections: [
    {
      number: "01",
      heading: "Problem",
      content: [
        "Rock paper scissors settles arguments, but nothing makes you play a second match. I wanted a reason to keep playing that still fits in one minute.",
      ],
    },
    {
      number: "02",
      heading: "Who it was for",
      content: [
        "College students filling a few minutes between classes on their phones. I compared this audience with a once-a-day “Wordle-style” player and chose the quick, 2048-style loop because I could test it with classmates.",
      ],
    },
    {
      number: "03",
      heading: "What I built",
      content: [
        "The Flask first working slice is built, verified with 51 passing automated tests and a green GitHub Actions run:",
      ],
      bullets: [
        "Sign up, sign in and sign out with Flask-Login; passwords hashed by the framework.",
        "Server-decided best-of-5 matches where the server decides every round and validates picks; the browser only sends a pick.",
        "Ranks that get harder: random → win-stay/lose-shift → predicts from your past picks (Strategy pattern).",
        "Saved results that you can reopen to review previous matches.",
        "Kept as next: private dashboard and account maintenance.",
      ],
    },
    {
      number: "04",
      heading: "How I checked it",
      content: [],
    },
    {
      number: "05",
      heading: "What’s next",
      content: [],
    },
  ],
  checks: {
    rows: [
      {
        check: "Flask first working slice tests (auth, matches, saved results)",
        result: "51 PASSED · CI GREEN",
        variant: "done",
      },
      {
        check: "GitHub Actions automated CI workflow run",
        result: "GREEN (PR #2)",
        variant: "done",
      },
      {
        check: "Private dashboard and account maintenance",
        result: "PLANNED",
        variant: "progress",
      },
      {
        check: "A/B playtest: does “1 star to the next rank” make people play again?",
        result: "NOT RUN",
        variant: "progress",
      },
      {
        check: "Keyboard-only play and 375 px phone layout",
        result: "PLANNED",
        variant: "progress",
      },
    ],
    footnote: "Results come from the public project record. Anything not run says so.",
  },
  whatsNext: {
    content:
      "Build the private dashboard and account maintenance, run the playtest with classmates, and keep all checks passing on every push.",
    aiNote:
      "How AI helped: I used AI to lay out options, draft documents and write code. I made each decision, and every result above comes from a check that actually ran.",
  },
};

export const customerStudioCaseStudy: CaseStudy = {
  slug: "customer-studio",
  title: "Customer Studio (team)",
  eyebrow: "CASE STUDY · CUSTOMER-FACING BUILDS · IN PROGRESS",
  summary: "A workflow agreed with a customer; my part will be named in the case study.",
  role: "Team contributor [ADD]",
  stack: "Next.js, TypeScript [ADD]",
  status: "In progress",
  links: [
    { label: "Code [ADD]", href: "#", placeholder: true },
    { label: "Project record [ADD]", href: "#", placeholder: true },
    { label: "Live demo [ADD]", href: "#", placeholder: true },
  ],
  sections: [
    {
      number: "01",
      heading: "Problem",
      content: ["[ADD: Describe the customer problem and motivation]"],
    },
    {
      number: "02",
      heading: "Who it was for",
      content: ["[ADD: Describe the customer persona and usage scenario]"],
    },
    {
      number: "03",
      heading: "What I built",
      content: ["[ADD: Describe individual contribution versus team responsibilities]"],
      bullets: [
        "[ADD: Feature specification or milestone 1]",
        "[ADD: Feature specification or milestone 2]",
      ],
    },
    {
      number: "04",
      heading: "How I checked it",
      content: ["[ADD: Checks and testing evidence]"],
    },
    {
      number: "05",
      heading: "What’s next",
      content: [],
    },
  ],
  checks: {
    rows: [
      {
        check: "Customer workflow requirements sign-off",
        result: "IN PROGRESS",
        variant: "progress",
      },
      {
        check: "End-to-end integration tests",
        result: "PLANNED",
        variant: "progress",
      },
    ],
    footnote: "Results come from the team project record. Anything not run says so.",
  },
  whatsNext: {
    content: "Complete customer acceptance review and deploy the initial milestone slice. [ADD]",
    aiNote:
      "How AI helped: AI is used for prototyping and test generation. All architectural decisions are reviewed by the team.",
  },
};
