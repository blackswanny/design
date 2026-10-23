import { mindscapeCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MindScape — Mental Health App Design | Hanna Gomozova",
  description: mindscapeCase.description,
};

export default function MindscapePage() {
  return <CaseStudyView project={mindscapeCase} />;
}
