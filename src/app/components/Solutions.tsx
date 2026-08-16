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
      title: (
        <div className="group relative flex flex-col gap-3">
          <span className="font-DMSans text-4xl lg:text-[40px] xl:text-5xl text-neutral-700 whitespace-pre-line">
            [01]
          </span>
          <h1 className="font-DMSans text-4xl lg:text-[33px] xl:text-5xl text-light-gray whitespace-pre-line">
            A <span className="text-yellow">Path</span> with Checkpoints
          </h1>
        </div>
      ),
      subtitle: (
        <div className="group relative flex flex-col lg:gap-1 gap-px pt-3">
          <h1 className="font-DMSans text-[22px] lg:text-2xl text-light-gray whitespace-pre-line">
            Entry Point → Prototype
          </h1>
          <h1 className="font-DMSans text-[22px] lg:text-2xl text-yellow whitespace-pre-line">
            Outcome |{" "}
            <span className="text-light-gray">Short Term Results</span>
          </h1>
        </div>
      ),
    },
    // {
    //   title: `[01]

    //   A Path with Checkpoints`,
    //   subtitle: `Entry Point → Prototype
    //   Outcome | Short Term Results`,
    // items: [
    //   "Focusing on a specific part of the business community (Designated Community)",
    //   "Relevant Strategy Planning",
    //   "Prototyping the Problem or Need",
    //   "Short-Term Results",
    // ],
    // line: <div className="dashed-line absolute bottom-12" />,
    // dots: [
    //   {
    //     position: "bottom-8.75 left-60",
    //     size: "h-7 w-7 bg-neutral-200",
    //     title: "Identifying (Checkpoint 1)",
    //     bullets: ["R&D", "Designated group"],
    //   },
    //   {
    //     position: "bottom-8.75 left-130",
    //     size: "h-7 w-7 bg-neutral-200",
    //     title: "Planning (Checkpoint 2)",
    //     bullets: ["Online product", "VIP club running"],
    //   },
    //   {
    //     position: "bottom-8.75 right-100",
    //     size: "h-7 w-7 bg-neutral-200",
    //     title: "Implementation (Checkpoint 3)",
    //     bullets: ["Event holding", "Feedback loop"],
    //   },
    //   {
    //     position: "bottom-7 right-39.5",
    //     size: "h-10 w-10 bg-yellow duration-500 delay-200 group-hover:bg-neutral-900",
    //     title: "Building prototype",
    //     bullets: ["Community club", "MVP validation"],
    //   },
    // ] as Dot[],
    // },
    {
      title: (
        <div className="group relative flex flex-col gap-3">
          <span className="font-DMSans text-4xl lg:text-[40px] xl:text-5xl text-neutral-700 whitespace-pre-line">
            [02]
          </span>
          <h1 className="font-DMSans text-4xl lg:text-[33px] xl:text-5xl text-light-gray whitespace-pre-line">
            A <span className="text-yellow">Circular</span> System
          </h1>
        </div>
      ),
      subtitle: (
        <div className="group relative flex flex-col lg:gap-1 gap-px pt-3">
          <h1 className="font-DMSans text-[22px] lg:text-2xl text-light-gray duration-500 whitespace-pre-line">
            Ecosystem → Supervision / Coordination
          </h1>
          <h1 className="font-DMSans text-[22px] lg:text-2xl text-yellow duration-500 delay-200 whitespace-pre-line">
            Outcome | <span className="text-light-gray">Long Term Results</span>
          </h1>
        </div>
      ),

      // items: [
      //   "Focusing on a specific part of the business community (Designated Community)",
      //   "Fully Strategy Plan",
      //   "Supervision",
      //   "Coordination",
      //   "Long-Term Results",
      // ],
      // line: <div className="dashed-circle absolute -bottom-2 right-[116]" />,
      // dots: [
      //   {
      //     position: "bottom-76.5 right-61",
      //     size: "h-7 w-7 bg-neutral-200",
      //     title: "Identifying (Checkpoint 1)",
      //     bullets: ["Full strategy", "Rollout"],
      //   },
      //   {
      //     position: "bottom-40 right-41",
      //     size: "h-7 w-7 bg-neutral-200",
      //     title: "Supervision (Checkpoint 2)",
      //     bullets: ["Active supervision", "Quality control"],
      //   },
      //   {
      //     position: "bottom-10.5 right-85",
      //     size: "h-7 w-7 bg-neutral-200",
      //     title: "Implementation (Checkpoint 3)",
      //     bullets: ["Cross-team coordination", "Partner alignment"],
      //   },
      //   {
      //     position: "bottom-64 right-103",
      //     size: "h-10 w-10 bg-yellow duration-500 delay-200 group-hover:bg-neutral-900",
      //     title: "Belonging (Outcome)",
      //     bullets: ["Sustainable growth", "Long-term impact"],
      //   },
      // ] as Dot[],
    },
  ];

  return (
    <div id="solutions" className="relative z-10 min-h-screen bg-neutral-950">
      <div className="reveal reveal-delay-1 flex justify-center px-4 pt-14 text-center font-bebas tracking-wide">
        <h1 className="text-[90px] uppercase leading-none text-light-gray sm:text-[120px] md:text-[160px] lg:text-[200px]">
          our
        </h1>
        <h1 className="ml-3 text-[90px] uppercase leading-none text-yellow sm:text-[120px] md:text-[160px] lg:text-[200px]">
          &nbsp;solutions
        </h1>
      </div>

      <div className="flex reveal reveal-delay-2 px-10 md:px-12 pt-4 font-DMSans">
        {/* <span className="text-sm text-neutral-600">
          [ Hover over the circles to reach more information. ]
        </span> */}
      </div>
      <div className="flex flex-col lg:flex-row gap-0 pt-14 justify-between">
        {solutions.map((s, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${i + 2} group relative transition-colors duration-300`}
          >
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-yellow origin-bottom scale-y-0 transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              <div className="absolute inset-0 -mx-12">{s.line}</div>
            </div> */}

            {/* <div className="absolute inset-0 -mx-12 pointer-events-none">
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
            </div> */}

            <div className="relative z-10 flex flex-col p-12">
              <h1 className="font-DMSans text-yellow duration-500 delay-200 group-hover:text-neutral-950 whitespace-pre-line">
                {s.title}
              </h1>

              <h2 className="pt-2 font-DMSans duration-500 delay-200 group-hover:text-neutral-700 whitespace-pre-line">
                {s.subtitle}
              </h2>

              {/* <div className="flex flex-col text-lg pt-4">
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
