import behanceIcon from "@/assets/images/behance.svg";
import instagramIcon from "@/assets/images/instagram.svg";
import linkedinIcon from "@/assets/images/linkedin.svg";

import styles from "./home/headerHero.module.css";

import type { StaticImageData } from "next/image";

type ContactAction = {
  href: string;
  label: string;
  external?: boolean;
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
  },
  {
    href: "https://www.behance.net/hanna_gomozova",
    label: "Behance",
    external: true,
  },
  {
    href: "https://www.instagram.com/hanna_uiux",
    label: "Instagram",
    external: true,
  },
];

const socialIcons: { [key: string]: string | StaticImageData } = {
  LinkedIn: linkedinIcon,
  Behance: behanceIcon,
  Instagram: instagramIcon,
};

function ContactPill({ action }: Readonly<{ action: ContactAction }>) {
  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className="group flex items-center justify-start text-center md:justify-center"
    >
      <span className="inline-flex items-center justify-center gap-2 font-sans text-[clamp(1rem,3.8vw,1.25rem)] tracking-[-0.03em] text-secondary transition-colors duration-200 group-hover:text-accent">
        <span>{action.label}</span>
      </span>
    </a>
  );
}

function SocialIcon({
  icon,
  label,
}: Readonly<{ icon: string | StaticImageData; label: string }>) {
  const iconSrc = typeof icon === "string" ? icon : icon.src;

  return (
    <span
      aria-hidden="true"
      title={label}
      className="block h-6 w-6 bg-accent transition-colors duration-200 group-hover:bg-foreground"
      style={{
        WebkitMaskImage: `url(${iconSrc})`,
        maskImage: `url(${iconSrc})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="homepage-section scroll-mt-16 bg-background px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[980px]">
        <header className="mb-4 md:mb-4">
          <div
            className={`${styles.sectionHeading} pointer-events-none z-20 mb-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1] tracking-[-0.03em] text-foreground`}
          >
            Get in <span className="text-accent">touch</span>
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
                className="group transition-colors duration-200"
              >
                <SocialIcon
                  icon={socialIcons[action.label]}
                  label={action.label}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
