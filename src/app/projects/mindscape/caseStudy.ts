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
  description:
    "A mobile app designed to help users find psychologists, book sessions, and manage their mental health journey in a simple and intuitive way.",
  tags: ["UX/UI", "Product Strategy", "Mobile", "Research"],
  year: "2026",
  behanceUrl:
    "https://www.behance.net/gallery/246126405/Mindscape-Mental-Health-App-Design",
  modules: [
    caseVideo("1175366730", 4000, 2464),
    image(1),
    image(2),
    image(3),
    image(4),
    image(5),
    image(6),
    caseVideo("1175682456", 4000, 2535),
    ...Array.from({ length: 13 }, (_, i) => image(i + 7)),
  ],
};
