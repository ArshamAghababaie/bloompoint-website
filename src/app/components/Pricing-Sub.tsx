"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Pricing() {
  type Tab = "hybrid" | "subscription";

  const [activeTab, setActiveTab] = useState<Tab>("hybrid");

  //   const toggle = () => {
  //     setActiveTab((prev) => (prev === "hybrid" ? "subscription" : "hybrid"));
  //   };

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

  const subscriptionPlans = [
    {
      tier: "Plan",
      name: "Free Trial",
      duration: "15 Days",
      amount: "€0",
      amountSub: "/ month",
      amount2: "\u00a0",
      features: ["Design (Strategy Planning)", "Platform exploration"],
      featured: false,
      badge: null,
      cta: "Start Free",
    },
    {
      tier: "Plan",
      name: "Basic",
      duration: "3 Months",
      amount: "€240",
      amountSub: "/ subscription",
      amount2: "\u00a0",
      features: ["Design (Strategy Planning)", "Supervision (limited)"],
      featured: false,
      badge: null,
      cta: "Get Started",
    },
    {
      tier: "Plan",
      name: "Advanced",
      duration: "6 Months",
      amount: "€450",
      amountSub: "/ subscription",
      amount2: "\u00a0",
      features: [
        "Design (Strategy Planning)",
        "Supervision (limited)",
        "Enhanced analytics",
      ],
      featured: true,
      badge: "Recommended",
      cta: "Get Started",
    },
    {
      tier: "Plan",
      name: "Professional",
      duration: "12 Months",
      amount: "€840",
      amountSub: "/ subscription",
      amount2: "\u00a0",
      features: [
        "Design (Strategy Planning)",
        "Supervision (limited)",
        "Full dashboard access",
        "Priority support",
      ],
      featured: false,
      badge: null,
      cta: "Get Started",
    },
  ];

  const HybridCard = () => {
    return (
      <div className="grid grid-cols-3 gap-2 mt-8 mb-24">
        {hybridPlans.map((h, i) => (
          <div
            key={i}
            className="flex-col p-10 border border-neutral-800 rounded-3xl hover:border-yellow/80 transition duration-200"
          >
            {/* first section */}
            <div className="flex-col h-110">
              {/* name section */}
              <div className="flex-col border-b border-neutral-800 pb-6">
                <h1 className="text-4xl font-bebas text-light-gray">
                  {h.name}
                </h1>
                <h3 className="text-xs font-medium font-DMSans text-neutral-500">
                  {h.duration}
                </h3>
              </div>
              {/* amount section */}
              <div className="flex-col">
                <div className="flex mt-6">
                  <h1 className="text-4xl text-light-gray font-bebas">
                    {h.amount}
                  </h1>
                  <h1 className="flex text-neutral-500 font-DMSans items-center pl-1 pt-2">
                    {h.amountSub}
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="flex text-neutral-500 font-DMSans items-center pl-1 pt-2">
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
                    <span className="flex justify-start items-baseline  pr-2">
                      →
                    </span>
                    <span className="text-sm text-neutral-500 font-DMSans font-medium">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* button section */}
            <div className="flex items-center justify-center mt-12">
              <button className="w-full h-10 p-2 text-xs font-DMSans font-medium border border-neutral-800 text-neutral-500 hover:bg-yellow hover:text-neutral-950 rounded-xl uppercase transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const SubsCard = () => {
    return (
      <div className="flex-col p-12 border border-neutral-500 rounded-xl">
        <div className="">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="">
          <button className="p-2 rounded-xl w-42 uppercase">Get Started</button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-fit px-10 bg-neutral-950 text-yellow">
      <div className="flex items-center pt-20">
        <div className="w-6 h-px bg-yellow" />
        <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
          our plans
        </span>
      </div>
      <div className="mt-6 flex-col font-bebas text-7xl">
        <h1 className="text-white uppercase">flexible</h1>
        <h1 className="uppercase">pricing</h1>
      </div>
      <div className="flex-col text-neutral-500 font-DMSans pt-4">
        <span className="font-medium">Two models;</span>
        <p className=" w-120">
          a current Hybrid Model with human-in-the-loop, and a Future
          Subscription Model built for scale.
        </p>
      </div>
      <div className="mt-12 flex h-10 w-fit border border-neutral-800 rounded-xl font-DMSans tracking-widest font-medium text-xs">
        <button
          onClick={() => setActiveTab("hybrid")}
          className={`cursor-none uppercase px-10 ${
            activeTab === "hybrid"
              ? "bg-yellow rounded-xl text-neutral-950"
              : "text-neutral-500"
          }`}
        >
          Current - Hybrid
        </button>

        <button
          onClick={() => setActiveTab("subscription")}
          className={`cursor-none uppercase px-10 ${
            activeTab === "subscription"
              ? "bg-yellow rounded-xl text-neutral-950"
              : "text-neutral-500"
          }`}
        >
          Future - Subscription
        </button>
      </div>
      {activeTab === "hybrid" ? <HybridCard /> : <SubsCard />}
    </div>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// type Tab = "hybrid" | "subscription";

// const hybridPlans = [
//   {
//     tier: "Segment",
//     name: "SME",
//     duration: "3 – 6 Months",
//     amount: "€7,000 – €10,000",
//     amountSub: "/ Design",
//     amount2: "+ €1,500 – €2,000 / Supervision",
//     features: [
//       "Strategy Planning (Design)",
//       "Supervision & Coordination",
//       "Human-in-the-loop oversight",
//       "Checkpoint & Path prototype",
//     ],
//     featured: false,
//     badge: null,
//   },
//   {
//     tier: "Segment",
//     name: "Large Enterprise",
//     duration: "6 – 12 Months",
//     amount: "€10,000 – €15,000",
//     amountSub: "/ Design",
//     amount2: "+ €2,500 – €4,000 / Supervision",
//     features: [
//       "Strategy Planning (Design)",
//       "Supervision & Coordination",
//       "Full agentic workflow",
//       "Community ecosystem access",
//       "Impact measurement tables",
//     ],
//     featured: true,
//     badge: "Most Popular",
//   },
//   {
//     tier: "Segment",
//     name: "Ecosystem / City",
//     duration: "12 – 24 Months",
//     amount: "€25,000 – €30,000",
//     amountSub: "/ Design",
//     amount2: "+ €4,500 – €6,000 / Supervision",
//     features: [
//       "Full ecosystem design",
//       "City-scale community planning",
//       "Physical & digital integration",
//       "Networked node architecture",
//       "Long-term impact programs",
//     ],
//     featured: false,
//     badge: null,
//   },
// ];

// const subscriptionPlans = [
//   {
//     tier: "Plan",
//     name: "Free Trial",
//     duration: "15 Days",
//     amount: "€0",
//     amountSub: "/ month",
//     amount2: "\u00a0",
//     features: ["Design (Strategy Planning)", "Platform exploration"],
//     featured: false,
//     badge: null,
//     cta: "Start Free",
//   },
//   {
//     tier: "Plan",
//     name: "Basic",
//     duration: "3 Months",
//     amount: "€240",
//     amountSub: "/ subscription",
//     amount2: "\u00a0",
//     features: ["Design (Strategy Planning)", "Supervision (limited)"],
//     featured: false,
//     badge: null,
//     cta: "Get Started",
//   },
//   {
//     tier: "Plan",
//     name: "Advanced",
//     duration: "6 Months",
//     amount: "€450",
//     amountSub: "/ subscription",
//     amount2: "\u00a0",
//     features: [
//       "Design (Strategy Planning)",
//       "Supervision (limited)",
//       "Enhanced analytics",
//     ],
//     featured: true,
//     badge: "Recommended",
//     cta: "Get Started",
//   },
//   {
//     tier: "Plan",
//     name: "Professional",
//     duration: "12 Months",
//     amount: "€840",
//     amountSub: "/ subscription",
//     amount2: "\u00a0",
//     features: [
//       "Design (Strategy Planning)",
//       "Supervision (limited)",
//       "Full dashboard access",
//       "Priority support",
//     ],
//     featured: false,
//     badge: null,
//     cta: "Get Started",
//   },
// ];

// export default function Pricing() {
//   const [activeTab, setActiveTab] = useState<Tab>("hybrid");
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const reveals = sectionRef.current?.querySelectorAll(".reveal") ?? [];
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) e.target.classList.add("visible");
//         }),
//       { threshold: 0.12 }
//     );
//     reveals.forEach((r) => observer.observe(r));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="pricing" ref={sectionRef}>
//       <div className="section-label reveal">Our Plans</div>
//       <h2 className="section-title reveal">
//         Flexible
//         <br />
//         <span className="yl">Pricing</span>
//       </h2>
//       <p className="pricing-intro reveal">
//         Two models: a current Hybrid Model with human-in-the-loop, and a Future
//         Subscription Model built for scale.
//       </p>

//       {/* Toggle */}
//       <div className="pricing-toggle reveal" id="pricingToggle">
//         <button
//           className={`pricing-toggle-btn${
//             activeTab === "hybrid" ? " active" : ""
//           }`}
//           onClick={() => setActiveTab("hybrid")}
//         >
//           Current — Hybrid
//         </button>
//         <button
//           className={`pricing-toggle-btn${
//             activeTab === "subscription" ? " active" : ""
//           }`}
//           onClick={() => setActiveTab("subscription")}
//         >
//           Future — Subscription
//         </button>
//       </div>

//       {/* Hybrid tab */}
//       <div
//         className={
//           activeTab === "hybrid"
//             ? "pricing-section"
//             : "pricing-section pricing-section-hidden"
//         }
//       >
//         <div className="pricing-grid">
//           {hybridPlans.map((plan, i) => (
//             <div
//               className={`price-card reveal reveal-delay-${i + 1}${
//                 plan.featured ? " featured" : ""
//               }`}
//               key={plan.name}
//             >
//               {plan.badge && <div className="price-badge">{plan.badge}</div>}
//               {/* <div className="price-tier">{plan.tier}</div> */}
//               <div className="price-name">{plan.name}</div>
//               <div className="price-duration">{plan.duration}</div>
//               <div className="price-amount">
//                 {plan.amount} <span>{plan.amountSub}</span>
//               </div>
//               <div className="price-amount2">{plan.amount2}</div>
//               <ul className="price-features">
//                 {plan.features.map((f) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//               <Link href="#" className="price-cta">
//                 Get Started
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Subscription tab */}
//       <div
//         className={
//           activeTab === "subscription"
//             ? "pricing-section"
//             : "pricing-section pricing-section-hidden"
//         }
//       >
//         <div className="pricing-grid-4">
//           {subscriptionPlans.map((plan, i) => (
//             <div
//               className={`price-card reveal reveal-delay-${i + 1}${
//                 plan.featured ? " featured" : ""
//               }`}
//               key={plan.name}
//             >
//               {plan.badge && <div className="price-badge">{plan.badge}</div>}
//               {/* <div className="price-tier">{plan.tier}</div> */}
//               <div className="price-name">{plan.name}</div>
//               <div className="price-duration">{plan.duration}</div>
//               <div className="price-amount">
//                 {plan.amount} <span>{plan.amountSub}</span>
//               </div>
//               <div className="price-amount2">{plan.amount2}</div>
//               <ul className="price-features">
//                 {plan.features.map((f) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//               <Link href="#" className="price-cta">
//                 {plan.cta}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
