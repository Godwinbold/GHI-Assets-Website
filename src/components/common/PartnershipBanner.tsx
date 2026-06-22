import { Link } from "react-router-dom"
import Wrapper from "../home/Wrapper"

interface PartnershipBannerProps {
  title?: string
  description?: string
  ctaLabel?: string
  ctaLink?: string
  imageSrc?: string
  imageAlt?: string
}


 const PartnershipBanner = ({
  title = "Ready to Explore Partnership?",
  description = "Our B2B partnership model is engineered to scale with your airline's ambitions, delivering measurable ROI at every stage.",
  ctaLabel = "Partner With Us",
  ctaLink = "/contact",
  imageSrc = "/images/business-handshake.png",
  imageAlt = "handshake",
}: PartnershipBannerProps) => {
  return (
    <Wrapper className="grid grid-cols-1 h-screen items-center justify-center">
      <div className="h-150 w-full relative">
        <div className="bg-white absolute flex flex-col  rounded-lg border border-gray-100 w-70 sm:w-91 -left-10 top-15 p-8">
          <p className="text-base md:text-2xl text-brand font-bold">{title}</p>
          <p className="text-sm mt-1">{description}</p>
          <Link
            to={ctaLink}
            className="bg-brand h-15 mt-8 text-white uppercase flex items-center justify-center rounded-lg"
          >
            {ctaLabel}
          </Link>
        </div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-150 w-full object-cover"
        />
      </div>
    </Wrapper>
  )
}

export default PartnershipBanner