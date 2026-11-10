import { daffCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";
import { pageOpenGraph } from "../../pageOpenGraph";

import type { Metadata } from "next";

const title = "DAFF — E-commerce Website Design | Hanna Gomozova";

export const metadata: Metadata = {
  title,
  description: daffCase.description,
  openGraph: pageOpenGraph("/projects/daff", title, daffCase.description),
};

export default function DaffPage() {
  return <CaseStudyView project={daffCase} />;
}
