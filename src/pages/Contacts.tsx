import PageHero from "../components/common/PageHero";
import Wrapper from "../components/home/Wrapper";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../lib/animations";
import SEO from "../components/common/SEO";
import { useForm, ValidationError } from "@formspree/react";

export default function Contacts() {
  const [state, handleSubmit] = useForm("xwvgpjlo");

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact GHI Assets Limited",
    "description": "Get in touch with GHI Assets Head Office in Lagos, Nigeria. Contact us for ground handling representation, route development, aviation training, and air cargo solutions.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "GHI Assets Limited",
      "image": "https://ghiassets.com/images/logo.png",
      "telephone": "+234 803 491 1715",
      "email": "info@ghiassets.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "45 Oduduwa Way, Ikeja GRA",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      }
    }
  };

  return (
    <div className="min-h-screen bg-surface overflow-x-hidden">
      <SEO
        title="Contact Us | Talk to Our Aviation Experts"
        description="Contact GHI Assets Limited's Lagos office for inquiries regarding airline representation, airport cargo operations, route development, aviation training, and aviation strategy."
        schema={schema}
      />
      <PageHero

        imageSrc="/images/about-us.png"
        imageAlt="Shaping the Future of Nigeria Aviation"
        title={"Contact Us"}
        description="Explore the inspiring world of GHI Assets Limited through our stories."
      />

      <Wrapper className="grid grid-cols-1 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.15)}
          className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between w-full"
        >
          {/* Left Side */}
          <motion.div variants={fadeInUp} className="flex-1 max-w-xl">
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
                  45 Oduduwa Way, Ikeja GRA,<br />
                  Lagos.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold tracking-wider text-brand uppercase mb-2">
                  Email
                </h4>
                <a
                  href="mailto:info@ghiassets.com"
                  className="text-sm hover:text-brand transition-colors"
                >
                  info@ghiassets.com
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
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full lg:max-w-[564px] bg-[#001233] rounded-lg p-8 lg:p-10 text-white shadow-xl"
          >
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enquiry Sent!</h3>
                <p className="text-white/70 text-sm">
                  Thank you for reaching out. We'll respond to your enquiry within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Send an Enquiry</h3>
                  <p className="text-white/80 text-sm">
                    We respond to all qualified aviation enquiries within one business day
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form-level errors */}
                  <ValidationError errors={state.errors} className="text-sm text-red-400" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-white">
                        First Name<span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Your name"
                        required
                        className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                      />
                      <ValidationError field="firstName" errors={state.errors} className="text-xs text-red-400" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-white">
                        Last Name<span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Your surname"
                        required
                        className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                      />
                      <ValidationError field="lastName" errors={state.errors} className="text-xs text-red-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email Address<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address"
                      required
                      className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                    />
                    <ValidationError field="email" errors={state.errors} className="text-xs text-red-400" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-white">
                      Service Interest<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="service"
                      name="serviceInterest"
                      placeholder="Example: Cargo services"
                      required
                      className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight"
                    />
                    <ValidationError field="serviceInterest" errors={state.errors} className="text-xs text-red-400" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message<span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Please describe your aviation consultancy requirement..."
                      required
                      className="w-full bg-[#FAFCFF] border-[0.2px] border-[#505D747A] rounded-md px-4 py-3 text-[#505D74B2] placeholder:text-[#505D74B2] focus:outline-none focus:ring-1 focus:ring-highlight resize-none"
                    />
                    <ValidationError field="message" errors={state.errors} className="text-xs text-red-400" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-[#00205B] hover:bg-[#00205B]/90 text-white text-sm font-medium py-4 rounded-md transition-colors mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "SENDING..." : "SUBMIT ENQUIRY"}
                  </button>

                  <p className="text-center text-xs text-white/60 mt-4 leading-relaxed">
                    Your information is handled in accordance with our Privacy Policy
                    <br />
                    and is never shared with third parties.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </Wrapper>
    </div>
  );
}

