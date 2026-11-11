import { caseImage, caseVideo } from "../../../components/caseStudy/types";

import type { CaseStudy } from "../../../components/caseStudy/types";

// Media in the same order as
// https://www.behance.net/gallery/257960101/Work-Reactor-SaaS-for-Startup-Teams
const heights = [
  1964, 1608, 1612, 1633, 1825, 1962, 1259, 949, 1888, 1537, 1783, 2797, 2970,
  1537, 404, 862, 749, 974, 1203, 481, 582, 2300, 1896, 2177, 2128, 1671, 1527,
  1238,
];
const image = (index: number) =>
  caseImage("workreactor", "WorkReactor", index, heights[index - 1]);

export const workreactorCase: CaseStudy = {
  title: "WorkReactor",
  description: "One workspace for startup teams, from first hello to shipped work.",
  sections: [
    {
      title: "The challenge",
      text: "Founders find people on LinkedIn, talk in Slack, and track work in Notion or ClickUp. Context gets lost at every handoff, and it’s hard to tell who has actually shipped.",
    },
    {
      title: "What I did",
      text: "Sole designer on the live product from 2021 to 2024, through four concept pivots, 32 interviews with founders, engineers, and investors, and A/B tests on sign-up and sign-in. After the company closed, I redesigned it end to end on my own to show what the product was meant to be.",
    },
    {
      title: "Key decisions",
      points: [
        "Profiles built on verified activity, not claims",
        "Context-aware matching for people and startups",
        "Tasks assigned once, visible everywhere",
        "Light and dark themes from one set of tokens",
      ],
    },
  ],
  facts: [
    { title: "Role", text: "Product Designer" },
    { title: "Product", text: "Live SaaS platform" },
    { title: "Timeline", text: "2021–2024" },
    { title: "Scope", text: "100+ screens" },
  ],
  tags: ["Product Design", "UX Research", "Design Systems", "0 → 1"],
  year: "2021–2024",
  theme: "grey",
  behanceUrl:
    "https://www.behance.net/gallery/257960101/Work-Reactor-SaaS-for-Startup-Teams",
  modules: [
    ...Array.from({ length: 20 }, (_, i) => image(i + 1)),
    caseVideo("workreactor-1", 1920, 1200),
    ...Array.from({ length: 8 }, (_, i) => image(i + 21)),
  ],
};
