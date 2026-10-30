export type CaseImage = {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseVideo = {
  type: "video";
  src: string;
  poster: string;
  width: number;
  height: number;
};

export type CaseModule = CaseImage | CaseVideo;

export type CaseSection = {
  title: string;
  text: string;
};

export type CaseStudy = {
  title: string;
  description: string;
  /* Optional long-form intro: the description becomes a one-line lead,
     followed by labelled sections and a row of short facts (Role…). */
  sections?: CaseSection[];
  facts?: CaseSection[];
  tags: string[];
  year: string;
  behanceUrl: string;
  modules: CaseModule[];
};

// Images live in /images/projects/<folder>/NN.webp, exported 2200px wide.
export const caseImage = (
  folder: string,
  title: string,
  index: number,
  height: number,
): CaseImage => ({
  type: "image",
  src: `/images/projects/${folder}/${String(index).padStart(2, "0")}.webp`,
  alt: `${title} website design, screen ${index}`,
  width: 2200,
  height,
});

// Videos live in /videos/cases/<name>.mp4 with a first-frame poster
// <name>.webp beside them; width and height are the file's pixel size.
export const caseVideo = (
  name: string,
  width: number,
  height: number,
): CaseVideo => ({
  type: "video",
  src: `/videos/cases/${name}.mp4`,
  poster: `/videos/cases/${name}.webp`,
  width,
  height,
});
