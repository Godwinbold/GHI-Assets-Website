
import { Clock, Globe, Shield, TrendingUp } from 'lucide-react';
import ContainerHeader from './ContainerHeader'
import { ServiceCard } from './ServiceCard'
import Wrapper from './Wrapper'
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../../lib/animations";

const WhyGHI = () => {
    const services = [
    {
      title: "Deep Domain Expertise",
      description: "Our consultants bring hands-on experience from airlines, ground handlers, and aviation authorities, not just advisory desks.",
      icon: <Shield />
    },
    {
      title: "Tailored Engagement",
      description: "No off-the-shelf solutions. We design every engagement around the specific strategic context of each client we serve.",
      icon: <Clock />
    },
    {
      title: "Data-Led Strategy",
      description: "Every recommendation is grounded in market data, demand modelling, and competitive benchmarking. No guesswork, only precision.",
      icon: <TrendingUp />
    },
    {
      title: "Global Network",
      description: "Access to decision-makers, regulators, and operators across 20+ aviation markets from West Africa to the Gulf and beyond.",
      icon: <Globe />
    }
  ];
  return (
    <Wrapper className='bg-brand grid grid-cols-1 overflow-hidden'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        <ContainerHeader
          title='Why GHI'
          subtext='Built for the Complexity of the '
          colorText='Aviation'
          helperText={`What distinguishes us is not just what we know, it's how we apply that knowledge to drive outcomes for our partners`}
          changeColor
        />
      </motion.div>

       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={defaultViewport}
         variants={staggerContainer(0.08)}
         className="grid grid-cols-1 md:h-102.5 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
       >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
    </Wrapper>
  )
}

export default WhyGHI

