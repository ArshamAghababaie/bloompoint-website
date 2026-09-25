"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Pricing() {
  const ecosystemPlans = [
    {
      tier: "Segment",
      name: "Medium-Sized Businesses",
      duration: "3 - 6 Months",
      amount: "€7,000 - €10,000",
      amountSub: "/ Design",
      amount2: "+ €1,500 - €2,000",
      amountSub2: "/ Supervision",
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
      duration: "6 - 12 Months",
      amount: "€10,000 - €15,000",
      amountSub: "/ Design",
      amount2: "+ €2,500 - €4,000",
      amountSub2: "/ Supervision",
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
      duration: "12 - 24 Months",
      amount: "€25,000 - €30,000",
      amountSub: "/ Design",
      amount2: "+ €4,500 - €6,000",
      amountSub2: "/ Supervision",
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
  const subscriptionPlans = [
    {
      tier: "Plan",
      name: "Free Trial",
      duration: "2 Weeks",
      amount: "€0",
      amountSub: "/ Month",
      // amount2: "+ €0,000",
      // amountSub2: "/ Setup",
      features: ["Concept Idea [Strategy Planning]"],
      featured: false,
      badge: null,
    },
    {
      tier: "Plan",
      name: "Prototype",
      duration: "Monthly",
      amount: "€450",
      amountSub: "/ Month",
      // amount2: "+ €0,000",
      // amountSub2: "/ Setup",
      features: ["Design [Prototype Path]", "Supervision (limited)"],
      featured: true,
      badge: "Most Popular",
    },
    {
      tier: "Plan",
      name: "System",
      duration: "Monthly",
      amount: "€840",
      amountSub: "/ Month",
      // amount2: "+ €0,000",
      // amountSub2: "/ Setup",
      features: [
        "Design [Circular System]",
        "Supervision (limited)",
        "Coordination (limited)",
      ],
      featured: false,
      badge: null,
    },
    {
      tier: "Plan",
      name: "Ecosystem",
      duration: "Project",
      amount: "Depends",
      amountSub: "/ Project",
      // amount2: "+ €0,000",
      // amountSub2: "/ Setup",
      features: ["Design [Ecosystem]", "Supervision", "Coordination"],
      featured: false,
      badge: null,
    },
  ];

  const [isSubscription, setIsSubscription] = useState(true);
  const [displayedSubscription, setDisplayedSubscription] = useState(false);
  const [plansVisible, setPlansVisible] = useState(true);
  const activePlans = displayedSubscription
    ? subscriptionPlans
    : ecosystemPlans;

  const switchPlans = (toSubscription: boolean) => {
    if (toSubscription === isSubscription) return;
    setIsSubscription(toSubscription);
    setPlansVisible(false);
    setTimeout(() => {
      setDisplayedSubscription(toSubscription);
      setPlansVisible(true);
    }, 200);
  };

  const EcosystemCard = () => {
    return (
      <div
        className={`grid ${
          displayedSubscription ? "grid-cols-4" : "grid-cols-3"
        } gap-2 mt-8 pb-24 transition-opacity duration-200 max-[1023px]:grid-cols-2 max-[1023px]:gap-4 max-[767px]:grid-cols-1 max-[767px]:gap-6 max-[767px]:mt-10 max-[767px]:pb-16 ${
          plansVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {activePlans.map((h, i) => (
          <div
            key={i}
            className={`group reveal reveal-delay-${i + 3} flex-col p-10 border border-neutral-600 rounded-3xl hover:bg-yellow transition-colors duration-200 max-[1023px]:p-8 max-[767px]:p-7`}
          >
            {/* first section */}
            <div className="flex-col h-110 max-[1023px]:h-auto">
              {/* name section */}
              <div className="flex-col border-b border-neutral-500 pb-4">
                <h1 className="text-4xl font-bebas text-neutral-950">
                  {h.name}
                </h1>
                <h3 className="text-xs font-medium font-DMSans text-neutral-500 group-hover:text-neutral-600 transition duration-200">
                  {h.duration}
                </h3>
              </div>

              {/* amount section */}
              <div className="flex-col">
                <div className="flex mt-6 max-[767px]:flex-wrap">
                  <h1 className="text-[32px] text-neutral-950 font-bebas">
                    {h.amount}
                  </h1>
                  <h1 className="flex text-neutral-500 font-DMSans items-center pl-1 pt-2 group-hover:text-neutral-600 transition duration-200">
                    {h.amountSub}
                  </h1>
                </div>

                {/* <div className="flex mt-6 max-[767px]:flex-wrap">
                  <h1 className="text-3xl text-neutral-950 font-bebas">
                    {h.amount2}
                  </h1>
                  <h1 className="flex text-neutral-500 font-DMSans items-center pl-1 pt-2 group-hover:text-neutral-600 transition duration-200">
                    {h.amountSub2}
                  </h1>
                </div> */}
              </div>

              {/* features section */}
              <div className="flex-col mt-12 font-DMSans max-[767px]:mt-10">
                {h.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex border-b border-neutral-300 group-hover:border-neutral-600 py-2"
                  >
                    <span className="flex justify-start items-baseline -mt-1 pr-2 group-hover:text-neutral-700 transition duration-200">
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
      <div className="pt-20 px-4 sm:px-6 md:px-10 lg:px-12 bg-light-gray text-yellow max-[767px]:pt-16 max-[767px]:px-6">
        <div className="reveal reveal-delay-1 mt-0 pt-20 flex-col font-bebas text-6xl xl:text-7xl max-[767px]:pt-12 max-[767px]:text-6xl">
          <h1 className="text-neutral-950 uppercase">flexible</h1>
          <h1 className="uppercase">pricing</h1>
        </div>

        <div className="reveal reveal-delay-2 flex-col text-neutral-500 font-DMSans pt-4">
          <p className="reveal reveal-delay-2 mb-9.5 max-w-95 text-[0.95rem] font-light leading-[1.8] text-neutral-500 max-[767px]:max-w-full">
            You can select the desired pricing model and the best plan that is a
            perfect match for your business size.
          </p>
        </div>

        <div className="reveal reveal-delay-2 flex justify-start">
          <div className="inline-flex items-center border border-neutral-600 rounded-2xl p-1 font-DMSans cursor-none ">
            <button
              type="button"
              onClick={() => switchPlans(true)}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-colors duration-200 max-[767px]:px-4 max-[767px]:py-1.5 cursor-none ${
                isSubscription
                  ? "bg-yellow text-neutral-950"
                  : "text-neutral-500 hover:text-neutral-600"
              }`}
            >
              Subscription
            </button>
            <button
              type="button"
              onClick={() => switchPlans(false)}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-colors duration-200 max-[767px]:px-4 max-[767px]:py-1.5 cursor-none ${
                !isSubscription
                  ? "bg-yellow text-neutral-950"
                  : "text-neutral-500 hover:text-neutral-600"
              }`}
            >
              Ecosystem
            </button>
          </div>
        </div>

        <EcosystemCard />
      </div>
      <Footer />
    </div>
  );
}
