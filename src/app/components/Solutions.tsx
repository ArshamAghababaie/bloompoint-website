"use client";

export default function Solutions() {
  // const solutions = [
  //   {
  //     title: "Checkpoint & Path",
  //     subtitle: "Entry Point → Prototype",
  //     abbreviation: "(CPP)",
  //     text: "Plans that focus on a specific part of the business community. Prototypes through connected checkpoints with short-term results and achievements for long-term viable growth.",
  //   },
  //   {
  //     title: "BloomPoint Circle",
  //     subtitle: "Full Ecosystem → Long term",
  //     abbreviation: "(BPC)",
  //     text: "A dynamic system for nurturing BloomPoints of businesses. Physical, digital, and networked structures that continuously connect, restore, and evolve community ecosystems.",
  //   },
  // ];

  const solutions = [
    {
      title: "Path",
      subtitle: "Entry Point → Prototype",
      // abbreviation: "(CPP)",
      items: [
        "Focusing on a specific part of the business community (Designated Community)",
        "Relevant Strategy Planning",
        "Prototyping the Problem or Need",
        "Short-Term Results",
      ],
      backsvg: (
        <div className="absolute inset-0">
          <div className="absolute h-5 w-5 rounded-full bg-neutral-200 bottom-[38.6px] left-10 z-10" />
          <div className="absolute h-5 w-5 rounded-full bg-neutral-200 bottom-[38.6px] left-80 z-10" />
          <div className="absolute h-8 w-8 rounded-full bg-yellow bottom-8 right-11 z-10 duration-500 delay-200 group-hover:bg-neutral-900" />
          <div className="dashed-line absolute bottom-12 left-0" />
        </div>
      ),
    },
    {
      title: "Circle",
      subtitle: "Full Ecosystem → Long term",
      // abbreviation: "(BPC)",
      items: [
        // "Designated Community",
        "Focusing on a specific part of the business community (Designated Community)",
        "Fully Strategy Plan",
        "Supervision",
        "Coordination",
        "Long-Term Results",
      ],
      backsvg: (
        <div className="absolute inset-0">
          <div className="dashed-circle absolute -bottom-40 -right-31" />
          <div className="absolute h-5 w-5 rounded-full bg-neutral-200 z-10 bottom-40 right-3" />
          <div className="absolute h-5 w-5 rounded-full bg-neutral-200 z-10 bottom-4 right-51.5" />
          <div className="absolute h-8 w-8 rounded-full bg-yellow z-10 bottom-32.5 right-38 duration-500 delay-200 group-hover:bg-neutral-900" />
        </div>
      ),
    },
  ];

  return (
    <div
      id="solutions"
      className="relative z-10 h-screen px-10 bg-neutral-950 text-yellow"
    >
      <div className="reveal flex items-center pt-20">
        <div className="w-6 h-px bg-yellow" />
        <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
          our solutions
        </span>
      </div>
      <div className="reveal reveal-delay-1 mt-6 flex-col font-bebas text-7xl">
        <h1 className="text-white uppercase">Path;</h1>
        <h1 className="uppercase">Circle</h1>
      </div>
      <div className="flex gap-1 pt-14">
        {/* {solutions.map((s, i) => (
          <div key={i} className="group border border-neutral-800 rounded-4xl">
            <div className="group-hover:bg-yellow group-hover:border-yellow rounded-4xl p-12 flex-col h-80 transition duration-300">
              <h1 className="group-hover:text-neutral-950 font-bebas text-5xl text-white transition duration-300">
                {s.title}
                <span className="pl-1 text-yellow group-hover:text-white transition duration-300">
                  {s.abbreviation}
                </span>
              </h1>
              <h2 className="text-xs font-mono pt-2 group-hover:text-neutral-600 transition duration-300">
                {s.subtitle}
              </h2>
              <p className="text-neutral-400 font-medium pt-6 pr-44 text-base/relaxed group-hover:text-neutral-800 transition duration-300">
                {s.text}
              </p>
            </div>
          </div>
        ))} */}

        {solutions.map((s, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${i + 2} group relative overflow-hidden rounded-4xl border border-neutral-800 transition-colors duration-300 hover:border-yellow`}
          >
            <div
              className="
    absolute inset-0
    bg-yellow
    origin-bottom
    scale-y-0
    transition-transform
    duration-700
    delay-100
    ease-[cubic-bezier(0.22,1,0.36,1)]
    group-hover:scale-y-100
  "
            />

            <div className="relative z-10 flex h-100 flex-col p-12">
              <h1 className="font-bebas text-5xl text-white duration-500 delay-200 group-hover:text-neutral-950">
                {s.title}
                {/* <span className="pl-1 text-yellow duration-500 delay-200  group-hover:text-white">
                  {s.abbreviation}
                </span> */}
              </h1>

              <h2 className="pt-2 font-DMSans text-sm duration-500 delay-200 group-hover:text-neutral-700">
                {s.subtitle}
              </h2>
              {/* <div className="flex-col">
                  <p className="flex-col pt-6 pr-44 text-base/relaxed font-DMSans font-medium text-neutral-400 transition duration-500 delay-200 group-hover:text-neutral-800">
                  </p>
                </div> */}

              <div className="flex flex-col text-sm pt-4 w-200">
                {s.items?.map((item, i) => (
                  <div
                    key={i}
                    className="pt-3 pr-52 font-DMSans font-light text-neutral-400 transition duration-500 delay-200 group-hover:text-neutral-800"
                  >
                    <span className="text-base pr-2 font-DMSans font-light text-yellow transition duration-500 delay-200 group-hover:text-neutral-800">
                      →
                    </span>
                    <span key={i} className="text-base">
                      {item}
                    </span>
                    {s.backsvg}
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
