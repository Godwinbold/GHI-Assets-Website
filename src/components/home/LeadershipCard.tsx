import { useInView } from "../../lib/useInView";

interface LeadershipCardProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
}

const LeadershipCard = ({
  imageSrc,
  name,
  role,
  description,
}: LeadershipCardProps) => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`overflow-hidden md:grid md:grid-cols-2 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {/* Image — single block, scales on all screen sizes */}
      <div className="w-full hidden md:block h-auto overflow-hidden bg-[#347990]">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full  relative md:hidden h-80 overflow-hidden bg-[#347990]">
        <div>
          <img
            src={imageSrc}
            alt={name}
            className="w-full scale-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%] object-cover object-top"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="max-w-full bg-brand px-6 py-8 text-white sm:px-8">
        <p className="text-base leading-7 text-white">
          <q>{description}</q>
        </p>
        <div className="mt-6 space-y-1">
          <p className="text-base font-medium leading-6 text-white">{name}</p>
          <p className="text-base font-normal leading-6 text-white/80">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
};

export default LeadershipCard;
