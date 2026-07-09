"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is BloomPoint?",
    a: "BloomPoint is a B2B community-led growth platform. We combine structured engagement frameworks with AI-based community-driven agents to help businesses design, activate, and sustain meaningful exchange within their communities. Bridging human, system, and technology.",
  },
  {
    q: (
      <p>
        What is the difference between the{" "}
        <span className="underline underline-offset-2 decoration-neutral-500">
          Path
        </span>{" "}
        and the{" "}
        <span className="underline underline-offset-2 decoration-neutral-500">
          Circle
        </span>{" "}
        solutions?
      </p>
    ),
    a: "Path & checkpoint is the entry point, a focused prototype targeting a specific part of your business community with measurable short-term milestones. Circle is the full ecosystem experience, a dynamic long-term system connecting your business to our broader network of nodes.",
  },
  {
    q: (
      <p>
        Is it necessary to have any{" "}
        <span className="underline underline-offset-2 decoration-neutral-500">
          problems
        </span>{" "}
        or{" "}
        <span className="underline underline-offset-2 decoration-neutral-500">
          needs
        </span>{" "}
        in my business since the beginning of my journey with BloomPoint?
      </p>
    ),
    a: "Yes. BloomPoint is designed to help businesses address specific challenges or opportunities within their communities. Identifying these needs early on allows us to tailor our solutions effectively and ensure that the engagement strategies we implement are aligned with your business objectives.",
  },
  {
    q: "Who is BloomPoint for?",
    a: "We work with SMEs, large enterprises, and cities. Any organization that wants to build genuine community belonging-not just marketing-can benefit from our platform. We are a B2B service.",
  },
  {
    q: "How does the agentic AI platform work?",
    a: "Our modular AI workflow runs through four stages: business context analysis, blueprint creation (community planning), progress supervision, and post-analysis conclusions. Each stage is powered by specialized AI agents with human-in-the-loop oversight for quality and nuance.",
  },
  {
    q: (
      <p>
        Do I need to complete a{" "}
        <span className="underline underline-offset-2 decoration-neutral-500">
          Path
        </span>{" "}
        solution before joining the{" "}
        <span className="underline underline-offset-2 decoration-neutral-500">
          Circle
        </span>
        ?
      </p>
    ),
    a: "Yes. A Path plan acts as a prototype. It lets you and your community experience the BloomPoint methodology with real results before stepping into the full Circle ecosystem.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div
      id="faq"
      className="relative z-10 h-screen px-10 bg-neutral-950 text-yellow"
    >
      <div className="reveal reveal-delay-1 mt-0 pt-20 flex-col font-bebas text-7xl">
        <h1 className="text-white uppercase">common</h1>
        <h1 className="uppercase">questions</h1>
      </div>

      {/* Right column — accordions */}
      <div className="mt-6 ml-auto flex w-full max-w-[50%] flex-col text-lg">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div className="border-b-[0.5px] border-neutral-800" key={i}>
              <button
                className="flex w-full items-center justify-between gap-6 py-5 text-left cursor-none"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className="font-DMSans transition-colors duration-300 text-neutral-400">
                  {faq.q}
                </span>
                <span
                  className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                >
                  <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-yellow" />
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-yellow" />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pr-10 font-DMSans text-sm text-light-gray">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
