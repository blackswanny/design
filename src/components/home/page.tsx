import Image from "next/image";

import portraitPhoto from "../../assets/images/photo.png";
import NavMenu from "../navMenu";

type ContactAction = {
  href: string;
  label: string;
  variant: "outline" | "pattern";
  external?: boolean;
  icon?: "linkedin";
};

const contactActions: ContactAction[] = [
  {
    href: "https://www.linkedin.com/in/hanna-gomozova/",
    label: "Linked",
    variant: "outline",
    external: true,
    icon: "linkedin",
  },
  {
    href: "mailto:anna.mayskay@gmail.com",
    label: "anna.mayskay@gmail.com",
    variant: "",
  },
  {
    href: "tel:+19259668197",
    label: "+1-925-966-8197",
    variant: "outline",
  },
];

const emailPatternRows = Array.from({ length: 7 }, (_, index) => index);
const emailPatternText = Array.from(
  { length: 5 },
  () => "anna.mayskay@gmail.com",
).join(" ");

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1.05em] w-[1.05em] shrink-0"
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V20h3.38zm.22-5.14a2.03 2.03 0 0 0-2.1-2.02 2.03 2.03 0 0 0-2.06 2.02c0 1.13.9 2.03 2.06 2.03a2.05 2.05 0 0 0 2.1-2.03M20 12.28C20 9.27 18.11 8 15.67 8c-1.53 0-2.21.84-2.59 1.43V8.5H9.84c.04.62 0 11.5 0 11.5h3.24v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.87 1.04 1.87 2.57V20H20z" />
    </svg>
  );
}

function ContactPill({
  action,
}: Readonly<{
  action: ContactAction;
}>) {
  const isPattern = action.variant === "pattern";

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className={`group relative flex min-h-[5.75rem] items-center justify-center overflow-hidden rounded-[999px] border px-6 py-6 text-center transition-colors duration-200 md:min-h-[9.25rem] md:px-8 ${
        isPattern
          ? "border-white/80 bg-[#050505]"
          : "border-white/80 bg-transparent hover:bg-white/[0.03]"
      }`}
    >
      {isPattern ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden rounded-[inherit]"
        >
          <div className="absolute inset-y-[-28%] left-[-20%] right-[-20%] rotate-[-10deg]">
            {emailPatternRows.map((row) => (
              <div
                key={row}
                className="font-neue-montreal-thin whitespace-nowrap text-[0.82rem] leading-[0.82] tracking-[-0.05em] text-white/85 md:text-[1.45rem]"
              >
                {emailPatternText}
              </div>
            ))}
          </div>
          <div className="bg-black/28 absolute inset-0" />
        </div>
      ) : null}

      <span
        className={`relative z-10 inline-flex items-center justify-center underline decoration-[0.06em] underline-offset-[0.18em] ${
          isPattern
            ? "font-neue-montreal-thin text-[1rem] italic tracking-[-0.04em] text-white md:text-[1.65rem]"
            : "font-neue-montreal text-[1rem] tracking-[-0.03em] text-white md:text-[1.55rem]"
        }`}
      >
        <span>{action.label}</span>
        {action.icon === "linkedin" ? <LinkedInIcon /> : null}
      </span>
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <NavMenu />

      <section
        id="home"
        className="relative isolate overflow-hidden bg-background pt-14 text-foreground lg:h-[100svh] lg:min-h-screen lg:pt-16"
      >
        <div className="mx-auto flex w-full flex-col items-center justify-start px-6 pb-4 pt-12 md:px-10 lg:min-h-[calc(100svh-4rem)] lg:justify-center lg:px-16 lg:pb-0 lg:pt-0">
          <div className="relative flex w-full flex-col items-center pt-0 lg:pt-[2vw]">
            <h1 className="font-neue-montreal-thin pointer-events-none z-20 mb-3 w-full px-2 text-center text-[8vw] leading-[0.9] tracking-[-0.06em] text-white md:mb-4 lg:mb-3">
              Hanna Gomozova
            </h1>
            <div
              className="font-neue-montreal z-20 mb-4 text-center text-white/72 md:mb-5 lg:mb-6"
              style={{
                width: "clamp(5.5rem, 28vw, 26rem)",
                fontSize: "clamp(0.55rem, 2vw, 2rem)",
                lineHeight: "1.35",
              }}
            >
              <p>Product designer</p>
              <p>based in San Francisco</p>
            </div>
            <div className="relative flex w-full max-w-[16rem] flex-col items-center md:max-w-[19rem] lg:max-w-[22.5rem]">
              <div className="relative z-10 w-full">
                <div className="absolute inset-0 z-0 overflow-visible">
                  <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 h-px w-[85vw] -translate-y-1/2 bg-white/20" />
                    <div className="absolute right-0 top-1/2 h-px w-[45vw] origin-right -translate-y-1/2 rotate-[25deg] bg-white/20" />
                    <div className="absolute right-0 top-1/2 h-px w-[45vw] origin-right -translate-y-1/2 -rotate-[25deg] bg-white/20" />
                  </div>
                </div>
                <div className="relative aspect-[3/3] w-full overflow-hidden rounded-md">
                  <Image
                    src={portraitPhoto}
                    alt="Portrait of Hanna Gomozova"
                    fill
                    priority
                    sizes="(min-width: 1024px) 22.5rem, (min-width: 768px) 19rem, 16rem"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="scroll-mt-6 bg-background px-6 py-2 md:px-10 md:py-2 lg:px-16 lg:py-2"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mb-10 md:mb-14">
            <div className="flex items-end gap-3 md:gap-5">
              <h2 className="font-neue-montreal-thin text-white/72 mt-5 text-center text-[8vw] italic leading-[0.9] tracking-[-0.06em] text-white">
                About
              </h2>
              <h2 className="font-neue-montreal text-[8vw] leading-[0.86] tracking-[-0.06em] text-white">
                me
              </h2>
            </div>
          </div>

          <div className="ml-auto pb-12 text-white md:pb-16">
            <p className="font-neue-montreal-thin mx-auto max-w-[38rem] text-[2vw] leading-[1.08] tracking-[-0.01em]">
              I’m a Senior Product Designer with 5+ years of experience, focused
              on solving complex business problems through intuitive,
              user-centered design. I create scalable digital products by
              combining strong UX thinking, data-driven decisions, and clean
              visual execution. My work bridges user needs and business goals,
              helping teams build products that are both functional and
              impactful.
            </p>
          </div>

          <div className="border-t border-white/20 py-6 md:grid md:grid-cols-[14rem_1fr] md:gap-6">
            <div className="font-neue-montreal text-white/28 mb-4 text-[2.1vw] leading-none md:mb-0">
              Capabilities
            </div>
            <div className="font-neue-montreal-thin text-white/88 max-w-[54rem] text-[1.45vw] leading-[1.2]">
              Utilizing tools such as Figma, Adobe Photoshop, Adobe Illustrator,
              Adobe After Effects, Principle, and Sketch, I stay updated on the
              latest design trends and methodologies, ensuring top-quality
              deliverables.
            </div>
          </div>

          <div className="border-t border-white/20 py-6 md:grid md:grid-cols-[14rem_1fr] md:gap-6">
            <div className="font-neue-montreal text-white/28 mb-4 text-[2.1vw] leading-none md:mb-0">
              Experience
            </div>
            <div className="text-white/88 font-neue-montreal-thin grid gap-6 md:grid-cols-3 md:gap-10">
              <div className="text-[1.45vw] leading-[1.18]">
                <div>UI/UX design</div>
                <div>Mobile Design</div>
                <div>Interaction Design</div>
              </div>
              <div className="text-[1.45vw] leading-[1.18]">
                <div>Brand Identity</div>
                <div>User research and usability testing</div>
                <div>Prototyping &amp; Wireframing</div>
              </div>
              <div className="text-[1.45vw] leading-[1.18]">
                <div>Information Architecture</div>
                <div>Interface Animation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="scroll-mt-16 bg-background px-6 py-6 md:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="font-neue-montreal mb-6 text-sm uppercase tracking-[0.18em] text-white/60">
            PROJECTS
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]">
              <iframe
                src="https://player.vimeo.com/video/1024160787?autoplay=1&amp;loop=1&amp;muted&amp;autopause=0&amp;background=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1"
                title="Project Embed Content"
                sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms"
                loading="lazy"
                style={{
                  height: "100%",
                  left: "0px",
                  //position: "absolute",
                  top: "0px",
                  width: "100%",
                }}
              />
            </div>
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]" />
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]" />
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]" />
          </div>
        </div>
      </section>
      <section
        id="contacts"
        className="scroll-mt-1 bg-background px-6 py-8 md:px-10 md:py-10 lg:px-16 lg:py-12"
      >
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="relative h-[22rem] w-full overflow-hidden md:h-[28rem] lg:h-[34rem]">
            <div className="absolute inset-0 z-0">
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/20" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />

              <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute left-0 top-0 h-px w-[18rem] origin-left -rotate-45 bg-white/20 md:w-[22rem]" />
                <div className="absolute left-0 top-0 h-px w-[18rem] origin-left rotate-45 bg-white/20 md:w-[22rem]" />
                <div className="absolute right-0 top-0 h-px w-[18rem] origin-right rotate-45 bg-white/20 md:w-[22rem]" />
                <div className="absolute right-0 top-0 h-px w-[18rem] origin-right -rotate-45 bg-white/20 md:w-[22rem]" />
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 flex h-[11.5rem] w-[11.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-background text-center md:h-[14rem] md:w-[14rem]">
              <span className="font-neue-montreal text-[1.35rem] text-white md:text-[1.6rem]">
                Contact
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-3 md:gap-5 lg:mt-10 lg:gap-6">
            {contactActions.map((action) => (
              <ContactPill key={action.label} action={action} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
