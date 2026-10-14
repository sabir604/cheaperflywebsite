import { HeroContent, HeroSlider } from "@/components/website/Hero";
import { FlightSearchFormAdvanced } from "@/components/website/FlightSearchFormAdvanced";
import { PopularDestinationsAdvanced } from "@/components/website/PopularDestinationsAdvanced";
import { WhyCheaperfly } from "@/components/website/WhyCheaperfly";
import { HomeSeasonalPackages } from "@/components/website/HomeSeasonalPackages";
import { TrustpilotReviews } from "@/components/website/TrustpilotReviews";
import { GuaranteeCards } from "@/components/website/GuaranteeCards";

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-[530px] flex flex-col justify-end pb-8 pt-10">
        <HeroSlider />
        <HeroContent />
        <FlightSearchFormAdvanced />
      </div>
      <PopularDestinationsAdvanced />
      <WhyCheaperfly />
      <HomeSeasonalPackages />
      <TrustpilotReviews />
      <GuaranteeCards />
    </>
  );
}
