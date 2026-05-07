import { ServicesPricing } from "@/components/services/ServicesPricing";
import { getRequestRegion } from "@/lib/request-region";

export default async function ServicesPage() {
  const region = await getRequestRegion();

  return (
    <ServicesPricing
      locale={region.locale}
      currency={region.currency}
    />
  );
}
