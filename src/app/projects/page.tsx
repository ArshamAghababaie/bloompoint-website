"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { categories, projects, type Category } from "./projects-data";
import { basePath } from "../../../lib/basePath";
import Footer from "../components/Footer";

type Filter = Category | "Ongoing";

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState<Set<Filter>>(
    new Set([...categories, "Ongoing"]),
  );

  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  const categoryCounts = useMemo(() => {
    const counts = new Map<Category, number>();

    for (const category of categories) {
      counts.set(
        category,
        projects.filter((p) => p.category === category).length,
      );
    }

    return counts;
  }, []);

  const isAllSelected =
    selectedFilters.size === categories.length + 1 &&
    selectedFilters.has("Ongoing");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = Array.isArray(project.category)
        ? project.category.some((category) => selectedFilters.has(category))
        : selectedFilters.has(project.category);

      const matchesOngoing =
        selectedFilters.has("Ongoing") && project.ongoing === true;

      return matchesCategory || matchesOngoing;
    });
  }, [selectedFilters]);

  useEffect(() => {
    if (
      displayedProjects.length === filteredProjects.length &&
      displayedProjects.every(
        (project, index) => project.id === filteredProjects[index]?.id,
      )
    ) {
      return;
    }

    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setDisplayedProjects(filteredProjects);
      setIsAnimating(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [filteredProjects, displayedProjects]);

  const toggleFilter = (filter: Filter) => {
    setSelectedFilters((currentSelection) => {
      if (currentSelection.size === 1 && currentSelection.has(filter)) {
        return new Set(categories);
      }

      return new Set([filter]);
    });
  };

  const selectAll = () => {
    setSelectedFilters(new Set([...categories, "Ongoing"]));
  };

  return (
    <div className="overflow-hidden bg-neutral-950">
      <Navbar />

      {/* Header Section */}
      <div className="h-fit px-10 md:px-12 bg-neutral-950 text-yellow pt-24 md:pt-32"></div>

      {/* Filter Section */}
      <div className="reveal reveal-delay-1 px-10 md:px-12 bg-neutral-950">
        <div className="flex items-center gap-2 mb-5 text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4 text-yellow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h18M6.75 12h10.5M10.5 19.5h3"
            />
          </svg>

          <span className="text-xs font-DMSans tracking-widest uppercase text-neutral-500">
            Filter by category
          </span>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 pb-10 border-b border-neutral-800">
          {/* ALL */}
          <button
            onClick={selectAll}
            className={`px-4 md:px-4 py-2 md:py-1 rounded-xl font-DMSans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border cursor-none ${
              isAllSelected
                ? "bg-yellow text-neutral-950 border-yellow hover:bg-yellow/70 hover:border-yellow/10"
                : "bg-transparent text-yellow border-yellow hover:text-yellow/60"
            }`}
          >
            ALL <span className="opacity-60">({projects.length})</span>
          </button>

          {/* Regular Categories */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleFilter(category)}
              className={`px-4 md:px-4 py-2 md:py-1 rounded-xl font-DMSans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border cursor-none ${
                selectedFilters.has(category)
                  ? "bg-yellow text-neutral-950 border-yellow hover:bg-yellow/70 hover:border-yellow/10"
                  : "bg-transparent text-yellow border-yellow hover:text-yellow/60"
              }`}
            >
              {category}{" "}
              <span className="opacity-60">
                ({categoryCounts.get(category)})
              </span>
            </button>
          ))}

          {/* Ongoing */}
          <button
            onClick={() => toggleFilter("Ongoing")}
            className={`px-4 md:px-4 py-2 md:py-1 rounded-xl font-DMSans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border cursor-none ${
              selectedFilters.has("Ongoing")
                ? "bg-red-500 text-white border-red-500 hover:bg-red-500/70 hover:border-red-500/10"
                : "bg-transparent text-red-500 border-red-500 hover:text-red-500/60"
            }`}
          >
            Ongoing
            <span className="opacity-60">
              ({projects.filter((project) => project.ongoing === true).length})
            </span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="hero-reveal hero-reveal-delay-2 px-10 md:px-12 bg-neutral-950 py-10 md:py-12">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 transition-all duration-200 ${
            isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
          }`}
        >
          {displayedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden aspect-square bg-neutral-900 cursor-none rounded-2xl"
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="text-center text-neutral-600">
                  <Image
                    src={`${basePath}${project.image}`}
                    fill
                    alt={project.name}
                    className="mx-auto mb-2 opacity-100"
                  />
                </div>
              </div>

              {/* Hover Overlay with Name */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end md:pl-6 md:pb-4">
                <div className="flex items-center justify-between w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-col">
                    <h3 className="font-bebas text-white text-xl md:text-4xl uppercase">
                      {project.name}
                    </h3>

                    <h3 className="font-bebas text-white text-xl md:text-[26px] uppercase">
                      {project.subName}
                    </h3>
                  </div>
                  <div className="absolute bottom-2 right-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="w-6 h-6 text-yellow shrink-0 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75"
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

              {/* Category Badge */}
              {/* Category Badge */}
              <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                <div className="bg-yellow text-neutral-950 px-2 py-1 rounded-lg text-[11px] font-DMSans font-medium tracking-wider">
                  {Array.isArray(project.category)
                    ? project.category.join(" / ")
                    : project.category}
                </div>

                {project.ongoing === true && (
                  <div
                    className="w-3 h-3 rounded-full bg-red-500"
                    title="Ongoing"
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        {displayedProjects.length === 0 && (
          <div className="flex items-center justify-center py-20 text-center">
            <p className="text-neutral-500 font-DMSans text-lg">
              No projects found. Please select at least one category.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
