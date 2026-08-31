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
          <h1 className="text-[60px] uppercase leading-none text-neutral-950 sm:text-[110px] md:text-[120px] lg:text-[170px]">
            latest
          </h1>

          <h1 className="xl:ml-3 text-[60px] uppercase leading-none text-yellow sm:text-[110px] md:text-[120px] lg:text-[170px]">
            &nbsp;projects
          </h1>
        </div>
        <div className="reveal reveal-delay-2 font-DMSans">
          <p className="pt-6 px-4 xl:px-12 md:px-0 lg:px-0 font-DMSans text-[16px] md:text-[18px] lg:text-[23px] text-neutral-950">
            A glance at the diverse clients and communities we've worked with
            across <br />
            industrial manufacturing, education, public institutions, and cities
            (ecosystems)
          </p>

          <div className="flex justify-center items-center pt-6">
            <Link href={"/projects"} className="">
              <button className="group flex items-center w-fullsm:w-auto text-sm md:text-base lg:pointer-fine:text-sm lg:pointer-fine:px-1 lg:pointer-fine:py-1 text-neutral-950 md:hover:text-neutral-500 md:hover:-translate-y-1 transition duration-300 underline cursor-none">
                More Projects
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.8}
                    className="ml-3  h-6 w-6 shrink-0 -translate-x-1.5 text-neutral-950 md:group-hover:text-neutral-500 transition-all delay-0 duration-300 group-hover:translate-x-0 md:h-7 md:w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                {/* Arrow */}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ======= Projects ======= */}
      <div className="reveal reveal-delay-3 relative mt-10 sm:mt-18 md:mt-20 lg:mt-18 px-10 sm:px-12 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {latestProjects.map((project) => (
            <div key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block aspect-auto overflow-hidden rounded-3xl border border-neutral-800 transition-all duration-300 shadow-xl shadow-neutral-950/15"
              >
                {/* IMAGE */}
                <div className="relative h-full w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={basePath + project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <span className="absolute right-5 top-5 z-10 rounded-lg bg-yellow px-2 py-1 font-DMSans text-[11px] uppercase tracking-wider text-neutral-950">
                    {project.category}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end bg-black/50 p-6 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 md:pl-6 md:pb-4">
                    <div className="flex w-full translate-y-8 items-center justify-between transition-transform duration-300 lg:group-hover:translate-y-0">
                      {/* Project Name */}
                      <div>
                        <h3 className="font-bebas text-xl uppercase text-white sm:text-2xl md:text-4xl">
                          {project.name}
                        </h3>
                        <h3 className="font-bebas text-xl uppercase text-white sm:text-2xl md:text-[28px]">
                          {project.subName}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="ml-3 h-6 w-6 shrink-0 -translate-x-2 text-yellow opacity-0 transition-all delay-75 duration-300 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 md:h-7 md:w-7"
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

              {/* Project Name - Mobile/Tablet */}
              <div className="flex flex-col pt-3 lg:hidden items-center">
                <h3 className="font-bebas text-3xl uppercase text-neutral-950 sm:text-4xl">
                  {project.name}
                </h3>
                <h3 className="font-MDSans text-base uppercase text-neutral-950 sm:text-xl">
                  {project.subName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
