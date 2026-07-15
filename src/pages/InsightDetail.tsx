import { Link, useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { insightsDetails } from "../constants/insights";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../lib/animations";
import SEO from "../components/common/SEO";

const imageAliases: Record<string, string> = {
  "hero-image-aircraft-tug-rainy": "/images/airplane2.png",
  "inline-image-aircraft-jetbridge": "/images/airplane3.png",
};

const resolveImageSrc = (src: string) => {
  if (src.startsWith("/")) {
    return src;
  }

  return imageAliases[src] ?? src;
};

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();

  const insight = insightsDetails.find((item) => item.slug === slug);

  if (!insight) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-brand">Insight not found</h1>
          <Link to="/insights" className="mt-4 inline-block text-highlight">
            Back to insights
          </Link>
        </div>
      </main>
    );
  }

  const articleTitle = insight.title;
  const articleDescription = (insight.SECOND_SECTION.body[0] || insight.FIRST_SECTION.body[0] || "").slice(0, 155) + "...";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": insight.title,
    "image": [
      insight.image.startsWith("http") ? insight.image : `https://ghiassets.com${insight.image}`
    ],
    "datePublished": insight.date,
    "publisher": {
      "@type": "Organization",
      "name": "GHI Assets Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ghiassets.com/images/logo.png"
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <SEO
        title={articleTitle}
        description={articleDescription}
        image={insight.image}
        type="article"
        schema={articleSchema}
      />
      <PageHero
        imageSrc={insight.image}
        imageAlt={insight.title}
        timeDate={`${insight.date} - ${insight.readTime}`}
        title={insight.title}
        social={true}

      />

      <article className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:py-20 overflow-hidden">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.12)}
          className="space-y-10"
        >
          {insight.FIRST_SECTION.body.map((paragraph, index) => (
            <motion.div key={paragraph.slice(0, 40)} variants={fadeInUp} className="space-y-8">
              <p className="text-sm leading-7 text-copy md:text-[15px]">
                {paragraph}
              </p>
              {insight.FIRST_SECTION.images[index] && (
                <img
                  src={resolveImageSrc(insight.FIRST_SECTION.images[index])}
                  alt={`${insight.title} detail ${index + 1}`}
                  className="h-84.5 w-full object-cover rounded-lg"
                />
              )}
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.12)}
          className="mt-16 space-y-8 md:mt-24"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl font-bold text-brand md:text-2xl">
              {insight.SECOND_SECTION.title}
            </h2>
            <div className="mt-3 h-3 w-10 bg-brand" />
          </motion.div>

          {insight.SECOND_SECTION.body.map((paragraph) => (
            <motion.p
              key={paragraph.slice(0, 40)}
              variants={fadeInUp}
              className="text-sm leading-7 text-copy md:text-[15px]"
            >
              {paragraph}
            </motion.p>
          ))}

          <div className="space-y-8">
            {insight.SECOND_SECTION.images.map((image, index) => (
              <motion.img
                key={image}
                variants={fadeInUp}
                src={resolveImageSrc(image)}
                alt={`${insight.SECOND_SECTION.title} detail ${index + 1}`}
                className="h-84.5 w-full object-cover rounded-lg"
              />
            ))}
          </div>
        </motion.section>
      </article>
    </main>
  );
}

