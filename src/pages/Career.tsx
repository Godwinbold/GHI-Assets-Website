import {
  type LucideIcon,
  GraduationCap,
  Users,
  Briefcase,
  Check,
  Clock,
  Phone,
  Mail,
  Award,
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
        buttonAvailable
        buttonLabel="Enrol Now"
        buttonLink="job-form"
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

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="border border-white/10 bg-brand px-8 mb-15 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.16)] text-white lg:px-12 lg:py-12"
      >
        <div className="grid gap-10 xl:grid-cols-[1.6fr_1fr] xl:items-center">
          <div>
            <h2 className="mt-4 text-3xl text-center md:text-left md:text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Ready to launch your <br /> Aviation Career?
            </h2>
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              Join hundreds of professionals trained at Frontier Academy. Enroll
              today and take the first step.
            </p>
            <a
              href="#job-form"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#061847] shadow-lg shadow-black/10 transition hover:bg-slate-100"
            >
              Enroll Now
            </a>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#001B4D] p-4 md:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Or reach us directly
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 rounded-3xl bg-slate-900/70 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white/10 text-white">
                  <Phone size={18} />
                </div>
                <p className="text-sm text-slate-200">+234 706 712 5892</p>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-slate-900/70 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white/10 text-white">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-slate-200">
                  info@frontieracademy.com.ng
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded relative pt-25 bg-[#001B4D] p-8">
            <div className="mb-5 flex h-12 absolute right-3 top-3 w-12 items-center justify-center rounded-3xl bg-white/10 text-white">
              <Award size={20} />
            </div>
            <p className="text-4xl font-semibold text-white">100%</p>
            <p className="mt-3 text-sm text-slate-300">Job Support</p>
          </div>
          <div className="rounded relative pt-25 bg-[#001B4D] p-8">
            <div className="mb-5 flex h-12 absolute right-3 top-3 w-12 items-center justify-center rounded-3xl bg-white/10 text-white">
              <GraduationCap size={20} />
            </div>
            <p className="text-4xl font-semibold text-white">IATA</p>
            <p className="mt-3 text-sm text-slate-300">Certified Programs</p>
          </div>
          <div className="rounded relative pt-25 bg-[#001B4D] p-8">
            <div className="mb-5 flex h-12 absolute right-3 top-3 w-12 items-center justify-center rounded-3xl bg-white/10 text-white">
              <Briefcase size={20} />
            </div>
            <p className="text-4xl font-semibold text-white">15+</p>
            <p className="mt-3 text-sm text-slate-300">Courses Programs</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};


export default Career;
