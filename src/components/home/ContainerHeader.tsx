import type { ReactNode } from "react";

interface ContainerDetails {
  title: string;
  subtext?: string | ReactNode;
  colorText?: string;
  helperText?: string;
  changeColor?: boolean;
  className?: string;
  thirdText?: string;
  additionalText?: string;
  hideLine?: boolean;
  textBoundary?: string;
}

const ContainerHeader = ({
  title = "",
  subtext = "",
  colorText = "",
  helperText = "",
  changeColor = false,
  className,
  thirdText = "",
  additionalText = "",
  hideLine = true,
  textBoundary = "",
}: ContainerDetails) => {
  return (
    <div
      className={`w-full ${changeColor ? "lg:w-127.75" : "lg:w-100"} shrink-0 flex flex-col justify-center ${className}`}
    >
      <p
        className={`${!changeColor ? "text-overline" : "text-surface"} uppercase tracking-[0.15em] text-sm font-normal mb-6 `}
      >
        {title}
      </p>

      {subtext && (
        <h1
          className={`text-2xl lg:text-[36px] font-bold ${!changeColor ? "text-brand" : "text-white"} leading-[1.15] ${textBoundary}`}
        >
          {subtext}
          <span className="text-highlight"> {colorText}</span>
          {additionalText && <span> {additionalText}</span>}
        </h1>
      )}
      {thirdText && (
        <p
          className={`text-2xl lg:text-[36px] font-bold ${!changeColor ? "text-brand" : "text-white"} leading-[1.15]`}
        >
          {thirdText}
        </p>
      )}
      {helperText && (
        <p
          className={`${!changeColor ? "text-copy" : "text-white"} mt-6  text-base leading-relaxed pr-4`}
        >
          {helperText}
        </p>
      )}

      {hideLine && (
        <div
          className={`${!changeColor ? "bg-brand" : "bg-white"} w-10 h-3  mt-8 mb-12`}
        ></div>
      )}
    </div>
  );
};

export default ContainerHeader;
