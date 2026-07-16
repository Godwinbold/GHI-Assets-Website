import { motion } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer, defaultViewport } from "../../lib/animations";

export const PartnershipBanner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer(0.12)}
      className="flex flex-col md:flex-row w-full md:h-100 font-sans overflow-hidden"
    >
      {/* Left side: Image background */}
      <motion.div
        variants={slideInLeft}
        className="w-full md:w-1/3 min-h-75 md:min-h-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200')`,
        }}
      >
        {/* Overlay to match the deep blue tint if needed */}
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply"></div>
      </motion.div>

      {/* Right side: Content section */}
      <motion.div
        variants={slideInRight}
        className="w-full md:w-2/3 bg-brand flex flex-col justify-center px-10 py-16 md:px-16 md:py-20 text-white"
      >
        <div className="max-w-xl">
          <h2 className="text-[45px] md:text-5xl font-bold mb-6 leading-tight">
            Ready to Explore Partnership?
          </h2>

          <p className="text-lg md:text-[20px] text-gray-300 mb-10 leading-relaxed font-light">
            Our B2B partnership model is engineered to scale with your airline's
            ambitions, delivering measurable ROI at every stage.
          </p>

          <button
            className="bg-white text-brand cursor-pointer py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 tracking-wide text-sm uppercase"
            onClick={() => {
              const el = document.getElementById("get-in-touch");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Partner With Us
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

