import InfiniteMarquee from "./InfiniteMarquee"

const Hero = () => {
  return (
  <div className='w-full mx-auto h-screen bg-[linear-gradient(rgba(0,32,91,0.4)_40%,_rgba(0,32,91,0.6)_100%),url("/images/airplane3.png")] bg-center bg-cover bg-no-repeat'>
      <div className="w-full pt-30 md:pt-36.25 pb-22 overflow-x-hidden">
       <InfiniteMarquee/>

      </div>
      <h1 className="font-bold text-[32px] sm:text-[42px]  md:text-5xl text-white ml-6 md:ml-20 leading-tight md:leading-tight">
        Connecting Airlines to <br /> success. Africa’s <br /> Trusted Partner
      </h1>
    </div>
  )
}

export default Hero
