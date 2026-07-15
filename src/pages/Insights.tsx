import PageHero from "../components/common/PageHero";
import PartnershipBanner from "../components/common/PartnershipBanner";
import ArticleCard from "../components/home/ArticleCard";
import Wrapper from "../components/home/Wrapper";
import FeaturedInsight from "../components/insights/FeaturedInsight";
import { articles } from "../constants/insights";

const Insights = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        imageSrc={`/images/half_world.png`}
        imageAlt={"half world"}
        title="Industry News  & Updates"
        description="Explore the inspiring world of GHI Assets Limited through our stories"
      />
      <FeaturedInsight />
      <Wrapper className="grid grid-cols-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          {articles.map((article) => (
            <ArticleCard
              key={article.link}
              category={article.pillword}
              title={article.description}
              readTime={`${article.time}`}
              imageSrc={article.image}
              href={article.link}
              date=""
            />
          ))}
        </div>
      </Wrapper>{" "}
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
