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
    disable: string;
    dismiss: string;
  }
> = {
  en: {
    title: "Analytics active",
    body: "We use Microsoft Clarity to improve the website. You can turn analytics off at any time.",
    disable: "Turn off",
    dismiss: "OK",
  },
  es: {
    title: "Analítica activa",
    body: "Usamos Microsoft Clarity para mejorar la web. Puedes desactivar la analítica en cualquier momento.",
    disable: "Desactivar",
    dismiss: "OK",
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

    sendClarityConsent("granted");
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
    <div className="fixed right-4 bottom-4 z-[60] w-[calc(100%-2rem)] max-w-xs rounded-lg border border-neutral-200 bg-white/95 p-3 shadow-lg backdrop-blur">
      <p className="text-sm font-semibold text-black">{copy.title}</p>
      <p className="mt-1 text-xs leading-5 text-neutral-600">
        {copy.body}
      </p>
      <div className="mt-3 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:bg-neutral-50"
          onClick={() => handleConsent("denied")}
        >
          {copy.disable}
        </button>
        <button
          type="button"
          className="rounded-full bg-woortec px-3 py-1.5 text-xs font-semibold text-black/75 transition hover:bg-woortec-solid"
          onClick={() => handleConsent("granted")}
        >
          {copy.dismiss}
        </button>
      </div>
    </div>
  );
}
