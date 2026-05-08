import type { Metadata } from "next";
import Image from "next/image";
import { getRequestRegion } from "@/lib/request-region";

export const metadata: Metadata = {
  title: "Personalized Strategy - Woortec",
  description: "Tailored solutions to maximize your campaign's potential.",
};

export default async function PersonalizedStrategiesPage() {
  const { locale } = await getRequestRegion();
  const features = [
    { icon: "/icons/indepth-analysis.svg", title: locale === "es" ? "Análisis profundo de campañas" : "In-Depth Campaign Analysis", description: locale === "es" ? "Analizamos el rendimiento de tus campañas teniendo en cuenta métricas como alcance, CTR y conversiones para construir una estrategia a medida." : "Our platform analyzes your ad performance, taking into account key metrics such as reach, click-through rates, and conversions. This data forms the foundation of a tailored strategy designed to boost engagement." },
    { icon: "/icons/recommendation.svg", title: locale === "es" ? "Recomendaciones personalizadas" : "Customized Recommendations", description: locale === "es" ? "A partir de tus datos, te proponemos acciones concretas para mejorar campañas, presupuestos y audiencias." : "Based on your performance data, we provide personalized recommendations to enhance your ad campaigns. From optimizing budgets to targeting specific audiences, our goal is to help you maximize every ad dollar spent." },
    { icon: "/icons/realtime.svg", title: locale === "es" ? "Ajustes en tiempo real" : "Real-Time Adjustments", description: locale === "es" ? "Con seguimiento en vivo puedes hacer cambios inmediatos y mantener el control de la estrategia." : "With live tracking of your campaign's results, you can make immediate changes to your strategy. Whether it's reallocating budget to high-performing ads or fine-tuning audience segments, you stay in control." },
    { icon: "/icons/report.svg", title: locale === "es" ? "Informes estratégicos" : "Strategic Performance Reports", description: locale === "es" ? "Accede a informes detallados con resultados, oportunidades de mejora y métricas adaptadas a tus objetivos." : "Access a detailed breakdown of your ad campaign's results through our dynamic dashboard, highlighting areas of success and opportunities for improvement. Each report is tailored to your specific needs and goals." },
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-heading text-3xl font-bold text-black md:text-5xl">{locale === "es" ? "Estrategia personalizada" : "Personalized Strategy"}</h1>
              <p className="text-neutral-600">{locale === "es" ? "Soluciones a medida para maximizar el potencial de tus campañas." : "Tailored solutions to maximize your campaign's potential."}</p>
              <p className="text-neutral-600">{locale === "es" ? "En Woortec entendemos que cada negocio es distinto. Por eso desarrollamos estrategias publicitarias personalizadas alineadas con tus objetivos y apoyadas en insights en tiempo real." : "At Woortec, we understand that every business is unique, and so are its advertising needs. That's why we focus on delivering personalized strategies that align with your business objectives. By utilizing our platform, you gain access to customizable insights and performance metrics that allow you to make data-driven decisions in real time."}</p>
            </div>
            <div><Image src="/images/adscampaignresult.svg" alt="Personalized Strategy Dashboard" width={600} height={450} className="w-full" /></div>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-32 -left-32 opacity-10"><Image src="/images/blob.svg" alt="" width={500} height={500} aria-hidden="true" /></div>
      </section>
      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center"><h2 className="font-heading text-2xl font-bold text-black md:text-4xl">{locale === "es" ? "Cómo funciona la estrategia personalizada" : "How Personalized Strategy Works"}</h2></div>
          <div className="grid gap-10 md:grid-cols-2">{features.map((feature) => <div key={feature.title} className="flex gap-5 rounded-xl bg-white p-6 shadow-sm"><div className="shrink-0"><Image src={feature.icon} alt="" width={48} height={48} className="h-12 w-12" /></div><div className="space-y-2"><h3 className="font-heading text-lg font-bold text-black">{feature.title}</h3><p className="text-sm text-neutral-600">{feature.description}</p></div></div>)}</div>
        </div>
      </section>
      <section className="relative overflow-hidden py-20 md:py-40">
        <Image src="/images/adscampaignresult.svg" alt="" width={1200} height={800} className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-400 bg-white p-10 text-center shadow-lg md:p-16">
            <h2 className="font-heading mb-4 text-3xl font-bold text-black md:text-4xl">{locale === "es" ? "Lleva tu publicidad más lejos con un enfoque que se adapta a tus necesidades" : "Take your advertising with personalized approach that adapts to your needs."}</h2>
            <p className="mb-8 text-neutral-600">{locale === "es" ? "Descubre cómo Woortec puede ayudarte a implementar una estrategia que genere resultados." : "Discover how Woortec can help you implement a strategy that delivers results."}</p>
            <a href="https://app.woortec.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-woortec-solid px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec">{locale === "es" ? "Empezar" : "Get Started"}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
