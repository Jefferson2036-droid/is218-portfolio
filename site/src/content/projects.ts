export type TagVariant = "done" | "progress" | "experience";

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle?: string;
  statusText: string;
  tagVariant: TagVariant;
  description: string;
  category: "DATA & AI IN BUSINESS" | "CUSTOMER-FACING BUILDS";
  areaId: "01" | "02";
  href?: string;
}

export interface WorkArea {
  id: "01" | "02";
  number: string;
  title: string;
  description: string;
  projects: ProjectItem[];
}

export const workAreas: WorkArea[] = [
  {
    id: "01",
    number: "01",
    title: "Data & AI in a business setting",
    description: "Turning business data into decisions, handled with care. Example industry: banking.",
    projects: [
      {
        id: "econ-analysis",
        title: "Comparative Economic Analysis",
        statusText: "DONE · FALL 2025",
        tagVariant: "done",
        description: "Five years of GDP and unemployment data for five economies, from Bloomberg terminals, analyzed in Excel.",
        category: "DATA & AI IN BUSINESS",
        areaId: "01",
        href: "#",
      },
      {
        id: "td-operations",
        title: "Banking operations at TD Bank",
        shortTitle: "TD Bank operations",
        statusText: "EXPERIENCE",
        tagVariant: "experience",
        description: "Account operations and customer consultations under compliance and fraud rules.",
        category: "DATA & AI IN BUSINESS",
        areaId: "01",
        href: "/about/",
      },
      {
        id: "banking-dashboard",
        title: "Banking data dashboard",
        statusText: "PLANNED",
        tagVariant: "progress",
        description: "Next learning project: public financial data, a dashboard and a written method.",
        category: "DATA & AI IN BUSINESS",
        areaId: "01",
      },
    ],
  },
  {
    id: "02",
    number: "02",
    title: "Customer-facing builds",
    description: "Working with the people who use a tool, then building and checking it end to end.",
    projects: [
      {
        id: "arena-climb",
        title: "Arena Climb → case study",
        shortTitle: "Arena Climb",
        statusText: "FIRST SLICE BUILT",
        tagVariant: "done",
        description: "A Knight/Archer/Wizard game with accounts, server-decided matches, saved results, and 51 tests passing.",
        category: "CUSTOMER-FACING BUILDS",
        areaId: "02",
        href: "/work/arena-climb/",
      },
      {
        id: "customer-studio",
        title: "Customer Studio (team)",
        statusText: "IN PROGRESS",
        tagVariant: "progress",
        description: "A workflow agreed with a customer; my part will be named in the case study.",
        category: "CUSTOMER-FACING BUILDS",
        areaId: "02",
        href: "/work/customer-studio/",
      },
      {
        id: "ev-charge-n-pay",
        title: "EV Charge-n-Pay",
        statusText: "DONE · SPRING 2026",
        tagVariant: "done",
        description: "Led planning and sprints for a peer-to-peer EV charging platform.",
        category: "CUSTOMER-FACING BUILDS",
        areaId: "02",
      },
    ],
  },
];

export const allProjects: ProjectItem[] = workAreas.flatMap((area) => area.projects);
