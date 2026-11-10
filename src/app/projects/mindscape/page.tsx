import { mindscapeCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";
import { pageOpenGraph } from "../../pageOpenGraph";

import type { Metadata } from "next";

const title = "MindScape — Mental Health App Design | Hanna Gomozova";

export const metadata: Metadata = {
  title,
  description: mindscapeCase.description,
  openGraph: pageOpenGraph("/projects/mindscape", title, mindscapeCase.description),
};

export default function MindscapePage() {
  return <CaseStudyView project={mindscapeCase} />;
}
