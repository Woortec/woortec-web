import type { Locale } from "./locale";

type CopySchema = {
  nav: {
    home: string;
    services: string;
    agency: string;
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
    agency: string;
    highlights: string;
    privacyPolicy: string;
    termsOfService: string;
    copyright: string;
  };
  supportChat: {
    launcherLabel: string;
    title: string;
    greeting: string;
    responseTime: string;
    primaryCta: string;
    secondaryCta: string;
    emailSubject: string;
    emailBody: string;
  };
};

export const copy: Record<Locale, CopySchema> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      agency: "Agency",
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
      agency: "Agency",
      highlights: "Highlights",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "Copyright ©2024 Woortec",
    },
    supportChat: {
      launcherLabel: "Support chat",
      title: "How can we help?",
      greeting:
        "Hi! Tell us what you need and the Woortec team will get back to you as soon as possible.",
      responseTime: "Typical response: same business day",
      primaryCta: "Start conversation",
      secondaryCta: "Send email",
      emailSubject: "Support request from woortec.com",
      emailBody: "Hi Woortec team,\n\nI need help with...",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      agency: "Agencia",
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
      agency: "Agencia",
      highlights: "Novedades",
      privacyPolicy: "Política de privacidad",
      termsOfService: "Términos del servicio",
      copyright: "Copyright ©2024 Woortec",
    },
    supportChat: {
      launcherLabel: "Soporte",
      title: "¿Cómo podemos ayudarte?",
      greeting:
        "Hola. Cuéntanos qué necesitas y el equipo de Woortec te responderá lo antes posible.",
      responseTime: "Respuesta habitual: mismo día laborable",
      primaryCta: "Iniciar conversación",
      secondaryCta: "Enviar email",
      emailSubject: "Solicitud de soporte desde woortec.com",
      emailBody: "Hola equipo Woortec,\n\nNecesito ayuda con...",
    },
  },
};

export function getCopy(locale: Locale) {
  return copy[locale];
}
