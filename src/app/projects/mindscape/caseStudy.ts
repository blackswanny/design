import { caseImage, caseVideo } from "../../../components/caseStudy/types";

import type { CaseStudy } from "../../../components/caseStudy/types";

// Media in the same order as
// https://www.behance.net/gallery/246126405/Mindscape-Mental-Health-App-Design
const heights = [
  794, 1410, 865, 1406, 2179, 1784, 1529, 1493, 1586, 1380, 2072, 1328, 2182,
  1105, 1939, 1168, 1731, 1642, 816,
];
const image = (index: number) =>
  caseImage("mindscape-case", "MindScape", index, heights[index - 1]);

export const mindscapeCase: CaseStudy = {
  title: "MindScape",
  description: "Making mental health support easier to find and access.",
  sections: [
    {
      title: "The challenge",
      text: "Finding the right psychologist involves more than browsing profiles. People need to understand their options, evaluate compatibility, and feel confident taking the first step toward professional support.",
    },
    {
      title: "The solution",
      text: "MindScape brings personalized onboarding, specialist discovery, detailed profiles, and session booking into one connected mobile experience. The design prioritizes clear information, intuitive navigation, and a supportive journey from initial exploration to booking.",
    },
    {
      title: "My contribution",
      text: "Defined user flows and interaction patterns, designed the mobile interface, and developed prototypes to communicate the experience across key touchpoints.",
    },
  ],
  facts: [
    { title: "Role", text: "Product Designer" },
    { title: "Project", text: "Mobile app concept" },
  ],
  tags: ["UX/UI", "Product Strategy", "Mobile", "Research"],
  year: "2026",
  behanceUrl:
    "https://www.behance.net/gallery/246126405/Mindscape-Mental-Health-App-Design",
  modules: [
    caseVideo("mindscape-1", 2338, 1440),
    image(1),
    image(2),
    image(3),
    image(4),
    image(5),
    image(6),
    caseVideo("mindscape-2", 1884, 1194),
    ...Array.from({ length: 13 }, (_, i) => image(i + 7)),
  ],
};
