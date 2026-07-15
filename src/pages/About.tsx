import CompanyPhilosophy from "../components/about-us/CompanyPhilosophy";
import PageHero from "../components/common/PageHero";
import PartnershipBanner from "../components/common/PartnershipBanner";
import ContainerHeader from "../components/home/ContainerHeader";
import Wrapper from "../components/home/Wrapper";
import { about_services } from "../constants/about";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../lib/animations";
import SEO from "../components/common/SEO";

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About GHI Assets Limited",
    "description": "GHI Assets Limited is a diversified aviation investment and holding company incorporated in 2004, acting as a strategic anchor for specialized aviation services in West Africa.",
    "publisher": {
      "@type": "Organization",
      "name": "GHI Assets Limited",
      "logo": "https://ghiassets.com/images/logo.png"
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden ">
      <SEO
        title="About Us | Shaping the Future of Nigeria Aviation"
        description="GHI Assets Limited is a diversified aviation investment and holding company incorporated under Nigeria law in 2004. With over two decades of industry presence, GHI has established itself as a trusted partner."
        schema={schema}
      />
      <PageHero

        imageSrc="/images/about-us.png"
        imageAlt="Shaping the Future of Nigeria Aviation"
        title={"Shaping the Future  &\nof Nigeria Aviation"}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer(0.15)}
      >
        <Wrapper className="bg-white grid grid-cols-1 ">
          <motion.div variants={fadeInUp}>
            <ContainerHeader
              className="w-140.25!"
              title="OUR STORY"
              subtext={"Fifteen years of "}
              colorText="Flight."
            />
          </motion.div>
          <motion.p className="max-w-172.5 mb-5 text-copy" variants={fadeInUp}>
            GHI Assets Limited is a diversified aviation investment and holding
            company incorporated under Nigeria law in 2004. With over two decades
            of industry presence, GHI has established itself as a trusted partner
            to international airlines seeking reliable, complaint, and
            performance-driven representation in West Africa.
          </motion.p>
          <motion.p className="max-w-172.5 text-copy" variants={fadeInUp}>
            At its core, GHI operates as a strategic anhor for a portfolio of
            specialized aviation services companies. Through majority interests in
            its subsidiaries, GHI delivers tailored commercial and operational
            support that enables airline partners to grow sustainably in complex
            and dynamic markets
          </motion.p>
        </Wrapper>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer(0.08)}
      >
        <Wrapper className="bg-white grid grid-cols-1 ">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3 w-full">
            <motion.img
              variants={fadeInUp}
              src="/images/confrence.png"
              alt="Conference"
              className="w-full h-72 sm:h-88.25 object-cover sm:col-span-2 xl:col-span-2 rounded-lg"
            />
            <motion.img
              variants={fadeInUp}
              src="/images/a-man-holding-award.png"
              alt="Award presentation"
              className="w-full h-72 sm:h-88.25 object-cover rounded-lg"
            />
            <motion.img
              variants={fadeInUp}
              src="/images/suit-man.png"
              alt="Suit man"
              className="w-full h-72 sm:h-88.25 object-cover rounded-lg"
            />
            <motion.img
              variants={fadeInUp}
              src="/images/graduate.png"
              alt="Graduate"
              className="w-full h-72 sm:h-88.25 object-cover rounded-lg"
            />
            <motion.img
              variants={fadeInUp}
              src="/images/office-man-wom.png"
              alt="Office colleagues"
              className="w-full h-72 sm:h-88.25 object-cover rounded-lg"
            />
          </div>
        </Wrapper>
      </motion.div>

      <article className="bg-brand grid grid-cols-1 overflow-hidden">
        <motion.div
          className=" py-12 px-6 lg:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <ContainerHeader
            className="w-140.25!"
            title="OUR STORY"
            subtext={"What we do"}
            changeColor
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-2 gap-4 pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.08)}
        >
          {about_services.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="relative w-full overflow-hidden rounded-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-75 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <p className="absolute z-10 text-white left-4 bottom-4 font-semibold text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </article>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        <Wrapper className="bg-white grid grid-cols-1 ">
          <ContainerHeader
            className="w-140.25!"
            title="OUR VISION, MISSION, VALUE"
            subtext={"What drives "}
            colorText="Us Forward"
          />

          <CompanyPhilosophy />
        </Wrapper>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        <PartnershipBanner
          title="Built on purpose. Driven by expertise"
          description={`Discover how GHI Assets Limited is shaping the future of aviation across Nigeria and West Africa.`}
          ctaLink="/contact"
          imageAlt="Partnership"
          imageSrc="/images/business-handshake.png"
          ctaLabel="Contact Us"
        />
      </motion.div>
    </main>
  );
}

