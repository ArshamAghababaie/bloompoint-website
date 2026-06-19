"use client";

export default function Workflow() {
  const workflow_steps = [
    {
      num: "01",
      name: "Context Analysis",
      sub_name: "Business Context Analysis Agents",
      sub_steps: [
        "Identifying Capacities (POI)",
        "Designated Group Introduction",
      ],
    },
    {
      num: "02",
      name: "Blueprint Creation",
      sub_name: "Community Planning Agents",
      sub_steps: [
        "Tailored Action Plan Presentation (Path)",
        "Checkpoints Instructions & Actions Needed Presentation",
      ],
    },
    {
      num: "03",
      name: "Progress Tracking",
      sub_name: "Supervisor Agents",
      sub_steps: [
        "BP Refining the Plan Based on In-progress Analysis",
        "Process Monitoring",
      ],
    },
    {
      num: "04",
      name: "Conclusion Analysis",
      sub_name: "Post-Analysis Agents",
      sub_steps: ["New Opportunities Presentation", "Measuring Impacts Tables"],
    },
  ];

  return (
    <div id="workflow" className="h-screen px-10 bg-yellow text-neutral-950">
      <div className="reveal flex items-center pt-20">
        <div className="w-6 h-px bg-neutral-950" />
        <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
          agentic platform
        </span>
      </div>
      <div className="reveal reveal-delay-1 mt-6 flex-col font-bebas text-7xl">
        <h1 className="uppercase">modular</h1>
        <h1 className="uppercase">workflow</h1>
      </div>
      <div className="reveal reveal-delay-2 relative flex -top-10 right-60 justify-end">
        <div className="relative w-120 h-120 rounded-full border border-dashed border-neutral-700">
          {workflow_steps.map((step, i) => {
            const angle = (i * 90 * Math.PI) / 180;

            const radius = 264;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={i}
                className="absolute top-[50%] left-[50%]"
                style={{
                  transform: `translate(-50%, -50%)
                  translate(${x}px, ${y}px)`,
                }}
              >
                <div className="flex items-center justify-center w-52 h-12 rounded-xl bg-neutral-950 p-2">
                  <span className="font-DMSans text-white">{step.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
