import { HeroSection } from "@/components/sections/HeroSection";
import { LogoSlider } from "@/components/sections/LogoSlider";
import { VideoSection } from "@/components/sections/VideoSection";
import { FeaturesTabSection } from "@/components/sections/FeaturesTabSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { getRequestRegion } from "@/lib/request-region";
import { getCopy } from "@/lib/copy";

export default async function Home() {
  const region = await getRequestRegion();
  const copy = getCopy(region.locale);

  return (
    <main>
      <HeroSection copy={copy.hero} />
      <LogoSlider />
      <VideoSection />
      <FeaturesTabSection />
      <TestimonialSection />
    </main>
  );
}
