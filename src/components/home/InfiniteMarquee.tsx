
import {motion} from "framer-motion"

const InfiniteMarquee = () => {
  // Data extracted from the image
  const services = [
    "CARGO SOLUTION & LOGISTICS",
    "SALES & DISTRIBUTIONS SERVICES",
    "ROUTE DEVELOPMENT SOLUTION",
    "GROUND HANDLING REPRESENTATION",
    "AVIATION TRAINING",
  ];

  // We duplicate the array to make the scrolling row at least twice as wide
  // as the visible viewport, which enables a seamless loop.
  const duplicatedServices = [...services, ...services];

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white border-y border-gray-100 py-1 overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex gap-8 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {duplicatedServices.map((text, index) => (
          <div key={index} className="flex items-center px-8">
            <span className="text-blue-1 font-bold mr-3 text-lg">•</span>
            <span className="text-blue-1 font-bold tracking-wider text-sm md:text-base uppercase">
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};


export default InfiniteMarquee