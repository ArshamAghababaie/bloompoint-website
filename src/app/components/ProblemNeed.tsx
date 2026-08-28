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
  ];
  const needs = [
    "Growing Customer Belonging & Loyalty",
    "Increasing Customer Retention",
    "Building a Stronger Community",
    "Strengthening Brand Reputation",
    "Creating Meaningful Partnerships",
    "Achieving Sustainable Growth",
    "Improving Employee Engagement",
    "Driving Innovation",
  ];

  const Checkmark = () => {
    return (
      <svg
        width="60"
        height="60"
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
      className="relative z-10 pb-12 md:pb-18 px-10 bg-yellow text-neutral-950"
    >
      {/* Context */}
      {/* <div className="reveal flex items-center pt-20">
        <div className="w-6 h-px bg-neutral-950" />
        <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
          Your Context
        </span>
      </div> */}

      {/* Headings & Cards */}
      <div className="mt-6 pt-12 md:pt-20 grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center">
        {/* Top separator */}
        <div className="hidden lg:block order-10 lg:order-30 lg:col-span-2 h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" />

        {/* Need heading */}
        <h1
          className={`order-20 lg:order-10 font-bebas text-6xl sm:text-7xl lg:text-8xl transition-colors duration-300 text-neutral-950 ${
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
          <div className="relative rounded-3xl p-4 xl:p-12 pointer-fine:pb-8 transition-all duration-300 pointer-fine:hover:bg-neutral-950 overflow-hidden">
            <h2 className="sm:w-4/5 w-65 font-DMSans text-[20px] sm:text-4xl lg:text-[27px] text-neutral-950 pointer-fine:text-neutral-950/60 transition-all duration-500 pointer-fine:group-hover:-translate-y-2 pointer-fine:group-hover:text-yellow">
              Where do you want to go?
            </h2>

            <div className="w-72.5 sm:w-full translate-y-0 opacity-100 pointer-fine:translate-y-6 pointer-fine:opacity-30 transition-all duration-500 ease-in-out pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:opacity-100 pt-2 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="pt-2">
                {/* <p className="w-full text-sm xl:pb-6 pb-4 pt-2 transition-colors duration-300 text-neutral-700 pointer-fine:group-hover:text-neutral-400">
                  Select the most common needs you want to address.
                </p> */}
                {needs.map((n, i) => (
                  <div key={i} className="font-DMSans pb-4">
                    <label className="pb-14 text-[15px] md:text-[16px] transition-colors duration-300 pointer-fine:group-hover:text-white cursor-none select-none">
                      <input
                        type="checkbox"
                        className="accent-neutral-950 xl:accent-yellow mr-1.5 cursor-none"
                        checked={selectedNeeds.includes(n)}
                        onChange={() => toggleItem(setSelectedNeeds, n)}
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
              <div className="font-DMSans pt-2 mt-2 lg:pt-0">
                {/* <label className="block w-80 text-neutral-950 pointer-fine:text-neutral-950/70 transition-colors duration-300 pointer-fine:group-hover:text-neutral-400 cursor-none select-none pb-2">
                  Have other needs that aren't listed? <br />
                  Tell us about your challenges in your own words.
                </label> */}
                <textarea
                  value={otherNeed}
                  onChange={(e) => setOtherNeed(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  rows={14}
                  placeholder="Describe needs that matter to you…"
                  className="md:bg-neutral-50/10 bg-neutral-700/20 text-white md:text-neutral-950 w-full resize-none max-sm:h-20 rounded-xl border border-neutral-950/20 p-3 mb-3 text-sm placeholder:text-neutral-900/35 md:placeholder:text-neutral-950/40 transition-colors duration-300 focus:outline-none focus:border-neutral-800/20 pointer-fine:group-hover:border-white/30 pointer-fine:group-hover:text-white pointer-fine:group-hover:placeholder:text-white/40"
                />
              </div>
            </div>
            <div
              className="absolute top-10 right-10 opacity-0 translate-y-4 scale-90 transition-all duration-500 ease-out pointer-fine:group-hover:opacity-20 pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:scale-100 pointer-events-none"
              style={{
                maskImage: "linear-gradient(135deg, transparent 0%, black 70%)",
                WebkitMaskImage:
                  "linear-gradient(135deg, transparent 0%, black 35%)",
              }}
            >
              {/* <Checkmark /> */}
            </div>
          </div>
        </div>

        {/* Divider between Need and Problem cards (mobile/tablet only) */}
        <div className="order-35 lg:hidden h-px bg-neutral-950/20" />

        {/* Problem */}
        <div
          // className="order-50 group lg:border-l lg:border-neutral-950/20"
          className="order-50 group"
          onMouseEnter={() => setHovered("problem")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative rounded-3xl p-4 xl:p-12 pointer-fine:pb-8 transition-all duration-300 pointer-fine:hover:bg-neutral-950 overflow-hidden">
            <h2 className="sm:w-4/5 w-65 font-DMSans text-xl sm:text-4xl lg:text-[27px] text-neutral-950 pointer-fine:text-neutral-950/60 transition-all duration-500 pointer-fine:group-hover:-translate-y-2 pointer-fine:group-hover:text-yellow">
              What's keeping you from getting there?
            </h2>
            <div className="w-72.5 sm:w-full translate-y-0 opacity-100 pointer-fine:translate-y-6 pointer-fine:opacity-30 transition-all duration-500 ease-in-out pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:opacity-100 pt-2 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="pt-2">
                {/* <p className="w-full text-sm xl:pb-6 pb-4 pt-2 transition-colors duration-300 text-neutral-700 pointer-fine:group-hover:text-neutral-400">
                  Select the most common problems your business is dealing with.
                </p> */}
                {problems.map((p, i) => (
                  <div key={i} className="font-DMSans pb-4">
                    <label className="pb-14 text-[15px] md:text-[16px] transition-colors duration-300 pointer-fine:group-hover:text-white cursor-none select-none">
                      <input
                        type="checkbox"
                        className="accent-neutral-950 xl:accent-yellow mr-1.5 cursor-none"
                        checked={selectedProblems.includes(p)}
                        onChange={() => toggleItem(setSelectedProblems, p)}
                      />
                      {p}
                    </label>
                  </div>
                ))}
              </div>
              <div className="font-DMSans pt-2 mt-2 pr-0 lg:pt-0">
                {/* <label className="block text-neutral-950 pointer-fine:text-neutral-950/70 transition-colors duration-300 pointer-fine:group-hover:text-neutral-400 cursor-none select-none pb-2">
                  Have other problems that aren't listed? <br />
                  Tell us about your challenges in your own words.
                </label> */}
                <textarea
                  value={otherProblem}
                  onChange={(e) => setOtherProblem(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  rows={14}
                  placeholder="Describe problems you're facing…"
                  className="md:bg-neutral-50/10 bg-neutral-700/20 text-white md:text-neutral-950 w-full resize-none max-sm:h-20 rounded-xl border border-neutral-950/20 p-3 mb-3 text-sm placeholder:text-neutral-900/35 md:placeholder:text-neutral-950/40 transition-colors duration-300 focus:outline-none focus:border-neutral-800/20 pointer-fine:group-hover:border-white/30 pointer-fine:group-hover:text-white pointer-fine:group-hover:placeholder:text-white/40"
                />
              </div>
            </div>
            <div
              className="absolute top-2 right-2 opacity-0 translate-y-4 scale-90 transition-all duration-500 ease-out pointer-fine:group-hover:opacity-20 pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:scale-100 pointer-events-none"
              style={{
                maskImage: "linear-gradient(135deg, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(135deg, transparent 0%, black 35%)",
              }}
            >
              {/* <Checkmark /> */}
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        {/* <div className="order-60 lg:col-span-2 h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" /> */}
      </div>

      {/* BOOK A MEETING Button */}
      <div className="flex w-full justify-center px-0 pt-0 sm:pt-4 md:pt-9">
        <div className="relative w-full lg:w-220 rounded-2xl shadow-[6px_6px_0_#171717] sm:rounded-3xl sm:shadow-[8px_8px_0_#171717] lg:rounded-4xl lg:shadow-[10px_10px_0_#171717]">
          <button
            onClick={scrollToForm}
            className="
        cta-book
        relative
        w-full
        lg:w-220
        overflow-visible
        rounded-2xl
        border-2
        border-neutral-950
        bg-transparent
        p-0
        font-bebas
        leading-none
        text-[16vw]
        transition-all
        duration-200
        ease-out
        sm:rounded-3xl
        sm:text-[17vw]
        md:rounded-3xl
        md:text-[16vw]
        lg:text-[10vw]
        lg:rounded-4xl
        md:hover:bg-neutral-950
        md:active:translate-x-2
        md:active:translate-y-2
        max-md:active:translate-x-1
        max-md:active:translate-y-1
        md:cursor-none
      "
          >
            <div
              className="
          flex
          w-full
          items-center
          justify-around
          px-2
          pt-2
          pb-0.5
          tracking-[-1.75px]
          sm:px-3
          sm:py-3
          sm:tracking-[-4px]
          md:px-0
          md:pt-0
          md:-mb-7
          md:tracking-[-1px]
          lg:-mb-8
        "
            >
              BOOK A MEETING
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
