"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    id: "insights",
    label: "Read Insights",
    icon: "/icons/ads-management.svg",
    title: "Read Insights",
    description:
      "Our services help you stay ahead of the competition by turning raw data into meaningful information that drives strategic decisions.",
    link: "/insights",
    image: "/images/overview.svg",
  },
  {
    id: "investment",
    label: "Ads Investment Control",
    icon: "/icons/investment.svg",
    title: "Ads Investment Control",
    description:
      "We ensures that your ad spend is allocated efficiently, optimized continuously, and aligned with your business objectives.",
    link: "/personalized-strategies",
    image: "/images/adscampaignresult.svg",
  },
  {
    id: "management",
    label: "Ads Management",
    icon: "/icons/insights.svg",
    title: "Ads Management",
    description:
      "Our goal is to help you maximize your advertising ROI by leveraging our expertise, innovative strategies, and advanced tools.",
    link: "/ads-management",
    image: "/images/adsperformance.svg",
  },
];

export function FeaturesTabSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-wider text-woortec-text uppercase">
            Control in one place
          </p>
          <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
            Simple, yet powerful features
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 rounded-xl px-6 py-4 transition-all ${
                activeTab === tab.id
                  ? "bg-neutral-200 shadow-sm"
                  : "hover:bg-neutral-200/50"
              }`}
            >
              <Image src={tab.icon} alt="" width={40} height={40} />
              <span className="text-sm font-medium text-black">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-black">
              {active.title}
            </h3>
            <p className="text-neutral-600">{active.description}</p>
            <Link
              href={active.link}
              className="inline-flex items-center gap-2 font-semibold text-woortec-text transition-colors hover:text-woortec-solid"
            >
              Read more
              <Image
                src="/icons/arrow-color.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
          </div>
          <div>
            <Image
              src={active.image}
              alt={active.title}
              width={552}
              height={400}
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
