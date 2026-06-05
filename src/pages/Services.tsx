
import PageHero from '../components/common/PageHero'
import PartnershipBanner from '../components/common/PartnershipBanner'
import ContainerHeader from '../components/home/ContainerHeader'
import WhyGHI from '../components/home/WhyGHI'
import Wrapper from '../components/home/Wrapper'
import { OurServices } from '../components/services/OurServices'
import { servicespage } from '../constants/services'

const Services = () => {
  return (
    <main>
   <PageHero
  imageSrc="/images/services-bg.png"
  imageAlt="Aircraft cargo operations at airport"

  title={"Key Services &\nSolutions"}
  description="GHI Assets Limited delivers precision-engineered aviation consultancy from route development to cargo operations, connecting airlines with world-class strategic expertise."
/>

<Wrapper className='grid grid-cols-1'>
  <ContainerHeader
  title='OUR SERVICES'
  subtext='The'
  colorText='Connective Tissue'
  thirdText='of Modern Aviation'
  helperText="Five specialised aviation service practices, each led by domain experts with decades of hands-on experience across Nigeria's aviation industry — delivering cargo representation, freight logistics, airline sales, and market development solutions that keep West Africa's aviation ecosystem connected, competitive, and commercially strong."
  />
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
    {
      servicespage.map((service) => (
         <OurServices key={service.link} data={service}/>
      ))
    }
     
  </div>
  <div>
    
  </div>


</Wrapper>  <div className='mt-20'>
    <WhyGHI/>
  </div>




 <PartnershipBanner
 title="Ready to Explore Partnership?"
description={`Our B2B partnership model is engineered to scale with your airline's
ambitions, delivering measurable ROI at every stage`}
 ctaLink='/contact'
 imageAlt='Partnership'
 imageSrc="/images/business-handshake.png"
 ctaLabel='Partner With Us'
 />
    </main>
  )
}

export default Services
