import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InfiniteMarquee from "./InfiniteMarquee";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the hero section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Create parallax scroll transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.85], [1, 0.95]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full mx-auto h-screen overflow-hidden bg-[#00205b]"
    >
      {/* Parallax Background Image */}
      <motion.img
        style={{ y: yBg }}
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero_aviation_bg.png"
        alt="Premium Commercial Jet Airliner at GHI Gate"
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,32,91,0.35)_40%,_rgba(0,32,91,0.65)_100%)]" />
      
      {/* Top marquee area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 w-full pt-30 md:pt-36.25 pb-22 overflow-x-hidden"
      >
        <InfiniteMarquee />
      </motion.div>
      
      {/* Parallax Header Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{ y: yText, opacity: opacityText, scale: scaleText }}
        className="absolute bottom-16 left-1/2 z-10 w-full -translate-x-1/2 px-6 text-center font-bold text-[32px] leading-tight text-white sm:text-[42px] md:left-20 md:top-1/2 md:bottom-auto md:w-auto md:translate-x-0 md:-translate-y-1/2 md:px-0 md:text-left md:text-6xl md:leading-tight lg:text-7xl"
      >
        Connecting Airlines to <br /> success. Africa’s <br /> Trusted Partner
      </motion.h1>
    </div>
  );
};

export default Hero;
