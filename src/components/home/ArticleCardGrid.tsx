
import ArticleCard from "./ArticleCard"
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../../lib/animations";

const articles = [
  {
    imageSrc: "/images/airplane2.png",
    imageAlt: "Airplane on tarmac",
    category: "Sales & Distribution",
    title: "GHI Assets Limited Expand Ground Handling Network Across West Africa",
    date: "23 June 2025",
    readTime: "3 min read",
    href: "/articles/ground-handling",
  },
  {
    imageSrc: "/images/pilot.png",
    imageAlt: "Pilot in cockpit",
    category: "Aviation Training",
    title: "Next-Gen Aviation Training: The Digital Simulation Technology",
    date: "23 June 2025",
    readTime: "3 min read",
    href: "/articles/aviation-training",
  },
  {
    imageSrc: "/images/business-handshake.png",
    imageAlt: "Handshake",
    category: "Partnership",
    title: "Synergy in Action: How We are Co-Creating the Future",
    date: "23 June 2025",
    readTime: "3 min read",
    href: "/articles/partnership",
  },
]

const ArticleCardGrid = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer(0.08)}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full"
    >
      {articles.map((article) => (
        <motion.div key={article.href} variants={fadeInUp}>
          <ArticleCard {...article} />
        </motion.div>
      ))}
    </motion.section>
  )
}

export default ArticleCardGrid