import Carousel from "../components/carousel/HomeCarousel";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import LatestInsight from "../components/home/LatestInsight";
import MeetOurLeadership from "../components/home/MeetOurLeadership";
import { PartnershipBanner } from "../components/home/PartnerWithUs";
import SolutionForAirline from "../components/home/SolutionForAirline";
import TrustedPartner from "../components/home/TrustedPartner";
import WhyGHI from "../components/home/WhyGHI";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Hero/>
      <Carousel/>
      <WhyGHI/>
      <TrustedPartner/>
     <PartnershipBanner/>
     <SolutionForAirline/>
     <MeetOurLeadership/>
     <LatestInsight/>
     <GetInTouch/>
    </div>
  );
}
