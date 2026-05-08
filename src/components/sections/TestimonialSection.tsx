"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/locale";

type TestimonialSectionProps = {
  locale: Locale;
};

export function TestimonialSection({ locale }: TestimonialSectionProps) {
  const testimonials = useMemo(
    () => [
      {
        quote:
          locale === "es"
            ? "Woortec ha supuesto un antes y un después en nuestra estrategia publicitaria. Su enfoque basado en datos y la claridad de los insights nos ha ayudado a optimizar la inversión como nunca antes."
            : "Woortec has been a game-changer for our advertising strategy. The data-driven approach and clear insights have helped us optimize our ad investments like never before",
        name: "John Smith",
        role: locale === "es" ? "CEO" : "CEO",
        company: "TechSolutions",
        image: "/images/ceo-1.webp",
      },
      {
        quote:
          locale === "es"
            ? "Con Woortec hemos ganado control y transparencia sobre nuestras campañas, lo que nos permite tomar decisiones más inteligentes y conseguir mejores resultados."
            : "With Woortec, we've gained control and transparency over our advertising campaigns, allowing us to make smarter decisions and achieve better results.",
        name: "Emily Johnsons",
        role: locale === "es" ? "Directora de Marketing" : "Marketing Manager",
        company: "Greentech",
        image: "/images/ceo-4.jpg",
      },
      {
        quote:
          locale === "es"
            ? "La plataforma de Woortec es intuitiva y eficaz. Ha simplificado nuestro proceso publicitario y ha impulsado nuestras ventas de forma notable. Muy recomendable."
            : "Woortec's platform is user-friendly and effective. It has simplified our advertising process and boosted our sales significantly. Highly recommended!",
        name: "Carlos Rodriguez",
        role: locale === "es" ? "Fundador" : "Founder",
        company: "BeanTown Brews",
        image: "/images/ceo-2.webp",
      },
      {
        quote:
          locale === "es"
            ? "El equipo de Woortec es excelente. Se tomó el tiempo de entender nuestros objetivos y diseñó una estrategia digital que encaja perfectamente con nuestras necesidades."
            : "The team at Woortec is simply outstanding. They took the time to understand our business goals and crafted a digital advertising strategy that perfectly aligns with our needs. The creativity and precision in their campaigns have driven significant traffic to our site and increased our conversion rates.",
        name: "Lisa Tucker",
        role: locale === "es" ? "Responsable de Marketing" : "Head of Marketing",
        company: "Urban Lifestyle Brands",
        image: "/images/lisa-tucker.jpg",
      },
      {
        quote:
          locale === "es"
            ? "La experiencia de Woortec en publicidad digital ha sido clave para renovar nuestro marketing online. Las campañas no solo respetaron nuestra voz de marca, sino que también lograron resultados sobresalientes."
            : "Woortec's expertise in digital advertising has been instrumental in revamping our online marketing efforts. The campaigns they developed not only aligned with our brand's voice but also delivered outstanding results, with our engagement rates doubling.",
        name: "Rachel Legarda",
        role: locale === "es" ? "Vicepresidenta" : "Vice President",
        company: "Pure Beauty Products",
        image: "/images/rachel-legarda.jpg",
      },
      {
        quote:
          locale === "es"
            ? "Lo que diferencia a Woortec es su compromiso por entender la voz y la visión de nuestra marca. No solo lanzan anuncios: cuentan nuestra historia de una forma que conecta con la audiencia."
            : "What sets Woortec apart is their commitment to understanding our brand's unique voice and vision. They don't just run ads; they tell our story in a way that resonates with our audience. Our social media engagement has tripled, and we've built a loyal customer base thanks to their efforts.",
        name: "Anna Kendricks",
        role: locale === "es" ? "Directora de Comunicación" : "Director of Communications",
        company: "Urban Roots Cafe",
        image: "/images/anna-kendricks.jpg",
      },
    ],
    [locale]
  );

  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative rounded-2xl bg-neutral-200 p-10 md:p-16">
          <Image src="/icons/quotes.svg" alt="" width={40} height={40} className="mb-6 opacity-40" />

          <p className="mb-8 text-lg leading-relaxed text-black">{t.quote}</p>

          <div className="flex items-center gap-4">
            <Image src={t.image} alt={t.name} width={60} height={60} className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-black">{t.name}</p>
              <p className="text-sm text-neutral-600">
                <em>{t.role}</em>, {t.company}
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button onClick={prev} className="rounded-full bg-white p-2 shadow transition-shadow hover:shadow-md" aria-label={locale === "es" ? "Testimonio anterior" : "Previous testimonial"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? "bg-woortec-dark" : "bg-neutral-400"}`}
                  aria-label={locale === "es" ? `Ir al testimonio ${i + 1}` : `Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={next} className="rounded-full bg-white p-2 shadow transition-shadow hover:shadow-md" aria-label={locale === "es" ? "Siguiente testimonio" : "Next testimonial"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <Image src="/icons/dots.svg" alt="" width={200} height={200} className="absolute right-0 bottom-0 opacity-30" aria-hidden="true" />
    </section>
  );
}
