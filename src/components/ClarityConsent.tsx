"use client";

import { useEffect, useState } from "react";

type ConsentState = "granted" | "denied";
type Locale = "en" | "es";

const STORAGE_KEY = "woortec_clarity_consent";
const labels: Record<
  Locale,
  {
    title: string;
    body: string;
    reject: string;
    accept: string;
  }
> = {
  en: {
    title: "Analytics cookies",
    body: "We use Microsoft Clarity to understand how visitors use the website and improve the experience. Analytics cookies are optional.",
    reject: "Reject",
    accept: "Accept analytics",
  },
  es: {
    title: "Cookies de analítica",
    body: "Usamos Microsoft Clarity para entender cómo se utiliza la web y mejorar la experiencia. Las cookies de analítica son opcionales.",
    reject: "Rechazar",
    accept: "Aceptar analítica",
  },
};

function sendClarityConsent(state: ConsentState) {
  window.clarity?.("consentv2", {
    ad_storage: "denied",
    analytics_storage: state,
  });
}

export function ClarityConsent({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false);
  const copy = labels[locale];

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(STORAGE_KEY);

    if (storedConsent === "granted" || storedConsent === "denied") {
      sendClarityConsent(storedConsent);
      return;
    }

    sendClarityConsent("denied");
    queueMicrotask(() => setIsVisible(true));
  }, []);

  function handleConsent(state: ConsentState) {
    window.localStorage.setItem(STORAGE_KEY, state);
    sendClarityConsent(state);
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 z-[60] w-[calc(100%-2rem)] max-w-sm rounded-lg border border-neutral-200 bg-white p-4 shadow-xl">
      <p className="text-sm font-semibold text-black">{copy.title}</p>
      <p className="mt-2 text-sm leading-5 text-neutral-600">
        {copy.body}
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
          onClick={() => handleConsent("denied")}
        >
          {copy.reject}
        </button>
        <button
          type="button"
          className="rounded-full bg-woortec px-4 py-2 text-sm font-semibold text-black/75 transition hover:bg-woortec-solid"
          onClick={() => handleConsent("granted")}
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}
