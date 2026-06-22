import { useState } from "react";
import { companyData } from "../../constants/about";

export default function CompanyPhilosophy() {
  const [activeTab, setActiveTab] = useState("mission");

  const currentContent = companyData.find((item) => item.id === activeTab);

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
      <div className="space-y-4 mb-12">
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block">
          OUR {activeTab}
        </span>
        <h2 className="text-3xl font-bold text-brand">
          {currentContent.tagline}
        </h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed text-[15px]">
          {currentContent.description}
        </p>
      </div>

      {/* Dynamic Grid Grid Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentContent.pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[160px]"
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
          </div>
        ))}
      </div>
    </div>
  );
}
