import type { Locale } from "./locale";

type CopySchema = {
  nav: {
    home: string;
    services: string;
    calendar: string;
    highlights: string;
    cta: string;
  };
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    services: string;
    highlights: string;
    privacyPolicy: string;
    termsOfService: string;
    copyright: string;
  };
};

export const copy: Record<Locale, CopySchema> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      calendar: "Calendar",
      highlights: "Highlights",
      cta: "Get Started",
    },
    hero: {
      title: "Compare your campaigns with similar businesses and discover how to improve your results",
      description:
        "In an environment where everyone has data, the advantage lies in understanding it in context. We compare your results with similar businesses to help you identify opportunities, understand which approaches work best in your sector, and turn your paid campaigns into clearer, more profitable decisions.",
      cta: "Get Started",
    },
    footer: {
      services: "Services",
      highlights: "Highlights",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "Copyright ©2024 Woortec",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      calendar: "Calendario",
      highlights: "Novedades",
      cta: "Empieza ahora",
    },
    hero: {
      title: "Compara tus campañas con negocios similares y descubre cómo mejorar tus resultados",
      description:
        "En un entorno donde todos tienen datos, la ventaja está en entenderlos en contexto. Comparamos tus resultados con negocios similares para ayudarte a detectar oportunidades, entender qué enfoques funcionan mejor dentro de tu sector y convertir tus campañas de pago en decisiones más claras y rentables.",
      cta: "Empieza ahora",
    },
    footer: {
      services: "Servicios",
      highlights: "Novedades",
      privacyPolicy: "Política de privacidad",
      termsOfService: "Términos del servicio",
      copyright: "Copyright ©2024 Woortec",
    },
  },
};

export function getCopy(locale: Locale) {
  return copy[locale];
}
