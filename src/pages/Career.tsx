import {
  type LucideIcon,
  GraduationCap,
  Users,
  Briefcase,
  Check,
  Clock,
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import ContainerHeader from "../components/home/ContainerHeader";
import Wrapper from "../components/home/Wrapper";
import { courses, features } from "../constants/careers";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../lib/animations";

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  users: Users,
  briefcase: Briefcase,
  check: Check,
  clock: Clock,
};

import SEO from "../components/common/SEO";

const Career = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Frontier Academy",
    "parentOrganization": {
      "@type": "Organization",
      "name": "GHI Assets Limited"
    },
    "description": "Professional training and IATA-certified courses for travel, tourism, and aviation careers in Nigeria.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Frontier Academy | Aviation Careers & Training"
        description="Launch your travel, tourism, or aviation career with IATA-certified programs at Frontier Academy, powered by GHI Assets Limited. Professional development for aviation professionals in Nigeria."
        schema={schema}
      />
      <PageHero

        imageSrc={`/images/control_room.png`}
        imageAlt={"half world"}
        title="Career in Travels, Tourism & Aviation"
        description="Professional training for aspiring aviation professionals across Nigeria."
      />

      <Wrapper className="grid grid-cols-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <ContainerHeader
            title="WHY CHOOSE FRONTIER"
            subtext="Benefit of Training with Frontier "
            colorText="Academy"
            helperText={`What distinguishes us is not just what we know, it's how we apply that knowledge to drive outcomes for our partners`}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-10 w-full"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Check;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded bg-highlight text-white">
                  <Icon size={28} />
                </div>
                <p className="text-[#070B11] text-center font-semibold">
                  {feature.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Wrapper>
      <Wrapper className="grid grid-cols-1 gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <ContainerHeader
            className="lg:w-lg"
            title="COURSES OFFERED"
            subtext="Full Training"
            colorText="Curriculum"
            helperText={`Choose from IATA-certified programs, cargo management, and professional aviation skills training.`}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-12 w-full"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="rounded-[28px] border border-white/10 bg-brand px-8 pt-8 pb-15 shadow-[0_25px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full bg-highlight px-4 py-2 text-xs uppercase tracking-[0.28em] text-white">
                  {course.category}
                </span>
                <span className="h-2 w-2 rounded-full bg-highlight" />
              </div>

              <h3 className="mb-8 text-xl font-semibold leading-tight text-white">
                {course.title}
              </h3>

              <div className="space-y-6 divide-y divide-white/10 py-4">
                {course.courses.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-highlight" />
                    <p className="text-sm leading-relaxed text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>

      <section
        id="contact"
        aria-labelledby="fa-contact-heading"
        className="scroll-mt-20 px-8 mb-15 py-14 sm:py-16 lg:px-12"
      >
        {/* Enrol CTA banner */}
        <div id="job-form" className="mb-12 rounded-sm bg-sky-600 px-8 py-12 text-white sm:px-12 sm:py-16">
          <h2
            id="fa-contact-heading"
            className="mb-3 max-w-[20ch] text-3xl font-semibold tracking-tight"
          >
            Start Your Aviation Career Journey Today
          </h2>
          <p className="mb-7 max-w-[46ch] text-white/85">
            Speak with our admissions team about the right program for your
            goals, or enrol directly in an upcoming intake.
          </p>
          <a
            href="mailto:info@frontieracademy.com.ng"
            className="inline-flex items-center rounded-sm bg-amber-500 px-6 py-3 text-sm font-semibold text-blue-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600"
          >
            Enrol Now
          </a>
        </div>

        {/* Contact details row */}
        <div className="grid gap-8 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:grid-cols-3">
          <address className="not-italic">
            <span className="block">Frontier Academy</span>
            <span className="block">45 Oduduwa Way, Ikeja GRA,</span>
            <span className="block">Lagos, Nigeria.</span>
          </address>

          <a
            href="tel:+2347067125892"
            className="hover:text-brand transition-colors"
          >
            +234 706 712 5892
          </a>

          <div>
            <a
              href="mailto:info@frontieracademy.com.ng"
              className="block hover:text-brand transition-colors"
            >
              info@frontieracademy.com.ng
            </a>
            <a
              href="https://frontieracademy.com.ng"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-brand transition-colors"
            >
              frontieracademy.com.ng
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Career;
