export function FeaturesGrid() {
  const features = [
    {
      id: "01",
      title: "Market Entry & Expansion",
      description:
        "Whether launching a new route or scaling an existing corridor, we provide the market intelligence, regulatory guidance, and stakeholder access to accelerate your growth in new territories.",
    },
    {
      id: "02",
      title: "Revenue Optimisation",
      description:
        "A holistic review of your distribution mix, pricing strategy, and ancillary revenue streams. Identifying the structural improvements that unlock sustainable yield growth.",
    },
    {
      id: "03",
      title: "Operational Benchmarking",
      description:
        "Rigorous comparison of your ground handling, turnaround performance, and cargo operations against industry best practice, with a prioritised improvement roadmap.",
    },
    {
      id: "04",
      title: "Partnership Development",
      description:
        "Whether launching a new route or scaling an existing corridor, we provide the market intelligence, regulatory guidance, and stakeholder access to accelerate your growth in new territories.",
    },
  ];

  return (
    <div className="bg-white py-20 ">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              <span className="text-4xl font-bold text-gray-100 mb-4 block">
                {feature.id}
              </span>
              <h3 className="text-brand text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
