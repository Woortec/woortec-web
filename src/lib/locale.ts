export type Locale = "es" | "en";
export type Currency = "EUR" | "USD";

export type RegionConfig = {
  locale: Locale;
  currency: Currency;
  countryCode: string;
};

export const DEFAULT_REGION_CONFIG: RegionConfig = {
  locale: "en",
  currency: "USD",
  countryCode: "US",
};

export function getRegionConfigFromCountry(countryCode?: string | null): RegionConfig {
  const normalized = (countryCode || "").toUpperCase();

  if (normalized === "ES") {
    return {
      locale: "es",
      currency: "EUR",
      countryCode: "ES",
    };
  }

  return {
    locale: "en",
    currency: "USD",
    countryCode: normalized || "US",
  };
}

export function formatPrice(amount: number, currency: Currency, locale: Locale) {
  const localeCode = locale === "es" ? "es-ES" : "en-US";

  return new Intl.NumberFormat(localeCode, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
