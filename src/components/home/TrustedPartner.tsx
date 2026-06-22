import ContainerHeader from "./ContainerHeader"
import PartnershipSlider from "./PartnershipSlider"
import Wrapper from "./Wrapper"

const TrustedPartner = () => {
  return (
    <Wrapper className="grid grid-cols-1">
      <ContainerHeader
      className="w-140.25!"
      title="TRUSTED PARTNERSHIP"
      subtext={  <>
    Built for Airlines. <br />
    Designed for
  </>}
      colorText="Partnership."
      helperText="We work directly with airline commercial, operations, and cargo divisions to deliver integrated consultancy that drives real-world performance improvements."
     
      />
<PartnershipSlider/>
      
    </Wrapper>
  )
}

export default TrustedPartner
