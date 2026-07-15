import PageHero from '../components/common/PageHero'
import PartnershipBanner from '../components/common/PartnershipBanner'
import ContainerHeader from '../components/home/ContainerHeader'
import WhyGHI from '../components/home/WhyGHI'
import Wrapper from '../components/home/Wrapper'
import { OurServices } from '../components/services/OurServices'
import { servicespage } from '../constants/services'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, defaultViewport } from '../lib/animations'
import SEO from '../components/common/SEO'

const Services = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aviation Services & Solutions",
    "provider": {
      "@type": "Organization",
      "name": "GHI Assets Limited"
    },
    "description": "GHI Assets Limited delivers precision-engineered aviation consultancy from route development to cargo operations."
  };

  return (
    <main className="overflow-x-hidden">
      <SEO
        title="Key Services & Solutions | Connective Framework of Modern Aviation"
        description="Explore our specialized aviation services including cargo solutions, route development support, aviation training, sales and distribution services, and airport supervision."
        schema={schema}
      />
      <PageHero

        imageSrc="/images/services-bg.png"
        imageAlt="Aircraft cargo operations at airport"
        title={"Key Services &\nSolutions"}
        description="GHI Assets Limited delivers precision-engineered aviation consultancy from route development to cargo operations, connecting airlines with world-class strategic expertise."
      />

      <Wrapper className='grid grid-cols-1'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <ContainerHeader
            title='OUR SERVICES'
            subtext='The'
            colorText='Connective Framework'
            thirdText='of Modern Aviation'
            helperText="Five specialised aviation service practices, each led by domain experts with decades of hands-on experience across Nigeria's aviation industry — delivering cargo representation, freight logistics, airline sales, and market development solutions that keep West Africa's aviation ecosystem connected, competitive, and commercially strong."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.08)}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full'
        >
          {servicespage.map((service) => (
            <motion.div key={service.link} variants={fadeInUp}>
              <OurServices data={service} />
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>

      <div className='mt-20'>
        <WhyGHI />
      </div>

      <PartnershipBanner
        title="Ready to Explore Partnership?"
        description={`Our B2B partnership model is engineered to scale with your airline's ambitions, delivering measurable ROI at every stage`}
        ctaLink='/contact'
        imageAlt='Partnership'
        imageSrc="/images/business-handshake.png"
        ctaLabel='Partner With Us'
      />
    </main>
  )
}

export default Services;
