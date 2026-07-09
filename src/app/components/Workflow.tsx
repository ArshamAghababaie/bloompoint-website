"use client";
import Image from "next/image";
import { basePath } from "../../../lib/basePath";

type WorkflowStep = {
  num: string;
  name: string;
  sub_name: string;
  sub_steps: string[];
};

const workflow_steps: WorkflowStep[] = [
  {
    num: "01",
    name: "Context analysis",
    sub_name: "Business context analysis agents",
    sub_steps: [
      "Identifying capacities (POI)",
      "Designated group introduction",
    ],
  },
  {
    num: "02",
    name: "Blueprint creation",
    sub_name: "Community planning agents",
    sub_steps: [
      "Tailored action plan presentation (path)",
      "Checkpoints & actions needed presentation",
    ],
  },
  {
    num: "03",
    name: "Progress tracking",
    sub_name: "Supervisor agents",
    sub_steps: [
      "Refining plans based on in-progress analysis",
      "Process monitoring",
    ],
  },
  {
    num: "04",
    name: "Conclusion analysis",
    sub_name: "Post-Analysis agents",
    sub_steps: [
      "New opportunities presentation (circle)",
      "Measuring impacts tables",
    ],
  },
];

// Which direction each node's hover-card should open toward, so it opens
// away from the ring center instead of overlapping neighboring nodes.
// Node order/position: 01 = top, 02 = right, 03 = bottom, 04 = left.
const CARD_ANCHOR: {
  vertical: "top" | "bottom";
  horizontal: "left" | "right" | "center";
}[] = [
  { vertical: "top", horizontal: "center" },
  { vertical: "bottom", horizontal: "right" },
  { vertical: "bottom", horizontal: "center" },
  { vertical: "bottom", horizontal: "left" },
];

const RING_RADIUS = 260;

// Circuit spokes run from just outside the center logo to just inside each
// step node, so the current appears to inject out of bloomPoint itself.
const SPOKE_INNER_GAP = 56;
const SPOKE_OUTER_GAP = 40;
const SPOKE_LENGTH = RING_RADIUS - SPOKE_INNER_GAP - SPOKE_OUTER_GAP;
const SPOKE_CYCLE_S = 1.75;

export default function Workflow() {
  return (
    <div
      id="workflow"
      className="relative z-10 h-screen px-10 bg-yellow text-neutral-950"
    >
      <div className="reveal reveal-delay-1 mt-0 pt-20 flex-col font-bebas text-7xl">
        <h1 className="text-light-gray uppercase">agentic</h1>
        <h1 className="uppercase">workflow</h1>
        <p className="pt-4 flex flex-col text-base w-100 font-DMSans text-neutral-800 leading-6">
          Our AI-based platform runs through four interconnected stages. Each is
          powered by specialized agents working in concert.
          <span className="pt-3 text-sm text-neutral-700">
            [ Hover over the circles to reach more information. ]
          </span>
        </p>
      </div>

      <div className="reveal reveal-delay-2 absolute right-[-10%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-150 h-150">
        {/* sequence ring linking the 4 steps — solid circuit trace */}
        <div
          className="circuit-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: RING_RADIUS * 2.9, height: RING_RADIUS * 2.9 }}
        />
        <div
          className="circuit-ring-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: RING_RADIUS * 2.9, height: RING_RADIUS * 2.9 }}
        />

        {/* circuit spokes injecting current from bloomPoint out to each step */}
        {workflow_steps.map((_, i) => {
          const angleDeg = (i - 1) * 90;
          const delay = (i * SPOKE_CYCLE_S) / workflow_steps.length;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 pointer-events-none"
              style={{ transform: `rotate(${angleDeg}deg)` }}
            >
              <div
                className="circuit-spoke"
                style={{ left: SPOKE_INNER_GAP, width: SPOKE_LENGTH }}
              />
              <div
                className="circuit-spoke-current"
                style={
                  {
                    left: SPOKE_INNER_GAP,
                    width: SPOKE_LENGTH,
                    "--spoke-delay": `-${delay}s`,
                  } as React.CSSProperties
                }
              />
            </div>
          );
        })}

        {/* center mark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-[0.5px] border-neutral-950/40 shadow-[0_0_18px_4px_rgba(23,23,23,0.15)] overflow-hidden flex items-center justify-center">
          <Image
            src={`${basePath}/bp-w-b-logo.png`}
            width={80}
            height={80}
            alt="bloomPoint"
          />
        </div>

        {workflow_steps.map((step, i) => {
          const angle = ((i - 1) * 90 * Math.PI) / 180;
          const x = Math.cos(angle) * RING_RADIUS;
          const y = Math.sin(angle) * RING_RADIUS;
          const anchor = CARD_ANCHOR[i];

          return (
            <div
              key={i}
              className="group/step absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              {/* outer ring */}
              <div className="relative w-30 h-30 rounded-full border border-neutral-950/40 flex items-center justify-center transition-all duration-300 ease-out group-hover/step:scale-110 group-hover/step:border-neutral-950/70 group-hover/step:shadow-[0_0_18px_4px_rgba(23,23,23,0.2)]">
                {/* inner filled circle */}
                <div className="flex flex-col items-center justify-center w-25 h-25 rounded-full bg-neutral-950 px-2 text-center">
                  <span className="font-DMSans text-xs tracking-widest text-yellow/70">
                    {step.num}
                  </span>
                  <span className="mt-0.5 font-DMSans text-sm font-semibold leading-tight text-yellow">
                    {step.name}
                  </span>
                </div>
              </div>

              {/* hover card */}
              <div
                className={`absolute z-20 w-[295] rounded-xl bg-light-gray backdrop-blur-sm shadow-xl p-4 opacity-0 scale-95 translate-y-1 pointer-events-none transition-all duration-300 ease-out group-hover/step:opacity-100 group-hover/step:scale-100 group-hover/step:translate-y-0 ${
                  anchor.vertical === "bottom"
                    ? "bottom-full mb-4"
                    : "top-full mt-4"
                } ${
                  anchor.horizontal === "left"
                    ? "left-1/2 -translate-x-1/2"
                    : anchor.horizontal === "right"
                      ? "left-1/2 -translate-x-1/2"
                      : "left-1/2 -translate-x-1/2"
                }`}
              >
                <p className="flex border-b-[0.5px] border-neutral-300 pb-2 items-center gap-2 font-DMSans text-sm font-semibold leading-snug text-neutral-950">
                  <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-neutral-950" />
                  {step.sub_name}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {step.sub_steps.map((sub, j) => (
                    <li
                      key={j}
                      className="flex gap-2 font-DMSans text-xs leading-snug text-neutral-700"
                    >
                      <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-yellow" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
