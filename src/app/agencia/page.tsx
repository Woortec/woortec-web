import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Agencia de marketing y automatización | Woortec",
  description:
    "Marketing, automatización y reporting para equipos que necesitan más control, menos fricción y decisiones más claras.",
  alternates: {
    canonical: "https://www.woortec.com/agencia",
  },
  openGraph: {
    title: "Agencia de marketing y automatización | Woortec",
    description:
      "Marketing, automatización y reporting para equipos que necesitan más control, menos fricción y decisiones más claras.",
    url: "https://www.woortec.com/agencia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de marketing y automatización | Woortec",
    description:
      "Marketing, automatización y reporting para equipos que necesitan más control, menos fricción y decisiones más claras.",
  },
};

const quickReadChips = [
  "Estrategia",
  "Automatización",
  "Reporting",
  "Optimización",
  "Comunicación",
];

const problemBullets = [
  "El equipo pierde tiempo en tareas repetitivas.",
  "Los resultados llegan tarde o llegan incompletos.",
  "No está claro qué funciona y qué conviene parar.",
  "La operación crece, pero la visibilidad no.",
];

const solutionCards = [
  {
    title: "Estrategia y prioridades",
    description:
      "Alineamos objetivos, KPIs y foco para que el plan responda al negocio, no al ruido.",
  },
  {
    title: "Automatización",
    description:
      "Conectamos procesos y herramientas para ahorrar tiempo y reducir trabajo repetitivo.",
  },
  {
    title: "Reporting y seguimiento",
    description:
      "Convertimos datos en decisiones claras sobre qué escalar, qué ajustar y qué detener.",
  },
  {
    title: "Community management",
    description:
      "Si aplica, cuidamos la presencia y la consistencia de la marca sin perder de vista el rendimiento.",
  },
];

const differentiators = [
  "Pensamos en negocio, no solo en canales.",
  "No entregamos actividad, entregamos lectura útil.",
  "No acumulamos tareas: ordenamos el sistema.",
  "Cada acción se conecta con un indicador real.",
  "Trabajamos para que el equipo se mueva más rápido con menos fricción.",
];

const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Entendemos el contexto, el equipo, las herramientas y el objetivo.",
  },
  {
    title: "Mapa de KPIs",
    description: "Definimos qué se va a medir y por qué.",
  },
  {
    title: "Implementación",
    description:
      "Activamos automatizaciones, reporting y mejoras de flujo.",
  },
  {
    title: "Seguimiento",
    description:
      "Leemos resultados y ajustamos para mejorar rendimiento y eficiencia.",
  },
];

const fitBullets = [
  "Ya inviertes en marketing y quieres mejor control.",
  "Tienes equipo o proveedores, pero falta sistema.",
  "Necesitas menos fricción entre estrategia, ejecución y reporting.",
  "Quieres decisiones más claras, no más dashboards.",
];

export default function AgenciaPage() {
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
              Nueva categoría
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl">
              Marketing y automatización para equipos que necesitan más control y menos improvisación.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
              Woortec conecta estrategia, automatización y reporting para que
              cada acción tenga trazabilidad, reduzca fricción y mejore
              decisiones.
            </p>
            <div className="flex flex-wrap gap-3">
              {quickReadChips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-black shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@woortec.com?subject=Auditor%C3%ADa%20Agencia%20Woortec"
                className="inline-flex items-center gap-2 rounded-full bg-woortec px-8 py-4 font-medium text-black/80 transition-colors hover:bg-woortec-solid"
              >
                Agenda una auditoría
                <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="#como-trabajamos"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-neutral-50"
              >
                Ver cómo trabajamos
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] bg-white/70 blur-3xl" />
            <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white p-4 shadow-[0_30px_80px_-35px_rgba(78,45,146,0.45)]">
              <Image
                src="/images/content-image-02.png"
                alt="Equipo de marketing y automatización"
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-woortec-text uppercase">
              Lectura rápida
            </p>
            <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
              Todo el sistema, en una sola lectura.
            </h2>
            <p className="mt-4 text-neutral-600">
              Pensado para marcas que ya invierten en marketing y necesitan
              orden, velocidad y visibilidad.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {quickReadChips.map((item) => (
              <span
                key={`${item}-secondary`}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2 text-sm font-medium text-black shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                El problema
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-black md:text-4xl">
                Si tu marketing depende de tareas manuales, reportes tardíos y
                decisiones por intuición, no tienes un problema de esfuerzo.
                Tienes un problema de sistema.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {problemBullets.map((bullet) => (
                <article
                  key={bullet}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {bullet}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
              La solución
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">
              Diseñamos una operación de marketing que se pueda medir y mejorar.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((card) => (
              <article
                key={card.title}
                className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading text-xl font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                Por qué Woortec
              </p>
              <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
                No entregamos actividad, entregamos lectura útil.
              </h2>
              <ul className="space-y-3 text-neutral-700">
                {differentiators.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-woortec-text" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="como-trabajamos"
              className="grid gap-4 sm:grid-cols-2"
            >
              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-white bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                Resultados y encaje
              </p>
              <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
                Resultados que se notan en la operación
              </h2>
              <p className="max-w-2xl text-neutral-600">
                Aquí debería ir un caso real, una cifra, un antes/después o un
                testimonio corto. Si todavía no queréis publicar prueba dura,
                mejor un bloque honesto y corto que no invente credenciales.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                Esto encaja especialmente si...
              </p>
              <ul className="mt-5 space-y-3 text-neutral-700">
                {fitBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-woortec-text" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm md:p-14">
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-semibold tracking-widest text-woortec-text uppercase">
                Cierre
              </p>
              <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
                Si tu marketing ya existe, pero no está bien ordenado, hablemos.
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                Cuéntanos tu contexto y te diremos si Woortec puede ayudarte a
                simplificar, automatizar y medir mejor.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@woortec.com?subject=Quiero%20una%20auditor%C3%ADa%20con%20Woortec"
                className="inline-flex items-center gap-2 rounded-full bg-woortec px-8 py-4 font-medium text-black/80 transition-colors hover:bg-woortec-solid"
              >
                Quiero una auditoría
                <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="mailto:info@woortec.com?subject=Hablar%20con%20Woortec"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-neutral-50"
              >
                Hablar con Woortec
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
