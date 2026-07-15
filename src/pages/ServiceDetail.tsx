import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import cargoPageData from '../constants/services';
import Wrapper from '../components/home/Wrapper';
import ContainerHeader from '../components/home/ContainerHeader';
import PartnershipBanner from '../components/common/PartnershipBanner';
import { fadeInUp, defaultViewport } from '../lib/animations';
import SEO from '../components/common/SEO';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = cargoPageData.find((item) => item.slug === slug);
  const partners = useMemo(() => data?.sectionThree.partners ?? [], [data]);

  const serviceTitle = data
    ? `${data.sectionOne.tag} - ${data.hero.title.replace(/\.$/, "")}`
    : "Aviation Service Detail";
  
  const serviceDescription = data
    ? data.sectionOne.description
    : "GHI Assets Limited delivers precision-engineered aviation consultancy and logistics services.";

  const serviceSchema = data ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.sectionOne.tag,
    "description": data.sectionOne.description,
    "provider": {
      "@type": "Organization",
      "name": "GHI Assets Limited"
    }
  } : undefined;

  const carouselViewportRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [maxCarouselOffset, setMaxCarouselOffset] = useState(0);
  const progress = maxCarouselOffset > 0 ? (carouselOffset / maxCarouselOffset) * 100 : 100;

  const measureCarousel = useCallback(() => {
    const viewport = carouselViewportRef.current;
    const track = carouselTrackRef.current;

    if (!viewport || !track) {
      return;
    }

    const nextMaxOffset = Math.max(track.scrollWidth - viewport.clientWidth, 0);
    setMaxCarouselOffset(nextMaxOffset);
    setCarouselOffset((current) => Math.min(current, nextMaxOffset));
  }, []);

  useEffect(() => {
    measureCarousel();
    window.addEventListener('resize', measureCarousel);

    return () => window.removeEventListener('resize', measureCarousel);
  }, [measureCarousel, partners.length]);

  const getCarouselStep = () => {
    const firstCard = carouselTrackRef.current?.firstElementChild;

    if (!(firstCard instanceof HTMLElement)) {
      return 0;
    }

    return firstCard.offsetWidth + 24;
  };

  const handlePreviousPartner = () => {
    const step = getCarouselStep();
    setCarouselOffset((current) => Math.max(current - step, 0));
  };

  const handleNextPartner = () => {
    const step = getCarouselStep();
    setCarouselOffset((current) => Math.min(current + step, maxCarouselOffset));
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title={serviceTitle}
        description={serviceDescription}
        image={data?.hero.image}
        schema={serviceSchema}
      />
      <PageHero
        imageSrc={`${data?.hero.image}`}
        imageAlt={data?.hero.imageAlt}
        title={data?.hero.title!}
      />

      <Wrapper className='grid grid-cols-1'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <ContainerHeader
            title={data?.sectionOne.tag!}
            subtext={data?.sectionOne.title!}
            colorText={data?.sectionOne.titleHighlight!}
            className='w-1/3! lg:w-2/3!'
            textBoundary='max-w-2xl'
            helperText={data?.sectionOne.description!}
          />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className='mt-15'
        >
          <ContainerHeader
            textBoundary='max-w-xl'
            title={data?.sectionTwo.tag!}
            subtext={data?.sectionTwo.title!}
            colorText={data?.sectionTwo.titleHighlight!}
            className='w-1/3! lg:w-3/5!'
            additionalText={data?.sectionTwo.titleSuffix!}
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
            <p className="md:col-span-2 max-w-3xl text-slate-700">{data?.sectionTwo.description}</p>
            <ul className='list-disc pl-5 text-slate-700 space-y-1.5'>
              <li>Airlines seeking Cargo Representation</li>
              <li>Trusted Local Ground Partner</li>
              <li>West African Freight Solutions</li>
            </ul>
          </div>
        </motion.div>
      </Wrapper>

      <div className="bg-brand">
        <Wrapper className='grid grid-cols-1'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <ContainerHeader
              title={data?.sectionThree.tag!}
              subtext={data?.sectionThree.title!}
              colorText={data?.sectionThree.titleHighlight!}
              className='w-1/3! lg:w-2/3!'
              textBoundary='max-w-sm'
              helperText={data?.sectionThree.description!}
              additionalText={data?.sectionThree.titleSuffix!}
              changeColor
            />
          </motion.div>

          {partners.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInUp}
              ref={carouselViewportRef}
              className="w-full overflow-hidden"
            >
              <div
                ref={carouselTrackRef}
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${carouselOffset}px)` }}
              >
                {partners.map((partner) => (
                  <Link
                    key={partner.name}
                    to={partner.link}
                    className="group relative h-107.5 min-w-[82vw] overflow-hidden rounded-md bg-black text-white outline-none sm:h-117.5 lg:h-122 lg:min-w-0 lg:basis-[calc((100%-3rem)/2.5)] lg:shrink-0"
                  >
                    <img
                      src={"/images/night-cargo.png"}
                      alt={`${partner.name} cargo aircraft`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                      onLoad={measureCarousel}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-9 pb-13">
                      <h3 className="text-2xl font-bold leading-none lg:text-[28px]">
                        {partner.name}
                      </h3>
                      <ChevronRight className="h-8 w-8" strokeWidth={2.5} />
                    </div>

                    <div className="absolute inset-0 translate-y-full bg-black/55 p-9 opacity-0 backdrop-blur-[1px] transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <div className="flex h-full flex-col justify-start pt-3">
                        <div className="flex items-start justify-between gap-6">
                          <h3 className="text-2xl font-bold leading-tight lg:text-[28px]">
                            {partner.name}
                          </h3>
                          <ChevronRight className="h-8 w-8 shrink-0" strokeWidth={2.5} />
                        </div>

                        <p className="mt-6 max-w-150 text-sm leading-snug">
                          {partner.description}
                        </p>

                        <div className="mt-12">
                          <p className="text-xl font-medium">Reach us directly</p>
                          <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-3">
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/20">
                                <Phone className="h-5 w-5" />
                              </span>
                              <span>{partner.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/20">
                                <Mail className="h-5 w-5" />
                              </span>
                              <span className="break-all">{partner.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-8 lg:mt-12">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/35">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={handlePreviousPartner}
                    disabled={carouselOffset === 0}
                    aria-label="Show previous partner"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:border-white/20 disabled:text-white/30 disabled:hover:bg-transparent lg:h-[60px] lg:w-[60px]"
                  >
                    <ChevronLeft className="h-7 w-7" strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPartner}
                    disabled={carouselOffset >= maxCarouselOffset}
                    aria-label="Show next partner"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:border-white/20 disabled:text-white/30 disabled:hover:bg-transparent lg:h-[60px] lg:w-[60px]"
                  >
                    <ChevronRight className="h-7 w-7" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </Wrapper>
      </div>

      <PartnershipBanner
        title={data?.sectionFour.title}
        description={data?.sectionFour.description}
        ctaLink='/contact'
        imageAlt='Contact Us'
        imageSrc="/images/box.png"
        ctaLabel={data?.sectionFour.ctaLabel!}
      />
    </div>
  );
}
