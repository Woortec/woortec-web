import type { Metadata } from "next";
import Image from "next/image";
import { getRequestRegion } from "@/lib/request-region";

export const metadata: Metadata = {
  title: "Ad Overview Insights",
  description: "Get comprehensive ad insights with Woortec.",
  alternates: { canonical: "https://woortec.com/insights" },
};

export default async function InsightsPage() {
  const { locale } = await getRequestRegion();
  const metrics = [
    {
      icon: "/icons/budget.svg",
      label: locale === "es" ? "Presupuesto" : "Budget",
      description: locale === "es" ? "Controla el gasto publicitario en tiempo real y asegúrate de mantenerte dentro del presupuesto asignado." : "Track your ad spend in real-time and ensure you're staying within your allocated budget. This helps optimize spending and maximize return on investment (ROI)",
    },
    {
      icon: "/icons/impressions.svg",
      label: locale === "es" ? "Impresiones" : "Impressions",
      description: locale === "es" ? "Supervisa cuántas veces se muestran tus anuncios a la audiencia objetivo." : "Monitor how many times your ads are being viewed by your target audience. Impressions give you a sense of the reach and visibility of your campaigns.",
    },
    {
      icon: "/icons/clickthroughrate.svg",
      label: locale === "es" ? "CTR" : "Click Through Rate",
      description: locale === "es" ? "Evalúa la eficacia de tus anuncios siguiendo el porcentaje de usuarios que hacen clic tras verlos." : "Evaluate the effectiveness of your ads by tracking the percentage of users who clicked on your ad after seeing it. A higher CTR indicates more engaging and relevant ads.",
    },
    {
      icon: "/icons/adsrunning.svg",
      label: locale === "es" ? "Anuncios activos" : "Ads Running",
      description: locale === "es" ? "Mantén el control sobre el número de anuncios activos y comprueba que todo avanza como esperas." : "Stay on top of the number of active ads, making sure your campaigns are running as planned and achieving the desired results.",
    },
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl leading-tight font-bold text-black md:text-5xl lg:text-6xl">{locale === "es" ? "Insights generales de anuncios" : "Ad Overview Insights"}</h1>
              <div className="space-y-4 text-slate-grey">
                <p className="text-lg">{locale === "es" ? "Nuestros servicios te ayudan a convertir datos en información útil para tomar decisiones estratégicas." : "Our services help you stay ahead of the competition by turning raw data into meaningful information that drives strategic decisions."}</p>
                <p className="text-lg">{locale === "es" ? "Con analítica avanzada, la plataforma descompone datos complejos en insights claros y accionables en tiempo real." : "By utilizing advanced analytics tools, our platform allows you to break down complex data into digestible insights. This helps you make well-informed business decisions based on real-time metrics."}</p>
              </div>
            </div>
            <div><Image src="/images/overview.svg" alt="Ad overview insights" width={600} height={500} className="w-full" priority /></div>
          </div>
        </div>
        <Image src="/images/blob.svg" alt="" width={800} height={800} className="pointer-events-none absolute -right-40 -bottom-40 -z-10 opacity-10" aria-hidden="true" />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading mb-3 text-3xl font-medium text-black md:text-4xl">{locale === "es" ? "Visión completa de tus anuncios" : "Comprehensive Ad Overview"}</h2>
            <p className="text-slate-grey">{locale === "es" ? "Entiende de un vistazo cómo rinde tu estrategia publicitaria con acceso rápido a métricas clave." : "Understand how your ad strategy is performing at a glance, with easy access to detailed performance metrics."}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="overflow-hidden rounded-2xl border border-neutral-400 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-center bg-neutral-200 p-6"><Image src={metric.icon} alt={metric.label} width={200} height={150} className="h-auto w-full" /></div>
                <div className="p-6 text-center">
                  <p className="mb-2 text-sm font-medium uppercase text-woortec-text">{metric.label}</p>
                  <h3 className="text-sm leading-relaxed font-medium text-black">{metric.description}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-40">
        <Image src="/images/overview.svg" alt="" width={1200} height={800} className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-400 bg-white p-10 text-center shadow-lg md:p-16">
            <h2 className="font-heading mb-4 text-3xl font-bold text-black md:text-4xl">{locale === "es" ? "Lleva tu negocio al siguiente nivel con decisiones basadas en datos" : "Take your business to the next level with data-driven decisions"}</h2>
            <p className="mb-8 text-neutral-600">{locale === "es" ? "Descubre cómo nuestra plataforma te ayuda a aprovechar los insights para seguir siendo competitivo." : "Read more about how our platform can help you leverage insights to stay competitive."}</p>
            <a href="https://app.woortec.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-woortec-solid px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec">{locale === "es" ? "Empezar" : "Get Started"}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
