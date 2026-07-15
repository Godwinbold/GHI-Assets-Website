
import ArticleCard from "./ArticleCard"

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
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
      {articles.map((article) => (
        <ArticleCard key={article.href} {...article} />
      ))}
    </section>
  )
}

export default ArticleCardGrid