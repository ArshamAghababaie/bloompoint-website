"use client";

import Image from "next/image";
import { basePath } from "../../../lib/basePath";
// import Link from "next/dist/client/link";

export default function PathCircle() {
  const projects = [
    {
      id: "01",
      name: "Crouse",
      // imageSrc: "/validated-projects/crouse.jpg",
      imageSrc: "/validated-projects/crouse1.jpg",
      slug: "crouse",
    },
    {
      id: "02",
      name: "Keune",
      // imageSrc: "/validated-projects/keune.jpg",
      imageSrc: "/validated-projects/keune1.jpg",
      slug: "keune",
    },
  ];
  return (
    <div id="solutions" className="relative z-10 bg-light-gray pb-8">
      <div className="reveal reveal-delay-1 flex justify-center text-center font-bebas tracking-wide">
        {/* <h1 className="text-[60px] uppercase leading-none text-neutral-950 sm:text-[110px] md:text-[120px] lg:text-[170px]"> validated </h1> <h1 className="xl:ml-3 text-[60px] uppercase leading-none text-yellow sm:text-[110px] md:text-[120px] lg:text-[170px]"> &nbsp;projects </h1> */}{" "}
      </div>
      <div className="flex justify-center items-center reveal reveal-delay-2 font-DMSans">
        <div className="flex flex-col w-full">
          {projects.map((p, i) => (
            <div key={i} className="w-full">
              <Image
                src={basePath + p.imageSrc}
                alt={basePath + p.name}
                width={1600}
                height={900}
                className="w-full h-auto"
              />

              {/* ─── PROJECT LINK BUTTONS ─── */}
              {/* <div className="flex items-center justify-center pt-3">
                <Link href="/projects/[slug]" as={`/projects/${p.slug}`}>
                  <button className="group flex w-full sm:w-auto cursor-none items-center text-sm text-neutral-950 underline transition duration-300 md:text-base md:hover:-translate-y-1 md:hover:text-neutral-600 lg:pointer-fine:px-1 lg:pointer-fine:py-1 lg:pointer-fine:text-lg">
                    {p.name} Project
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={0.8}
                        className="ml-3 h-6 w-6 shrink-0 -translate-x-1.5 text-neutral-950 transition-all delay-0 duration-300 group-hover:translate-x-0 md:h-7 md:w-7 md:group-hover:text-neutral-600"
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
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
