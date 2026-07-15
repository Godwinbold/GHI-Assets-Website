import { useState } from "react";
import { companyData } from "../../constants/about";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export default function CompanyPhilosophy() {
  const [activeTab, setActiveTab] = useState("mission");

  const currentContent = companyData.find((item) => item.id === activeTab);

  if (!currentContent) return null;

  return (
    <div className="w-full max-w-6xl py-12 ">
      {/* Tab Navigation Controls */}
      <div className="flex gap-4 mb-8">
        {companyData.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 cursor-pointer rounded-md text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-brand border-dashed border-gray-300 hover:border-gray-400"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-4 mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block">
            OUR {activeTab}
          </span>
          <h2 className="text-3xl font-bold text-brand">
            {currentContent.tagline}
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed text-[15px]">
            {currentContent.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Grid Grid Pillars */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`pillars-${activeTab}`}
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {currentContent.pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[160px] hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <span className="text-sm font-semibold text-[#03205b]/60 block mb-4">
                  {pillar.id}
                </span>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-gray-500 leading-snug">
                  {pillar.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

