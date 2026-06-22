
import { Clock, Globe, Shield, TrendingUp } from 'lucide-react';
import ContainerHeader from './ContainerHeader'
import { ServiceCard } from './ServiceCard'
import Wrapper from './Wrapper'

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
    <Wrapper className='bg-brand grid grid-cols-1 '>
      <ContainerHeader
      title='Why GHI'
      subtext='Built for the Complexity of the '
      colorText='Aviation'
      helperText={`What distinguishes us is not just what we know, it's how we apply that knowledge to drive outcomes for our partners`}
      changeColor/>

       <div className="grid grid-cols-1 md:h-102.5 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
    </Wrapper>
  )
}

export default WhyGHI
