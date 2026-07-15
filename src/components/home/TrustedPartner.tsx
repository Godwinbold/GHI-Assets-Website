import ContainerHeader from "./ContainerHeader"
import PartnershipSlider from "./PartnershipSlider"
import Wrapper from "./Wrapper"
import { motion } from "framer-motion"
import { fadeInUp, defaultViewport } from "../../lib/animations"

const TrustedPartner = () => {
  return (
    <Wrapper className="grid grid-cols-1 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        <ContainerHeader
          className="w-140.25!"
          title="TRUSTED PARTNERSHIP"
          subtext={
            <>
              Built for Airlines. <br />
              Designed for
            </>
          }
          colorText="Partnership."
          helperText="We work directly with airline commercial, operations, and cargo divisions to deliver integrated consultancy that drives real-world performance improvements."
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        <PartnershipSlider />
      </motion.div>
    </Wrapper>
  )
}

export default TrustedPartner

