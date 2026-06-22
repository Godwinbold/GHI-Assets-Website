import { Link } from "react-router-dom"
import ContainerHeader from "./ContainerHeader"
import Wrapper from "./Wrapper"
import ArticleCardGrid from "./ArticleCardGrid"


const LatestInsight = () => {
  return (
  <Wrapper className="grid w-full gap-10">
      <div className="w-full  flex items-center justify-between">
        <ContainerHeader
          className="w-140.25!"
          title="LATEST INSIGHT"
          subtext="Industry"
          colorText="News & Updates"
        />
        <Link to="/insights" className="text-sm h-15 flex items-center justify-center  text-white bg-brand font-medium mt-4 w-57.5 rounded-md">
          View All Insights
        </Link>
      </div>

      <ArticleCardGrid/>
    </Wrapper>
  )
}

export default LatestInsight
