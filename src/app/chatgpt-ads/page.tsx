import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woortec for ChatGPT Ads",
  description:
    "A crawlable landing page for OpenAI ad review. Woortec helps teams optimize ads, reporting, and automation with clearer decisions and less friction.",
  alternates: {
    canonical: "https://www.woortec.com/chatgpt-ads",
  },
  openGraph: {
    title: "Woortec for ChatGPT Ads",
    description:
      "A crawlable landing page for OpenAI ad review. Woortec helps teams optimize ads, reporting, and automation with clearer decisions and less friction.",
    url: "https://www.woortec.com/chatgpt-ads",
    type: "website",
  },
};

const benefits = [
  "Clear ads reporting with less manual work",
  "Automation that connects marketing data and decisions",
  "A better view of performance across campaigns",
  "A practical service layer for growing teams",
];

export default function ChatgptAdsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-24">
        <p className="text-sm font-semibold tracking-[0.2em] text-woortec-text uppercase">
          Woortec
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-black md:text-6xl">
          Ads, automation and reporting for teams that want more control.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Woortec helps businesses manage paid media with better visibility,
          cleaner reporting and automation that reduces repetitive work. This
          page is intentionally lightweight and crawlable for ad review.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
            >
              <p className="text-sm leading-6 text-neutral-700">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:info@woortec.com?subject=ChatGPT%20Ads%20landing%20page"
            className="inline-flex items-center justify-center rounded-full bg-woortec px-7 py-4 font-medium text-black/80 transition-colors hover:bg-woortec-solid"
          >
            Contact Woortec
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-4 font-medium text-black transition-colors hover:bg-neutral-50"
          >
            View Services
          </a>
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-8 text-sm leading-6 text-neutral-500">
          <p>Website: https://www.woortec.com</p>
          <p>Email: info@woortec.com</p>
        </div>
      </section>
    </main>
  );
}
