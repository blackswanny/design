"use client";

import { Fraunces } from "next/font/google";
import Image from "next/image";

import beIcon from "@/assets/images/be.svg";
import liIcon from "@/assets/images/li.svg";
import portraitPhoto from "@/assets/images/portrait.png";

import NavMenu from "../navMenu";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

import type { StaticImageData } from "next/image";

type ContactAction = {
  href: string;
  label: string;
  external?: boolean;
  icon?: "linkedin";
};

const emailAction: ContactAction = {
  href: "mailto:anna.mayskay@gmail.com",
  label: "anna.mayskay@gmail.com",
};

const socialActions: ContactAction[] = [
  {
    href: "https://www.linkedin.com/in/hanna-gomozova/",
    label: "LinkedIn",
    external: true,
    icon: "linkedin",
  },
  {
    href: "https://www.behance.net/hannagomozova",
    label: "Behance",
    external: true,
  },
];

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="ml-[-8px] h-[1.05em] w-[1.05em] shrink-0"
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const socialIcons: { [key: string]: string | StaticImageData } = {
  LinkedIn: liIcon,
  Behance: beIcon,
};

function ContactPill({
  action,
}: Readonly<{
  action: ContactAction;
}>) {
  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className="group flex items-center justify-start text-center md:justify-center"
    >
      <span className="inline-flex items-center justify-center gap-2 font-sans text-[clamp(1rem,3.8vw,1.55rem)] tracking-[-0.03em] text-white/70 transition-colors duration-200 group-hover:text-white">
        <span>{action.label}</span>
        {action.icon === "linkedin" ? <LinkedInIcon /> : null}
      </span>
    </a>
  );
}

function SquareArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
    >
      <title>open-in-new</title>
      <path
        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Project = {
  name: string;
  subname?: string;
  imageSrc?: string;
  nativeVideoSrc?: string;
  behanceLink?: string;
};

const projects: Project[] = [
  {
    name: "Work Reactor",
    subname: "Startup Networking Platform",
    imageSrc: "/images/wr.png",
    behanceLink:
      "https://www.behance.net/gallery/246318193/Work-Reactor-Startup-Platform-(Web-Mobile)",
  },
  {
    name: "MindScape",
    subname: "Mental Health Support App",
    nativeVideoSrc: "/videos/mindscape.mp4",
    behanceLink:
      "https://www.behance.net/gallery/246126405/Mindscape-Mental-Health-App-Design",
  },
  {
    name: "The Groove Avenue",
    subname: "Digital Music Experience",
    nativeVideoSrc: "/videos/music.mp4",
    behanceLink:
      "https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience",
  },
  {
    name: "DAFF Closet",
    subname: "Redesign concept for online shop",
    nativeVideoSrc: "/videos/shop.mp4",
    behanceLink: "https://www.behance.net/gallery/211201181/DAFF",
  },
  {
    name: "Bee",
    subname: "Book for Designers",
    nativeVideoSrc: "/videos/bee.mp4",
  },
];

function ProjectCard({
  project,
  isFullWidth,
}: {
  project: Project;
  isFullWidth?: boolean;
}) {
  const isClickable = Boolean(project.behanceLink);

  return (
    <div className={`w-full ${isFullWidth ? "" : "md:w-[calc(50%-0.75rem)]"}`}>
      <div
        className={`group relative aspect-video w-full overflow-hidden rounded-md border border-white/20 bg-white/[0.03] ${
          isClickable ? "cursor-pointer" : ""
        }`}
      >
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={`${project.name} preview`}
            fill
            unoptimized
            sizes="(min-width: 768px) 50vw, 100vw"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        ) : project.nativeVideoSrc ? (
          <video
            src={project.nativeVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        ) : null}
        {project.behanceLink ? (
          <a
            href={project.behanceLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} on Behance`}
            className="absolute inset-0 z-20"
          />
        ) : null}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="mx-2 mt-3 flex items-start justify-between text-white">
        <div
          className={`${fraunces.className} flex flex-col items-start justify-between`}
        >
          <h3
            className={`text-[clamp(1.3rem,4vw,1.3rem)] font-[300] leading-[1] tracking-[-0.03em] text-[#A98BF8]`}
          >
            {project.name}
          </h3>
          <h3 className="font-sans text-base text-[#898798]">
            {project.subname}
          </h3>
        </div>
        {project.behanceLink ? (
          <a
            href={project.behanceLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
          >
            <span>More</span>
            <SquareArrowUpRightIcon />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <NavMenu />

      <section
        id="home"
        className="relative isolate mx-auto max-w-[980px] overflow-hidden bg-background pb-6 text-foreground lg:pb-0"
      >
        <div className="flex min-h-[calc(100svh-4rem)] w-full flex-col justify-center gap-10 lg:flex-row lg:items-center lg:gap-[3vw]">
          <div className="flex w-full flex-col items-center gap-y-[12px] text-center lg:w-1/2 lg:items-start lg:pr-6 lg:text-left">
            <div className="z-20 max-w-[26rem] font-sans text-[clamp(1.05rem,2.4vw,1.35rem)] leading-snug text-white/80">
              <p>
                <span className="text-[#898798]">Hi there!</span>
              </p>
            </div>
            <h1
              className={`${fraunces.className} pointer-events-none z-20 mb-3 w-full text-[clamp(1.9rem,4vw,3rem)] font-[300] leading-[1] tracking-[-0.03em] text-white`}
            >
              <span className="block whitespace-nowrap">
                I’m Hanna Gomozova
              </span>
              <span className="block whitespace-nowrap">
                a <span className="text-[#A98BF8]">Product Designer</span>
              </span>
              <span className="block whitespace-nowrap">
                focused on early-stage
              </span>
            </h1>
            <div className="z-20 max-w-[26rem] font-sans text-[clamp(1.05rem,2.4vw,1.35rem)] leading-snug text-[#898798] text-white/80">
              <p>
                I help turn early ideas into real products, shaping user flows,
                product direction, and experiences people actually use
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#about"
                className="mt-8 inline-flex min-h-[4rem] items-center justify-center rounded-full border border-[#A98BF8] bg-[#A98BF8] px-8 text-center font-sans text-[clamp(1rem,1vw,1rem)] uppercase tracking-[0.04em] text-white transition-colors duration-200 hover:bg-white hover:text-[#A98BF8]"
              >
                Resume
              </a>
              <a
                href="#about"
                className="mt-8 inline-flex min-h-[4rem] items-center justify-center rounded-full border border-[#A98BF8] px-8 text-center font-sans text-[clamp(1rem,1vw,1rem)] uppercase tracking-[0.04em] text-white transition-colors duration-200 hover:bg-white hover:text-[#A98BF8]"
              >
                LinkedIn
              </a>
              <a
                href="#about"
                className="mt-8 inline-flex min-h-[4rem] items-center justify-center rounded-full border border-[#A98BF8] px-8 text-center font-sans text-[clamp(1rem,1vw,1rem)] uppercase tracking-[0.04em] text-white transition-colors duration-200 hover:bg-white hover:text-[#A98BF8]"
              >
                Behance
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end lg:pl-6">
            <div className="relative flex w-full max-w-[clamp(17.5rem,32vw,25.5rem)] flex-col items-center">
              <div className="relative z-10 w-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                  <Image
                    src={portraitPhoto}
                    alt="Portrait of Hanna Gomozova"
                    fill
                    priority
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 24rem, 18rem"
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
        className="scroll-mt-16 bg-background px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-4"
      >
        <div className="mx-auto w-full max-w-[980px]">
          <header className="mb-6 md:mb-8">
            <div className="flex items-end gap-2 md:gap-2">
              <span
                className={`${fraunces.className} pointer-events-none z-20 mb-3 text-[clamp(1.9rem,4vw,3rem)] font-[300] leading-[1] tracking-[-0.03em] text-white`}
              >
                About
              </span>
              <span
                className={`${fraunces.className} pointer-events-none z-20 mb-3 text-[clamp(1.9rem,4vw,3rem)] font-[300] leading-[1] tracking-[-0.03em] text-[#A98BF8]`}
              >
                me
              </span>
            </div>
          </header>

          <div className="ml-auto pb-12 text-white md:pb-16">
            <div className="flex flex-col gap-2 font-sans text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed tracking-[-0.01em] text-[#898798] text-white/80">
              <p>
                I focus on bringing clarity to{" "}
                <span className="text-white">early-stage products</span>.
              </p>
              <p>
                I enjoy working through ambiguity, simplifying complex ideas,
                and designing experiences that feel natural and
                <span className="text-white"> easy to use</span>.
              </p>
              <p>
                I care about making things{" "}
                <span className="text-white">clear, useful, and grounded</span>{" "}
                in real use.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t border-white/20 py-8 md:flex-row md:gap-6">
            <div className="text-white/28 mb-4 font-sans text-[clamp(1.1rem,2.2vw,1.3rem)] font-semibold leading-none text-[#A98BF8] md:mb-0 md:w-[10rem] md:flex-shrink-0">
              Capabilities
            </div>
            <div className="max-w-[54rem] flex-1 font-sans text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-[#898798] text-white/80">
              I work across the full product lifecycle —{" "}
              <span className="text-white">
                from early ideas and product definition to design, testing and
                iteration
              </span>
              . I’m comfortable working closely with founders and engineers,
              helping shape products from concept to real use.
            </div>
          </div>

          <div className="flex flex-col border-t border-white/20 py-8 md:flex-row md:gap-6">
            <div className="text-white/28 mb-4 font-sans text-[clamp(1.1rem,2.2vw,1.3rem)] font-semibold leading-none text-[#A98BF8] md:mb-0 md:w-[10rem] md:flex-shrink-0">
              Expertise
            </div>
            <div className="flex flex-1 flex-col gap-6 font-sans text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-[#898798] text-white/80 md:flex-row md:gap-10">
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
      <section
        id="projects"
        className="scroll-mt-16 bg-background px-4 py-4 md:px-6 md:py-8 lg:px-8 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[980px]">
          <div
            className={`${fraunces.className} pointer-events-none z-20 mb-6 md:mb-8 text-[clamp(1.9rem,4vw,3rem)] font-[300] leading-[1] tracking-[-0.03em] text-white`}
          >
            Selected <span className="text-[#A98BF8]">works</span>
          </div>
          <div className="ml-auto pb-14 text-white md:pb-14">
            <div className="flex flex-col gap-2 font-sans text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed tracking-[-0.01em] text-[#898798] text-white/80">
              <p>
                A mix of product, UX, and visual work across different types of
                projects.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <ProjectCard project={projects[0]} isFullWidth />
            <div className="flex flex-col flex-wrap gap-6 md:flex-row">
              {projects.slice(1).map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="contacts"
        className="scroll-mt-16 bg-background px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12"
      >
        <div className="mx-auto w-full max-w-[980px]">
          <header className="mb-4 md:mb-4">
            <div
              className={`${fraunces.className} pointer-events-none z-20 mb-3 text-[clamp(1.9rem,4vw,3rem)] font-[300] leading-[1] tracking-[-0.03em] text-white`}
            >
              Get in <span className="text-[#A98BF8]">touch</span>
            </div>
          </header>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <ContactPill action={emailAction} />
            <div className="flex items-center gap-4">
              {socialActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={action.label}
                  className="text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <Image
                    src={socialIcons[action.label]}
                    alt={`${action.label} icon`}
                    className="h-6 w-6 brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
