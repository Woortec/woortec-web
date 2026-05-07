import { cookies, headers } from "next/headers";
import {
  DEFAULT_REGION_CONFIG,
  getRegionConfigFromCountry,
  type Currency,
  type Locale,
  type RegionConfig,
} from "./locale";

const LOCALE_COOKIE = "woortec_locale";
const CURRENCY_COOKIE = "woortec_currency";

export async function getRequestRegion(): Promise<RegionConfig> {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const localeCookie = cookieStore.get(LOCALE_COOKIE)?.value as Locale | undefined;
  const currencyCookie = cookieStore.get(CURRENCY_COOKIE)?.value as Currency | undefined;

  if (
    (localeCookie === "es" || localeCookie === "en") &&
    (currencyCookie === "EUR" || currencyCookie === "USD")
  ) {
    return {
      locale: localeCookie,
      currency: currencyCookie,
      countryCode: localeCookie === "es" ? "ES" : "US",
    };
  }

  const countryHeader =
    headerStore.get("x-vercel-ip-country") ||
    headerStore.get("cf-ipcountry") ||
    headerStore.get("x-country-code") ||
    headerStore.get("x-forwarded-country");

  if (!countryHeader) {
    return DEFAULT_REGION_CONFIG;
  }

  return getRegionConfigFromCountry(countryHeader);
}
