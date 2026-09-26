import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects/projects-data";
import { basePath } from "../../../lib/basePath";

export default function Ongoing() {
  const latestProjects = projects.filter(
    (project) => project.state === "latest",
  );

  return (
    <section
      id="ongoing"
      className="relative z-10 min-h-screen bg-light-gray pb-12 text-yellow"
    >
      {/* Title */}
      <div className="flex flex-col justify-center px-4 pt-14 text-center font-bebas tracking-wide">
        <div className="reveal reveal-delay-1 flex justify-center">
          <h1 className="text-[60px] uppercase leading-none text-neutral-950 sm:text-[110px] md:text-[120px] lg:text-[170px]">
            latest
          </h1>

          <h1 className="xl:ml-3 text-[60px] uppercase leading-none text-yellow sm:text-[110px] md:text-[120px] lg:text-[170px]">
            &nbsp;projects
          </h1>
        </div>

        <div className="reveal reveal-delay-2 font-DMSans">
          <p className="px-4 pt-6 font-DMSans text-[16px] text-neutral-950 md:px-0 md:text-[18px] lg:px-0 lg:text-[23px] xl:px-12">
            A glance at the diverse clients and communities we've worked with
            across <br />
            industrial manufacturing, education, public institutions, and cities
            (ecosystems)
          </p>

          <div className="flex items-center justify-center pt-6">
            <Link href="/projects">
              <button className="group flex w-fullsm:w-auto cursor-none items-center text-sm text-neutral-950 underline transition duration-300 md:text-base md:hover:-translate-y-1 md:hover:text-neutral-500 lg:pointer-fine:px-1 lg:pointer-fine:py-1 lg:pointer-fine:text-sm">
                More Projects
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.8}
                    className="ml-3 h-6 w-6 shrink-0 -translate-x-1.5 text-neutral-950 transition-all delay-0 duration-300 group-hover:translate-x-0 md:h-7 md:w-7 md:group-hover:text-neutral-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="reveal reveal-delay-3 relative mt-10 px-10 sm:mt-18 sm:px-12 md:mt-20 md:px-10 lg:mt-18 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3 lg:gap-10">
          {latestProjects.map((project) => {
            const s1 = project.section1;
            const detailRows = s1
              ? [
                  // { label: "Client", value: s1.clientName },
                  { label: "Problem or Need", value: s1.problem },
                  // {
                  //   label: "Community-led Solution",
                  //   value: s1.communityLedSolution,
                  // },

                  ...(s1.prototypeOrEcosystem
                    ? [
                        {
                          label: s1.prototypeOrEcosystem.label,
                          value: s1.prototypeOrEcosystem.value,
                        },
                      ]
                    : []),

                  // { label: "Result or Target", value: s1.target },
                ]
              : [];

            return (
              <div key={project.id}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block aspect-square overflow-hidden rounded-3xl border border-neutral-800 shadow-xl shadow-neutral-950/15 transition-all duration-300"
                >
                  {/* IMAGE */}
                  <div className="absolute inset-0 overflow-hidden bg-neutral-950">
                    <Image
                      src={basePath + project.image}
                      alt={project.name}
                      fill
                      // sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
                    />
                  </div>

                  {/* CATEGORY BADGE */}
                  <span className="absolute right-5 top-5 z-10 rounded-lg bg-yellow px-2 py-1 font-DMSans text-[11px] uppercase tracking-wider text-neutral-950">
                    {project.category}
                  </span>

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 z-20 overflow-hidden bg-black/65 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100">
                    {/* TOP: PROJECT NAME */}
                    <div className="absolute left-6 right-6 top-6 translate-y-[-150%] transition-transform duration-500 ease-out lg:group-hover:translate-y-0">
                      <h3 className="font-bebas text-xl uppercase leading-none text-white sm:text-2xl md:text-6xl">
                        {project.name}
                      </h3>

                      <h3 className="mt-1 font-bebas text-lg uppercase leading-none text-white sm:text-xl md:text-4xl">
                        {project.subName}
                      </h3>
                    </div>

                    {/* BOTTOM CONTENT */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-500 ease-out lg:group-hover:translate-y-0">
                      <div className="flex w-full items-end gap-4 pl-6 pr-2 pb-5">
                        {/* Section 1 */}
                        {detailRows.length > 0 && (
                          <div className="min-w-0 flex flex-col">
                            {detailRows.map((row) => (
                              <div
                                key={row.label}
                                className="mb-2 flex flex-col items-baseline gap-x-2 last:mb-0"
                              >
                                {/* <span className="shrink-0 font-DMSans text-[9px] font-semibold uppercase tracking-[0.12em] text-yellow md:text-[10px]"> */}
                                <span className="shrink-0 font-DMSans text-[9px] font-semibold uppercase tracking-[0.12em] text-yellow md:text-xl">
                                  {row.label}
                                </span>

                                {/* <span className="pl-2 min-w-0 font-DMSans text-[11px] leading-relaxed text-white md:text-xs"> */}
                                <span className="min-w-0 font-DMSans text-[11px] leading-relaxed text-white md:text-base">
                                  {row.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="absolute bottom-4 right-10">
                          {/* Arrow */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            className="h-6 w-6 shrink-0 -translate-x-3 text-yellow opacity-0 transition-all delay-150 duration-300 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 md:h-7 md:w-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* MOBILE / TABLET NAME */}
                <div className="flex flex-col items-center pt-3 lg:hidden border-0.5">
                  <h3 className="font-bebas text-[34px] uppercase text-yellow sm:text-4xl">
                    {project.name}
                  </h3>

                  <h3 className="font-MDSans text-base uppercase text-neutral-500 sm:text-xl">
                    {project.subName}
                  </h3>

                  <div className="flex flex-col mt-4 gap-2">
                    <div className="flex flex-col">
                      <h3 className="font-bebas tracking-wide text-xl uppercase text-neutral-950 sm:text-xl">
                        problem or Need
                      </h3>
                      <span className="text-neutral-500 text-sm">
                        {s1?.problem}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-bebas tracking-wide text-xl uppercase text-neutral-950 sm:text-xl">
                        {s1?.prototypeOrEcosystem?.label}
                      </h3>
                      <span className="text-neutral-500 text-sm">
                        {s1?.prototypeOrEcosystem?.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* STATIC TEXT SECTION */}
                <div className="relative flex min-h-27.5 flex-col justify-center py-5">
                  <p className="text-neutral-500 text-center md:pt-4 pt-0">
                    {project.overview}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
