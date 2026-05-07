"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Woortec has been a game-changer for our advertising strategy. The data-driven approach and clear insights have helped us optimize our ad investments like never before",
    name: "John Smith",
    role: "CEO",
    company: "TechSolutions",
    image: "/images/ceo-1.webp",
  },
  {
    quote:
      "With Woortec, we've gained control and transparency over our advertising campaigns, allowing us to make smarter decisions and achieve better results.",
    name: "Emily Johnsons",
    role: "Marketing Manager",
    company: "Greentech",
    image: "/images/ceo-4.jpg",
  },
  {
    quote:
      "Woortec's platform is user-friendly and effective. It has simplified our advertising process and boosted our sales significantly. Highly recommended!",
    name: "Carlos Rodriguez",
    role: "Founder",
    company: "BeanTown Brews",
    image: "/images/ceo-2.webp",
  },
  {
    quote:
      "The team at Woortec is simply outstanding. They took the time to understand our business goals and crafted a digital advertising strategy that perfectly aligns with our needs. The creativity and precision in their campaigns have driven significant traffic to our site and increased our conversion rates.",
    name: "Lisa Tucker",
    role: "Head of Marketing",
    company: "Urban Lifestyle Brands",
    image: "/images/lisa-tucker.jpg",
  },
  {
    quote:
      "Woortec's expertise in digital advertising has been instrumental in revamping our online marketing efforts. The campaigns they developed not only aligned with our brand's voice but also delivered outstanding results, with our engagement rates doubling.",
    name: "Rachel Legarda",
    role: "Vice President",
    company: "Pure Beauty Products",
    image: "/images/rachel-legarda.jpg",
  },
  {
    quote:
      "What sets Woortec apart is their commitment to understanding our brand's unique voice and vision. They don't just run ads; they tell our story in a way that resonates with our audience. Our social media engagement has tripled, and we've built a loyal customer base thanks to their efforts.",
    name: "Anna Kendricks",
    role: "Director of Communications",
    company: "Urban Roots Cafe",
    image: "/images/anna-kendricks.jpg",
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative rounded-2xl bg-neutral-200 p-10 md:p-16">
          <Image
            src="/icons/quotes.svg"
            alt=""
            width={40}
            height={40}
            className="mb-6 opacity-40"
          />

          <p className="mb-8 text-lg leading-relaxed text-black">
            {t.quote}
          </p>

          <div className="flex items-center gap-4">
            <Image
              src={t.image}
              alt={t.name}
              width={60}
              height={60}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-black">{t.name}</p>
              <p className="text-sm text-neutral-600">
                <em>{t.role}</em>, {t.company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={prev}
              className="rounded-full bg-white p-2 shadow transition-shadow hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === current ? "bg-woortec-dark" : "bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full bg-white p-2 shadow transition-shadow hover:shadow-md"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Image
        src="/icons/dots.svg"
        alt=""
        width={200}
        height={200}
        className="absolute right-0 bottom-0 opacity-30"
        aria-hidden="true"
      />
    </section>
  );
}
