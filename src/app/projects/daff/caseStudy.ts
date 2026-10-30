import { caseImage, caseVideo } from "../../../components/caseStudy/types";

import type { CaseStudy } from "../../../components/caseStudy/types";

// Media in the same order as https://www.behance.net/gallery/211201181/DAFF
const image = (index: number, height: number) =>
  caseImage("daff", "DAFF", index, height);

export const daffCase: CaseStudy = {
  title: "DAFF",
  description: "An editorial online store for a Kyiv womenswear brand.",
  sections: [
    {
      title: "The challenge",
      text: "DAFF makes minimal, comfortable everyday clothing. The store needed to feel as calm and considered as the brand while staying easy to shop.",
    },
    {
      title: "What I did",
      text: "Redesigned the core shopping flow, from the home page and catalog to the product page and checkout, on desktop and mobile.",
    },
    {
      title: "Key decisions",
      points: [
        "Large editorial photography that carries the brand",
        "Collections organized by season and capsule",
        "Product pages with clear details and related items",
        "A simplified bag and checkout",
      ],
    },
  ],
  facts: [
    { title: "Role", text: "UX/UI Designer" },
    { title: "Project", text: "Redesign concept" },
    { title: "Year", text: "2024" },
    { title: "Platform", text: "Responsive web" },
  ],
  tags: ["UX/UI", "E-commerce", "Brand"],
  year: "2024",
  behanceUrl: "https://www.behance.net/gallery/211201181/DAFF",
  modules: [
    image(1, 1059),
    caseVideo("daff-1", 2436, 1440),
    image(2, 1388),
    image(3, 1506),
    image(4, 4301),
    image(5, 3462),
    image(6, 2800),
    caseVideo("daff-2", 3086, 2160),
    image(7, 4007),
    image(8, 3164),
    image(9, 1276),
    image(10, 3164),
    image(11, 1506),
    image(12, 1934),
    image(13, 3137),
    caseVideo("daff-3", 2436, 1440),
    image(14, 4688),
    image(15, 1980),
    image(16, 2832),
  ],
};
