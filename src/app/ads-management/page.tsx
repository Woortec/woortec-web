import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ads Management - Woortec",
  description:
    "Real-time insights for better ad management. Track your ads' key metrics with Woortec's Ads Performance Dashboard.",
  openGraph: {
    title: "Ads Management",
    description:
      "Real-time insights for better ad management. Track your ads' key metrics with Woortec's Ads Performance Dashboard.",
  },
  twitter: {
    title: "Ads Management",
    description:
      "Real-time insights for better ad management. Track your ads' key metrics with Woortec's Ads Performance Dashboard.",
  },
};

const metrics = [
  {
    number: "01",
    title: "Cost-Per-Thousand Impressions (CPM)",
    description:
      "Get insights into how much you're spending to reach 1,000 potential customers. A green indicator means your CPM is within the optimal range, while red indicates a higher-than-expected cost, signaling the need for budget adjustments.",
  },
  {
    number: "02",
    title: "Cost-Per-Click (CPC)",
    description:
      "Monitor how much you're paying for each click on your ads. A green indicator shows that your CPC is low and your campaign is efficient. If it turns red, it suggests your ads may need tweaking to attract better engagement at a lower cost.",
  },
  {
    number: "03",
    title: "Impressions",
    description:
      "See how many times your ads are being displayed to your target audience. Impressions provide a measure of reach. Green indicates healthy visibility, while red suggests underperformance and a need to adjust targeting.",
  },
  {
    number: "04",
    title: "Ad Spend",
    description:
      "Stay on top of your budget with a real-time overview of how much you've spent. Green indicates efficient budget use, while red signals overspending or inefficient use of your resources.",
  },
];

const colorInsights = [
  {
    color: "text-green-600",
    label: "Green",
    description:
      "means your ad metrics are on track, helping you stay confident in your current strategy.",
  },
  {
    color: "text-black",
    label: "Black",
    description:
      "indicates that your performance is at a normal level, providing a baseline where no immediate changes are needed but improvements can still be made.",
  },
  {
    color: "text-red-600",
    label: "Red",
    description:
      "signals underperformance, giving you actionable insights to adjust your ads and improve results.",
  },
];

export default function AdsManagementPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-heading text-3xl font-bold text-black md:text-5xl">
                Ads Performance Dashboard
              </h1>
              <p className="text-neutral-600">
                Real-time insights for better ad management.
              </p>
              <p className="text-neutral-600">
                Managing your ad campaigns effectively requires the right data at
                your fingertips. Our Ads Performance Dashboard provides an
                easy-to-understand, visual representation of your ad
                campaigns&apos; key metrics, allowing you to quickly assess
                whether your ads are performing well or need adjustments.
              </p>
            </div>
            <div>
              <Image
                src="/images/adsperformance.svg"
                alt="Ads Performance Dashboard"
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

      {/* Key Metrics Section */}
      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-center">
            <h2 className="font-heading text-2xl font-bold text-black md:text-4xl">
              Track Your Ads&apos; Key Metrics
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
              With color-coded indicators, it&apos;s easy to know when your
              campaigns are performing well or require adjustments
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.number} className="space-y-3 text-center">
                <p className="font-heading text-3xl font-bold text-woortec-text">
                  {metric.number}
                </p>
                <h3 className="font-heading text-lg font-bold text-black">
                  {metric.title}
                </h3>
                <p className="text-sm text-neutral-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color-Coded Insights Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-black md:text-4xl">
              Optimize Performance with Color-Coded Insights
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
              With color-coded indicators, it&apos;s easy to know when your
              campaigns are performing well, are at a normal level, or require
              adjustments
            </p>
          </div>
          <div className="mx-auto mb-12 max-w-3xl">
            <Image
              src="/images/adset.svg"
              alt="Ad Set Performance Table"
              width={800}
              height={400}
              className="w-full"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {colorInsights.map((insight) => (
              <div key={insight.label} className="text-center">
                <p className="text-neutral-600">
                  <span className={`font-bold ${insight.color}`}>
                    {insight.label}
                  </span>{" "}
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-40">
        <Image
          src="/images/adsperformance.svg"
          alt=""
          width={1200}
          height={800}
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-400 bg-white p-10 text-center shadow-lg md:p-16">
            <h2 className="font-heading mb-4 text-3xl font-bold text-black md:text-4xl">
              Make data-driven decisions and improve your ad campaigns in real
              time
            </h2>
            <p className="mb-8 text-neutral-600">
              Discover how the Ads Performance Dashboard empowers you to
              optimize your advertising strategy.
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
