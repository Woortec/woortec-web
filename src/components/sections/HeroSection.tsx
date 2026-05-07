import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24">
      {/* Background decorations */}
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
        {/* Text */}
        <div className="flex-1 space-y-6">
          <h1 className="font-heading text-4xl leading-tight font-bold text-black md:text-5xl lg:text-6xl">
            Maximize impact, minimize spend with Woortec
          </h1>
          <p className="max-w-lg text-lg text-slate-grey">
            At <strong>Woortec</strong>, we organize the{" "}
            <span className="font-semibold text-woortec-text">
              advertising investment
            </span>{" "}
            process, with our integrated platform designed to{" "}
            <span className="text-woortec-text">simplify ad management</span>,
            providing you with a{" "}
            <span className="text-woortec-text">centralized hub</span> for all
            your campaigns.
          </p>
          <a
            href="https://app.woortec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-woortec px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec-solid"
          >
            Get Started
          </a>
        </div>

        {/* Hero Image */}
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
