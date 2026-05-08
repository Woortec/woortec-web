"use client";

import { useEffect, useRef, useState, useTransition } from "react";
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
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (nextLocale: Locale) => {
    const nextCurrency = getCurrencyForLocale(nextLocale);
    document.cookie = `woortec_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    document.cookie = `woortec_currency=${nextCurrency}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);

    startTransition(() => {
      router.refresh();
    });
  };

  const options: Array<{ locale: Locale; label: string }> = [
    { locale: "es", label: "Español" },
    { locale: "en", label: "English" },
  ];

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`.trim()}>
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-woortec-text transition hover:bg-black/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.7 4 5.8 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.8-4-9s1.5-6.3 4-9Z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 min-w-[150px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
          {options.map((option) => {
            const active = locale === option.locale;
            return (
              <button
                key={option.locale}
                type="button"
                onClick={() => switchLocale(option.locale)}
                disabled={isPending}
                className={`flex w-full items-center justify-between px-4 py-3 text-sm transition ${
                  active
                    ? "bg-neutral-100 font-semibold text-woortec-text"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                <span>{option.label}</span>
                {active && <span>✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
