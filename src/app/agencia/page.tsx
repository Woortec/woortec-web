import type { Metadata } from "next";
import Image from "next/image";
import { getRequestRegion } from "@/lib/request-region";

export const metadata: Metadata = {
  title: "Agencia - Woortec",
  description:
    "Servicios de marketing, automatización y community management con foco en datos, KPIs y decisiones medibles.",
};

const serviceCards = [
  {
    icon: "/icons/insights.svg",
    title: {
      es: "Estrategia basada en datos",
      en: "Data-led strategy",
    },
    description: {
      es: "Aterrizamos objetivos, KPIs y prioridades para que cada acción tenga una lectura clara en negocio.",
      en: "We align goals, KPIs, and priorities so every action has a clear business reading.",
    },
  },
  {
    icon: "/icons/chatting.svg",
    title: {
      es: "Community management",
      en: "Community management",
    },
    description: {
      es: "Gestionamos tu presencia en redes con una voz coherente y un seguimiento de señales útiles para decidir mejor.",
      en: "We manage your social presence with a consistent voice and track useful signals to make better decisions.",
    },
  },
  {
    icon: "/icons/zapier.svg",
    title: {
      es: "Automatización",
      en: "Automation",
    },
    description: {
      es: "Conectamos herramientas y procesos para ahorrar tiempo, reducir tareas repetitivas y medir mejor lo que pasa.",
      en: "We connect tools and workflows to save time, reduce repetitive tasks, and measure what is happening more clearly.",
    },
  },
  {
    icon: "/icons/report.svg",
    title: {
      es: "Seguimiento y reporting",
      en: "Tracking and reporting",
    },
    description: {
      es: "Medimos resultados, detectamos patrones y ajustamos el plan con una visión clara de lo que está funcionando.",
      en: "We measure results, spot patterns, and adjust the plan with a clear view of what is working.",
    },
  },
];

const dataSignals = [
  {
    es: "KPIs que importan",
    en: "Meaningful KPIs",
    description: {
      es: "Definimos métricas que conectan la actividad con negocio, no solo con volumen.",
      en: "We define metrics that connect activity to business, not just volume.",
    },
  },
  {
    es: "Lectura de rendimiento",
    en: "Performance reading",
    description: {
      es: "Convertimos resultados en señales claras para saber qué escalar, cambiar o detener.",
      en: "We turn results into clear signals so you know what to scale, change, or stop.",
    },
  },
  {
    es: "Automatización útil",
    en: "Useful automation",
    description: {
      es: "Quitamos trabajo manual para que el equipo pueda centrarse en criterio y ejecución.",
      en: "We remove manual work so the team can focus on judgment and execution.",
    },
  },
  {
    es: "Reporting accionable",
    en: "Actionable reporting",
    description: {
      es: "Presentamos lo importante de forma simple, para que la siguiente decisión sea obvia.",
      en: "We present the important stuff simply, so the next decision is obvious.",
    },
  },
] as const;

export default async function AgenciaPage() {
  const { locale } = await getRequestRegion();

  return (
    <main className="overflow-hidden">
      <section
        className="relative overflow-hidden pt-32 pb-20"
        style={{
          backgroundImage: "linear-gradient(#fff, #b7f8db 72%, #fff 101%)",
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
              {locale === "es" ? "Nueva categoría" : "New category"}
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl">
              {locale === "es" ? "Agencia para marketing y automatización" : "Agency for marketing and automation"}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
              {locale === "es"
                ? "Pensada para marcas que quieren una agencia cercana, pero con criterio analítico: estrategia, automatización y seguimiento de KPIs para trabajar con más foco y menos fricción."
                : "Built for brands that want a hands-on agency with analytical discipline: strategy, automation, and KPI tracking so work moves faster and with less friction."}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                locale === "es" ? "KPIs" : "KPIs",
                locale === "es" ? "Reporting" : "Reporting",
                locale === "es" ? "Automatización" : "Automation",
                locale === "es" ? "Resultados" : "Results",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-black shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="mailto:info@woortec.com?subject=Agencia%20Woortec"
              className="inline-flex items-center gap-2 rounded-full bg-woortec px-8 py-4 font-medium text-black/80 transition-colors hover:bg-woortec-solid"
            >
              {locale === "es" ? "Hablar con Woortec" : "Talk to Woortec"}
              <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] bg-white/70 blur-3xl" />
            <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white p-4 shadow-[0_30px_80px_-35px_rgba(78,45,146,0.45)]">
              <Image
                src="/images/content-image-02.png"
                alt={locale === "es" ? "Equipo de automatización y marketing" : "Marketing and automation team"}
                width={720}
                height={560}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-woortec-text uppercase">
              {locale === "es" ? "Servicios incluidos" : "Included services"}
            </p>
            <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
              {locale === "es"
                ? "Todo lo que suele necesitar una agencia con foco en datos"
                : "Everything a modern agency needs when data matters"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <article
                key={card.title.en}
                className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image src={card.icon} alt="" width={44} height={44} aria-hidden="true" />
                <h3 className="mt-5 font-heading text-xl font-bold text-black">
                  {card.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {card.description[locale]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                {locale === "es" ? "Enfoque analítico" : "Analytical focus"}
              </p>
              <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
                {locale === "es"
                  ? "No hacemos ruido. Hacemos lectura de datos."
                  : "We do not make noise. We read the data."}
              </h2>
              <p className="max-w-xl text-neutral-600">
                {locale === "es"
                  ? "La idea es que cada pieza de marketing y automatización deje una señal clara: qué atrae atención, qué convierte, qué ahorra tiempo y qué conviene repetir."
                  : "The goal is for each marketing and automation move to leave a clear signal: what attracts attention, what converts, what saves time, and what should be repeated."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dataSignals.map((signal) => (
                <article key={signal.en} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                    {locale === "es" ? signal.es : signal.en}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {signal.description[locale]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                {locale === "es" ? "Cómo trabajamos" : "How we work"}
              </p>
              <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
                {locale === "es"
                  ? "Una base clara para colaborar con criterio"
                  : "A clear base to collaborate with discipline"}
              </h2>
              <p className="text-neutral-600">
                {locale === "es"
                  ? "Si vienes de una conversación donde ya aparecen marketing, automatización y community manager, esta categoría concentra ese tipo de trabajo en una propuesta más simple de entender, medir y ejecutar."
                  : "If a conversation already includes marketing, automation, and community management, this category brings that work together into an easier offer to understand, measure, and execute."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                locale === "es" ? "Diagnóstico inicial" : "Initial diagnosis",
                locale === "es" ? "KPIs y objetivos" : "KPIs and goals",
                locale === "es" ? "Automatización de procesos" : "Process automation",
                locale === "es" ? "Reporting y ajustes" : "Reporting and adjustments",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white p-5 shadow-sm"
                >
                  <p className="font-medium text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
