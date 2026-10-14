import { FlightSearchFormAdvanced } from "@/components/website/FlightSearchFormAdvanced";
import { UmrahGuarantees } from "@/components/website/UmrahGuarantees";
import { UmrahHero } from "@/components/website/UmrahHero";
import { UmrahPackages } from "@/components/website/UmrahPackages";
import { UmrahReviews } from "@/components/website/UmrahReviews";
import { umrahPackages } from "@/lib/umrah-packages";

export const metadata = { title: "Umrah Packages | CheaperFly" };

export default function UmrahPage() {
  return (
    <>
      <div className="relative min-h-[530px] flex flex-col justify-end pb-8 pt-10">
        <UmrahHero />
        <div id="umrah-booking-form" className="relative z-20">
          <FlightSearchFormAdvanced />
        </div>
      </div>
      <UmrahPackages packages={umrahPackages} />
      <UmrahGuarantees />
      <UmrahReviews />
    </>
  );
}
