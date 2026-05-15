import type { Metadata } from "next";
import { Montserrat, Exo, Ubuntu, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics, GTMNoscript } from "@/components/GoogleAnalytics";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { getRequestRegion } from "@/lib/request-region";
import { getCopy } from "@/lib/copy";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woortec.com"),
  title: {
    default: "Woortec - Digital Platform for Optimizing Ads Investments",
    template: "%s | Woortec",
  },
  description:
    "Woortec, your go-to Digital Platform for Optimizing Ads Investments. We simplify and organize the advertising investment process, ensuring you're always in control and maximizing your return on investment (ROI).",
  keywords: [
    "ads management",
    "advertising ROI",
    "ad optimization",
    "Facebook ads",
    "campaign management",
    "digital advertising",
    "ad spend optimization",
  ],
  authors: [{ name: "Woortec" }],
  openGraph: {
    title: "Woortec - Digital Platform for Optimizing Ads Investments",
    description:
      "Woortec, your go-to Digital Platform for Optimizing Ads Investments.",
    url: "https://woortec.com",
    siteName: "Woortec",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woortec",
    description:
      "Woortec, your go-to Digital Platform for Optimizing Ads Investments.",
  },
  icons: {
    icon: "/logos/logo256.png",
    apple: "/logos/logo256.png",
  },
  alternates: {
    canonical: "https://woortec.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const region = await getRequestRegion();
  const copy = getCopy(region.locale);

  return (
    <html lang={region.locale}>
      <head>
        <GoogleAnalytics />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wrkf27qmr0");
            `,
          }}
        />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body
        className={`${montserrat.variable} ${exo.variable} ${ubuntu.variable} ${oswald.variable} font-sans antialiased`}
      >
        <GTMNoscript />
        <Navbar copy={copy.nav} locale={region.locale} currency={region.currency} />
        {children}
        <Footer copy={copy.footer} locale={region.locale} currency={region.currency} />
      </body>
    </html>
  );
}
