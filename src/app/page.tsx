import { HeroSection } from "@/components/sections/HeroSection";
import { LogoSlider } from "@/components/sections/LogoSlider";
import { VideoSection } from "@/components/sections/VideoSection";
import { FeaturesTabSection } from "@/components/sections/FeaturesTabSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoSlider />
      <VideoSection />
      <FeaturesTabSection />
      <TestimonialSection />
    </main>
  );
}
