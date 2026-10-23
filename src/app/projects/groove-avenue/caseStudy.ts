import { caseImage, caseVideo } from "../../../components/caseStudy/types";

import type { CaseStudy } from "../../../components/caseStudy/types";

// Media in the same order as
// https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience
const image = (index: number, height: number) =>
  caseImage("groove-avenue", "The Groove Avenue", index, height);

export const grooveAvenueCase: CaseStudy = {
  title: "Groove Avenue",
  description:
    "A concept website for a modern soul band, focused on translating musical identity into a structured digital experience. The project combines bold typography, editorial layouts, and interaction design to create an immersive and rhythm-driven interface.",
  tags: ["UX/UI", "Web Design", "Animation"],
  year: "2026",
  behanceUrl:
    "https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience",
  modules: [
    image(1, 1964),
    caseVideo("1175265516", 4000, 2258),
    image(2, 1092),
    image(3, 2939),
    image(4, 2624),
    image(5, 2294),
    image(6, 2139),
    image(7, 399),
    caseVideo("1175313861", 4000, 2326),
    image(8, 1288),
    image(9, 1341),
    image(10, 377),
    caseVideo("1175322150", 4000, 1290),
    image(11, 1419),
    image(12, 1578),
    image(13, 1307),
  ],
};
