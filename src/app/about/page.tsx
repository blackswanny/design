import styles from "@/components/home/headerHero.module.css";
import NavMenu from "@/components/navMenu";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me — Hanna Gomozova",
  description:
    "About Hanna Gomozova, a product designer focused on early-stage products and intuitive user experiences.",
};

export default function AboutPage() {
  return (
    <main className={`${styles.aboutPage} min-h-screen bg-background`}>
      <NavMenu activePath="/about" />
      <section
        id="about"
        className={`${styles.aboutTransition} homepage-section scroll-mt-16 bg-background px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-4`}
      >
        <div className="mx-auto w-full max-w-[980px]">
          <header className="mb-6 md:mb-8">
            <h1 className="flex items-end gap-2 md:gap-2">
              <span
                className={`${styles.sectionHeading} pointer-events-none z-20 mb-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1] tracking-[-0.03em] text-foreground`}
              >
                About
              </span>{" "}
              <span
                className={`${styles.sectionHeading} pointer-events-none z-20 mb-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1] tracking-[-0.03em] text-accent`}
              >
                me
              </span>
            </h1>
          </header>

          <div className="ml-auto pb-12 text-foreground md:pb-16">
            <div className="flex flex-col gap-2 font-sans text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed tracking-[-0.01em] text-secondary">
              <p>
                I focus on bringing clarity to{" "}
                <span className="text-foreground">early-stage products</span>.
              </p>
              <p>
                I enjoy working through ambiguity, simplifying complex ideas,
                and designing experiences that feel natural and
                <span className="text-foreground"> easy to use</span>.
              </p>
              <p>
                I care about making things{" "}
                <span className="text-foreground">
                  clear, useful, and grounded
                </span>{" "}
                in real use.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t border-border py-8 md:flex-row md:gap-6">
            <div className="mb-4 font-sans text-[clamp(1.1rem,2.2vw,1.25rem)] font-semibold leading-none text-foreground md:mb-0 md:w-[10rem] md:flex-shrink-0">
              Capabilities
            </div>
            <div className="max-w-[54rem] flex-1 font-sans text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-secondary">
              I work across the full product lifecycle —{" "}
              <span className="text-foreground">
                from early ideas and product definition to design, testing and
                iteration
              </span>
              . I’m comfortable working closely with founders and engineers,
              helping shape products from concept to real use.
            </div>
          </div>

          <div className="flex flex-col border-t border-border py-8 md:flex-row md:gap-6">
            <div className="mb-4 font-sans text-[clamp(1.1rem,2.2vw,1.25rem)] font-semibold leading-none text-foreground md:mb-0 md:w-[10rem] md:flex-shrink-0">
              Expertise
            </div>
            <div className="flex flex-1 flex-col gap-6 font-sans text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-secondary md:flex-row md:gap-10">
              <div>
                <div>UX/UI Design</div>
                <div>Mobile Design</div>
                <div>Interaction Design</div>
              </div>
              <div>
                <div>User Research</div>
                <div>Prototyping</div>
                <div>Brand Identity</div>
              </div>
              <div>
                <div>Information Architecture</div>
                <div>Interface Animation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
