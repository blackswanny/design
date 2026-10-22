import LightHomePage from "../../components/home/lightPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanna Gomozova — preserved light version",
  robots: { index: false, follow: false },
};

export default function LightVersion() {
  return (
    <main className="min-h-screen bg-background">
      <LightHomePage />
    </main>
  );
}
