"use client";

type Dot = {
  position: string;
  size: string;
  title: string;
  bullets: string[];
};

export default function Solutions() {
  const solutions = [
    {
      title: "Path",
      subtitle: "Entry Point → Prototype",
      items: [
        "Focusing on a specific part of the business community (Designated Community)",
        "Relevant Strategy Planning",
        "Prototyping the Problem or Need",
        "Short-Term Results",
      ],
      line: <div className="dashed-line absolute bottom-12" />,
      dots: [
        {
          position: "bottom-8.75 left-60",
          size: "h-7 w-7 bg-neutral-200",
          title: "Identifying (Checkpoint 1)",
          bullets: ["R&D", "Designated group"],
        },
        {
          position: "bottom-8.75 left-130",
          size: "h-7 w-7 bg-neutral-200",
          title: "Planning (Checkpoint 2)",
          bullets: ["Online product", "VIP club running"],
        },
        {
          position: "bottom-8.75 right-100",
          size: "h-7 w-7 bg-neutral-200",
          title: "Implementation (Checkpoint 3)",
          bullets: ["Event holding", "Feedback loop"],
        },
        {
          position: "bottom-7 right-39.5",
          size: "h-10 w-10 bg-yellow duration-500 delay-200 group-hover:bg-neutral-900",
          title: "Building prototype",
          bullets: ["Community club", "MVP validation"],
        },
      ] as Dot[],
    },
    {
      title: "Circle",
      subtitle: "Full Ecosystem → Long term",
      items: [
        "Focusing on a specific part of the business community (Designated Community)",
        "Fully Strategy Plan",
        "Supervision",
        "Coordination",
        "Long-Term Results",
      ],
      line: <div className="dashed-circle absolute -bottom-2 right-[116]" />,
      dots: [
        {
          position: "bottom-76.5 right-61",
          size: "h-7 w-7 bg-neutral-200",
          title: "Identifying (Checkpoint 1)",
          bullets: ["Full strategy", "Rollout"],
        },
        {
          position: "bottom-40 right-41",
          size: "h-7 w-7 bg-neutral-200",
          title: "Supervision (Checkpoint 2)",
          bullets: ["Active supervision", "Quality control"],
        },
        {
          position: "bottom-10.5 right-85",
          size: "h-7 w-7 bg-neutral-200",
          title: "Implementation (Checkpoint 3)",
          bullets: ["Cross-team coordination", "Partner alignment"],
        },
        {
          position: "bottom-64 right-103",
          size: "h-10 w-10 bg-yellow duration-500 delay-200 group-hover:bg-neutral-900",
          title: "Belonging (Outcome)",
          bullets: ["Sustainable growth", "Long-term impact"],
        },
      ] as Dot[],
    },
  ];

  return (
    <div
      id="solutions"
      className="relative z-10 h-fit px-10 bg-neutral-950 text-yellow"
    >
      <div className="reveal reveal-delay-1 mt-0 pt-20 flex-col font-bebas text-7xl">
        <h1 className="text-white uppercase">our</h1>
        <h1 className="uppercase">solutions</h1>
      </div>
      <div className="reveal reveal-delay-2 pt-4 font-DMSans">
        <span className="text-sm text-neutral-600">
          [ Hover over the circles to reach more information. ]
        </span>
      </div>
      <div className="flex flex-col gap-0 pt-14 -mx-12">
        {solutions.map((s, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${i + 2} group relative transition-colors duration-300`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-yellow origin-bottom scale-y-0 transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              <div className="absolute inset-0 -mx-12">{s.line}</div>
            </div>

            <div className="absolute inset-0 -mx-12 pointer-events-none">
              {s.dots.map((dot, di) => (
                <div
                  key={di}
                  className={`dot-marker pointer-events-auto absolute z-20 ${dot.position}`}
                >
                  <div
                    className={`rounded-full transition duration-500 delay-200 ${dot.size}`}
                  />
                  <div className="dot-card">
                    <p className="flex items-center gap-2 border-b-[0.5px] border-neutral-300 pb-2 font-DMSans text-sm font-semibold leading-snug text-neutral-950">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                      {dot.title}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {dot.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2 font-DMSans text-xs leading-snug text-neutral-700"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 flex h-110 flex-col p-12">
              <h1 className="font-bebas text-7xl text-white duration-500 delay-200 group-hover:text-neutral-950">
                {s.title}
              </h1>

              <h2 className="pt-2 font-DMSans text-sm duration-500 delay-200 group-hover:text-neutral-700">
                {s.subtitle}
              </h2>

              <div className="flex flex-col text-lg pt-4">
                {s.items?.map((item, ii) => (
                  <div
                    key={ii}
                    className="pt-3 font-DMSans font-light text-neutral-400 transition duration-500 delay-200 group-hover:text-neutral-800"
                  >
                    <span className="text-base pr-2 font-DMSans font-light text-yellow transition duration-500 delay-200 group-hover:text-neutral-800">
                      →
                    </span>
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
