import { TagVariant } from "./projects";

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
  stack: "Flask, Flask-Login, PostgreSQL, pytest, Playwright",
  status: "Plan done · rebuild in progress",
  links: [
    { label: "Code", href: "https://github.com/Jefferson2036-droid/is218-individual-game" },
    {
      label: "Project record",
      href: "https://github.com/Jefferson2036-droid/is218-individual-game/blob/main/docs/project-record.md",
    },
    { label: "Live demo [ADD]", href: "#", placeholder: true },
  ],
  sprites: {
    images: [
      { src: "/img/knight-px.png", alt: "Knight sprite" },
      { src: "/img/archer-px.png", alt: "Archer sprite" },
      { src: "/img/wizard-px.png", alt: "Wizard sprite" },
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
        "Core mechanics and data layer built; full Flask interface rebuild currently in progress:",
      ],
      bullets: [
        "Sign up, sign in and sign out with Flask-Login; passwords hashed by the framework. (Rebuild in progress)",
        "Best-of-5 matches where the server decides every round; the browser only sends a pick. (Built & tested)",
        "Ranks that get harder: random → win-stay/lose-shift → predicts from your past picks (Strategy pattern). (Built & tested)",
        "Saved results, a private dashboard and account maintenance. (Rebuild in progress)",
        "Cut on purpose: coins, gear and a shop moved to the backlog to keep the core solid.",
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
        check: "Game rules, opponent and match logic (first build)",
        result: "67 PASSED · NOV 16",
        variant: "done",
      },
      {
        check: "Two-user privacy and password-change tests (Flask rebuild)",
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
      "Finish the Flask rebuild, run the playtest with classmates, and add GitHub Actions so every check runs on each push.",
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
