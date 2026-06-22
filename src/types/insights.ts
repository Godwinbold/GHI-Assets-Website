type Section = {
  images: string[];
  body: string[];
};

type SectionWithTitle = Section & {
  title: string;
};

type InsightDetail = {
  slug: string;
  image:string;
  date: string | null;
  readTime: string | null;
  title: string;
  FIRST_SECTION: Section;
  SECOND_SECTION: SectionWithTitle;
};

export type InsightsDetails = InsightDetail[];