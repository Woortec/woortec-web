"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/locale";

type FeaturesTabSectionProps = {
  locale: Locale;
};

export function FeaturesTabSection({ locale }: FeaturesTabSectionProps) {
  const tabs = useMemo(
    () => [
      {
        id: "insights",
        label: locale === "es" ? "Ver insights" : "Read Insights",
        icon: "/icons/ads-management.svg",
        title: locale === "es" ? "Insights de campañas" : "Read Insights",
        description:
          locale === "es"
            ? "Nuestros servicios te ayudan a adelantarte a la competencia transformando datos en información accionable para tomar decisiones estratégicas."
            : "Our services help you stay ahead of the competition by turning raw data into meaningful information that drives strategic decisions.",
        link: "/insights",
        image: "/images/overview.svg",
      },
      {
        id: "investment",
        label: locale === "es" ? "Control de inversión" : "Ads Investment Control",
        icon: "/icons/investment.svg",
        title: locale === "es" ? "Control de inversión publicitaria" : "Ads Investment Control",
        description:
          locale === "es"
            ? "Nos aseguramos de que tu inversión publicitaria se asigne de forma eficiente, se optimice de manera continua y esté alineada con tus objetivos de negocio."
            : "We ensures that your ad spend is allocated efficiently, optimized continuously, and aligned with your business objectives.",
        link: "/personalized-strategies",
        image: "/images/adscampaignresult.svg",
      },
      {
        id: "management",
        label: locale === "es" ? "Gestión de anuncios" : "Ads Management",
        icon: "/icons/insights.svg",
        title: locale === "es" ? "Gestión de anuncios" : "Ads Management",
        description:
          locale === "es"
            ? "Nuestro objetivo es ayudarte a maximizar el ROI publicitario con estrategia, herramientas avanzadas y una optimización continua."
            : "Our goal is to help you maximize your advertising ROI by leveraging our expertise, innovative strategies, and advanced tools.",
        link: "/ads-management",
        image: "/images/adsperformance.svg",
      },
    ],
    [locale]
  );

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-wider text-woortec-text uppercase">
            {locale === "es" ? "Control en un solo lugar" : "Control in one place"}
          </p>
          <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
            {locale === "es" ? "Funciones simples pero potentes" : "Simple, yet powerful features"}
          </h2>
        </div>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 rounded-xl px-6 py-4 transition-all ${
                activeTab === tab.id ? "bg-neutral-200 shadow-sm" : "hover:bg-neutral-200/50"
              }`}
            >
              <Image src={tab.icon} alt="" width={40} height={40} />
              <span className="text-sm font-medium text-black">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-black">{active.title}</h3>
            <p className="text-neutral-600">{active.description}</p>
            <Link
              href={active.link}
              className="inline-flex items-center gap-2 font-semibold text-woortec-text transition-colors hover:text-woortec-solid"
            >
              {locale === "es" ? "Leer más" : "Read more"}
              <Image src="/icons/arrow-color.svg" alt="" width={16} height={16} />
            </Link>
          </div>
          <div>
            <Image src={active.image} alt={active.title} width={552} height={400} className="w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
