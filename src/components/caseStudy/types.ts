export type CaseImage = {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseVideo = {
  type: "video";
  vimeoId: string;
  width: number;
  height: number;
};

export type CaseModule = CaseImage | CaseVideo;

export type CaseStudy = {
  title: string;
  description: string;
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

export const caseVideo = (
  vimeoId: string,
  width: number,
  height: number,
): CaseVideo => ({ type: "video", vimeoId, width, height });
