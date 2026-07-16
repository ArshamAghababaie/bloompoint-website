"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { basePath } from "../../../lib/basePath";

export default function Navbar() {
  type NavLink = {
    id: string;
    title: string;
    url: string;
  };
  const navlinks: NavLink[] = [
    { id: "1", title: "Projects", url: "/projects" },
    { id: "2", title: "Solutions", url: "#solutions" },
    { id: "3", title: "Workflow", url: "#workflow" },
    { id: "4", title: "FAQ", url: "#faq" },
    { id: "5", title: "Pricing", url: "/pricing" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goHome = () => {
    if (document.getElementById("hero")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = `${basePath}/`;
    }
  };

  const goToSection = (url: string) => {
    const el = document.getElementById(url.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `${basePath}/${url}`;
    }
  };

  return (
    <div className="font-DMSans text-sm fixed top-0 text-white w-full border-b border-neutral-800 z-50 h-20">
      <div className="flex items-center h-full px-4 sm:px-6 lg:px-12 bg-neutral-950">
        <button
          onClick={goHome}
          className="flex items-center shrink-0 cursor-none bg-transparent border-none p-0"
        >
          <div className="relative w-12 h-12 sm:w-13.5 sm:h-13.5 md:w-15 md:h-15 shrink-0">
            <div
              className="absolute top-0 left-0 w-15 h-15 origin-top-left scale-80 sm:scale-90 md:scale-100"
              style={{ perspective: "800px" }}
            >
              <Image
                src={`${basePath}/logo-animation/bp-logo-back-animation.png`}
                width={60}
                height={60}
                alt=""
                className="logo-swoosh absolute inset-0"
                style={{
                  animation: "logo-swoosh-pulse 12s ease-in-out infinite",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  animation: "logo-swoosh-pulse 12s ease-in-out infinite",
                  left: "-13.5px",
                }}
              >
                <Image
                  src={`${basePath}/logo-animation/b-logo.png`}
                  width={60}
                  height={60}
                  alt="BloomPoint logo"
                  className="logo-letter"
                  style={{
                    animation: "logo-flip 12s ease-in-out infinite",
                    transformOrigin: "center center",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="relative w-28 sm:w-27 shrink-0">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 origin-left scale-85 sm:scale-90 md:scale-100">
              <Image
                src={`${basePath}/bloomPoint-text.png`}
                width={110}
                height={110}
                alt="BloomPoint logo"
                className="ml-1"
              />
            </div>
          </div>
        </button>

        <div className="hidden md:flex ml-auto">
          {navlinks.map((l, i) =>
            l.url.startsWith("#") ? (
              <button
                key={i}
                onClick={() => goToSection(l.url)}
                className="text-neutral-400 hover:text-white px-4 transition duration-300 cursor-none"
              >
                {l.title}
              </button>
            ) : (
              <Link
                key={i}
                href={l.url}
                className="text-neutral-400 hover:text-white px-4 transition duration-300 cursor-none"
              >
                {l.title}
              </Link>
            ),
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="md:hidden ml-auto flex items-center justify-center w-10 h-10 shrink-0 cursor-none bg-transparent border-none text-neutral-400"
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-neutral-950 border-b border-neutral-800 flex flex-col">
          {navlinks.map((l, i) =>
            l.url.startsWith("#") ? (
              <button
                key={i}
                onClick={() => {
                  setIsMenuOpen(false);
                  goToSection(l.url);
                }}
                className="text-neutral-400 text-left px-6 py-4 cursor-none"
              >
                {l.title}
              </button>
            ) : (
              <Link
                key={i}
                href={l.url}
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-400 px-6 py-4 cursor-none"
              >
                {l.title}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}
