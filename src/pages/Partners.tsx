import { motion } from "framer-motion";
import PageHero from "../components/common/PageHero";
import PartnershipBanner from "../components/common/PartnershipBanner";
import Wrapper from "../components/home/Wrapper";
import ContainerHeader from "../components/home/ContainerHeader";
import SEO from "../components/common/SEO";
import { fadeInUp, staggerContainer, defaultViewport } from "../lib/animations";

const PARTNER_CARRIERS = [
  {
    id: "turkish-airlines",
    name: "Turkish Airlines Cargo",
    iata: "TK",
    hub: "Istanbul (IST)",
    image: "/images/Turkish Cargo.png",
    description: "One of the world's most connected cargo networks, bridging Europe, Asia, Africa and the Americas through the Istanbul hub's freighter and belly-hold capacity.",
    routes: ["IST", "LOS", "JFK", "PVG", "GRU", "NRT"],
    advantages: [
      "Widest global network connectivity of any partner carrier",
      "Pharma-grade cold-chain handling from tarmac to warehouse",
      "Dedicated dangerous-goods and special-cargo certification",
    ],
  },
  {
    id: "united-cargo",
    name: "United Cargo",
    iata: "UA",
    hub: "Chicago (ORD) · Houston (IAH) · Newark (EWR)",
    image: "/images/United Cargo.png",
    description: "Full-service capacity across United's North American hub network, with widebody freighter and belly-hold reach into Europe, Asia-Pacific and Latin America.",
    routes: ["ORD", "IAH", "EWR", "SFO", "FRA", "NRT"],
    advantages: [
      "TempControl network built for life-sciences and pharma shippers",
      "Priority board handling for time-critical shipments",
      "Star Alliance interline reach into 190+ countries",
    ],
  },
  {
    id: "rwandair-cargo",
    name: "RwandAir Cargo",
    iata: "WB",
    hub: "Kigali (KGL)",
    image: "/images/RwandAir Cargo.png",
    description: "One of East Africa's fastest-growing carriers, built around agile scheduling that keeps fresh produce and medical shipments moving on tight windows.",
    routes: ["KGL", "EBB", "DAR", "LHR", "BRU", "DXB"],
    advantages: [
      "Agile scheduling for time-critical medical and agricultural cargo",
      "Expanding regional feeder network across East and Central Africa",
      "Hands-on handling for smaller-volume shippers",
    ],
  },
  {
    id: "air-cote-divoire",
    name: "Air Côte d'Ivoire Cargo",
    iata: "HF",
    hub: "Abidjan (ABJ)",
    image: "/images/HF.png",
    description: "The regional connector for West and Central Africa, moving cocoa, cashew, mango and textile exports from Abidjan out to the European markets that depend on them.",
    routes: ["ABJ", "DKR", "LOS", "COO", "CDG", "BRU"],
    advantages: [
      "Same-day customs clearance at the Abidjan cargo terminal",
      "Dedicated perishables handling for agricultural exporters",
      "Growing frequency across the West Africa feeder network",
    ],
  },
  {
    id: "south-african-airways-cargo",
    name: "South African Airways Cargo",
    iata: "SA",
    hub: "Johannesburg (JNB)",
    image: "/images/South African Airways Cargo.png",
    description: "The gateway to Southern Africa, built on decades of cold-chain expertise moving perishables, mining equipment and pharmaceuticals across Africa–Europe–Asia lanes.",
    routes: ["JNB", "CPT", "LHR", "FRA", "PER", "HKG"],
    advantages: [
      "Cold-chain infrastructure purpose-built for flowers and perishables",
      "Established pharma handling protocols for cross-border shipments",
      "Heavy-lift capacity for mining and energy sector equipment",
    ],
  },
];

const Partners = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Our Partner Airlines",
    "description": "GHI Assets Limited partners with leading international airlines, providing top-tier cargo logistics and ground handling representation in West Africa.",
    "publisher": {
      "@type": "Organization",
      "name": "GHI Assets Limited"
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f8fb]">
      <SEO
        title="Our Partner Airlines | Global Cargo & Aviation Networks"
        description="GHI Assets Limited represents leading international carriers in Nigeria and West Africa, including Turkish Airlines, United Cargo, RwandAir, and Air Côte d'Ivoire."
        schema={schema}
      />

      <PageHero
        imageSrc="/images/airplane1.png"
        imageAlt="Commercial cargo aircraft in flight"
        title={"Our Partner &\nAirline Networks"}
        description="Connecting West African trade corridors to global cargo networks. We represent major international carriers with operational precision."
      />

      <Wrapper className="grid grid-cols-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <ContainerHeader
            title="PARTNER CARRIERS"
            subtext="Global Reach, "
            colorText="Local Expertise"
            helperText="Through our strategic divisions, GHI Assets Limited provides world-class representation, cargo sales, and ground logistics oversight for five of the world's most trusted airlines. Together, we connect local shippers to over 190 countries."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-12 mt-12"
        >
          {PARTNER_CARRIERS.map((partner) => (
            <motion.article
              key={partner.id}
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              {/* Airline Image/Logo container */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo / aircraft`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-500 px-1">
                  <span>IATA: <strong className="text-slate-800">{partner.iata}</strong></span>
                  <span>Hub: <strong className="text-slate-800">{partner.hub.split(" · ")[0]}</strong></span>
                </div>
              </div>

              {/* Airline details */}
              <div className="lg:col-span-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand/10 text-brand px-3 py-1 rounded text-xs font-mono font-semibold">
                      {partner.iata}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {partner.name}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Routes */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Key Network Connections
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {partner.routes.map((route) => (
                        <span
                          key={route}
                          className="bg-slate-100 text-slate-800 px-3 py-1 rounded text-xs font-mono font-medium"
                        >
                          {route}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Advantages */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                      Operational Advantages
                    </h3>
                    <ul className="space-y-2">
                      {partner.advantages.map((adv) => (
                        <li key={adv} className="flex items-start gap-2.5 text-slate-600 text-sm">
                          <span className="text-brand mt-1">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Wrapper>

      <PartnershipBanner
        title="Ready to Scale Your Cargo Operations?"
        description="Connect with our cargo sales and operations experts today to secure capacity on Turkish Airlines, United Cargo, RwandAir, Air Côte d'Ivoire, or South African Airways Cargo."
        ctaLink="/contact"
        imageAlt="Aviation Partnership"
        imageSrc="/images/business-handshake.png"
        ctaLabel="Contact Us"
      />
    </main>
  );
};

export default Partners;
