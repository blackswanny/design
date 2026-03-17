import Image from "next/image";
import portraitPhoto from "../../assets/images/photo.png";

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-[1720px] flex-col px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 md:px-12 lg:px-16 lg:pb-20 lg:pt-16 xl:px-20">
        <div className="relative flex flex-1 flex-col justify-center">
          <div className="absolute left-1/2 top-1/2 hidden h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-3xl lg:block" />

          <div className="relative flex flex-col items-center gap-8 lg:min-h-[44rem] lg:justify-center">
            <div className="relative flex w-full justify-center">
              <h1 className="italic tracking-[2px] font-pp-editorial-new pointer-events-none absolute left-1/2 top-[7%] z-20 w-max -translate-x-1/2 whitespace-nowrap px-3 text-center text-[clamp(2.4rem,12vw,7.4rem)] font-light leading-[0.9] tracking-[-0.06em] text-white sm:top-[8%] md:top-[9%] lg:top-[10%]">
                Hanna Gomozova
              </h1>

              <div className="relative z-10 w-full max-w-[18rem] overflow-hidden   pt-14 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:max-w-[21rem] sm:pt-16 md:max-w-[24rem] md:pt-20 lg:max-w-[26rem] lg:pt-24">
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={portraitPhoto}
                    alt="Portrait of Hanna Gomozova"
                    fill
                    priority
                    style={{
                      top: "clamp(10px, 8%, 50px)",
                    }}
                    sizes="(min-width: 1280px) 416px, (min-width: 1024px) 380px, (min-width: 768px) 45vw, 80vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[70px]"></div>
          <p
            style={{
              position: "absolute",
              bottom: "0",
              zIndex: "100",
            }}
            className="text-left !text-[45px] italic tracking-[1px] !leading-none text-white/72 md:text-base lg:absolute lg:bottom-2 lg:left-0 lg:mt-0"
          >
            UX/UI designer
            <br />
            based in San Francisco
          </p>
        </div>
      </div>
    </section>
  );
}
