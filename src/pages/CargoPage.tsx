import { useEffect, useRef, useState, useCallback } from "react";

const SPECIALTY_META = {
  general: { label: "General Cargo", icon: "box" },
  express: { label: "Premium Handling", icon: "bolt" },
  tempControlled: { label: "Temperature-Controlled", icon: "snowflake" },
  pharma: { label: "Pharmaceuticals", icon: "pulse" },
  dangerousGoods: { label: "Dangerous Goods Handling", icon: "hazard" },
  oversized: { label: "Oversized / Special Cargo", icon: "crate" },
};

const CARGO_PARTNERS = [
  {
    id: "air-cote-divoire",
    name: "Air Côte d'Ivoire Cargo",
    iata: "HF",
    hub: "Abidjan (ABJ)",
    layout: "compact",
    image: "/images/HF.png",
    summary:
      "The regional connector for West and Central Africa, moving cocoa, cashew, mango and textile exports from Abidjan out to the European markets that depend on them.",
    specialties: ["general", "express", "tempControlled", "oversized"],
    routes: ["ABJ", "DKR", "LOS", "COO", "CDG", "BRU"],
    advantages: [
      "Same-day customs clearance at the Abidjan cargo terminal",
      "Dedicated perishables handling for agricultural exporters",
      "Growing frequency across the West Africa feeder network",
    ],
    cta: { label: "Request Cargo Quote", href: "#cargo-quote" },
  },
  {
    id: "united-cargo",
    name: "United Cargo",
    iata: "UA",
    hub: "Chicago (ORD) · Houston (IAH) · Newark (EWR)",
    layout: "standard",
    specStyle: "ticker",
    image: "/images/United Cargo.png",
    summary:
      "Full-service capacity across United's North American hub network, with widebody freighter and belly-hold reach into Europe, Asia-Pacific and Latin America.",
    specialties: ["general", "express", "tempControlled", "pharma", "dangerousGoods", "oversized"],
    routes: ["ORD", "IAH", "EWR", "SFO", "FRA", "NRT"],
    advantages: [
      "TempControl network built for life-sciences and pharma shippers",
      "Priority board handling for time-critical shipments",
      "Star Alliance interline reach into 190+ countries",
    ],
    cta: { label: "Contact Cargo Team", href: "#cargo-contact" },
  },
  {
    id: "south-african-airways-cargo",
    name: "South African Airways Cargo",
    iata: "SA",
    hub: "Johannesburg (JNB)",
    layout: "standard",
    specStyle: "table",
    image: "/images/South African Airways Cargo.png",
    summary:
      "The gateway to Southern Africa, built on decades of cold-chain expertise moving perishables, mining equipment and pharmaceuticals across Africa–Europe–Asia lanes.",
    specialties: ["general", "tempControlled", "pharma", "dangerousGoods", "oversized"],
    routes: ["JNB", "CPT", "LHR", "FRA", "PER", "HKG"],
    coverage: "Africa · Europe · Asia-Pacific",
    advantages: [
      "Cold-chain infrastructure purpose-built for flowers and perishables",
      "Established pharma handling protocols for cross-border shipments",
      "Heavy-lift capacity for mining and energy sector equipment",
    ],
    cta: { label: "Explore Services", href: "#cargo-services" },
  },
  {
    id: "rwandair-cargo",
    name: "RwandAir Cargo",
    iata: "WB",
    hub: "Kigali (KGL)",
    layout: "compact",
    image: "/images/RwandAir Cargo.png",
    summary:
      "One of East Africa's fastest-growing carriers, built around agile scheduling that keeps fresh produce and medical shipments moving on tight windows.",
    specialties: ["general", "express", "tempControlled", "pharma"],
    routes: ["KGL", "EBB", "DAR", "LHR", "BRU", "DXB"],
    advantages: [
      "Agile scheduling for time-critical medical and agricultural cargo",
      "Expanding regional feeder network across East and Central Africa",
      "Hands-on handling for smaller-volume shippers",
    ],
    cta: { label: "Request Cargo Quote", href: "#cargo-quote" },
  },
  {
    id: "turkish-airlines-cargo",
    name: "Turkish Airlines Cargo",
    iata: "TK",
    hub: "Istanbul (IST)",
    layout: "feature",
    image: "/images/Turkish Cargo.png",
    summary:
      "One of the world's most connected cargo networks, bridging Europe, Asia, Africa and the Americas through the Istanbul hub's freighter and belly-hold capacity.",
    specialties: ["general", "express", "tempControlled", "pharma", "dangerousGoods", "oversized"],
    routes: ["IST", "JFK", "PVG", "LOS", "GRU", "NRT"],
    advantages: [
      "Widest global network connectivity of any partner carrier",
      "Pharma-grade cold-chain handling from tarmac to warehouse",
      "Dedicated dangerous-goods and special-cargo certification",
    ],
    cta: { label: "Contact Cargo Team", href: "#cargo-contact" },
  },
];

function CargoIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": "true",
    focusable: "false",
  };

  switch (name) {
    case "box":
      return (
        <svg {...common}>
          <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" />
          <path d="M3 7.5v9L12 21l9-4.5v-9" />
          <path d="M12 12v9" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "snowflake":
      return (
        <svg {...common}>
          <path d="M12 2v20M4.2 6l15.6 12M4.2 18 19.8 6" />
          <path d="m9 3.5 3 2 3-2M9 20.5l3-2 3 2M3.3 9l1 3.5-1 3.5M20.7 9l-1 3.5 1 3.5" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path d="M3 12h4l2-7 4 14 2-7h6" />
        </svg>
      );
    case "hazard":
      return (
        <svg {...common}>
          <path d="M12 2 2 21h20L12 2Z" />
          <path d="M12 9v5" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "crate":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="M3 10h18M9 5v14M15 5v14" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common}>
          <path d="M3 13.5 21 7l-6.2 8.8L21 22l-9-3-4 3-1-4.5-3-1.5 3-2 -1-4.5 3 1.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

function CargoMedia({ src, alt, iata, dark = false }: { src: string; alt: string; iata: string; dark?: boolean }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex aspect-[4/3] flex-col items-center justify-center gap-2 overflow-hidden rounded-sm border border-dashed ${
          dark ? "border-white/20 bg-white/5 text-white/40" : "border-slate-300 bg-slate-50 text-slate-400"
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${
            dark
              ? "bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_14px)]"
              : "bg-[repeating-linear-gradient(135deg,rgba(14,42,74,0.05)_0px,rgba(14,42,74,0.05)_1px,transparent_1px,transparent_14px)]"
          }`}
        />
        <span className={`relative font-mono text-4xl font-bold tracking-wide ${dark ? "text-white/25" : "text-slate-900/30"}`}>
          {iata}
        </span>
        <span className="relative text-xs tracking-wide">Cargo imagery coming soon</span>
        <CargoIcon name="plane" className="relative h-6 w-6 opacity-50" />
      </div>
    );
  }

  return (
    <div className={`aspect-[4/3] overflow-hidden rounded-sm ${dark ? "bg-white/5" : "bg-slate-100"}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}

function useSectionTracking(id: string, onActiveChange: (id: string) => void) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          revealObserver.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealObserver.observe(node);

    const activeObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onActiveChange(id); },
      { threshold: 0, rootMargin: "-40% 0px -50% 0px" }
    );
    activeObserver.observe(node);

    return () => { revealObserver.disconnect(); activeObserver.disconnect(); };
  }, [id, onActiveChange]);

  return [ref, revealed] as const;
}

function Waybill({ iata, hub, dark = false }: { iata: string; hub: string; dark?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 font-mono text-xs tracking-wide ${dark ? "text-white/60" : "text-slate-500"}`}>
      <span className={`inline-flex min-w-[2.4em] items-center justify-center rounded-sm border px-2 py-1 font-bold ${dark ? "border-white/20 text-white" : "border-slate-200 text-slate-900"}`}>
        {iata}
      </span>
      <span className={`h-0 w-6 border-t border-dashed ${dark ? "border-white/25" : "border-slate-300"}`} aria-hidden="true" />
      <span>{hub}</span>
    </p>
  );
}

function SpecialtyBadges({ specialties, dark = false, dense = false }: { specialties: string[]; dark?: boolean; dense?: boolean }) {
  return (
    <ul className={`mb-7 flex flex-wrap ${dense ? "gap-2" : "gap-2.5"}`}>
      {specialties.map((key) => (
        <li key={key} className={`inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-semibold transition-colors ${dark ? "border-amber-400/30 bg-amber-400/10 text-white hover:bg-amber-400/20" : "border-amber-600/30 bg-amber-500/5 text-slate-900 hover:bg-amber-500/10"}`}>
          <CargoIcon name={SPECIALTY_META[key as keyof typeof SPECIALTY_META].icon} className={`h-3.5 w-3.5 ${dark ? "text-amber-400" : "text-amber-600"}`} />
          {SPECIALTY_META[key as keyof typeof SPECIALTY_META].label}
        </li>
      ))}
    </ul>
  );
}

function Advantages({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mb-8 grid gap-2">
      {items.map((line) => (
        <li key={line} className={`relative pl-4 text-sm ${dark ? "text-white/80" : "text-slate-700"}`}>
          <span aria-hidden="true" className={`absolute left-0 top-[0.6em] h-px w-2.5 ${dark ? "bg-amber-400" : "bg-amber-600"}`} />
          {line}
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ cta, dark = false }: { cta: { label: string; href: string }; dark?: boolean }) {
  return (
    <a href={cta.href} className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${dark ? "bg-amber-400 text-slate-900 hover:bg-amber-300 focus-visible:ring-amber-300 focus-visible:ring-offset-slate-900" : "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-amber-500"}`}>
      {cta.label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function CompactCarrier({ partner, reversed, forwardedRef, revealed }: any) {
  return (
    <article
      ref={forwardedRef}
      id={partner.id}
      aria-labelledby={`${partner.id}-heading`}
      className={`grid items-center gap-8 rounded-sm bg-slate-50 p-8 sm:p-10 md:grid-cols-[0.8fr_1fr] md:gap-10 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className={`group ${reversed ? "md:order-2" : "md:order-1"}`}>
        <CargoMedia src={partner.image} alt={`${partner.name} aircraft and ground handling operations`} iata={partner.iata} />
        <p className="mt-2 text-xs text-slate-500">{partner.hub} · regional network</p>
      </div>
      <div className={reversed ? "md:order-1" : "md:order-2"}>
        <Waybill iata={partner.iata} hub={partner.hub} />
        <h2 id={`${partner.id}-heading`} className="mb-3 text-2xl font-semibold tracking-tight text-slate-900">{partner.name}</h2>
        <p className="mb-5 max-w-[54ch] text-slate-700">{partner.summary}</p>
        <SpecialtyBadges specialties={partner.specialties} dense />
        <p className="mb-5 flex flex-wrap items-center gap-1.5 font-mono text-sm font-semibold text-slate-900">
          {partner.routes.map((code: string, i: number) => (
            <span key={code}>{code}{i < partner.routes.length - 1 && <span className="text-slate-300"> · </span>}</span>
          ))}
        </p>
        <Advantages items={partner.advantages} />
        <CtaButton cta={partner.cta} />
      </div>
    </article>
  );
}

function StandardCarrier({ partner, reversed, forwardedRef, revealed }: any) {
  return (
    <article
      ref={forwardedRef}
      id={partner.id}
      aria-labelledby={`${partner.id}-heading`}
      className={`group grid items-center gap-10 border-t border-slate-200 py-14 first:border-t-0 sm:py-16 md:grid-cols-2 md:gap-14 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className={reversed ? "md:order-2" : "md:order-1"}>
        <CargoMedia src={partner.image} alt={`${partner.name} aircraft and ground handling operations`} iata={partner.iata} />
      </div>
      <div className={reversed ? "md:order-1" : "md:order-2"}>
        <Waybill iata={partner.iata} hub={partner.hub} />
        <h2 id={`${partner.id}-heading`} className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{partner.name}</h2>
        <p className="mb-6 max-w-[60ch] text-slate-700">{partner.summary}</p>
        <SpecialtyBadges specialties={partner.specialties} />
        {partner.specStyle === "table" ? (
          <dl className="mb-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-y border-slate-200 py-4 text-sm">
            <dt className="text-slate-500">Hub</dt>
            <dd className="font-medium text-slate-900">{partner.hub}</dd>
            <dt className="text-slate-500">Coverage</dt>
            <dd className="font-medium text-slate-900">{partner.coverage}</dd>
            <dt className="text-slate-500">Key stations</dt>
            <dd className="font-mono font-medium text-slate-900">{partner.routes.join(" · ")}</dd>
          </dl>
        ) : (
          <div className="mb-6 flex items-baseline gap-3 overflow-x-auto border-b border-slate-200 pb-5">
            <span className="flex-none text-xs uppercase tracking-wide text-slate-500">Network</span>
            <ol aria-label={`${partner.name} major routes`} className="flex gap-2 whitespace-nowrap font-mono text-sm font-semibold text-slate-900">
              {partner.routes.map((code: string, i: number) => (
                <li key={code}>{code}{i < partner.routes.length - 1 && <span className="ml-2 text-slate-300" aria-hidden="true">•</span>}</li>
              ))}
            </ol>
          </div>
        )}
        <Advantages items={partner.advantages} />
        <CtaButton cta={partner.cta} />
      </div>
    </article>
  );
}

function FeatureCarrier({ partner, forwardedRef, revealed }: any) {
  return (
    <article
      ref={forwardedRef}
      id={partner.id}
      aria-labelledby={`${partner.id}-heading`}
      className={`group mt-14 overflow-hidden rounded-sm bg-slate-900 text-white motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out sm:mt-16 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-16">
        <div>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">Flagship network</p>
          <Waybill iata={partner.iata} hub={partner.hub} dark />
          <h2 id={`${partner.id}-heading`} className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">{partner.name}</h2>
          <p className="mb-7 max-w-[58ch] text-white/80">{partner.summary}</p>
          <SpecialtyBadges specialties={partner.specialties} dark />
          <div className="mb-6 flex items-baseline gap-3 overflow-x-auto border-b border-white/15 pb-5">
            <span className="flex-none text-xs uppercase tracking-wide text-white/50">Network</span>
            <ol aria-label={`${partner.name} major routes`} className="flex gap-2 whitespace-nowrap font-mono text-sm font-semibold">
              {partner.routes.map((code: string, i: number) => (
                <li key={code}>{code}{i < partner.routes.length - 1 && <span className="ml-2 text-white/25" aria-hidden="true">•</span>}</li>
              ))}
            </ol>
          </div>
          <Advantages items={partner.advantages} dark />
          <CtaButton cta={partner.cta} dark />
        </div>
        <div className="group">
          <CargoMedia src={partner.image} alt={`${partner.name} aircraft and ground handling operations`} iata={partner.iata} dark />
        </div>
      </div>
    </article>
  );
}

function CarrierEntry({ partner, index, onActiveChange }: any) {
  const [ref, revealed] = useSectionTracking(partner.id, onActiveChange);
  const reversed = index % 2 === 1;

  if (partner.layout === "feature") return <FeatureCarrier partner={partner} forwardedRef={ref} revealed={revealed} />;
  if (partner.layout === "compact") return <CompactCarrier partner={partner} reversed={reversed} forwardedRef={ref} revealed={revealed} />;
  return <StandardCarrier partner={partner} reversed={reversed} forwardedRef={ref} revealed={revealed} />;
}

function ManifestIndex({ activeId }: { activeId: string }) {
  return (
    <nav aria-label="Jump to cargo carrier" className="mb-4 -mx-1 flex gap-1 overflow-x-auto border-y border-slate-200 px-1 py-2">
      {CARGO_PARTNERS.map((partner) => (
        <a
          key={partner.id}
          href={`#${partner.id}`}
          aria-current={activeId === partner.id ? "true" : undefined}
          className={`flex-none rounded-sm px-3 py-1.5 font-mono text-xs font-semibold tracking-wide transition-colors ${activeId === partner.id ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
        >
          {partner.iata} <span className="hidden sm:inline">· {partner.name.replace(" Cargo", "")}</span>
        </a>
      ))}
    </nav>
  );
}

export default function CargoPage() {
  const [activeId, setActiveId] = useState(CARGO_PARTNERS[0].id);
  const handleActiveChange = useCallback((id: string) => setActiveId(id), []);

  return (
    <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
      <section aria-labelledby="cargo-hero-heading" className="grid items-center gap-10 py-16 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:py-24">
        <div>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Air Freight Network</p>
          <h1 id="cargo-hero-heading" className="mb-5 max-w-[16ch] text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
            Cargo that keeps the world's supply chains moving
          </h1>
          <p className="mb-9 max-w-[52ch] text-base text-slate-700 sm:text-lg">
            We connect shippers and forwarders to a network of trusted carrier partners, moving everything from routine pallets to temperature-sensitive pharmaceuticals across six continents. Every partnership below is built for one thing: cargo that arrives exactly when your business needs it to.
          </p>
          <dl className="flex flex-wrap gap-7 border-t border-slate-200 pt-7 sm:gap-11">
            <div>
              <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Partner carriers</dt>
              <dd className="font-mono text-lg font-semibold text-slate-900">05</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Continents served</dt>
              <dd className="font-mono text-lg font-semibold text-slate-900">06</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Cargo categories</dt>
              <dd className="font-mono text-lg font-semibold text-slate-900">General → Dangerous Goods</dd>
            </div>
          </dl>
        </div>
        <div aria-hidden="true" className="relative min-h-[160px] opacity-70 md:min-h-[220px] md:opacity-100">
          <svg viewBox="0 0 360 320" className="h-auto w-full overflow-visible">
            <g className="text-amber-600/60" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 6" strokeLinecap="round">
              <path d="M40 260 C 120 180, 160 120, 260 60" />
              <path d="M60 60 C 130 110, 170 180, 300 250" />
              <path d="M20 150 C 120 150, 220 150, 320 150" />
            </g>
            {[[40,260],[260,60],[60,60],[300,250],[20,150],[320,150]].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" className="fill-slate-900" />
            ))}
          </svg>
        </div>
      </section>

      <ManifestIndex activeId={activeId} />

      <section aria-label="Cargo carrier partners" className="pb-16 sm:pb-20 lg:pb-24">
        {CARGO_PARTNERS.map((partner, index) => (
          <CarrierEntry partner={partner} index={index} onActiveChange={handleActiveChange} key={partner.id} />
        ))}
      </section>
    </div>
  );
}
