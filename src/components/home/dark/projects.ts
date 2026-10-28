export type PortfolioProject = {
  id: string;
  name: string;
  subtitle: string;
  tags: readonly string[];
  image: string;
  width: number;
  height: number;
  href?: string;
};

const mediaRoot = "/images/home/ribbon";

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "workreactor",
    name: "WorkReactor",
    subtitle: "Social network and workspace for founders",
    tags: ["Product Design", "UX/UI", "Research", "0→1"],
    image: `${mediaRoot}/workreactor-cover.webp`,
    width: 1280,
    height: 797,
    href: "https://www.behance.net/gallery/246318193/Work-Reactor-Startup-Platform-(Web-Mobile)",
  },
  {
    id: "mindscape",
    name: "MindScape",
    subtitle: "Personalized onboarding for mental health support",
    tags: ["UX/UI", "Product Strategy", "Mobile", "Research"],
    image: `${mediaRoot}/mindscape-cover.webp`,
    width: 1280,
    height: 716,
    href: "/projects/mindscape",
  },
  {
    id: "daff",
    name: "DAFF",
    subtitle: "Online store for curated fashion",
    tags: ["UX/UI", "E-commerce", "Brand"],
    image: `${mediaRoot}/daff-cover.webp`,
    width: 1280,
    height: 716,
    href: "/projects/daff",
  },
  {
    id: "groove-avenue",
    name: "Groove Avenue",
    subtitle: "Website for a music band",
    tags: ["UX/UI", "Web Design", "Animation"],
    image: `${mediaRoot}/groove-avenue-cover.webp`,
    width: 1600,
    height: 1000,
    href: "/projects/groove-avenue",
  },
  {
    id: "bee",
    name: "Bee",
    subtitle: "Book for Designers",
    tags: [],
    image: `${mediaRoot}/bee.webp`,
    width: 1280,
    height: 708,
  },
];

const heroRoot = `${mediaRoot}/hero`;

// Order must match the atlas built by scripts/build-ribbon-atlas.mjs.
export const ribbonImages = [
  ["01-workreactor", "WorkReactor — founder execution workspace"],
  ["02-daff", "DAFF — fashion online store"],
  [
    "03-groove-avenue",
    "The Groove Avenue — brand website and digital experience",
  ],
  ["04-diagnosis", "Diagnosis — medical care mobile app"],
  ["05-workreactor-spotlight", "WorkReactor — startup spotlight features"],
  ["06-mindscape", "MindScape — mental health mobile app"],
  ["07-spring-collection", "Spring collection fashion lookbook website"],
  ["08-skilley", "Skilley — team learning dashboard"],
  ["09-dance-academy", "Dance Academy website"],
].map(([file, alt]) => ({
  src: `${heroRoot}/${file}.webp`,
  alt,
  width: 1280,
  height: 844,
}));
