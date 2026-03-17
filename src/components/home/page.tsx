import Image from "next/image";
import portraitPhoto from "../../assets/images/photo.png";

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center px-6 md:px-10 lg:px-16">
        <div className="relative flex w-full flex-col items-center">
          <h1 className="font-pp-editorial-new pointer-events-none absolute left-1/2 top-[3%] z-20 w-full -translate-x-1/2 px-2 text-center text-[8vw] italic leading-[0.9] tracking-[-0.06em] text-white">
            Hanna Gomozova
          </h1>
          <div className="relative flex w-full max-w-[19rem] flex-col items-center md:max-w-[25rem] lg:max-w-[30rem]">
            <div className="relative z-10 w-full pt-[16vw] md:pt-[13vw] lg:pt-[6.5vw]">
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
