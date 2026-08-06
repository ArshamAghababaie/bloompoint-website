import Image from "next/image";

export default function Ongoing() {
  const ongoing_Proj = [
    {
      id: "01",
      title: "Keune Care",
      category: "SMEs",
      description:
        "A short description of the project. Replace this placeholder with your own text.",
      image: "project-path/keune-care/section3/keune_04.jpg",
      url: "projects/keune-care",
    },
    {
      id: "02",
      title: "Waste",
      category: "Large Enterprises",
      description:
        "A short description of the project. Replace this placeholder with your own text.",
      image: "project-path/aseh/section3/aseh_04.jpg",
      url: "projects/keune-care",
    },
    {
      id: "03",
      title: "NY",
      category: "Cities",
      description:
        "A short description of the project. Replace this placeholder with your own text.",
      image: "project-path/darasiab/section3/darasiab_05.jpg",
      url: "projects/keune-care",
    },
  ];

  return (
    <div
      id="ongoing"
      className="relative z-10 min-h-screen px-10 md:px-12 bg-neutral-950 text-yellow pb-12"
    >
      {/* <div className="reveal reveal-delay-1 mt-0 pt-20 flex-col font-bebas text-7xl"> */}
      <div className="mt-0 pt-20 flex-col font-bebas text-7xl">
        <h1 className="text-white uppercase">Ongoing</h1>
        <h1 className="uppercase">Projects...</h1>
      </div>

      {/* ======= Projects ======= */}
      <div className="relative mt-20">
        <div className="mt-16">
          <div className="space-y-8">
            {ongoing_Proj.map((project, index) => (
              <div
                key={project.id}
                // className={`reveal reveal-delay-${Math.min(index + 2, 10)}
                className={`
        group
        overflow-hidden
        rounded-3xl
        border
        border-neutral-800
        transition-all
        duration-300
        hover:border-yellow/50`}
              >
                <div
                  className={`grid lg:grid-cols-2 items-stretch ${
                    index % 2 !== 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative min-h-70 md:min-h-90 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    {/* Category */}
                    <span className="w-fit rounded-lg bg-yellow px-2 py-1 mb-3 text-[11px] font-DMSans uppercase tracking-wider text-neutral-950">
                      {project.category}
                    </span>
                    <span className="font-bebas text-6xl text-neutral-700">
                      {project.id}
                    </span>

                    <h2 className="mt-2 font-bebas text-5xl uppercase leading-none text-white md:text-6xl">
                      {project.title}
                    </h2>

                    <p className="mt-6 max-w-xl font-DMSans leading-8 text-light-gray">
                      {project.description}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      {/* <span className="rounded-full border border-yellow/20 bg-yellow/10 px-4 py-2 text-xs uppercase tracking-widest text-yellow">
                        ● In Progress
                      </span> */}

                      {project.url && (
                        <a
                          href={project.url || "#"}
                          target={project.url ? "_blank" : undefined}
                          rel={project.url ? "noopener noreferrer" : undefined}
                          onClick={(e) => !project.url && e.preventDefault()}
                          className={`group/button inline-flex items-center gap-3 rounded-xl border px-5 py-3 font-DMSans text-sm uppercase tracking-widest transition-all duration-300 cursor-none ${
                            project.url
                              ? "border-yellow text-yellow group-hover:bg-yellow group-hover:text-neutral-950 hover:bg-white hover:text-neutral-950"
                              : "border-neutral-700 text-neutral-500 hover:border-yellow/50 hover:text-yellow"
                          }`}
                        >
                          View Project
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
