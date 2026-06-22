import { useParams } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { insightsDetails } from '../constants/insights';

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();

  const insight = insightsDetails.find((item) => item.slug === slug);
  return (
    <div className="min-h-screen ">
       <PageHero
  imageSrc={insight?.image!}
  imageAlt="Aircraft cargo operations at airport"
 timeDate={`${insight?.date!} - ${insight?.readTime!}`}
  title={insight?.title!}
  social={true}

/>
    </div>
  );
}
