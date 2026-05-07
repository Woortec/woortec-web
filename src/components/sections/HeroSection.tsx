import Image from "next/image";

type HeroCopy = {
  title: string;
  description: string;
  cta: string;
};

type HeroSectionProps = {
  copy: HeroCopy;
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24">
      <Image
        src="/images/abstract-design.svg"
        alt=""
        width={800}
        height={800}
        className="absolute top-0 right-0 -z-10 opacity-50"
        aria-hidden="true"
      />
      <Image
        src="/images/hero-bg.svg"
        alt=""
        width={600}
        height={600}
        className="absolute top-20 right-0 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
        <div className="flex-1 space-y-6">
          <h1 className="font-heading text-4xl leading-tight font-bold text-black md:text-5xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="max-w-lg text-lg text-slate-grey">
            {copy.description}
          </p>
          <a
            href="https://app.woortec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-woortec px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec-solid"
          >
            {copy.cta}
          </a>
        </div>

        <div className="flex-1">
          <Image
            src="/images/hero.svg"
            alt="Woortec platform illustration"
            width={600}
            height={500}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
