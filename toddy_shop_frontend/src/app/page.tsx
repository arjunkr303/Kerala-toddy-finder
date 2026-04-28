import { HeroSection } from "@/features/home/components/HeroSection";
import { FeaturedShops } from "@/features/home/components/FeaturedShops";
import { DistrictExplorer } from "@/features/home/components/DistrictExplorer";
import { SignatureFlavors } from "@/features/home/components/SignatureFlavors";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { CTASection } from "@/features/home/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedShops />
      <DistrictExplorer />
      <SignatureFlavors />
      <HowItWorks />
      <CTASection />
    </>
  );
}
