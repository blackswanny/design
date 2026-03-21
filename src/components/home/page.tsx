"use client";

import Image from "next/image";

import portraitPhoto from "../../assets/images/photo.png";
import NavMenu from "../navMenu";

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
  {
    href: "https://www.instagram.com/hannagomozova",
    label: "Instagram",
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
      <path d="M6.94 8.5H3.56V20h3.38zm.22-5.14a2.03 2.03 0 0 0-2.1-2.02 2.03 2.03 0 0 0-2.06 2.02c0 1.13.9 2.03 2.06 2.03a2.05 2.05 0 0 0 2.1-2.03M20 12.28C20 9.27 18.11 8 15.67 8c-1.53 0-2.21.84-2.59 1.43V8.5H9.84c.04.62 0 11.5 0 11.5h3.24v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.87 1.04 1.87 2.57V20H20z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M8.25 11.25a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5h-2.5zM16.5 4.5H7.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3zM7.5 6h2.25a2.25 2.25 0 0 1 0 4.5H7.5v-4.5zm2.25 9H7.5v-3h2.25a1.5 1.5 0 0 1 0 3zm6-3.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

const socialIcons: { [key: string]: React.ReactNode } = {
  LinkedIn: <LinkedInIcon />,
  Behance: <BehanceIcon />,
  Instagram: <InstagramIcon />,
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

function HeroImageDecoration() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-visible">
      <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute right-0 top-1/2 h-px w-[85vw] -translate-y-1/2 bg-white/20" />
        <div className="absolute right-0 top-1/2 h-px w-[45vw] origin-right -translate-y-1/2 rotate-[25deg] bg-white/20" />
        <div className="absolute right-0 top-1/2 h-px w-[45vw] origin-right -translate-y-1/2 -rotate-[25deg] bg-white/20" />
      </div>
    </div>
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
    name: "Don't push the horses",
    imageSrc: "/images/wr.png",
    behanceLink: "https://www.behance.net/",
  },
  {
    name: "MindScape",
    subname: "Mental Health Support App",
    nativeVideoSrc: "/videos/mindscape.mp4",
    behanceLink: "https://www.behance.net/",
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
        <div className="flex flex-col items-start justify-between">
          <h3 className="font-sans text-base text-white/90">{project.name}</h3>
          <h3 className="font-sans text-base text-white/90">
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
        className="relative isolate mx-auto max-w-[800px] overflow-hidden bg-background px-6 pb-4 pt-28 text-foreground md:px-10 md:pt-32 lg:px-16 lg:pb-0 lg:pt-16"
      >
        <div className="flex w-full flex-col items-center justify-start lg:min-h-[calc(100svh-4rem)] lg:justify-center">
          <div className="relative flex w-full flex-col items-center">
            <h1 className="pointer-events-none z-20 mb-3 w-full px-2 text-center text-[clamp(2.5rem,8vw,6rem)] font-light leading-[0.9] tracking-[-0.06em] text-white md:mb-4 lg:mb-3">
              Hanna Gomozova
            </h1>
            <div className="z-20 mb-8 text-center font-sans text-[clamp(1rem,2.2vw,1.25rem)] leading-snug text-white/80 md:mb-10">
              <p>
                <span className="text-white">Product Designer</span> based in
                San Francisco
              </p>
            </div>
            <div className="relative flex w-full max-w-[clamp(16rem,50vw,22.5rem)] flex-col items-center">
              <div className="relative z-10 w-full">
                <HeroImageDecoration />
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
        className="scroll-mt-16 bg-background px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[800px]">
          <header className="mb-10 md:mb-14">
            <div className="flex items-end gap-3 md:gap-5">
              <h2 className="text-white/72 mt-5 text-[clamp(2.5rem,8vw,5rem)] font-light italic leading-[0.9] tracking-[-0.06em]">
                About
              </h2>
              <h2 className="font-sans text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[0.86] tracking-[-0.06em] text-white">
                me
              </h2>
            </div>
          </header>

          <div className="ml-auto pb-12 text-white md:pb-16">
            <div className="flex flex-col gap-6 font-sans text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed tracking-[-0.01em] text-white/80">
              <p>
                I am a <span className="text-white">Product Designer</span> with
                over 5 years of experience, focused on solving complex problems
                with intuitive, user-centered solutions.
              </p>
              <p>
                I combine <span className="text-white">UX thinking</span> and
                data to create clean, functional, and impactful products that
                balance user needs with business goals.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t border-white/20 py-8 md:flex-row md:gap-6">
            <div className="text-white/28 mb-4 font-sans text-[clamp(1.1rem,2.2vw,1.3rem)] font-semibold leading-none md:mb-0 md:w-[10rem] md:flex-shrink-0">
              Capabilities
            </div>
            <div className="max-w-[54rem] flex-1 font-sans text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-white/80">
              My toolkit includes{" "}
              <span className="text-white">
                Figma, Photoshop, Illustrator, and After Effects
              </span>
              . I continuously adapt to new tools and methodologies to ensure
              high-quality results.
            </div>
          </div>

          <div className="flex flex-col border-t border-white/20 py-8 md:flex-row md:gap-6">
            <div className="text-white/28 mb-4 font-sans text-[clamp(1.1rem,2.2vw,1.3rem)] font-semibold leading-none md:mb-0 md:w-[10rem] md:flex-shrink-0">
              Expertise
            </div>
            <div className="flex flex-1 flex-col gap-6 font-sans text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-white/80 md:flex-row md:gap-10">
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
        className="scroll-mt-16 bg-background px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[800px]">
          <div className="mb-6 font-sans text-sm uppercase tracking-[0.18em] text-white/60">
            PROJECTS
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
        className="scroll-mt-16 bg-background px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[800px]">
          <header className="mb-10 md:mb-14">
            <h2 className="text-white/72 font-sans text-[clamp(2.5rem,8vw,5rem)] font-light italic leading-[0.9] tracking-[-0.06em]">
              Get in touch
            </h2>
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
                  {socialIcons[action.label]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
