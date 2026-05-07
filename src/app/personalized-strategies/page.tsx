import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Personalized Strategy - Woortec",
  description:
    "Tailored solutions to maximize your campaign's potential with Woortec's personalized advertising strategies.",
  openGraph: {
    title: "Personalized Strategy",
    description:
      "Tailored solutions to maximize your campaign's potential with Woortec's personalized advertising strategies.",
  },
  twitter: {
    title: "Personalized Strategy",
    description:
      "Tailored solutions to maximize your campaign's potential with Woortec's personalized advertising strategies.",
  },
};

const features = [
  {
    icon: "/icons/indepth-analysis.svg",
    title: "In-Depth Campaign Analysis",
    description:
      "Our platform analyzes your ad performance, taking into account key metrics such as reach, click-through rates, and conversions. This data forms the foundation of a tailored strategy designed to boost engagement.",
  },
  {
    icon: "/icons/recommendation.svg",
    title: "Customized Recommendations",
    description:
      "Based on your performance data, we provide personalized recommendations to enhance your ad campaigns. From optimizing budgets to targeting specific audiences, our goal is to help you maximize every ad dollar spent.",
  },
  {
    icon: "/icons/realtime.svg",
    title: "Real-Time Adjustments",
    description:
      "With live tracking of your campaign's results, you can make immediate changes to your strategy. Whether it's reallocating budget to high-performing ads or fine-tuning audience segments, you stay in control.",
  },
  {
    icon: "/icons/report.svg",
    title: "Strategic Performance Reports",
    description:
      "Access a detailed breakdown of your ad campaign's results through our dynamic dashboard, highlighting areas of success and opportunities for improvement. Each report is tailored to your specific needs and goals.",
  },
];

export default function PersonalizedStrategiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-heading text-3xl font-bold text-black md:text-5xl">
                Personalized Strategy
              </h1>
              <p className="text-neutral-600">
                Tailored solutions to maximize your campaign&apos;s potential.
              </p>
              <p className="text-neutral-600">
                At Woortec, we understand that every business is unique, and so
                are its advertising needs. That&apos;s why we focus on delivering
                personalized strategies that align with your business objectives.
                By utilizing our platform, you gain access to customizable
                insights and performance metrics that allow you to make
                data-driven decisions in real time.
              </p>
            </div>
            <div>
              <Image
                src="/images/adscampaignresult.svg"
                alt="Personalized Strategy Dashboard"
                width={600}
                height={450}
                className="w-full"
              />
            </div>
          </div>
        </div>
        {/* Background blob decoration */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 opacity-10">
          <Image
            src="/images/blob.svg"
            alt=""
            width={500}
            height={500}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-black md:text-4xl">
              How Personalized Strategy Works
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-5 rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="shrink-0">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-40">
        <Image
          src="/images/adscampaignresult.svg"
          alt=""
          width={1200}
          height={800}
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-400 bg-white p-10 text-center shadow-lg md:p-16">
            <h2 className="font-heading mb-4 text-3xl font-bold text-black md:text-4xl">
              Take your advertising with personalized approach that adapts to
              your needs.
            </h2>
            <p className="mb-8 text-neutral-600">
              Discover how Woortec can help you implement a strategy that
              delivers results.
            </p>
            <a
              href="https://app.woortec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-woortec-solid px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
