import { daffCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAFF — E-commerce Website Design | Hanna Gomozova",
  description: daffCase.description,
};

export default function DaffPage() {
  return <CaseStudyView project={daffCase} />;
}
