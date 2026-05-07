import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Woortec",
  description:
    "Review Woortec's Terms of Service to understand the rules for using our advertising management platform. Learn about account usage, payments, and platform conduct.",
  openGraph: {
    title: "Terms of Service",
    description:
      "Review Woortec's Terms of Service to understand the rules for using our advertising management platform. Learn about account usage, payments, and platform conduct.",
  },
  twitter: {
    title: "Terms of Service",
    description:
      "Review Woortec's Terms of Service to understand the rules for using our advertising management platform. Learn about account usage, payments, and platform conduct.",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By registering, accessing, or using Woortec's Services, you accept these Terms and any applicable policies or guidelines, including our Privacy Policy. These Terms constitute a binding agreement between you and Woortec.",
  },
  {
    title: "Eligibility",
    content:
      "You must be at least 18 years old or the legal age in your jurisdiction to use our Services. By using Woortec, you represent and warrant that you meet this eligibility requirement.",
  },
  {
    title: "Description of Services",
    content:
      "Woortec provides an online platform to manage and optimize advertising campaigns across different networks. The features available to you depend on your chosen subscription plan. Woortec may update or modify its Services at any time.",
  },
  {
    title: "Account Registration",
    content: `To access certain features of Woortec, you may need to create an account. You agree to:

\u2022 Provide accurate and complete information during registration.
\u2022 Keep your account details and password secure.
\u2022 Notify Woortec immediately of any unauthorized use of your account.

You are responsible for all activities conducted through your account. Woortec is not liable for any losses or damages caused by unauthorized access to your account due to your failure to secure it.`,
  },
  {
    title: "Subscription Plans and Payment",
    content: `Woortec offers various subscription plans, each with different levels of access to the platform's features.

\u2022 **Billing:** You agree to pay all fees associated with your subscription plan. Payment is due upon subscribing and on a recurring basis, as outlined during signup.
\u2022 **Automatic Renewal:** Your subscription will automatically renew unless you cancel before the end of the current billing period. You can manage your subscription in your account settings.
\u2022 **Refunds:** Subscription fees are non-refundable except where required by law or explicitly stated by Woortec.`,
  },
  {
    title: "Use of Services",
    content: `You agree to use Woortec's Services in compliance with all applicable laws, regulations, and these Terms. You further agree not to:

\u2022 Misuse the Services, such as by using them to conduct illegal or fraudulent activities.
\u2022 Violate any intellectual property rights, privacy rights, or other rights of third parties.
\u2022 Attempt to disrupt or compromise the security or integrity of the platform, including introducing malware, hacking, or other harmful behavior.

Woortec reserves the right to terminate or suspend access to your account if any violation of these Terms occurs.`,
  },
  {
    title: "Content and Intellectual Property",
    content:
      "All content, software, and materials available through Woortec, including trademarks, logos, and designs, are the exclusive property of Woortec or its licensors. You may use Woortec only as permitted under these Terms and solely for your personal or business use.\n\nYou are prohibited from copying, modifying, distributing, or using any of Woortec's content or intellectual property without prior written permission.",
  },
  {
    title: "User-Generated Content",
    content:
      "If you submit content to Woortec, such as feedback, suggestions, or reviews, you grant Woortec a non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, distribute, and modify this content in connection with the platform.\n\nYou warrant that any content submitted does not infringe on the rights of others or violate any applicable laws.",
  },
  {
    title: "Termination",
    content:
      "Woortec reserves the right to suspend or terminate your account and access to the Services at its discretion, including but not limited to violations of these Terms or any illegal activity. You may terminate your account at any time by canceling your subscription and discontinuing the use of the platform.\n\nUpon termination, all licenses and rights granted to you under these Terms will cease, but the provisions concerning payment obligations, intellectual property, disclaimers, and limitations of liability will survive.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Woortec is not responsible or liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use the Services, even if Woortec has been advised of the possibility of such damages.",
  },
  {
    title: "Disclaimer of Warranties",
    content:
      'Woortec provides its Services "as is" and makes no warranties, whether express or implied, regarding the platform\'s reliability, availability, or accuracy. We do not guarantee that the Services will meet your requirements or be free from errors, interruptions, or defects.',
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless Woortec and its officers, directors, employees, and affiliates from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of your use of the Services, your violation of these Terms, or your violation of any rights of a third party.",
  },
  {
    title: "Changes to the Terms",
    content:
      "Woortec may update these Terms at any time. If changes are made, we will notify you via email or through the platform. Your continued use of the Services after such updates constitutes your acceptance of the revised Terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and any disputes arising from your use of Woortec will be governed by and construed in accordance with the laws of Spain. Any legal actions related to these Terms shall be brought exclusively in the courts of Spain.",
  },
  {
    title: "Contact Information",
    content:
      "By using Woortec, you agree to these Terms and Conditions. If you disagree, please refrain from using the platform. If you have any questions or concerns about these Terms and Conditions, you can contact us at info@woortec.com.",
  },
];

function formatContent(content: string) {
  return content.split("\n").map((line, i) => {
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

export default function TermsOfServicePage() {
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
            Woortec Terms of Service
          </h1>
          <p className="mt-6 text-lg text-[#5e727d]">
            These Terms of Service (&quot;Terms&quot;) govern your use of
            Woortec&apos;s platform, website, and services
            (&quot;Services&quot;). By using Woortec, you agree to comply with
            these Terms. If you do not agree to these Terms, do not access or
            use our Services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
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
