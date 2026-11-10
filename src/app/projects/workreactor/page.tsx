import { workreactorCase } from "./caseStudy";
import CaseStudyView from "../../../components/caseStudy/caseStudyView";
import { pageOpenGraph } from "../../pageOpenGraph";

import type { Metadata } from "next";

const title = "WorkReactor — SaaS Product Design | Hanna Gomozova";

export const metadata: Metadata = {
  title,
  description: workreactorCase.description,
  openGraph: pageOpenGraph("/projects/workreactor", title, workreactorCase.description),
};

export default function WorkreactorPage() {
  return <CaseStudyView project={workreactorCase} />;
}
