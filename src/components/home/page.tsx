import Image from "next/image";

import portraitPhoto from "../../assets/images/photo.png";
import NavMenu from "../navMenu";

export default function HomePage() {
  return (
    <>
      <NavMenu />

      <section
        id="home"
        className="relative isolate h-[100svh] min-h-screen overflow-hidden bg-background pt-16 text-foreground"
      >
        <div className="mx-auto flex min-h-[calc(100svh-2rem)] w-full flex-col items-center justify-center px-6 md:px-10 lg:px-16">
          <div className="relative flex w-full flex-col items-center pt-[2vw]">
            <h1 className="font-neue-montreal pointer-events-none absolute left-1/2 top-[-4vw] z-20 w-full -translate-x-1/2 px-2 text-center text-[8vw] leading-[0.9] tracking-[-0.06em] text-white">
              Hanna Gomozova
            </h1>
            <div className="relative flex w-full max-w-[19rem] flex-col items-center md:max-w-[25rem] lg:max-w-[30rem]">
              <div className="relative z-10 w-full">
                <div
                  className="font-neue-montreal text-white/72 absolute left-full top-1/2 z-20 ml-4 -translate-y-1/2 md:ml-6 lg:ml-8"
                  style={{
                    width: "clamp(5.5rem, 18vw, 16rem)",
                    fontSize: "clamp(0.55rem, 1.3vw, 2rem)",
                    lineHeight: "1.35",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </div>
                <div className="absolute inset-0 z-0 overflow-visible">
                  <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute left-1/2 top-1/2 h-[220vh] w-px -translate-x-1/2 -translate-y-1/2 bg-white/20" />
                    <div className="absolute right-0 top-1/2 h-px w-[85vw] -translate-y-1/2 bg-white/20" />
                    <div className="absolute right-0 top-1/2 h-px w-[25vw] origin-right -translate-y-1/2 rotate-[25deg] bg-white/20" />
                    <div className="absolute right-0 top-1/2 h-px w-[25vw] origin-right -translate-y-1/2 -rotate-[25deg] bg-white/20" />
                  </div>
                </div>
                <div className="relative aspect-[3/3] w-full overflow-hidden rounded-md">
                  <Image
                    src={portraitPhoto}
                    alt="Portrait of Hanna Gomozova"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="font-pp-editorial-new text-white/72 mt-8 text-center text-[3vw] italic leading-[0.9]">
              <p>UX/UI designer</p>
              <p>based in San Francisco</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex scroll-mt-16 justify-end bg-background px-6 md:px-10 lg:px-16">
        <div
          className="flex-end font-neue-montreal text-white/72 flex w-full max-w-[36rem] self-end text-right"
          style={{
            fontSize: "clamp(0.55rem, 26px, 4rem)",
            lineHeight: "1.25",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
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
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]" />
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]" />
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]" />
            <div className="h-[280px] rounded-md border border-white/20 bg-white/[0.03]" />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-16 bg-background px-6 py-6 md:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="font-neue-montreal mb-6 text-sm uppercase tracking-[0.18em] text-white/60">
            ABOUT
          </div>
          <div className="h-[420px] w-full rounded-md border border-white/20 bg-white/[0.03]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="scroll-mt-16 bg-background px-6 py-6 md:px-10 lg:px-16"
      >
        <div className="mx-auto w-full">
          <div className="relative h-[560px] w-full overflow-hidden rounded-md">
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
        </div>
      </section>
    </>
  );
}
