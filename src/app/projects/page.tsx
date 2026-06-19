"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { categories, projects, type Category } from "./projects-data";

export default function Projects() {
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(
    new Set(categories),
  );
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

  const isAllSelected = selectedCategories.size === categories.length;

  const toggleCategory = (category: Category) => {
    const newSelection = new Set(selectedCategories);
    if (newSelection.has(category)) {
      newSelection.delete(category);
    } else {
      newSelection.add(category);
    }
    if (newSelection.size > 0) {
      setSelectedCategories(newSelection);
      setIsAnimating(true);
    }
  };

  const selectAll = () => {
    setSelectedCategories(new Set(categories));
    setIsAnimating(true);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      selectedCategories.has(project.category),
    );
  }, [selectedCategories]);

  // Soft fade/scale pulse on the grid right after the active filters change.
  useEffect(() => {
    if (!isAnimating) return;
    const timeout = setTimeout(() => setIsAnimating(false), 200);
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  return (
    <div className="overflow-hidden bg-neutral-950">
      <Navbar />

      {/* Header Section */}
      <div className="h-fit px-10 md:px-16 lg:px-20 bg-neutral-950 text-yellow pt-32">
        <div className="reveal flex items-center">
          <div className="w-6 h-px bg-yellow" />
          <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
            our Projects
          </span>
        </div>
        <div className="reveal reveal-delay-1 mt-6 mb-8 font-bebas">
          <h1 className="text-white uppercase text-7xl md:text-8xl">Various</h1>
          <h1 className="uppercase text-7xl md:text-8xl">Projects</h1>
        </div>
        <div className="reveal reveal-delay-2 text-neutral-500 font-DMSans pb-12">
          <p className="w-full md:w-125 text-sm md:text-base">
            You could explore our projects with their specific, extensive scales
            and subjects.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="reveal reveal-delay-3 px-10 md:px-16 lg:px-20 bg-neutral-950 pt-8 border-t border-neutral-800">
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
          <button
            onClick={selectAll}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-DMSans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border ${
              isAllSelected
                ? "bg-yellow text-neutral-950 border-yellow hover:bg-yellow/70 hover:border-yellow/10"
                : "bg-transparent text-yellow border-yellow  hover:text-yellow/60"
            }`}
          >
            All <span className="opacity-60">({projects.length})</span>
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-4 md:px-4 py-2 md:py-1 rounded-xl font-DMSans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border ${
                selectedCategories.has(category)
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
        </div>
      </div>

      {/* Projects Grid */}
      <div className="reveal reveal-delay-4 px-10 md:px-16 lg:px-20 bg-neutral-950 py-16 md:py-24">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 transition-all duration-200 ${
            isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
          }`}
        >
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden aspect-square bg-neutral-900 cursor-none"
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="text-center text-neutral-600">
                  <Image
                    src="/bp-logo-white.png"
                    width={60}
                    height={60}
                    alt="Project placeholder"
                    className="mx-auto mb-2 opacity-20"
                  />
                  <p className="text-xs">Project Image</p>
                </div>
              </div>

              {/* Hover Overlay with Name */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex items-center justify-between w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bebas text-white text-2xl md:text-3xl uppercase">
                    {project.name}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="w-6 h-6 text-yellow shrink-0 ml-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-yellow text-neutral-950 px-2 py-1 rounded-lg text-[11px] font-DMSans font-medium tracking-wider">
                {project.category}
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="flex items-center justify-center py-20 text-center">
            <p className="text-neutral-500 font-DMSans text-lg">
              No projects found. Please select at least one category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
