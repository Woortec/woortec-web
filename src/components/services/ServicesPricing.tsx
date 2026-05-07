"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { formatPrice, type Currency, type Locale } from "@/lib/locale";

interface PricingTier {
  name: {
    es: string;
    en: string;
  };
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  description: {
    es: string;
    en: string;
  };
  features: {
    es: string[];
    en: string[];
  };
  cta: {
    es: string;
    en: string;
  };
  illustration: string;
  prefix?: string;
}

type ServicesPricingProps = {
  locale: Locale;
  currency: Currency;
};

const pricingTiers: PricingTier[] = [
  {
    name: { en: "Starter", es: "Starter" },
    monthlyPrice: null,
    yearlyPrice: null,
    description: {
      en: "Want access to valuable insights without the complexities of platform intricacies? Woortec's Starter Level is your solution.",
      es: "¿Quieres acceder a información valiosa sin la complejidad de las plataformas? El nivel Starter de Woortec es tu solución.",
    },
    features: {
      en: [
        "Access to the Platform",
        "Access to Dynamic Reports",
        "Immediate access to Essential Data",
        "Access to Event Calendar",
      ],
      es: [
        "Acceso a la plataforma",
        "Acceso a informes dinámicos",
        "Acceso inmediato a datos esenciales",
        "Acceso al calendario de eventos",
      ],
    },
    cta: { en: "Subscribe", es: "Suscribirme" },
    illustration: "/images/person-asset.svg",
  },
  {
    name: { en: "Basic", es: "Basic" },
    monthlyPrice: 29.99,
    yearlyPrice: 24.99,
    description: {
      en: "Looking for more depth in your advertising analytics? Let us simplify the complexities of ad performance analysis. Say goodbye to navigating confusing platforms and let us guide you.",
      es: "¿Buscas más profundidad en la analítica de tus campañas? Simplificamos el análisis del rendimiento publicitario para que no tengas que navegar plataformas confusas.",
    },
    features: {
      en: [
        "Daily Report",
        "Performance Optimization",
        "Event Calendar Alerts",
        "In-depth Ad Analysis",
      ],
      es: [
        "Informe diario",
        "Optimización del rendimiento",
        "Alertas del calendario de eventos",
        "Análisis detallado de anuncios",
      ],
    },
    cta: { en: "Upgrade", es: "Mejorar plan" },
    illustration: "/images/illustration.svg",
  },
  {
    name: { en: "Essential", es: "Essential" },
    monthlyPrice: 19.99,
    yearlyPrice: 16.66,
    prefix: "+",
    description: {
      en: "Ready to take control of your advertising with a proven and personalized strategy? We offer a customized approach designed to empower you to execute confidently and drive success.",
      es: "¿Listo para tomar el control de tu publicidad con una estrategia personalizada y probada? Te ofrecemos un enfoque adaptado para ayudarte a ejecutar con confianza.",
    },
    features: {
      en: [
        "Personalized Advertising Roadmap",
        "Objective Definition and Alignment",
        "Strategy Adaptations and Updates",
        "Detailed Performance Analytics",
        "Budget Forecasting and Control",
        "Buyer Persona Generator",
      ],
      es: [
        "Hoja de ruta publicitaria personalizada",
        "Definición y alineación de objetivos",
        "Adaptaciones y actualizaciones de estrategia",
        "Analítica detallada de rendimiento",
        "Previsión y control de presupuesto",
        "Generador de buyer persona",
      ],
    },
    cta: { en: "Upgrade", es: "Mejorar plan" },
    illustration: "/images/person-asset.svg",
  },
  {
    name: { en: "Advanced", es: "Advanced" },
    monthlyPrice: 19.99,
    yearlyPrice: 16.66,
    prefix: "+",
    description: {
      en: "Ready to elevate your advertising to new heights? With this level, we assume full control, providing full-service management to meticulously plan, set up, and optimize your campaigns for maximum impact.",
      es: "¿Listo para llevar tu publicidad a otro nivel? Con este plan asumimos el control total y gestionamos tus campañas de principio a fin para maximizar resultados.",
    },
    features: {
      en: [
        "Full-Service Advertising Management",
        "Monthly Performance Reports",
        "Ad Placement and Scheduling",
        "Budget Management",
        "Performance Monitoring and Optimization",
        "Complete Campaign Documentation",
      ],
      es: [
        "Gestión publicitaria integral",
        "Informes mensuales de rendimiento",
        "Planificación y calendarización de anuncios",
        "Gestión de presupuesto",
        "Monitorización y optimización del rendimiento",
        "Documentación completa de campañas",
      ],
    },
    cta: { en: "Upgrade", es: "Mejorar plan" },
    illustration: "/images/illustration.svg",
  },
];

function convertUsdToEur(amount: number) {
  return amount * 0.93;
}

function getDisplayPrice(
  amount: number | null,
  currency: Currency,
  locale: Locale,
  prefix?: string
) {
  if (amount === null) {
    return locale === "es" ? "GRATIS" : "FREE";
  }

  const converted = currency === "EUR" ? convertUsdToEur(amount) : amount;
  const formatted = formatPrice(converted, currency, locale);

  return `${prefix ?? ""}${formatted}`;
}

export function ServicesPricing({ locale, currency }: ServicesPricingProps) {
  const [isYearly, setIsYearly] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const tier = pricingTiers[activeTab];

  const text = useMemo(
    () => ({
      title: locale === "es" ? "Nuestros planes de suscripción" : "Our Subscription Plan",
      yearly: locale === "es" ? "Anual" : "Yearly",
      monthly: locale === "es" ? "Mensual" : "Monthly",
      perMonth: locale === "es" ? "/mes" : "/month",
      note:
        locale === "es"
          ? "Ten en cuenta que para pasar a un plan superior necesitas estar suscrito a los planes anteriores. Así garantizamos el acceso progresivo a las funciones y ventajas de cada nivel."
          : "Please note that in order to upgrade to a higher plan, you need to be subscribed to lower plans. This ensures you gain access to the enhanced features and benefits available at each tier.",
      terms:
        locale === "es"
          ? "Al acceder o usar el Servicio aceptas quedar vinculado por nuestros Términos y Condiciones de uso. Si no estás de acuerdo con alguna parte de dichos términos, no debes acceder al Servicio."
          : "By accessing or using the Service you agree to be bound by our Terms and Condition of use. If you disagree with any part of the terms then you may not access the Service",
    }),
    [locale]
  );

  const displayPrice = isYearly
    ? getDisplayPrice(tier.yearlyPrice, currency, locale, tier.prefix)
    : getDisplayPrice(tier.monthlyPrice, currency, locale, tier.prefix);

  return (
    <main
      className="pb-16"
      style={{
        backgroundImage: "linear-gradient(#fff, #b7f8db 70%, #fff 101%)",
      }}
    >
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h1 className="font-heading text-[55px] font-semibold leading-tight text-woortec-text">
              {text.title}
            </h1>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-black" : "text-neutral-400"
                }`}
              >
                {text.yearly}
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
                {text.monthly}
              </span>
            </div>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-[240px_1fr]">
            <div className="relative">
              <div className="space-y-2">
                {pricingTiers.map((t, i) => (
                  <button
                    key={t.name.en}
                    onClick={() => setActiveTab(i)}
                    className={`block w-full px-1 py-3 text-left text-2xl font-semibold transition-colors ${
                      activeTab === i
                        ? "border-b-3 border-woortec-text text-black"
                        : "text-[#5e727d]/50 hover:text-[#5e727d]"
                    }`}
                  >
                    {t.name[locale]}
                  </button>
                ))}
              </div>

              <div className="mt-8 border-t border-black/20 pt-5">
                <p className="max-w-[30ch] text-sm leading-relaxed text-[#3339]">
                  {text.note}
                </p>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-[25px] p-[18px_80px_72px]"
              style={{
                backgroundColor: "#4e2d921c",
                boxShadow: "0 90px 90px -50px #4e2d9263",
              }}
            >
              <div className="mb-2 pt-4">
                <h2 className="font-heading text-[61px] font-bold text-woortec-text">
                  {displayPrice}
                  <span className="text-[22px] font-normal text-[#5e727d]">
                    {text.perMonth}
                  </span>
                </h2>
              </div>

              <p className="mb-8 max-w-xl leading-relaxed text-[#5e727d]">
                {tier.description[locale]}
              </p>

              <div className="mb-5 grid min-h-[150px] max-w-xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {tier.features[locale].map((feature) => (
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

              <a
                href="https://app.woortec.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-[#f9f2ff] px-8 py-3 text-center text-sm font-medium text-[#4e2d92] transition-all hover:shadow-lg"
              >
                {tier.cta[locale]}
              </a>

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

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs font-semibold italic text-[#5e727d]">
            {text.terms}
          </p>
        </div>
      </section>
    </main>
  );
}
