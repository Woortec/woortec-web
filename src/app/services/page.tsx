"use client";

import { useState } from "react";
import Image from "next/image";

interface PricingTier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlyLabel: string;
  monthlyLabel: string;
  description: string;
  features: string[];
  cta: string;
  illustration: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: "FREE",
    yearlyPrice: "FREE",
    monthlyLabel: "/month",
    yearlyLabel: "/year",
    description:
      "Want access to valuable insights without the complexities of platform intricacies? Woortec's Starter Level is your solution.",
    features: [
      "Access to the Platform",
      "Access to Dynamic Reports",
      "Immediate access to Essential Data",
      "Access to Event Calendar",
    ],
    cta: "Subscribe",
    illustration: "/images/person-asset.svg",
  },
  {
    name: "Basic",
    monthlyPrice: "$29.99",
    yearlyPrice: "$24.99",
    monthlyLabel: "/month",
    yearlyLabel: "/month",
    description:
      "Looking for more depth in your advertising analytics? Let us simplify the complexities of ad performance analysis. Say goodbye to navigating confusing platforms and let us guide you.",
    features: [
      "Daily Report",
      "Performance Optimization",
      "Event Calendar Alerts",
      "In-depth Ad Analysis",
    ],
    cta: "Upgrade",
    illustration: "/images/illustration.svg",
  },
  {
    name: "Essential",
    monthlyPrice: "+$19.99",
    yearlyPrice: "+$16.66",
    monthlyLabel: "/month",
    yearlyLabel: "/month",
    description:
      "Ready to take control of your advertising with a proven and personalized strategy? We offer a customized approach designed to empower you to execute confidently and drive success.",
    features: [
      "Personalized Advertising Roadmap",
      "Objective Definition and Alignment",
      "Strategy Adaptations and Updates",
      "Detailed Performance Analytics",
      "Budget Forecasting and Control",
      "Buyer Persona Generator",
    ],
    cta: "Upgrade",
    illustration: "/images/person-asset.svg",
  },
  {
    name: "Advanced",
    monthlyPrice: "+$19.99",
    yearlyPrice: "+$16.66",
    monthlyLabel: "/month",
    yearlyLabel: "/month",
    description:
      "Ready to elevate your advertising to new heights? With this Level, we assume full control, providing full-service management to meticulously plan, set up, and optimize your campaigns for maximum impact.",
    features: [
      "Full-Service Advertising Management",
      "Monthly Performance Reports",
      "Ad Placement and Scheduling",
      "Budget Management",
      "Performance Monitoring and Optimization",
      "Complete Campaign Documentation",
    ],
    cta: "Upgrade",
    illustration: "/images/illustration.svg",
  },
];

export default function ServicesPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const tier = pricingTiers[activeTab];

  return (
    <main
      className="pb-16"
      style={{
        backgroundImage: "linear-gradient(#fff, #b7f8db 70%, #fff 101%)",
      }}
    >
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <div className="mb-14 text-center">
            <h1 className="font-heading text-[55px] font-semibold leading-tight text-woortec-text">
              Our Subscription Plan
            </h1>

            {/* Toggle */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-black" : "text-neutral-400"
                }`}
              >
                Yearly
              </span>
              <label className="relative inline-flex cursor-pointer">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={!isYearly}
                  onChange={() => setIsYearly((prev) => !prev)}
                />
                <div className="h-7 w-[52px] rounded-full bg-[#cfcfcf] transition-colors after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform after:content-[''] peer-checked:bg-woortec-text peer-checked:after:translate-x-6" />
              </label>
              <span
                className={`text-sm font-medium ${
                  !isYearly ? "text-black" : "text-neutral-400"
                }`}
              >
                Monthly
              </span>
            </div>
          </div>

          {/* Content: Tabs left + Card right */}
          <div className="grid items-start gap-10 md:grid-cols-[240px_1fr]">
            {/* Left: Vertical tabs + Note */}
            <div className="relative">
              <div className="space-y-2">
                {pricingTiers.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActiveTab(i)}
                    className={`block w-full px-1 py-3 text-left text-2xl font-semibold transition-colors ${
                      activeTab === i
                        ? "border-b-3 border-woortec-text text-black"
                        : "text-[#5e727d]/50 hover:text-[#5e727d]"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              {/* Note */}
              <div className="mt-8 border-t border-black/20 pt-5">
                <p className="max-w-[30ch] text-sm leading-relaxed text-[#3339]">
                  Please note that in order to upgrade to a higher plan, you need
                  to be subscribed to lower plans. This ensures you gain access
                  to the enhanced features and benefits available at each tier.
                </p>
              </div>
            </div>

            {/* Right: Active Plan Card */}
            <div
              className="relative overflow-hidden rounded-[25px] p-[18px_80px_72px]"
              style={{
                backgroundColor: "#4e2d921c",
                boxShadow: "0 90px 90px -50px #4e2d9263",
              }}
            >
              {/* Price */}
              <div className="mb-2 pt-4">
                <h2 className="font-heading text-[61px] font-bold text-woortec-text">
                  {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  <span className="text-[22px] font-normal text-[#5e727d]">
                    {isYearly ? tier.yearlyLabel : tier.monthlyLabel}
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="mb-8 max-w-xl leading-relaxed text-[#5e727d]">
                {tier.description}
              </p>

              {/* Features - 2 column grid */}
              <div className="mb-5 grid min-h-[150px] max-w-xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-[#5e727d]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://app.woortec.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-[#f9f2ff] px-8 py-3 text-center text-sm font-medium text-[#4e2d92] transition-all hover:shadow-lg"
              >
                {tier.cta}
              </a>

              {/* Illustration - positioned on the right */}
              <div className="pointer-events-none absolute bottom-0 right-0 hidden md:block">
                <Image
                  src={tier.illustration}
                  alt=""
                  width={200}
                  height={300}
                  className="h-[300px] w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Terms note */}
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs font-semibold italic text-[#5e727d]">
            By accessing or using the Service you agree to be bound by our Terms
            and Condition of use. If you disagree with any part of the terms then
            you may not access the Service
          </p>
        </div>
      </section>
    </main>
  );
}
