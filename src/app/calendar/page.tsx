import type { Metadata } from "next";
import Image from "next/image";
import { getRequestRegion } from "@/lib/request-region";

export const metadata: Metadata = {
  title: "Calendar - Woortec",
  description:
    "Stay organized with Woortec's calendar tool. Manage your advertising campaign schedules, track important dates, and optimize your workflow for maximum efficiency.",
};

export default async function CalendarPage() {
  const { locale } = await getRequestRegion();

  return (
    <main>
      <section className="relative flex min-h-[94vh] items-center justify-center overflow-hidden px-6 pt-24">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-woortec-text md:text-5xl">
            {locale === "es"
              ? "Impulsa tus anuncios con el calendario de eventos de Woortec"
              : "Elevate Your Ads with Woortec's Event Calendar"}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-[#5e727d]">
            {locale === "es"
              ? "Mantente al día de las fechas clave y ajusta tus campañas con precisión. Con cada evento, optimiza tu estrategia para lograr un impacto de marketing mayor desde una sola experiencia unificada."
              : "Stay effortlessly informed about key dates, empowering you to fine-tune your campaigns with precision. With every event, optimize your strategy to achieve unparalleled marketing impact. Take control and lead with purpose, all in one seamless experience."}
          </p>
          <a href="https://app.woortec.com/" target="_blank" rel="noopener noreferrer" className="mt-12 inline-block rounded-full bg-woortec px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec-solid">
            {locale === "es" ? "Empezar" : "Get Started"}
          </a>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden opacity-50 blur-[200px]">
          <div className="absolute top-[-16%] left-[-16%] h-[40vw] w-[40vw] rounded-[20%] bg-[#b7f8db]" />
          <div className="absolute top-[-20%] left-0 h-[30vw] w-[30vw] rounded-[40%] bg-[#50a7c2] opacity-50" />
          <div className="absolute top-[-12%] left-[52%] h-[40vw] w-[40vw] rounded-full bg-[#16bbae]" />
          <div className="absolute top-[-32%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-[#38ef7d]" />
          <div className="absolute right-[-8%] bottom-0 h-[30vw] w-[30vw] rounded-full bg-[#b7f8db]" />
          <div className="absolute right-[-16%] bottom-[-20%] h-[40vw] w-[40vw] rounded-full bg-[#50a7c2]" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div><Image src="/images/schedule.svg" alt="Event Reminders" width={500} height={400} className="w-full" /></div>
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">{locale === "es" ? "Funciones clave" : "Key features"}</p>
              <h3 className="font-heading text-2xl font-bold text-black md:text-3xl">{locale === "es" ? "Recordatorios de eventos" : "Event Reminders"}</h3>
              <p className="text-neutral-600">{locale === "es" ? "Recibe avisos personalizables y a tiempo sobre tus próximos eventos. Con el calendario de Woortec no volverás a perder una fecha importante y podrás ajustar tus campañas con tranquilidad." : "Receive timely and customizable notifications for all your upcoming events. With Woortec's Event Calendar, you'll never miss a crucial date again, giving you the peace of mind to focus on fine-tuning your campaigns without worry. Stay on top of key milestones, promotions, and special occasions to keep your marketing strategies perfectly aligned."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">{locale === "es" ? "Funciones clave" : "Key features"}</p>
              <h3 className="font-heading text-2xl font-bold text-black md:text-3xl">{locale === "es" ? "Integración proactiva" : "Proactive Integration"}</h3>
              <p className="text-neutral-600">{locale === "es" ? "Integra fácilmente el calendario de eventos de Woortec en tus procesos. Recibirás avisos por email con sugerencias específicas para tus campañas, para que siempre llegues preparado a cada fecha importante." : "Easily integrate the Woortec Event Calendar into your processes. You'll receive advance email notifications with specific suggestions for your campaigns, ensuring you never miss an important date again. This proactive feature helps you stay on top of your campaign planning, so you're always prepared and can make informed decisions ahead of time."}</p>
            </div>
            <div><Image src="/images/booking.svg" alt="Proactive Integration" width={500} height={400} className="w-full" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4"><h4 className="font-heading text-xl font-bold text-black">{locale === "es" ? "Impacto de eventos" : "Event Impact Tracking"}</h4><p className="text-sm text-neutral-600">{locale === "es" ? "Analiza cómo influyen los eventos en métricas como impresiones, clics y conversiones para ajustar mejor tus campañas." : "Monitor how specific events influence key performance metrics such as impressions, clicks, and conversions. See direct correlations between campaigns and event timings to make precise adjustments that enhance overall performance."}</p></div>
            <div className="space-y-4"><h4 className="font-heading text-xl font-bold text-black">{locale === "es" ? "Optimización basada en datos" : "Data-Driven Optimization"}</h4><p className="text-sm text-neutral-600">{locale === "es" ? "Usa los insights del calendario para afinar tu estrategia en tiempo real y distribuir mejor el presupuesto." : "Use the insights from your calendar to fine-tune your campaign strategies in real-time. With clear visibility into what works best during specific events, you can optimize your messaging and budget allocation to boost ROI."}</p></div>
            <div className="space-y-4"><h4 className="font-heading text-xl font-bold text-black">{locale === "es" ? "Informes de rendimiento" : "Performance Reports"}</h4><p className="text-sm text-neutral-600">{locale === "es" ? "Accede a informes detallados que combinan calendario y analítica para mejorar tus próximas decisiones de marketing." : "Access detailed reports that combine event schedules and campaign analytics. This comprehensive view helps you evaluate the success of your ads around key events, providing the information needed to refine future marketing strategies."}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h4 className="font-heading text-2xl font-bold text-black md:text-3xl">{locale === "es" ? "Optimiza cada momento: toma el control ahora" : "Optimize every moment--take control now!"}</h4>
              <p className="mt-2 text-neutral-600">{locale === "es" ? "Desbloquea todo el potencial de tus campañas con el calendario de eventos de Woortec." : "Unlock the full potential of your campaigns with Woortec's Event Calendar"}</p>
            </div>
            <a href="https://app.woortec.com/" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-woortec px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec-solid">{locale === "es" ? "Empezar" : "Get Started"}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
