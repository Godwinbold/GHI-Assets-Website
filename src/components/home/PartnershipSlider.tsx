import { useState, useRef, useEffect } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AIRLINES } from "../../constants/partners";
import { FlipCard } from "../carousel/FlipCard";

export default function PartnershipSlider() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  const autoScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const scrollAmount = 340; // width of card (320px) + gap (20px)

      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
        // Loop back to the beginning
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        autoScroll();
      }, 5000); // Auto-scroll every 5 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  const handleManualScroll = (direction: any) => {
    setIsAutoScrolling(false);
    scroll(direction);
  };

  const scroll = (direction: any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // width of card (320px) + gap (20px)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full  relative">
        {/* Carousel Container */}
        <div className="relative flex items-center group">
          {/* Left Navigation Button */}
          <button
            onClick={() => handleManualScroll("left")}
            disabled={!canScrollLeft}
            className={`absolute -left-2 md:-left-6 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 transition-all ${
              !canScrollLeft
                ? "opacity-0 cursor-default"
                : "opacity-100 hover:bg-slate-50 hover:text-[#1e3a8a] hover:scale-105 cursor-pointer"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrolling Track */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-8 px-4  w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {AIRLINES.map((airline) => (
              <div key={airline.id} className="snap-center">
                <FlipCard airline={airline} />
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={() => handleManualScroll("right")}
            disabled={!canScrollRight}
            className={`absolute -right-2 md:-right-6 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 transition-all ${
              !canScrollRight
                ? "opacity-0 cursor-default"
                : "opacity-100 hover:bg-slate-50 hover:text-brand hover:scale-105 cursor-pointer"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Embedded Styles for 3D Flips & hiding scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `,
        }}
      />
    </div>
  );
}
