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
      title: "Maximize impact, minimize spend with Woortec",
      description:
        "At Woortec, we organize the advertising investment process with an integrated platform designed to simplify ad management and provide a centralized hub for all your campaigns.",
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
      cta: "Empezar",
    },
    hero: {
      title: "Maximiza el impacto y reduce el gasto con Woortec",
      description:
        "En Woortec organizamos el proceso de inversión publicitaria con una plataforma integrada diseñada para simplificar la gestión de anuncios y ofrecerte un centro de control unificado para todas tus campañas.",
      cta: "Empezar",
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
