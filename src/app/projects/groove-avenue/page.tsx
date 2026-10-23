import { grooveAvenueCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groove Avenue — Music Band Website Design | Hanna Gomozova",
  description: grooveAvenueCase.description,
};

export default function GrooveAvenuePage() {
  return <CaseStudyView project={grooveAvenueCase} />;
}
