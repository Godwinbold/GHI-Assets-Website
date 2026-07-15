import PageHero from "../components/common/PageHero";
import PartnershipBanner from "../components/common/PartnershipBanner";
import ArticleCard from "../components/home/ArticleCard";
import Wrapper from "../components/home/Wrapper";
import FeaturedInsight from "../components/insights/FeaturedInsight";
import { articles } from "../constants/insights";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../lib/animations";

const Insights = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageHero
        imageSrc={`/images/half_world.png`}
        imageAlt={"half world"}
        title="Industry News  & Updates"
        description="Explore the inspiring world of GHI Assets Limited through our stories"
      />
      <FeaturedInsight />
      <Wrapper className="grid grid-cols-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full"
        >
          {articles.map((article) => (
            <motion.div key={article.link} variants={fadeInUp}>
              <ArticleCard
                category={article.pillword}
                title={article.description}
                readTime={`${article.time}`}
                imageSrc={article.image}
                href={article.link}
                date=""
              />
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
      <PartnershipBanner
        title="Ready to move your cargo?"
        description={`Talk to our team about APG Cargo representation or Sky Logistics freight solutions across Nigeria and West Africa.`}
        ctaLink="/contact"
        imageAlt="Partnership"
        imageSrc="/images/box.png"
        ctaLabel="Contact Us"
      />
    </div>
  );
};

export default Insights;

