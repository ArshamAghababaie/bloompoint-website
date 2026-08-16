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
      className="relative z-10 min-h-screen bg-light-gray text-yellow pb-12"
    >
      {/* ======= Title ======= */}
      <div className="flex-col flex justify-center px-4 pt-14 text-center font-bebas tracking-wide">
        <div className="reveal reveal-delay-1 flex justify-center">
          <h1 className="text-[90px] uppercase leading-none text-neutral-950 sm:text-[110px] md:text-[150px] lg:text-[170px]">
            Latest
          </h1>

          <h1 className="ml-3 text-[90px] uppercase leading-none text-yellow sm:text-[110px] md:text-[150px] lg:text-[170px]">
            Projects
          </h1>
        </div>
        <div className="reveal reveal-delay-2 font-DMSans">
          <p className="pt-6 px-12 md:px-0 lg:px-0 font-DMSans text-[16px] md:text-[18px] lg:text-[23px] text-neutral-950">
            A glance at the diverse clients and communities we've worked with
            across <br />
            industrial manufacturing, education, public institutions, and cities
            (ecosystems)
          </p>

          {/* <Link href={"/projects"} className="w-full sm:w-auto">
            <button className="w-full mt-10 sm:w-auto text-sm md:text-base lg:pointer-fine:text-sm px-6 py-3 sm:px-9 sm:py-4 md:px-11 md:py-5 lg:pointer-fine:px-9 lg:pointer-fine:py-4 border border-neutral-950 text-neutral-800 rounded-xl bg-white md:hover:bg-neutral-950 md:hover:text-light-gray md:hover:-translate-y-1 transition duration-300 cursor-none">
              More Projects
            </button>
          </Link> */}
        </div>
      </div>
      {/* ======= Projects ======= */}
      <div className="reveal reveal-delay-3 relative mt-18 md:mt-20 lg:mt-28 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {latestProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative block aspect-auto overflow-hidden rounded-3xl border border-neutral-800 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-full w-full overflow-hidden bg-neutral-950">
                <Image
                  src={
                    basePath + (project.section3?.images[1] || project.image)
                  }
                  alt={project.name}
                  // fill
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute right-5 top-5 z-10 rounded-lg bg-yellow px-2 py-1 font-DMSans text-[11px] uppercase tracking-wider text-neutral-950">
                  {project.category}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end bg-black/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-8">
                  <div className="flex w-full translate-y-8 items-center justify-between transition-transform duration-300 group-hover:translate-y-0">
                    {/* Project Name */}
                    <h3 className="font-bebas text-xl uppercase text-white sm:text-2xl md:text-3xl">
                      {project.name}
                    </h3>

                    {/* Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="ml-3 h-6 w-6 shrink-0 -translate-x-2 text-yellow opacity-0 transition-all delay-75 duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:h-7 md:w-7"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
