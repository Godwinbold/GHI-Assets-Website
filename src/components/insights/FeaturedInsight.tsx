const FeaturedInsight = () => {
  return (
    <section className="bg-[#F7F9FC] px-6 py-20 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-319.5 items-center gap-12 lg:grid-cols-[360px_1fr] lg:gap-28">
        <article className="max-w-118">
          <span className="inline-flex rounded-full bg-[#EEF1F7] px-5 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-brand">
            Sales & Distributions
          </span>

          <h2 className="mt-5 text-[32px] font-semibold leading-[1.15] text-brand">
            GHI Expand Ground Handling Network Across West Africa
          </h2>

          <p className="mt-4 text-base font-normal leading-[1.35] text-[#070B11]">
            Leveraging deep regional expertise and international standards, GHI
            Assets Limited is scaling its operational footprint to provide
            seamless support for global carriers.
          </p>

          <p className="mt-8 text-xs font-normal leading-none text-[#505D74]">
            23 June 2025 - 3 min read
          </p>

          <button
            type="button"
            className="mt-14 h-15 w-48.25 rounded-md bg-brand text-xs font-bold uppercase tracking-[0.04em] text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            See More
          </button>
        </article>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/airplane2.png"
            alt="Ground handling team servicing an aircraft"
            className="h-65 w-full object-cover object-center md:h-80"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedInsight
