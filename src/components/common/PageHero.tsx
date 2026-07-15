import { Link } from "react-router-dom";
import Breadcrumb from "./BreadCrumbs";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  imageSrc: string;
  imageAlt?: string;
  timeDate?: string;
  social?: boolean;
  title: string;
  description?: string;
  buttonAvailable?: boolean;
  buttonLabel?: string;
  buttonLink?: string;
}

const PageHero = ({
  imageSrc,
  imageAlt = "",
  timeDate = "",
  social = false,
  title,
  description,
  buttonAvailable = false,
  buttonLabel,
  buttonLink,
}: PageHeroProps) => {
  return (
    <section
      className="relative flex  h-screen items-center bg-no-repeat overflow-hidden"
      // style={{
      //     background: "url('/images/services-bg.png')"
      //   }}
    >
      {/* Background image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,25,47,0.70) 3%, rgba(10,25,47,0.50) )",
        }}
      />

      {/* Content */}
      <div className="relative  px-10 pb-14 md:px-14 max-w-xl">
        <Breadcrumb className="mb-6 w-full" />
        {timeDate && (
          <p className="text-[15px] mb-5 font-light leading-relaxed text-white/70 max-w-[420px]">
            {timeDate}
          </p>
        )}
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-[42px]">
          {title}
        </h1>

        {social && (
          <div className="mt-12 flex items-center gap-6">
            <p className="text-white">Share</p>
            <div className="flex gap-2">
              {[
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  Icon: SlSocialLinkedin,
                },
                { href: "https://x.com", label: "X", Icon: RiTwitterXLine },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  to={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-[#E8E7E799]  transition-colors hover:bg-highlight hover:border-highlight text-white/90 hover:text-white"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        )}
        {description && (
          <p className="text-[15px] font-light leading-relaxed text-white/70 max-w-[420px]">
            {description}
          </p>
        )}

        {buttonAvailable && (
          <Link
            to={`${buttonLink}`}
            className="mt-8 inline-block rounded-lg bg-brand uppercase px-6 py-3 text-center font-medium text-white transition-colors hover:bg-highlight-hover"
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageHero;
