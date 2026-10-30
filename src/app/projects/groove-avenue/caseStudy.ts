import { caseImage, caseVideo } from "../../../components/caseStudy/types";

import type { CaseStudy } from "../../../components/caseStudy/types";

// Media in the same order as
// https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience
const image = (index: number, height: number) =>
  caseImage("groove-avenue", "The Groove Avenue", index, height);

export const grooveAvenueCase: CaseStudy = {
  title: "Groove Avenue",
  description: "A website concept for a modern soul band.",
  sections: [
    {
      title: "The challenge",
      text: "Turn a band’s sound and identity into a site that feels like their music and still works as a home for albums, tours, and merch.",
    },
    {
      title: "What I did",
      text: "Researched the genre and visual references, then built an editorial layout system and typography direction, designed the interface, and adapted it for mobile.",
    },
    {
      title: "Key decisions",
      points: [
        "Album pages with built-in playback",
        "Modular components reused across albums, band, and shop",
        "Bold type and torn-paper textures that set the rhythm",
      ],
    },
  ],
  facts: [
    { title: "Role", text: "UX/UI Designer" },
    { title: "Project", text: "Website concept" },
    { title: "Year", text: "2026" },
    { title: "Platform", text: "Responsive web" },
  ],
  tags: ["UX/UI", "Web Design", "Animation"],
  year: "2026",
  behanceUrl:
    "https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience",
  modules: [
    image(1, 1964),
    caseVideo("groove-avenue-1", 1796, 1014),
    image(2, 1092),
    image(3, 2939),
    image(4, 2624),
    image(5, 2294),
    image(6, 2139),
    image(7, 399),
    caseVideo("groove-avenue-2", 2060, 1198),
    image(8, 1288),
    image(9, 1341),
    image(10, 377),
    caseVideo("groove-avenue-3", 2474, 798),
    image(11, 1419),
    image(12, 1578),
    image(13, 1307),
  ],
};
