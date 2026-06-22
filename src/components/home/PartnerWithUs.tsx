export const PartnershipBanner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:h-[400px] font-sans overflow-hidden">
      {/* Left side: Image background */}
      <div 
        className="w-full md:w-1/3 min-h-75 md:min-h-full bg-cover bg-center bg-no-repeat relative"
        style={{
          // Using a high-quality placeholder that matches the "global partnership/tech/city" theme
          backgroundImage: `url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200')`,
        }}
      >
        {/* Overlay to match the deep blue tint if needed */}
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply"></div>
      </div>

      {/* Right side: Content section */}
      <div className="w-full md:w-2/3 bg-brand flex flex-col justify-center px-10 py-16 md:px-16 md:py-20 text-white">
        <div className="max-w-xl">
          <h2 className="text-[45px] md:text-5xl font-bold mb-6 leading-tight">
            Ready to Explore Partnership?
          </h2>
          
          <p className="text-lg md:text-[20px] text-gray-300 mb-10 leading-relaxed font-light">
            Our B2B partnership model is engineered to scale with your airline's ambitions, 
            delivering measurable ROI at every stage.
          </p>

          <button 
            className="bg-white text-brand cursor-pointer py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 tracking-wide text-sm uppercase"
            onClick={() => console.log('Partnering...')}
          >
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};
