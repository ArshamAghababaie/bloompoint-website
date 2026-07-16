"use client";

import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  selectedProblems: string[];
  setSelectedProblems: Dispatch<SetStateAction<string[]>>;
  selectedNeeds: string[];
  setSelectedNeeds: Dispatch<SetStateAction<string[]>>;
  otherProblem: string;
  setOtherProblem: Dispatch<SetStateAction<string>>;
  otherNeed: string;
  setOtherNeed: Dispatch<SetStateAction<string>>;
};

function toggleItem(set: Dispatch<SetStateAction<string[]>>, item: string) {
  set((prev) =>
    prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item],
  );
}

export default function ProblemNeed({
  selectedProblems,
  setSelectedProblems,
  selectedNeeds,
  setSelectedNeeds,
  otherProblem,
  setOtherProblem,
  otherNeed,
  setOtherNeed,
}: Props) {
  const [hovered, setHovered] = useState<"problem" | "need" | null>(null);

  const scrollToForm = () =>
    document
      .getElementById("bookAMeeting")
      ?.scrollIntoView({ behavior: "smooth" });

  const problems = [
    "Low Customer Retention",
    "Weak Community Engagement",
    "Limited Brand Differentiation",
    "Low Employee Motivation",
    "Difficulty Building Partnerships",
    "Slow Business Growth",
    "Lack of Local Presence",
    "Unclear Community Strategy",

    // "Low Customer Retention",
    // "Weak Community Engagement",
    // "Limited Brand Differentiation",
    // "Low Employee Motivation",
    // "Inefficient Internal Processes",
    // "Disconnected Teams",
    // "Difficulty Building Partnerships",
    // "Weak Professional Network",
    // "Lack of Strategic Collaborations",
    // "Slow Business Growth",
    // "Lack of Local Presence",
    // "Unclear Community Strategy",
    // "Missed Business Opportunities",
    // "Limited Customer Insights",
    // "Difficulty Measuring Impact",
  ];
  const needs = [
    "Grow Customer Belonging & Loyalty",
    "Increase Customer Retention",
    "Build a Stronger Community",
    "Strengthen Brand Reputation",
    "Create Meaningful Partnerships",
    "Achieve Sustainable Growth",
    "Improve Employee Engagement",
    "Drive Innovation",

    // "Grow Customer Belonging & Loyalty",
    // "Increase Customer Retention",
    // "Build a Stronger Community",
    // "Strengthen Brand Reputation",
    // "Improve Operational Efficiency",
    // "Build Better Business Systems",
    // "Create Meaningful Partnerships",
    // "Expand Professional Networks",
    // "Join a Collaborative Business Circle",
    // "Improve Employee Engagement",
    // "Drive Innovation",
    // "Achieve Sustainable Growth",
    // "Generate New Business Opportunities",
    // "Increase Cross-Organization Collaboration",
    // "Measure Community & Business Impact",
  ];

  const Checkmark = () => {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="#e5e5e5"
          strokeWidth="0.7"
        />
        <path
          d="M8 12.5l2.6 2.6L16.5 9"
          stroke="#fecb2f"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div
      id="problem-need"
      className="relative z-10 px-10 bg-yellow text-neutral-950"
    >
      {/* Context */}
      {/* <div className="reveal flex items-center pt-20">
        <div className="w-6 h-px bg-neutral-950" />
        <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
          Your Context
        </span>
      </div> */}

      {/* Headings & Cards */}
      <div className="mt-6 pt-20 grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center">
        {/* Top separator */}
        <div className="hidden lg:block order-10 lg:order-30 lg:col-span-2 h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" />

        {/* Need heading */}
        <h1
          className={`order-20 lg:order-10 pt-6 lg:pt-0 font-bebas text-6xl sm:text-7xl lg:text-8xl transition-colors duration-300 text-neutral-950 ${
            hovered === "need"
              ? "pointer-fine:text-white"
              : hovered === "problem"
                ? "pointer-fine:text-black/50"
                : ""
          }`}
        >
          Need
        </h1>

        {/* Problem heading */}
        <h1
          className={`order-40 lg:order-20 pt-6 lg:pt-0 font-bebas text-6xl sm:text-7xl lg:text-8xl lg:text-right transition-colors duration-300 text-neutral-950 ${
            hovered === "problem"
              ? "pointer-fine:text-white"
              : hovered === "need"
                ? "pointer-fine:text-black/50"
                : ""
          }`}
        >
          Problem
        </h1>

        {/* Need */}
        <div
          className="order-30 lg:order-40 group"
          onMouseEnter={() => setHovered("need")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative rounded-3xl pl-5 pt-6 pb-4 pointer-fine:pb-0 transition-all duration-300 pointer-fine:hover:bg-neutral-950 overflow-hidden">
            <h2 className="w-[320px] font-DMSans text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-neutral-950 pointer-fine:text-neutral-950/60 transition-all duration-500 pointer-fine:group-hover:-translate-y-2 pointer-fine:group-hover:text-yellow">
              Where do you want to go?
            </h2>

            <div className="translate-y-0 opacity-100 pointer-fine:translate-y-8 pointer-fine:opacity-30 transition-all duration-500 ease-in-out pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:opacity-100 pt-4">
              <p className="pb-6 transition-colors duration-300 pointer-fine:group-hover:text-neutral-400 w-80">
                Select the most common needs you want to address.
              </p>
              {needs.map((n, i) => (
                <div key={i} className="font-DMSans pb-2">
                  <label className="pb-16 text-md transition-colors duration-300 pointer-fine:group-hover:text-white cursor-none select-none">
                    <input
                      type="checkbox"
                      className="accent-yellow mr-1 cursor-none"
                      checked={selectedNeeds.includes(n)}
                      onChange={() => toggleItem(setSelectedNeeds, n)}
                    />
                    {n}
                  </label>
                </div>
              ))}
              <div className="font-DMSans pt-2 pr-5">
                <label className="block w-80 text-neutral-950 pointer-fine:text-neutral-950/70 transition-colors duration-300 pointer-fine:group-hover:text-neutral-400 cursor-none select-none pb-2">
                  Have other needs that aren't listed? <br /> Tell us in your
                  own words.
                </label>
                <textarea
                  value={otherNeed}
                  onChange={(e) => setOtherNeed(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  rows={3}
                  placeholder="Describe the need that matters to you…"
                  className="w-full resize-none rounded-xl border border-neutral-950/20 bg-transparent p-3 mb-3 text-sm text-neutral-950 placeholder:text-neutral-950/40 transition-colors duration-300 focus:outline-none focus:border-yellow pointer-fine:group-hover:border-white/30 pointer-fine:group-hover:text-white pointer-fine:group-hover:placeholder:text-white/40"
                />
              </div>
            </div>
            <div
              className="absolute top-3 right-3 opacity-0 translate-y-4 scale-90 transition-all duration-500 ease-out pointer-fine:group-hover:opacity-20 pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:scale-100 pointer-events-none"
              style={{
                maskImage: "linear-gradient(135deg, transparent 0%, black 70%)",
                WebkitMaskImage:
                  "linear-gradient(135deg, transparent 0%, black 35%)",
              }}
            >
              <Checkmark />
            </div>
          </div>
        </div>

        {/* Divider between Need and Problem cards (mobile/tablet only) */}
        <div className="order-35 lg:hidden h-px bg-neutral-950/20" />

        {/* Problem */}
        <div
          className="order-50 group lg:border-l lg:border-neutral-950/20"
          onMouseEnter={() => setHovered("problem")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative rounded-3xl pl-5 pt-6 pb-4 pointer-fine:pb-0 transition-all duration-300 pointer-fine:hover:bg-neutral-950 overflow-hidden">
            <h2 className="w-3/4 font-DMSans text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-neutral-950 pointer-fine:text-neutral-950/60 transition-all duration-500 pointer-fine:group-hover:-translate-y-2 pointer-fine:group-hover:text-yellow">
              What's keeping you from getting there?
            </h2>
            <div className="translate-y-0 opacity-100 pointer-fine:translate-y-8 pointer-fine:opacity-30 transition-all duration-500 ease-in-out pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:opacity-100 pt-4">
              <p className="pb-6 transition-colors duration-300 pointer-fine:group-hover:text-neutral-400 w-80">
                Select the most common problems your business is dealing with.
              </p>
              {problems.map((p, i) => (
                <div key={i} className="font-DMSans pb-2">
                  <label className="pb-16 text-md transition-colors duration-300 pointer-fine:group-hover:text-white cursor-none select-none">
                    <input
                      type="checkbox"
                      className="accent-yellow mr-1.5 cursor-none"
                      checked={selectedProblems.includes(p)}
                      onChange={() => toggleItem(setSelectedProblems, p)}
                    />
                    {p}
                  </label>
                </div>
              ))}
              <div className="font-DMSans pt-2 pr-5">
                <label className="block text-neutral-950 pointer-fine:text-neutral-950/70 transition-colors duration-300 pointer-fine:group-hover:text-neutral-400 cursor-none select-none pb-2">
                  Have other problems that aren't listed? <br />
                  Tell us in your own words.
                </label>
                <textarea
                  value={otherProblem}
                  onChange={(e) => setOtherProblem(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  rows={3}
                  placeholder="Describe the problem you're facing…"
                  className="w-full resize-none rounded-xl border border-neutral-950/20 bg-transparent p-3 mb-3 text-sm text-neutral-950 placeholder:text-neutral-950/40 transition-colors duration-300 focus:outline-none focus:border-yellow pointer-fine:group-hover:border-white/30 pointer-fine:group-hover:text-white pointer-fine:group-hover:placeholder:text-white/40"
                />
              </div>
            </div>
            <div
              className="absolute top-3 right-3 opacity-0 translate-y-4 scale-90 transition-all duration-500 ease-out pointer-fine:group-hover:opacity-20 pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:scale-100 pointer-events-none"
              style={{
                maskImage: "linear-gradient(135deg, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(135deg, transparent 0%, black 35%)",
              }}
            >
              <Checkmark />
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="order-60 lg:col-span-2 h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" />
      </div>

      {/* <div className="flex-col items-center reveal reveal-delay-3 mt-7.5 mb-20 flex justify-center"> */}
      {/* <div className="reveal reveal-delay-3 flex-col -mx-10 items-center flex justify-center"> */}
      <div className="flex-col leading-none items-center -mx-10 flex justify-center">
        {/* <p className="text-neutral-950 font-semibold font-DMSans text-2xl w-125 text-center">
          After selecting your desired items, you can click below to book a
          meeting with ease.
        </p> */}
        <button
          onClick={scrollToForm}
          className="cta-book w-full font-bebas p-0 text-[20vw] hover:bg-neutral-950 transition-all duration-300 cursor-none"
        >
          {/* <div className="flex w-full px-3 justify-around translate-y-[0.04em]">
            {"Book a meeting".split("").map((char, i) => (
              <span key={i}>{char === " " ? "  " : char}</span>
            ))}
          </div> */}
          <div className="flex w-full px-3 justify-around tracking-[-5px] translate-y-[0.04em] ">
            BOOK A MEETING
            {/* {"Book a meeting".split("").map((char, i) => (
              <span key={i}>{char === " " ? "  " : char}</span>
            ))} */}
          </div>
        </button>
      </div>
    </div>
  );
}
