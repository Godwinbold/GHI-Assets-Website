import Carousel from "../components/carousel/HomeCarousel";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import LatestInsight from "../components/home/LatestInsight";
import MeetOurLeadership from "../components/home/MeetOurLeadership";
import { PartnershipBanner } from "../components/home/PartnerWithUs";
import SolutionForAirline from "../components/home/SolutionForAirline";
import TrustedPartner from "../components/home/TrustedPartner";
import WhyGHI from "../components/home/WhyGHI";
import AviationStats from "../components/home/AviationStats";
import SEO from "../components/common/SEO";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GHI Assets Limited",
    "url": "https://ghiassets.com",
    "logo": "https://ghiassets.com/images/logo.png",
    "description": "Africa's premier aviation consultancy, delivering precision strategy and measurable results for airlines and aviation partners worldwide.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "45 Oduduwa Way, Ikeja GRA",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234 803 491 1715",
      "contactType": "sales",
      "email": "info@ghiassets.com"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="GHI Assets | West Africa's Premier Aviation Consultancy & Support"
        description="GHI Assets Limited provides world-class airline representation, cargo sales, route development support, aviation training, and airport supervision in Nigeria and West Africa."
        schema={schema}
      />
      <Hero />
      <Carousel />
      <WhyGHI />
      <AviationStats />
      <TrustedPartner />
      <PartnershipBanner />
      <SolutionForAirline />
      <MeetOurLeadership />
      <LatestInsight />
      <GetInTouch />
    </div>
  );
}

