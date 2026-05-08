import type { Metadata } from "next";
import { getRequestRegion } from "@/lib/request-region";

export const metadata: Metadata = {
  title: "Privacy Policy - Woortec",
  description: "Learn how Woortec collects, uses, and protects your personal data.",
};

function formatContent(content: string) {
  return content.split("\n").map((line, i, arr) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const formatted = parts.map((part, j) => (j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>));
    return <span key={i}>{formatted}{i < arr.length - 1 && <br />}</span>;
  });
}

export default async function PrivacyPolicyPage() {
  const { locale } = await getRequestRegion();
  const sections = locale === "es" ? [
    { title: "1. Responsable del tratamiento", content: "En Woortec tu privacidad es una prioridad. Esta política explica cómo recopilamos, usamos y protegemos tus datos personales al utilizar nuestro sitio web (https://woortec.com/) y servicios relacionados." },
    { title: "2. Datos que recopilamos", content: "Cuando usas Woortec, podemos recopilar distintos tipos de datos personales:\n\n• **Información identificativa:** nombre, email y otros datos de contacto.\n• **Datos de uso:** cómo interactúas con la plataforma, IP y detalles del dispositivo.\n• **Datos financieros:** información de pago y facturación en planes premium." },
    { title: "3. Cómo usamos tus datos", content: "Woortec utiliza los datos personales para:\n\n• prestar y mejorar nuestros servicios\n• gestionar tu cuenta y suscripción\n• garantizar la seguridad de la plataforma\n• enviar actualizaciones, ofertas y comunicaciones relevantes" },
    { title: "4. Base legal", content: "Tratamos datos sobre la base de:\n\n• **Ejecución contractual**\n• **Cumplimiento legal**\n• **Interés legítimo**" },
    { title: "5. Cesión de datos", content: "No vendemos ni alquilamos tus datos. Podemos compartirlos con proveedores de confianza que nos ayudan a operar la plataforma, como pagos, analítica y hosting." },
    { title: "6. Conservación", content: "Conservamos tus datos el tiempo necesario para prestar el servicio o cumplir obligaciones legales. Después se eliminan o anonimizan de forma segura." },
    { title: "7. Tus derechos", content: "Tienes derecho a:\n\n• **Acceso**\n• **Rectificación**\n• **Supresión**\n• **Limitación**\n• **Oposición**\n\nPuedes ejercerlos escribiendo a info@woortec.com" },
    { title: "8. Cookies", content: "Woortec usa cookies para mejorar la experiencia y recopilar datos de uso. Puedes bloquearlas desde tu navegador, aunque algunas funciones podrían verse afectadas." },
    { title: "9. Seguridad", content: "Aplicamos medidas de seguridad estrictas para proteger tus datos, aunque ningún sistema puede garantizar seguridad absoluta." },
    { title: "10. Cambios en esta política", content: "Woortec podrá actualizar esta política en cualquier momento. Si hay cambios relevantes, te informaremos por email o dentro de la plataforma." },
    { title: "11. Contacto", content: "Si tienes dudas sobre esta política o sobre tus datos, puedes escribirnos a info@woortec.com" },
  ] : [
    { title: "1. Data Controller", content: "At Woortec, your privacy is a priority. This policy explains how we collect, use, and protect your personal data when using our website (https://woortec.com/) and related services. By accessing or using Woortec, you agree to the terms of this privacy policy." },
    { title: "2. Data We Collect", content: "When you use Woortec, we may collect various types of personal data, such as:\n\n• **Identifying Information:** Name, email address, and other contact details.\n• **Usage Data:** Information on how you interact with our platform, including login information, IP address, and device details.\n• **Financial Data:** Payment and billing information in case of premium subscription plans." },
    { title: "3. How We Use Your Data", content: "Woortec uses the personal data collected to:\n\n• Provide and improve our services\n• Manage your account and subscription\n• Ensure the security of the platform\n• Send relevant updates, offers, and promotional content" },
    { title: "4. Legal Basis for Processing Data", content: "We process personal data based on the following:\n\n• **Contractual necessity**\n• **Legal compliance**\n• **Legitimate interest**" },
    { title: "5. Data Sharing", content: "We do not sell or rent your personal data. However, we may share it with trusted third-party service providers who help us operate our platform, such as payment processors, analytics providers, and hosting services." },
    { title: "6. Data Retention", content: "Woortec retains your personal data for as long as necessary to provide the services or as required by law. Once data is no longer needed, we securely delete or anonymize it." },
    { title: "7. Your Rights", content: "You have the following rights concerning your personal data:\n\n• **Access**\n• **Rectification**\n• **Erasure**\n• **Restriction**\n• **Objection**\n\nYou can exercise these rights by contacting us at info@woortec.com" },
    { title: "8. Cookies and Tracking Technologies", content: "Woortec uses cookies to enhance your experience and gather usage data. You can modify your browser settings to block cookies, but this may impact your ability to use some features of the platform." },
    { title: "9. Security Measures", content: "We implement strict security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no system can be completely secure, and we cannot guarantee absolute security." },
    { title: "10. Changes to this Privacy Policy", content: "Woortec reserves the right to update this privacy policy at any time. If significant changes are made, we will notify you via email or within the platform." },
    { title: "11. Contact Information", content: "For any questions or concerns regarding this privacy policy or your data, you can contact us at info@woortec.com" },
  ];

  return <main><section className="relative overflow-hidden pt-32 pb-20" style={{ backgroundImage: "linear-gradient(#fff, #b7f8db 70%, #fff 101%)" }}><div className="mx-auto max-w-4xl px-6"><h1 className="font-heading text-3xl font-bold text-woortec-text md:text-5xl">{locale === "es" ? "Política de privacidad de Woortec" : "Woortec Privacy Policy"}</h1><p className="mt-6 text-lg text-[#5e727d]">{locale === "es" ? "En Woortec tu privacidad es prioritaria. Aquí te explicamos cómo recopilamos, usamos y protegemos tus datos personales al usar nuestra web y servicios relacionados." : "At Woortec, your privacy is a priority. This policy explains how we collect, use, and protect your personal data when using our website (https://woortec.com/) and related services. By accessing or using Woortec, you agree to the terms of this privacy policy."}</p></div></section><section className="bg-white py-20"><div className="mx-auto max-w-4xl space-y-16 px-6">{sections.map((section) => <div key={section.title}><h2 className="font-heading text-xl font-bold text-woortec-text md:text-2xl">{section.title}</h2><p className="mt-4 leading-relaxed whitespace-pre-line text-neutral-600">{formatContent(section.content)}</p></div>)}<p className="font-semibold text-black">{locale === "es" ? "Actualizado el 26 de septiembre de 2024" : "Updated September 26, 2024"}</p></div></section></main>;
}
