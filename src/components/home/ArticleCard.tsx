import { Link } from "react-router-dom";
import { useInView } from "../../lib/useInView";

interface ArticleCardProps {
  imageSrc: string;
  imageAlt?: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  href?: string;
}

const ArticleCard = ({
  imageSrc,
  imageAlt = "",
  category,
  title,
  date,
  readTime,
  href = "#",
}: ArticleCardProps) => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`flex flex-col overflow-hidden rounded-[12px] border border-gray-100 bg-white shadow-sm transition-all duration-700 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {/* Image */}
      <div className="h-54.25 w-full overflow-hidden ">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Category pill */}
        <span className="w-fit rounded-full px-3 py-1 text-[#00205B] bg-[#EEF1F7] text-[10px] uppercase tracking-wide">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-[18px] md:text-[32px] font-bold leading-snug text-gray-900">
          {title}
        </h3>

        {/* Meta */}
        <p className="text-[13px] text-gray-400">
          {date} · {readTime}
        </p>

        {/* Spacer pushes link to bottom */}
        <div className="flex-1" />

        {/* CTA */}
        <Link
          to={href}
          className="mt-20 inline-flex items-center gap-1.5 text-sm font-medium text-highlight"
        >
          Read Articles
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
