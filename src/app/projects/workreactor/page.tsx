import { workreactorCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkReactor — SaaS Product Design | Hanna Gomozova",
  description: workreactorCase.description,
};

export default function WorkreactorPage() {
  return <CaseStudyView project={workreactorCase} />;
}
