import CompanyPhilosophy from "../components/about-us/CompanyPhilosophy";
import PageHero from "../components/common/PageHero";
import PartnershipBanner from "../components/common/PartnershipBanner";
import ContainerHeader from "../components/home/ContainerHeader";
import Wrapper from "../components/home/Wrapper";
import { about_services } from "../constants/about";

export default function About() {
  return (
    <main className="min-h-screen ">
      <PageHero
        imageSrc="/images/about-us.png"
        imageAlt="Shaping the Future of Nigeria Aviation"
        title={"Shaping the Future  &\nof Nigeria Aviation"}
        // description="GHI Assets Limited delivers precision-engineered aviation consultancy from route development to cargo operations, connecting airlines with world-class strategic expertise."
      />
      <Wrapper className="bg-white grid grid-cols-1 ">
        <ContainerHeader
          className="w-140.25!"
          title="OUR STORY"
          subtext={"Fifteen years of "}
          colorText="Flight."
        />
        <p className="max-w-172.5 mb-5">
          GHI Assets Limited is a diversified aviation investment and holding
          company incorporated under Nigeria law in 2004. With over two decades
          of industry presence, GHI has established itself as a trusted partner
          to international airlines seeking reliable, complaint, and
          performance-driven representation in West Africa.
        </p>
        <p className="max-w-172.5">
          At its core, GHI operates as a strategic anhor for a portfolio of
          specialized aviation services companies. Through majority interests in
          its subsidiaries, GHI delivers tailored commercial and operational
          support that enables airline partners to grow sustainably in complex
          and dynamic markets
        </p>
      </Wrapper>

      <Wrapper className="bg-white grid grid-cols-1 ">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
          <img
            src="/images/confrence.png"
            alt="Conference"
            className="w-full h-72 sm:h-88.25 object-cover sm:col-span-2 xl:col-span-2"
          />
          <img
            src="/images/a-man-holding-award.png"
            alt="Award presentation"
            className="w-full h-72 sm:h-88.25 object-cover"
          />
          <img
            src="/images/suit-man.png"
            alt="Suit man"
            className="w-full h-72 sm:h-88.25 object-cover"
          />
          <img
            src="/images/graduate.png"
            alt="Graduate"
            className="w-full h-72 sm:h-88.25 object-cover"
          />
          <img
            src="/images/office-man-wom.png"
            alt="Office colleagues"
            className="w-full h-72 sm:h-88.25 object-cover"
          />
        </div>
      </Wrapper>

      <article className="bg-brand grid grid-cols-1 ">
        <div className=" py-12 px-6 lg:px-20">
          <ContainerHeader
            className="w-140.25!"
            title="OUR STORY"
            subtext={"What we do"}
            changeColor
          />
        </div>
        <div className="flex w-full px-2">
          {about_services.map((item) => (
            <div className="relative w-full">
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className="w-full h-75 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <p className="absolute z-2 text-white left-2 top-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </article>

      <Wrapper className="bg-white grid grid-cols-1 ">
        <ContainerHeader
          className="w-140.25!"
          title="OUR VISION, MISSION, VALUE"
          subtext={"What drives "}
          colorText="Us Forward"
        />

        <CompanyPhilosophy />
      </Wrapper>

      <PartnershipBanner
        title="Built on purpose. Driven by expertise"
        description={`Discover how GHI Assets Limited is shaping the future of aviation across Nigeria and West Africa.`}
        ctaLink="/contact"
        imageAlt="Partnership"
        imageSrc="/images/business-handshake.png"
        ctaLabel="Contact Us"
      />
    </main>
  );
}
