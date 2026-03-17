import Image from "next/image";
import portraitPhoto from "../../assets/images/photo.png";

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center px-6 md:px-10 lg:px-16">
        <div className="relative flex w-full flex-col items-center pt-[2vw]">
          <h1 className="font-neue-montreal pointer-events-none absolute left-1/2 top-[-3vw] z-20 w-full -translate-x-1/2 px-2 text-center text-[8vw] leading-[0.9] tracking-[-0.06em] text-white">
            Hanna Gomozova
          </h1>
          <div className="relative flex w-full max-w-[19rem] flex-col items-center md:max-w-[25rem] lg:max-w-[30rem]">
            <div className="relative z-10 w-full">
              <div className="absolute inset-0 z-0 overflow-visible">
                <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute left-1/2 top-1/2 h-[220vh] w-px -translate-x-1/2 -translate-y-1/2 bg-white/20" />
                  <div className="absolute right-0 top-1/2 h-px w-[85vw] -translate-y-1/2 bg-white/20" />
                  <div className="absolute right-0 top-1/2 h-px w-[25vw] origin-right -translate-y-1/2 rotate-[25deg] bg-white/20" />
                  <div className="absolute right-0 top-1/2 h-px w-[25vw] origin-right -translate-y-1/2 -rotate-[25deg] bg-white/20" />
                </div>
              </div>
              <div className="relative aspect-[3/3] w-full overflow-hidden">
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

          <div className="mt-8 text-center font-pp-editorial-new text-[3vw] italic leading-[0.9] text-white/72">
            <p>UX/UI designer</p>
            <p>based in San Francisco</p>
          </div>
        </div>
      </div>
    </section>
  );
}
