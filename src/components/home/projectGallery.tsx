import Image from "next/image";
import Link from "next/link";

import ArrowUpRight from "../arrowUpRight";
import styles from "./projectGallery.module.css";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  description?: string;
  tags: readonly string[];
  imageSrc?: string;
  videoSrc?: string;
  href?: string;
  featured?: boolean;
};

const projects: readonly Project[] = [
  {
    id: "workreactor",
    name: "WorkReactor",
    subtitle: "Social network and workspace for founders",
    description:
      "A 0→1 product that helps founders connect, collaborate, and move ideas forward. I led the design from early research to a working product, creating a cohesive experience across discovery, profiles, and project collaboration.",
    tags: ["Product Design", "UX/UI", "Research", "0→1"],
    imageSrc: "/images/wr.png",
    href: "https://www.behance.net/gallery/246318193/Work-Reactor-Startup-Platform-(Web-Mobile)",
    featured: true,
  },
  {
    id: "mindscape",
    name: "MindScape",
    subtitle: "Personalized onboarding for mental health support",
    description:
      "A mobile app concept that helps users find the right type of support through a thoughtful, human-centered onboarding experience.",
    tags: ["UX/UI", "Product Strategy", "Mobile", "Research"],
    videoSrc: "/videos/mindscape.mp4",
    href: "/projects/mindscape",
    featured: true,
  },
  {
    id: "dove-closet",
    name: "Dove Closet",
    subtitle: "Online store for curated fashion",
    description:
      "A clean and elegant e-commerce experience with a focus on simplicity, visual storytelling, and a smooth shopping flow.",
    tags: ["UX/UI", "E-commerce", "Brand"],
    videoSrc: "/videos/shop.mp4",
    href: "https://www.behance.net/gallery/211201181/DAFF",
  },
  {
    id: "groove-avenue",
    name: "Groove Avenue",
    subtitle: "Website for a music band",
    description:
      "A vibrant and immersive website that elevates the band's identity through visuals, motion, and sound.",
    tags: ["UX/UI", "Web Design", "Animation"],
    videoSrc: "/videos/music.mp4",
    href: "https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience",
  },
  {
    id: "bee",
    name: "Bee",
    subtitle: "Book for Designers",
    tags: [],
    videoSrc: "/videos/bee.mp4",
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const internal = Boolean(project.href?.startsWith("/"));
  const ProjectLink = internal ? Link : "a";
  const media = (
    <>
      {project.imageSrc ? (
        <Image
          src={project.imageSrc}
          alt={`${project.name} product preview`}
          fill
          unoptimized
          sizes="(min-width: 1632px) 800px, (min-width: 760px) 60vw, 100vw"
          className={styles.asset}
        />
      ) : (
        <video
          src={project.videoSrc}
          aria-label={`${project.name} product preview`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.asset}
        />
      )}
      {project.href && !project.featured && (
        <span className={styles.mediaArrow} aria-hidden="true">
          <ArrowUpRight />
        </span>
      )}
    </>
  );

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : styles.compact}`}
      aria-labelledby={`${project.id}-heading`}
      data-project={project.id}
    >
      <div className={styles.copy}>
        <div className={styles.number} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 id={`${project.id}-heading`} className={styles.title}>
          {project.name}
        </h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}
        {project.tags.length > 0 && (
          <ul className={styles.tags} aria-label="Design disciplines">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        {project.href && (
          <ProjectLink
            href={project.href}
            target={internal ? undefined : "_blank"}
            rel={internal ? undefined : "noreferrer"}
            className={styles.caseLink}
            aria-label={`View ${project.name} case study`}
          >
            View case study <ArrowUpRight />
          </ProjectLink>
        )}
      </div>
      {project.href ? (
        <ProjectLink
          href={project.href}
          target={internal ? undefined : "_blank"}
          rel={internal ? undefined : "noreferrer"}
          className={styles.media}
          aria-label={`Open ${project.name} project`}
        >
          {media}
        </ProjectLink>
      ) : (
        <div className={styles.media}>{media}</div>
      )}
    </article>
  );
}

export default function ProjectGallery() {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
