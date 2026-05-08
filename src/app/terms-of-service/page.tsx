import type { Metadata } from "next";
import { getRequestRegion } from "@/lib/request-region";

export const metadata: Metadata = {
  title: "Terms of Service - Woortec",
  description: "Review Woortec's Terms of Service.",
};

function formatContent(content: string) {
  return content.split("\n").map((line, i, arr) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const formatted = parts.map((part, j) => (j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>));
    return <span key={i}>{formatted}{i < arr.length - 1 && <br />}</span>;
  });
}

export default async function TermsOfServicePage() {
  const { locale } = await getRequestRegion();
  const sections = locale === "es" ? [
    { title: "Aceptación de los términos", content: "Al registrarte, acceder o utilizar los servicios de Woortec, aceptas estos términos y las políticas aplicables." },
    { title: "Elegibilidad", content: "Debes tener al menos 18 años o la mayoría de edad legal en tu jurisdicción para utilizar nuestros servicios." },
    { title: "Descripción de los servicios", content: "Woortec ofrece una plataforma online para gestionar y optimizar campañas publicitarias en distintas redes." },
    { title: "Registro de cuenta", content: "Para acceder a determinadas funciones, puede que necesites crear una cuenta. Aceptas:\n\n• proporcionar información exacta y completa\n• mantener seguros tus datos de acceso\n• avisar inmediatamente de cualquier uso no autorizado" },
    { title: "Planes y pagos", content: "Woortec ofrece varios planes de suscripción.\n\n• **Facturación:** pagarás las cuotas asociadas al plan elegido.\n• **Renovación automática:** la suscripción se renovará salvo cancelación previa.\n• **Reembolsos:** no se reembolsan salvo obligación legal o indicación expresa de Woortec." },
    { title: "Uso de los servicios", content: "Te comprometes a usar Woortec conforme a la ley y a estos términos. No debes:\n\n• utilizar los servicios para actividades ilegales o fraudulentas\n• infringir derechos de terceros\n• comprometer la seguridad o integridad de la plataforma" },
    { title: "Propiedad intelectual", content: "Todo el contenido, software, marcas, logotipos y diseños disponibles a través de Woortec pertenecen a Woortec o a sus licenciantes." },
    { title: "Contenido generado por el usuario", content: "Si envías contenido como sugerencias o reseñas, concedes a Woortec una licencia no exclusiva y gratuita para usarlo en relación con la plataforma." },
    { title: "Terminación", content: "Woortec puede suspender o cancelar tu cuenta si incumples estos términos o realizas actividades ilegales." },
    { title: "Limitación de responsabilidad", content: "En la máxima medida permitida por la ley, Woortec no será responsable de daños directos o indirectos derivados del uso o la imposibilidad de uso de los servicios." },
    { title: "Exención de garantías", content: "Woortec presta sus servicios “tal cual”, sin garantías expresas o implícitas sobre fiabilidad, disponibilidad o precisión." },
    { title: "Indemnización", content: "Aceptas defender e indemnizar a Woortec frente a reclamaciones derivadas de tu uso de los servicios o del incumplimiento de estos términos." },
    { title: "Cambios en los términos", content: "Woortec puede actualizar estos términos en cualquier momento. Si hay cambios, te lo notificaremos por email o dentro de la plataforma." },
    { title: "Legislación aplicable", content: "Estos términos se regirán por las leyes de España y cualquier conflicto se resolverá en los tribunales españoles." },
    { title: "Información de contacto", content: "Si tienes preguntas sobre estos términos, puedes escribirnos a info@woortec.com." },
  ] : [
    { title: "Acceptance of Terms", content: "By registering, accessing, or using Woortec's Services, you accept these Terms and any applicable policies or guidelines, including our Privacy Policy." },
    { title: "Eligibility", content: "You must be at least 18 years old or the legal age in your jurisdiction to use our Services." },
    { title: "Description of Services", content: "Woortec provides an online platform to manage and optimize advertising campaigns across different networks." },
    { title: "Account Registration", content: "To access certain features of Woortec, you may need to create an account. You agree to:\n\n• provide accurate and complete information\n• keep your account secure\n• notify Woortec of unauthorized use" },
    { title: "Subscription Plans and Payment", content: "Woortec offers various subscription plans.\n\n• **Billing**\n• **Automatic Renewal**\n• **Refunds**" },
    { title: "Use of Services", content: "You agree to use Woortec's Services in compliance with all applicable laws and these Terms." },
    { title: "Content and Intellectual Property", content: "All content, software, and materials available through Woortec are the exclusive property of Woortec or its licensors." },
    { title: "User-Generated Content", content: "If you submit content to Woortec, you grant Woortec a license to use it in connection with the platform." },
    { title: "Termination", content: "Woortec reserves the right to suspend or terminate your account and access to the Services." },
    { title: "Limitation of Liability", content: "To the fullest extent permitted by law, Woortec is not responsible for damages arising from your use of the Services." },
    { title: "Disclaimer of Warranties", content: "Woortec provides its Services as is and makes no warranties regarding reliability, availability, or accuracy." },
    { title: "Indemnification", content: "You agree to indemnify Woortec against claims arising out of your use of the Services or violation of these Terms." },
    { title: "Changes to the Terms", content: "Woortec may update these Terms at any time." },
    { title: "Governing Law", content: "These Terms are governed by the laws of Spain." },
    { title: "Contact Information", content: "If you have any questions about these Terms, contact info@woortec.com." },
  ];

  return <main><section className="relative overflow-hidden pt-32 pb-20" style={{ backgroundImage: "linear-gradient(#fff, #b7f8db 70%, #fff 101%)" }}><div className="mx-auto max-w-4xl px-6"><h1 className="font-heading text-3xl font-bold text-woortec-text md:text-5xl">{locale === "es" ? "Términos del servicio de Woortec" : "Woortec Terms of Service"}</h1><p className="mt-6 text-lg text-[#5e727d]">{locale === "es" ? "Estos términos regulan el uso de la plataforma, la web y los servicios de Woortec. Si utilizas Woortec, aceptas cumplirlos." : "These Terms of Service govern your use of Woortec's platform, website, and services. By using Woortec, you agree to comply with these Terms."}</p></div></section><section className="bg-white py-20"><div className="mx-auto max-w-4xl space-y-16 px-6">{sections.map((section) => <div key={section.title}><h2 className="font-heading text-xl font-bold text-woortec-text md:text-2xl">{section.title}</h2><p className="mt-4 leading-relaxed whitespace-pre-line text-neutral-600">{formatContent(section.content)}</p></div>)}<p className="font-semibold text-black">{locale === "es" ? "Actualizado el 26 de septiembre de 2024" : "Updated September 26, 2024"}</p></div></section></main>;
}
