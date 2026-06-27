import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Pricing() {
  const hybridPlans = [
    {
      tier: "Segment",
      name: "SME",
      duration: "3 – 6 Months",
      amount: "€7,000 – €10,000",
      amountSub: "/ Design",
      amount2: "+ €1,500 – €2,000 / Supervision",
      features: [
        "Strategy Planning (Design)",
        "Supervision & Coordination",
        "Human-in-the-loop oversight",
        "Checkpoint & Path prototype",
      ],
      featured: false,
      badge: null,
    },
    {
      tier: "Segment",
      name: "Large Enterprise",
      duration: "6 – 12 Months",
      amount: "€10,000 – €15,000",
      amountSub: "/ Design",
      amount2: "+ €2,500 – €4,000 / Supervision",
      features: [
        "Strategy Planning (Design)",
        "Supervision & Coordination",
        "Full agentic workflow",
        "Community ecosystem access",
        "Impact measurement tables",
      ],
      featured: true,
      badge: "Most Popular",
    },
    {
      tier: "Segment",
      name: "Ecosystem / City",
      duration: "12 – 24 Months",
      amount: "€25,000 – €30,000",
      amountSub: "/ Design",
      amount2: "+ €4,500 – €6,000 / Supervision",
      features: [
        "Full ecosystem design",
        "City-scale community planning",
        "Physical & digital integration",
        "Networked node architecture",
        "Long-term impact programs",
      ],
      featured: false,
      badge: null,
    },
  ];

  const HybridCard = () => {
    return (
      <div className="group grid grid-cols-3 gap-2 mt-8 mb-24">
        {hybridPlans.map((h, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${i + 3} flex-col p-10 border border-neutral-800 rounded-3xl hover:bg-yellow transition duration-200`}
          >
            {/* first section */}
            <div className="flex-col h-110">
              {/* name section */}
              <div className="flex-col border-b border-neutral-800 pb-6">
                <h1 className="text-4xl font-bebas text-neutral-950">
                  {h.name}
                </h1>
                <h3 className="text-xs font-medium font-DMSans text-neutral-500 group-hover:text-neutral-600 transition duration-200">
                  {h.duration}
                </h3>
              </div>
              {/* amount section */}
              <div className="flex-col">
                <div className="flex mt-6">
                  <h1 className="text-4xl text-neutral-950 font-bebas">
                    {h.amount}
                  </h1>
                  <h1 className="flex text-neutral-500 font-DMSans items-center pl-1 pt-2 group-hover:text-neutral-600 transition duration-200">
                    {h.amountSub}
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex text-neutral-500 font-DMSans items-center pl-1 pt-2 group-hover:text-neutral-600 transition duration-200">
                    {h.amount2}
                  </h1>
                </div>
              </div>
              {/* features section */}
              <div className="flex-col mt-12 font-DMSans">
                {h.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex border-b border-neutral-800 py-2"
                  >
                    <span className="flex justify-start items-baseline pr-2 group-hover:text-neutral-600 transition duration-200">
                      →
                    </span>
                    <span className="text-sm text-neutral-500 font-DMSans font-medium group-hover:text-neutral-600 transition duration-200">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="h-260 px-10 bg-light-gray text-yellow">
        <div className="reveal flex items-center pt-32">
          <div className="w-6 h-px bg-neutral-950" />
          <span className="pl-2 text-neutral-950 text-xs font-DMSans tracking-widest uppercase">
            our plans
          </span>
        </div>
        <div className="reveal reveal-delay-1 mt-6 flex-col font-bebas text-7xl">
          <h1 className="text-neutral-950 uppercase">flexible</h1>
          <h1 className="uppercase">pricing</h1>
        </div>
        <div className="reveal reveal-delay-2 flex-col text-neutral-500 font-DMSans pt-4">
          <span className="font-medium">Two models;</span>
          <p className=" w-120">
            a current Hybrid Model with human-in-the-loop, and a Future
            Subscription Model built for scale.
          </p>
        </div>
        <HybridCard />
      </div>
      <Footer />
    </div>
  );
}
