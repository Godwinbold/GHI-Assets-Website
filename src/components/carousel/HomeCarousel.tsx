import  { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../../constants/services';
import ContainerHeader from '../home/ContainerHeader';
import Wrapper from '../home/Wrapper';


export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardOffset, setCardOffset] = useState(0);
  const cardRef = useRef(null);

  // Calculate the exact width of a card plus its gap to ensure perfect scrolling,
  // making it responsive to different screen sizes.
  useEffect(() => {
    const updateOffset = () => {
      if (cardRef.current) {
        // 32px is the equivalent of Tailwind's gap-8 (2rem)
        const gap = 32; 
        setCardOffset(cardRef.current.offsetWidth + gap);
      }
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Wrapper className='bg-surface py-30'>
      <div className="max-w-400px w-full mx-auto flex items-start flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Section: Static Content & Controls */}
        <div className="w-full lg:w-100 shrink-0 flex flex-col justify-center">
        
          <ContainerHeader colorText='Modern Aviation' helperText=' Five specialized practice areas, each staffed by domain experts with decades of hands-on aviation experience'
          subtext=' The Connective Framework of ' title=' OUR SERVICES' 
          
          />

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 transition-all duration-300 hover:border-brand hover:text-brand disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>  

            <button
              onClick={handleNext}
              disabled={currentIndex === services.length - 1}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-brand transition-all duration-300 hover:border-brand hover:text-brand disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Right Section: Framer Motion Carousel */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex gap-8"
            animate={{ x: -(currentIndex * cardOffset) }}
            transition={{ 
              type: "spring", 
              stiffness: 250, 
              damping: 30,
              mass: 0.8 
            }}
          >
            {services.map((service, index) => {
              const isActive = index === currentIndex;
              return (
              <div
                key={service.id}
                // Assign ref to the first card to measure its dynamic width
                ref={index === 0 ? cardRef : null}
                className="w-[85vw] sm:w-95 shrink-0 flex flex-col group"
              >
                {/* Card Image */}
                <div className="w-full aspect-[1.45/1] overflow-hidden rounded-sm bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      isActive ? 'opacity-100' : 'opacity-40'
                    }`}
                  />
                </div>

                {/* Card Content */}
                <div className="mt-6 flex flex-col flex-1">
                  <p className={`text-[14.5px] leading-relaxed mb-10 transition-colors duration-500 ${
                    isActive ? 'text-[#4a5568]' : 'text-[#8c94a3]'
                  }`}>
                    {service.description}
                  </p>
                  
                  {/* Card Footer (Title & Arrow) */}
                  <div className="mt-auto flex justify-between items-center pb-4 border-b border-[#e2e8f0]">
                    <h3 className={`font-bold text-sm tracking-wide transition-colors duration-500 ${
                      isActive ? 'text-brand' : 'text-[#8c94a3]'
                    }`}>
                      {service.title}
                    </h3>
                    <ChevronRight 
                      size={18} 
                      className={`transform transition-all duration-300 group-hover:translate-x-1 ${
                        isActive ? 'text-brand' : 'text-[#8c94a3]'
                      }`} 
                    />
                  </div>
                </div>
              </div>
            )})}
          </motion.div>
        </div>
        
      </div>
    </Wrapper>
  );
}