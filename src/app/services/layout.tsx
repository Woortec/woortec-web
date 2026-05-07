import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Choose the right Woortec plan for your business. From free insights to full ads management, we have a plan that fits your needs and budget.",
  openGraph: {
    title: "Services & Pricing - Woortec",
    description:
      "Choose the right Woortec plan. From free insights to full ads management.",
  },
  alternates: {
    canonical: "https://woortec.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
