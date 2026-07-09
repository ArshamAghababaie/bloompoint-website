"use client";

import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  selectedProblems: string[];
  setSelectedProblems: Dispatch<SetStateAction<string[]>>;
  selectedNeeds: string[];
  setSelectedNeeds: Dispatch<SetStateAction<string[]>>;
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
    "Inefficient Internal Processes",
    "Disconnected Teams",
    "Difficulty Building Partnerships",
    "Weak Professional Network",
    "Lack of Strategic Collaborations",
    "Slow Business Growth",
    "Lack of Local Presence",
    "Unclear Community Strategy",
    "Missed Business Opportunities",
    "Limited Customer Insights",
    "Difficulty Measuring Impact",
  ];
  const needs = [
    "Grow Customer Belonging & Loyalty",
    "Increase Customer Retention",
    "Build a Stronger Community",
    "Strengthen Brand Reputation",
    "Improve Operational Efficiency",
    "Build Better Business Systems",
    "Create Meaningful Partnerships",
    "Expand Professional Networks",
    "Join a Collaborative Business Circle",
    "Improve Employee Engagement",
    "Drive Innovation",
    "Achieve Sustainable Growth",
    "Generate New Business Opportunities",
    "Increase Cross-Organization Collaboration",
    "Measure Community & Business Impact",
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

      {/* Headings */}
      <div className="reveal reveal-delay-1 mt-6 pt-20 grid grid-cols-2">
        <h1
          className={`font-bebas text-8xl transition-colors duration-300 ${
            hovered === "need"
              ? "text-white"
              : hovered === "problem"
                ? "text-black/50"
                : "text-neutral-950"
          }`}
        >
          Need
        </h1>

        <h1
          className={`font-bebas text-8xl text-right transition-colors duration-300 ${
            hovered === "problem"
              ? "text-white"
              : hovered === "need"
                ? "text-black/50"
                : "text-neutral-950"
          }`}
        >
          Problem
        </h1>
      </div>

      {/* Top separator */}
      <div className="h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" />

      {/* Cards */}
      <div className="reveal reveal-delay-2 grid grid-cols-2 divide-x divide-neutral-950/20">
        {/* Need */}
        <div
          className="group"
          onMouseEnter={() => setHovered("need")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative rounded-3xl pl-5 pt-6 transition-all duration-300 hover:bg-neutral-950 overflow-hidden">
            <h2 className="w-[320px] font-DMSans text-5xl text-neutral-950/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-yellow">
              Where do you want to go?
            </h2>

            <div className="translate-y-8 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 pt-4">
              <p className="pb-6 transition-colors duration-300 group-hover:text-neutral-400 w-80">
                Select the most common needs you want to address.
              </p>
              {needs.map((n, i) => (
                <div key={i} className="font-DMSans pb-2">
                  <label className="pb-16 text-md transition-colors duration-300 group-hover:text-white cursor-none select-none">
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
            </div>
            <div
              className="absolute top-3 right-3 opacity-0 translate-y-4 scale-90 transition-all duration-500 ease-out group-hover:opacity-20 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none"
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

        {/* Problem */}
        <div
          className="group"
          onMouseEnter={() => setHovered("problem")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative rounded-3xl pl-5 pt-6 transition-all duration-300 hover:bg-neutral-950 overflow-hidden">
            <h2 className="w-3/4 font-DMSans text-5xl text-neutral-950/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-yellow">
              What's preventing you from getting there?
            </h2>
            <div className="translate-y-8 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 pt-4">
              <p className="pb-6 transition-colors duration-300 group-hover:text-neutral-400 w-80">
                Select the most common problems your business is dealing with.
              </p>
              {problems.map((p, i) => (
                <div key={i} className="font-DMSans pb-2">
                  <label className="pb-16 text-md transition-colors duration-300 group-hover:text-white cursor-none select-none">
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
            </div>
            <div
              className="absolute top-3 right-3 opacity-0 translate-y-4 scale-90 transition-all duration-500 ease-out group-hover:opacity-20 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none"
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
      </div>
      {/* Bottom separator */}
      <div className="h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" />

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
