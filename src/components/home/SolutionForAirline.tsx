
import ContainerHeader from './ContainerHeader'
import Wrapper from './Wrapper'
import { FeaturesGrid } from './FeaturedGrid'


const SolutionForAirline = () => {
  return (
    <Wrapper className='py-4 grid grid-cols-1'>
       <ContainerHeader
      title='Solution For Airline'
      subtext='Your Strategic'
      colorText='Partner'
      helperText={`We work directly with airline commercial, operations, and cargo divisions to deliver integrated consultancy that drives real-world performance improvements`}
      thirdText='in Every Market'
      />

<FeaturesGrid/>
    </Wrapper>
  )
}

export default SolutionForAirline
