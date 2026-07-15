import React, { type JSXElementConstructor, type ReactElement } from "react";
import { useInView } from "../../lib/useInView";

export const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactElement<unknown, string | JSXElementConstructor<any>>;
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} hover:shadow-xl flex flex-col items-start overflow-hidden h-full`}
    >
      {/* Decorative subtle blob in top right corner (matching image) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:bg-blue-100 transition-colors duration-500" />

      {/* Icon Container with hover state background change */}
      <div className="relative z-10 w-14 h-14 mb-8 flex items-center justify-center rounded-lg bg-blue-50 text-brand transition-all duration-300 group-hover:bg-highlight group-hover:text-white text-highlight">
        {React.cloneElement(icon, { size: 28, strokeWidth: 1.5 })}
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-[15px]">
          {description}
        </p>
      </div>

      {/* Subtle bottom border accent that appears on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#4A99B8] transition-all duration-500 group-hover:w-full" />
    </div>
  );
};
