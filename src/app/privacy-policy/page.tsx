import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Woortec",
  description:
    "Learn how Woortec collects, uses, and protects your personal data in compliance with privacy laws. Understand your rights and how we safeguard your information.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn how Woortec collects, uses, and protects your personal data in compliance with privacy laws. Understand your rights and how we safeguard your information.",
  },
  twitter: {
    title: "Privacy Policy",
    description:
      "Learn how Woortec collects, uses, and protects your personal data in compliance with privacy laws. Understand your rights and how we safeguard your information.",
  },
};

const sections = [
  {
    title: "1. Data Controller",
    content:
      "At Woortec, your privacy is a priority. This policy explains how we collect, use, and protect your personal data when using our website (https://woortec.com/) and related services. By accessing or using Woortec, you agree to the terms of this privacy policy.",
  },
  {
    title: "2. Data We Collect",
    content: `When you use Woortec, we may collect various types of personal data, such as:

\u2022 **Identifying Information:** Name, email address, and other contact details.
\u2022 **Usage Data:** Information on how you interact with our platform, including login information, IP address, and device details.
\u2022 **Financial Data:** Payment and billing information in case of premium subscription plans.`,
  },
  {
    title: "3. How We Use Your Data",
    content: `Woortec uses the personal data collected to:

\u2022 Provide and improve our services
\u2022 Manage your account and subscription
\u2022 Ensure the security of the platform
\u2022 Send relevant updates, offers, and promotional content

We may also use the data for analytical purposes to better understand user behavior and improve the platform's performance.`,
  },
  {
    title: "4. Legal Basis for Processing Data",
    content: `We process personal data based on the following:

\u2022 **Contractual necessity:** To provide you with the services you have signed up for.
\u2022 **Legal compliance:** To adhere to legal obligations.
\u2022 **Legitimate interest:** To enhance your experience and improve our services.`,
  },
  {
    title: "5. Data Sharing",
    content:
      "We do not sell or rent your personal data. However, we may share it with trusted third-party service providers who help us operate our platform, such as payment processors, analytics providers, and hosting services. In some cases, we may disclose your data to comply with legal obligations or respond to lawful government requests.",
  },
  {
    title: "6. Data Retention",
    content:
      "Woortec retains your personal data for as long as necessary to provide the services or as required by law. Once data is no longer needed, we securely delete or anonymize it.",
  },
  {
    title: "7. Your Rights",
    content: `You have the following rights concerning your personal data:

\u2022 **Access:** Request a copy of the data we hold about you.
\u2022 **Rectification:** Correct any inaccurate or incomplete data.
\u2022 **Erasure:** Request the deletion of your data when no longer needed.
\u2022 **Restriction:** Limit how your data is processed in certain situations.
\u2022 **Objection:** Object to specific types of data processing, such as direct marketing.

You can exercise these rights by contacting us at info@woortec.com`,
  },
  {
    title: "8. Cookies and Tracking Technologies",
    content:
      "Woortec uses cookies to enhance your experience and gather usage data. You can modify your browser settings to block cookies, but this may impact your ability to use some features of the platform.",
  },
  {
    title: "9. Security Measures",
    content:
      "We implement strict security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no system can be completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "10. Changes to this Privacy Policy",
    content:
      "Woortec reserves the right to update this privacy policy at any time. If significant changes are made, we will notify you via email or within the platform.",
  },
  {
    title: "11. Contact Information",
    content:
      "For any questions or concerns regarding this privacy policy or your data, you can contact us at info@woortec.com",
  },
];

function formatContent(content: string) {
  return content.split("\n").map((line, i) => {
    // Bold text between ** markers
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const formatted = parts.map((part, j) =>
      j % 2 === 1 ? (
        <strong key={j}>{part}</strong>
      ) : (
        <span key={j}>{part}</span>
      )
    );
    return (
      <span key={i}>
        {formatted}
        {i < content.split("\n").length - 1 && <br />}
      </span>
    );
  });
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-32 pb-20"
        style={{
          backgroundImage: "linear-gradient(#fff, #b7f8db 70%, #fff 101%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-heading text-3xl font-bold text-woortec-text md:text-5xl">
            Woortec Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-[#5e727d]">
            At Woortec, your privacy is a priority. This policy explains how we
            collect, use, and protect your personal data when using our website
            (https://woortec.com/) and related services. By accessing or using
            Woortec, you agree to the terms of this privacy policy.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl space-y-16 px-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-xl font-bold text-woortec-text md:text-2xl">
                {section.title}
              </h2>
              <p className="mt-4 leading-relaxed whitespace-pre-line text-neutral-600">
                {formatContent(section.content)}
              </p>
            </div>
          ))}
          <p className="font-semibold text-black">
            Updated September 26, 2024
          </p>
        </div>
      </section>
    </main>
  );
}
