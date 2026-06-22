import type { CargoPageData } from "../types/servicepage";

export const services = [
  {
    id: 1,
    title: 'CARGO SERVICE',
    description: 'End-to-end cargo solutions spanning capacity management, freight forwarding partnerships, and belly-hold optimisation to drive ancillary revenue growth.',
    image: '/images/team4.png'
  },
  {
    id: 2,
    title: 'ROUTE DEVELOPMENT',
    description: 'Strategic route analysis and market intelligence to identify, validate, and launch high-yield aviation corridors. We map demand signals, competitive dynamics, and revenue potential to guide expansion decisions with confidence.',
    image: '/images/briefing-room.png'
  },
  {
    id: 3,
    title: 'AVIATION TRAINING',
    description: 'IATA-certified aviation training and professional development designed to build critical skills. We combine industry experience with robust pathways to build high-performance global aviation teams.',
    image: '/images/control-room.png'
  },
  {
    id: 4,
    title: 'AIRPORT SUPERVISION',
    description: 'Representing airlines in ground handling negotiations, service level oversight, and quality assurance ensuring seamless turnaround operations at every destination.',
    image: '/images/man-presentation.png'
  },

  {
    id: 5,
    title: 'AIRPORT SUPERVISION',
    description: 'Representing airlines in ground handling negotiations, service level oversight, and quality assurance ensuring seamless turnaround operations at every destination.',
    image: '/images/cargo-prep.png'
  }
];



export const servicespage = [
  {
    image: "/images/team4.png",
    description:
      "Cargo represents a substantial and often underleveraged revenue stream. GHI's cargo specialists help airlines",
    link: "cargo-services",
    actionWord: "Cargo Service",
  },
  {
    image: "/images/briefing-room.png",
    description:
      "Strategic route analysis and market intelligence to identify, validate, and launch high-yield aviation corridors. We map demand signals, competitive dynamics, and revenue potential to guide expansion decisions with confidence.",
    link: "/services/route-development",
    actionWord: "Route Development Support",
  },
  {
    image: "/images/control-room.png",
    description:
      "Cargo represents a substantial and often underleveraged revenue stream. GHI's cargo specialists help airlines",
    link: "/services/aviation-training",
    actionWord: "Aviation Training",
  },
  {
    image: "/images/man-presentation.png",
    description:
      "Cargo represents a substantial and often underleveraged revenue stream. GHI's cargo specialists help airlines",
    link: "/services/sales-distribution",
    actionWord: "Sales & Distribution Services",
  },
  {
    image: "/images/cargo-prep.png",
    description:
      "Cargo represents a substantial and often underleveraged revenue stream. GHI's cargo specialists help airlines",
    link: "/services/airport-supervision",
    actionWord: "Airport Supervision",
  },
]





const cargoPageData: CargoPageData[] = [
  {
  slug: "cargo-services",
  hero: {
    section: "hero",
    image: "/images/team4.png",
    imageAlt: "GHI cargo team on tarmac",
    title: "West Africa's Trusted Cargo Partner.",
 
  },

  // SECTION 1 — Connecting Nigeria
  sectionOne:{
    section: "intro",
    tag: "CARGO SERVICE",
    title: "Connecting Nigeria to the World Through",
    titleHighlight: "Air Cargo",
    description:
      "GHI Assets Limited is Nigeria's official APO Cargo representative and parent company of Sky Logistics Limited, two powerful cargo divisions working together to deliver world-class commercial cargo sales, freight forwarding, airline representation, and logistics solutions across Nigeria and West Africa. Whether you are an international carrier seeking cargo representation in Nigeria, a freight forwarder needing reliable ground logistics, or a business moving time-sensitive and high-value shipments across West African trade routes, APO Cargo and Sky Logistics Limited under the GHI Assets Group provide the commercial reach, local expertise, and global connectivity your cargo operations demand.",
  },

  // SECTION 2 — Built For
 sectionTwo: {
    section: "audience",
    tag: "CARGO UNITS",
    title: "Built for",
    titleHighlight: "Carriers, Freight Forwarders and Shippers",
    titleSuffix: "alike",
    description:
      "We work directly with international cargo carriers seeking commercial representation in Nigeria, as well as freight forwarders and shippers who need a reliable, knowledgeable partner on the ground. Whether you are moving time-sensitive freight, dangerous goods, or high-value consignments, our team provides the expertise and connections to get it done.",
    bulletPoints: [
      "Airlines seeking Cargo Representation",
      "Trusted Local Ground Partner",
      "West African Freight Solutions",
    ],
  },

  // SECTION 3 — Two Divisions
  sectionThree:{
    section: "divisions",
    tag: "Our Cargo Mission",
    title: "Two Divisions. One",
    titleHighlight: "Trusted",
    titleSuffix: "Group",
    description:
      "GHI Assets Limited powers two specialised cargo divisions — APO Cargo and Sky Logistics Limited representing five major international airlines across Nigeria and West Africa, delivering world-class cargo sales, airline representation, and freight solutions from Lagos to the globe.",
    partners: [
      {
        name: "Turkish Airline",
        image: "/images/turkish-airline.jpg",
        link: "/partners/turkish-airline",
        description:
          "Nigeria's official Turkish Airlines Cargo representative - linking West African freight to Istanbul's global cargo hub through GHI's APG Cargo division.",
        phone: "+234 706 712 5892",
        email: "info@apgcargo.com.ng",
      },
      {
        name: "United Cargo",
        image: "/images/united-cargo.jpg",
        link: "/partners/united-cargo",
        description:
          "Commercial cargo support for United Cargo customers across Nigeria and West Africa, connecting local shipments with a trusted global air freight network.",
        phone: "+234 706 712 5892",
        email: "info@apgcargo.com.ng",
      },
      {
        name: "RwandAir",
        image: "/images/rwandair.jpg",
        link: "/partners/rwandair",
        description:
          "Local cargo representation for RwandAir, supporting freight movement between Nigeria, Kigali, and key African and international trade routes.",
        phone: "+234 706 712 5892",
        email: "info@apgcargo.com.ng",
      },
    ],
  },

  // SECTION 4 — CTA Banner
  sectionFour: {
    section: "cta",
    image: "/images/cargo-cta.jpg",
    imageAlt: "Cargo boxes on tarmac in rain",
    title: "Ready to move your cargo?",
    description:
      "Talk to our team about APO Cargo representation or Sky Logistics freight solutions across Nigeria and West Africa.",
    ctaLabel: "Contact Us",
    ctaLink: "/contact",
  },}
]

export default cargoPageData
