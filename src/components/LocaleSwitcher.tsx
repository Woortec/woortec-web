"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Currency, Locale } from "@/lib/locale";

type LocaleSwitcherProps = {
  locale: Locale;
  currency: Currency;
  className?: string;
};

function getCurrencyForLocale(locale: Locale): Currency {
  return locale === "es" ? "EUR" : "USD";
}

export function LocaleSwitcher({ locale, className = "" }: LocaleSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    const nextCurrency = getCurrencyForLocale(nextLocale);
    document.cookie = `woortec_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    document.cookie = `woortec_currency=${nextCurrency}; path=/; max-age=31536000; samesite=lax`;

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className={`inline-flex items-center rounded-full border border-neutral-300 bg-white p-1 shadow-sm ${className}`.trim()}>
      <button
        type="button"
        onClick={() => switchLocale("es")}
        disabled={isPending}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
          locale === "es"
            ? "bg-woortec-text text-white"
            : "text-neutral-700 hover:bg-neutral-100"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
          locale === "en"
            ? "bg-woortec-text text-white"
            : "text-neutral-700 hover:bg-neutral-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
