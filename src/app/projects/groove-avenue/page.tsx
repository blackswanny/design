import { grooveAvenueCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";
import { pageOpenGraph } from "../../pageOpenGraph";

import type { Metadata } from "next";

const title = "Groove Avenue — Music Band Website Design | Hanna Gomozova";

export const metadata: Metadata = {
  title,
  description: grooveAvenueCase.description,
  openGraph: pageOpenGraph("/projects/groove-avenue", title, grooveAvenueCase.description),
};

export default function GrooveAvenuePage() {
  return <CaseStudyView project={grooveAvenueCase} />;
}
