import InfiniteMarquee from "./InfiniteMarquee";

const Hero = () => {
  return (
    <div className="relative w-full mx-auto h-screen overflow-hidden bg-[#00205b]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/ghihero.mp4"
        poster="/images/poster.png"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,32,91,0.4)_40%,_rgba(0,32,91,0.6)_100%)]" />
      <div className="relative z-10 w-full pt-30 md:pt-36.25 pb-22 overflow-x-hidden">
        <InfiniteMarquee />
      </div>
      <h1 className="absolute bottom-16 left-1/2 z-10 w-full -translate-x-1/2 px-6 text-center font-bold text-[32px] leading-tight text-white sm:text-[42px] md:left-20 md:top-1/2 md:bottom-auto md:w-auto md:translate-x-0 md:-translate-y-1/2 md:px-0 md:text-left md:text-6xl md:leading-tight lg:text-7xl">
        Connecting Airlines to <br /> success. Africa’s <br /> Trusted Partner
      </h1>
    </div>
  );
};

export default Hero;
