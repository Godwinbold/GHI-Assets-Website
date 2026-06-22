import PageHero from "../components/common/PageHero";
import Wrapper from "../components/home/Wrapper";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        imageSrc="/images/about-us.png"
        imageAlt="Shaping the Future of Nigeria Aviation"
        title={"Contact Us"}
        description="Explore the inspiring world of GHI Assets Limited through our stories."
      />

      <Wrapper className="grid grid-cols-1 bg-white">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
          {/* Left Side */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-sm font-semibold text-[#505D74] tracking-widest uppercase mb-4">
              Get in Touch
            </h3>
            <h2 className="text-4xl font-bold text-brand mb-6 leading-tight">
              Let's Discuss <br />
              your <span className="text-highlight">Aviation</span> Objectives.
            </h2>
            <p className="text-copy mb-12 text-sm">
              Whether you're an airline seeking strategic support, a ground
              handler exploring partnerships, or an investor evaluating aviation
              opportunities—our team is ready to engage
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold tracking-wider text-brand uppercase mb-2">
                  Lagos, Nigeria - Head Office
                </h4>
                <p className="text-sm">
                  14B Admiralty Way, Lekki Phase 1<br />
                  Lagos, Nigeria
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold tracking-wider text-brand uppercase mb-2">
                  Email
                </h4>
                <a
                  href="mailto:enquiries@ghiassets.com"
                  className="text-sm hover:text-brand transition-colors"
                >
                  enquiries@ghiassets.com
                </a>
              </div>

              <div>
                <h4 className="text-sm font-bold tracking-wider text-brand uppercase mb-2">
                  Phone
                </h4>
                <a
                  href="tel:+2348034911715"
                  className="text-sm hover:text-brand transition-colors"
                >
                  +234 803 491 1715
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:max-w-[564px] bg-[#001233] rounded-lg p-8 lg:p-10 text-white">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Send an Enquiry</h3>
              <p className="text-white/80 text-sm">
                We respond to all qualified aviation enquiries within one
                business day
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-white"
                  >
                    First Name<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your name"
                    className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-white"
                  >
                    Last Name<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your surname"
                    className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white"
                >
                  Email Address<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-white"
                >
                  Service Interest<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="service"
                  placeholder="Example: Cargo services"
                  className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white"
                >
                  Message<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Please describe your aviation consultancy requirement..."
                  className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00205B] hover:bg-[#00205B]/90 text-white text-sm font-medium py-4 rounded-md transition-colors mt-6"
              >
                SUBMIT ENQUIRY
              </button>

              <p className="text-center text-xs text-white/60 mt-4 leading-relaxed">
                Your information is handled in accordance with our Privacy
                Policy
                <br />
                and is never shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
