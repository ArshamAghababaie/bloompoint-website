"use client";

import { useState } from "react";

export default function ProblemNeed() {
  const [hovered, setHovered] = useState<"problem" | "need" | null>(null);

  const problems = [
    "System Efficiency",
    "Generating/Regenerating",
    "Programs (Cultivation,...)",
    "Waste (Energic, Food, HR,...)",
    "Health & Wellbeing (Treatment, Care, Consultant,..)",
    "Engagement",
    "Ecosystem",
  ];
  const needs = [
    "Educational System",
    "Operational System",
    "Raising Awareness",
    "Environmental",
    "Sustainabilty",
    "Engagement (Hub, Club,...)",
    "Belonging",
    "Civic Integration",
    "Community Impact",
  ];

  return (
    <div className="h-[110vh] px-10 bg-yellow text-neutral-950">
      {/* Context */}
      <div className="reveal flex items-center pt-20">
        <div className="w-6 h-px bg-neutral-950" />
        <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
          Your Context
        </span>
      </div>

      {/* Headings */}
      <div className="reveal reveal-delay-1 mt-6 grid grid-cols-2">
        <h1
          className={`font-bebas text-8xl transition-colors duration-300 ${
            hovered === "problem"
              ? "text-white"
              : hovered === "need"
                ? "text-black/50"
                : "text-neutral-950"
          }`}
        >
          Problem
        </h1>

        <h1
          className={`font-bebas text-8xl text-right transition-colors duration-300 ${
            hovered === "need"
              ? "text-white"
              : hovered === "problem"
                ? "text-black/50"
                : "text-neutral-950"
          }`}
        >
          Need
        </h1>
      </div>

      {/* Top separator */}
      <div className="h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" />

      {/* Cards */}
      <div className="reveal reveal-delay-2 grid grid-cols-2 divide-x divide-neutral-950/20">
        {/* Problem */}
        <div
          className="group"
          onMouseEnter={() => setHovered("problem")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="h-135 rounded-3xl pl-5 pt-6 transition-all duration-300 hover:bg-neutral-950">
            <h2 className="w-[320px] font-DMSans text-5xl text-neutral-950/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-yellow">
              What holds your business back
            </h2>
            <div className="translate-y-8 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 pt-4">
              <p className="pb-6 transition-colors duration-300 group-hover:text-neutral-400">
                Please check your the most problems are dealing with.
              </p>
              {problems.map((p, i) => (
                <div key={i} className="font-DMSans pb-2">
                  <label className="pb-16 text-md transition-colors duration-300 group-hover:text-neutral-400 cursor-none">
                    <input
                      type="checkbox"
                      className="accent-yellow mr-1 cursor-none"
                    />
                    {p}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Need */}
        <div
          className="group"
          onMouseEnter={() => setHovered("need")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="h-135 rounded-3xl pl-5 pt-6 transition-all duration-300 hover:bg-neutral-950">
            <h2 className="w-[320px] font-DMSans text-5xl text-neutral-950/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-yellow">
              What your business deserves
            </h2>

            <div className="translate-y-8 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 pt-4">
              <p className="pb-6 transition-colors duration-300 group-hover:text-neutral-400">
                Please check your the most needs you want to address.
              </p>
              {needs.map((n, i) => (
                <div key={i} className="font-DMSans pb-2">
                  <label className="pb-16 text-md transition-colors duration-300 group-hover:text-neutral-400 cursor-none">
                    <input
                      type="checkbox"
                      className="accent-yellow mr-1 cursor-none"
                    />
                    {n}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-[repeating-linear-gradient(to_right,rgba(10,10,10,0.25)_0,rgba(10,10,10,0.25)_6px,transparent_6px,transparent_14px)]" />
    </div>
  );
}
