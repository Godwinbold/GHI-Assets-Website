import ContainerHeader from "./ContainerHeader";
import LeadershipCard from "./LeadershipCard";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "../../lib/animations";

const leaders = [
  {
    imageSrc: "/images/chairman.png",
    name: "Mr. Olufemi Adefope",
    role: "Group Chairman",
    description: `Before structured airline representation had a name in Nigeria, it had a face."
A distinguished aviation professional with over 45 years of experience in the global and Nigerian aviation industry, he is widely regarded as a pioneer of structured airline representation and travel management services in Nigeria and West Africa.
   As founder of GHI Assets Limited, he has played a foundational role in shaping the company's vision, governance, and strategic direction. Educated at Howard University and George Washington University in Washington, D.C., his academic grounding and industry expertise uniquely position him at the intersection of international aviation standards and local market realities.
   As Group Chairman, he provides strategic oversight, governance leadership, and long-term value creation for the Group.`,
  },
  {
    imageSrc: "/images/group_counsel.png",
    name: "Mrs. Adebola Adefope",
    role: "EVC & Group Counsel",
    description: `   Some build companies. Others build the legal foundations they stand on.
A distinguished legal practitioner with over 35 years of experience in corporate law, governance, and strategic advisory roles across aviation, finance, and logistics widely regarded as one of Nigeria's foremost legal minds in institutional governance.
   As co-founder and Group Counsel of GHI Assets Limited, she shapes the Group's legal framework, governance structure, and risk management strategy. Holder of an LL.M. from the London School of Economics and called to both the Nigerian Bar and the Supreme Court of England and Wales, her dual-jurisdiction expertise bridges international legal standards with local commercial realities.
   As Group Counsel, she provides strategic legal oversight and institutional strength anchoring the GHI Group's long-term growth.`,
  },
];

const MeetOurLeadership = () => {
  return (
    <Wrapper className="grid w-full gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="w-full"
      >
        <ContainerHeader
          className="md:w-140.25!"
          title="MEET OUR PEOPLE"
          subtext="Leadership Team"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer(0.12)}
        className="w-full grid grid-cols-1 gap-10 md:grid-cols-2"
      >
        {leaders.map((leader) => (
          <motion.div key={leader.name} variants={fadeInUp}>
            <LeadershipCard {...leader} />
          </motion.div>
        ))}
      </motion.div>
    </Wrapper>
  );
};

export default MeetOurLeadership;

