
interface HeroSection {
  section: "hero"
  image: string
  imageAlt: string
  title: string

}

interface SectionOne {
  section: "intro"
  tag: string
  title: string
  titleHighlight: string
  description: string
}

interface SectionTwo {
  section: "audience"
  tag: string
  title: string
  titleHighlight: string
  titleSuffix: string
  description: string
  bulletPoints: string[]
}

interface Partner {
  name: string
  image: string
  link: string
  description: string
  phone: string
  email: string
}

interface SectionThree {
  section: "divisions"
  tag: string
  title: string
  titleHighlight: string
  titleSuffix: string
  description: string
  partners: Partner[]
}

interface SectionFour {
  section: "cta"
  image: string
  imageAlt: string
  title: string
  description: string
  ctaLabel: string
  ctaLink: string
}

export interface CargoPageData {
  slug: string
  hero: HeroSection
  sectionOne: SectionOne
  sectionTwo: SectionTwo
  sectionThree: SectionThree
  sectionFour: SectionFour
}
