type CaseModule =
  | { type: "image"; src: string; height: number; alt: string }
  | { type: "cover"; src: string }
  | { type: "overview"; src: string }
  | {
      type: "video";
      src: string;
      width: number;
      height: number;
      title: string;
      cropTop?: number;
    };

export const behanceUrl =
  "https://www.behance.net/gallery/246126405/Mindscape-Mental-Health-App-Design";

export const projectDescription =
  "A mobile app designed to help users find psychologists, book sessions, and manage their mental health journey in a simple and intuitive way.";

function imagePanel(
  index: number,
  height: number,
  alt = `MindScape case study — panel ${String(index).padStart(2, "0")}`,
): CaseModule {
  return {
    type: "image",
    src: `/images/projects/mindscape/${String(index).padStart(2, "0")}.png`,
    height,
    alt,
  };
}

// Editable Figma sections replace the first two panels; remaining modules keep their order.
export const caseModules: readonly CaseModule[] = [
  {
    type: "cover",
    src: "/videos/projects/mindscape-therapy.mp4",
  },
  { type: "overview", src: "/images/projects/mindscape/01.png" },
  imagePanel(2, 1795),
  imagePanel(3, 1101),
  imagePanel(4, 1789),
  imagePanel(5, 2773),
  imagePanel(6, 2271),
  {
    type: "video",
    src: "https://player.vimeo.com/video/1175682456?autoplay=1&loop=1&muted=1&autopause=0&background=1&title=0&byline=0&portrait=0",
    width: 1884,
    height: 1184,
    title: "MindScape — app interface animation",
  },
  imagePanel(8, 1946),
  imagePanel(9, 1900),
  imagePanel(10, 2018),
  imagePanel(11, 1756),
  imagePanel(12, 2637),
  imagePanel(13, 1690),
  imagePanel(14, 2777),
  imagePanel(15, 1406),
  imagePanel(16, 2468),
  imagePanel(17, 1486),
  imagePanel(18, 2203),
  imagePanel(19, 2090),
  {
    type: "image",
    src: "/images/projects/mindscape/20-cropped.png",
    height: 850,
    alt: "MindScape project closing graphic",
  },
];
