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
    image: `${mediaRoot}/workreactor.webp`,
    width: 1280,
    height: 797,
    href: "https://www.behance.net/gallery/246318193/Work-Reactor-Startup-Platform-(Web-Mobile)",
  },
  {
    id: "mindscape",
    name: "MindScape",
    subtitle: "Personalized onboarding for mental health support",
    tags: ["UX/UI", "Product Strategy", "Mobile", "Research"],
    image: `${mediaRoot}/mindscape.webp`,
    width: 1280,
    height: 716,
    href: "/projects/mindscape",
  },
  {
    id: "dove-closet",
    name: "Dove Closet",
    subtitle: "Online store for curated fashion",
    tags: ["UX/UI", "E-commerce", "Brand"],
    image: `${mediaRoot}/dove-closet.webp`,
    width: 1280,
    height: 716,
    href: "https://www.behance.net/gallery/211201181/DAFF",
  },
  {
    id: "groove-avenue",
    name: "Groove Avenue",
    subtitle: "Website for a music band",
    tags: ["UX/UI", "Web Design", "Animation"],
    image: `${mediaRoot}/groove-avenue.webp`,
    width: 1280,
    height: 721,
    href: "https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience",
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
  ["01-music-store", "TFS — music store website"],
  ["02-mindscape", "MindScape — mental health mobile app"],
  ["03-workreactor", "WorkReactor — founder execution workspace"],
  ["04-diagnosis", "Diagnosis — medical care mobile app"],
  ["05-spring-collection", "Spring collection fashion lookbook website"],
  ["06-dance-academy", "Dance Academy website"],
  ["07-daff", "DAFF — fashion online store"],
  ["08-workreactor-spotlight", "WorkReactor — startup spotlight features"],
  ["09-vegamore", "Vegamore — clean beauty online store"],
].map(([file, alt]) => ({
  src: `${heroRoot}/${file}.webp`,
  alt,
  width: 1280,
  height: 844,
}));
