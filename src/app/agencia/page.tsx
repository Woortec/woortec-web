import type { Metadata } from "next";
import Image from "next/image";
import { getRequestRegion } from "@/lib/request-region";

export const metadata: Metadata = {
  title: "Agencia - Woortec",
  description:
    "Servicios de marketing, automatización y community management para marcas que quieren crecer con una ejecución más cercana.",
};

const serviceCards = [
  {
    icon: "/icons/insights.svg",
    title: {
      es: "Estrategia de marketing",
      en: "Marketing strategy",
    },
    description: {
      es: "Definimos mensajes, objetivos y prioridades para que cada acción tenga sentido y encaje con tu negocio.",
      en: "We define messages, goals, and priorities so every action supports your business and brand direction.",
    },
  },
  {
    icon: "/icons/chatting.svg",
    title: {
      es: "Community management",
      en: "Community management",
    },
    description: {
      es: "Gestionamos tu presencia en redes con una voz coherente, respuestas ágiles y atención constante a tu comunidad.",
      en: "We manage your social presence with a consistent voice, fast responses, and ongoing attention to your community.",
    },
  },
  {
    icon: "/icons/zapier.svg",
    title: {
      es: "Automatización",
      en: "Automation",
    },
    description: {
      es: "Conectamos herramientas y procesos para ahorrar tiempo, reducir tareas repetitivas y ganar orden operativo.",
      en: "We connect tools and workflows to save time, reduce repetitive tasks, and bring more operational clarity.",
    },
  },
  {
    icon: "/icons/report.svg",
    title: {
      es: "Seguimiento y reporting",
      en: "Tracking and reporting",
    },
    description: {
      es: "Medimos resultados, detectamos oportunidades y ajustamos el plan con una visión clara de lo que está funcionando.",
      en: "We measure results, spot opportunities, and adjust the plan with a clear view of what is working.",
    },
  },
];

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
                ? "Pensada para marcas que necesitan una agencia cercana: estrategia, community manager, automatizaciones y seguimiento para trabajar con más foco y menos fricción."
                : "Built for brands that need a hands-on agency: strategy, community management, automation, and tracking so work moves faster and with less friction."}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                locale === "es" ? "Marketing" : "Marketing",
                locale === "es" ? "Community manager" : "Community manager",
                locale === "es" ? "Automatización" : "Automation",
                locale === "es" ? "Reporting" : "Reporting",
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
              {locale === "es" ? "Todo lo que suele necesitar una agencia" : "Everything a modern agency usually needs"}
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

      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                {locale === "es" ? "Cómo trabajamos" : "How we work"}
              </p>
              <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
                {locale === "es" ? "Una base clara para colaborar sin ruido" : "A clear base to collaborate without noise"}
              </h2>
              <p className="text-neutral-600">
                {locale === "es"
                  ? "Si vienes de una conversación donde ya aparecen marketing, automatización y community manager, esta categoría concentra ese tipo de trabajo en una propuesta más simple de entender y ejecutar."
                  : "If a conversation already includes marketing, automation, and community management, this category brings that work together into a simpler, easier-to-execute offer."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                locale === "es" ? "Estrategia y calendario" : "Strategy and planning",
                locale === "es" ? "Gestión de comunidad" : "Community care",
                locale === "es" ? "Automatizaciones útiles" : "Useful automations",
                locale === "es" ? "Seguimiento continuo" : "Ongoing tracking",
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
