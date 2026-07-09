"use client";
"use client";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <div className="font-DMSans text-sm fixed top-0 text-white w-full border-b border-neutral-800 z-50 h-20">
      <div className="flex items-center h-full px-12 bg-neutral-950">
        {/* <div className="flex items-center h-full px-12 bg-neutral-950/70 backdrop-blur-sm"> */}
        <button
          onClick={() => {
            if (document.getElementById("hero")) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              window.location.href = `${basePath}/`;
            }
          }}
          className="flex cursor-none bg-transparent border-none p-0"
        >
          <div className="relative w-15 h-15" style={{ perspective: "800px" }}>
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
          <div className="flex items-center">
            <Image
              src={`${basePath}/bloomPoint-text.png`}
              width={110}
              height={110}
              alt="BloomPoint logo"
              className="ml-1 mt-2"
            />
            {/* <h1 className="text-[21px] pt-1 font-black pl-1 text-white">
              bloom
              <span className="text-yellow">Point</span>
            </h1> */}
          </div>
        </button>

        <div className="flex ml-auto">
          {navlinks.map((l, i) =>
            l.url.startsWith("#") ? (
              <button
                key={i}
                onClick={() => {
                  const el = document.getElementById(l.url.slice(1));
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = `${basePath}/${l.url}`;
                  }
                }}
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
      </div>
    </div>
  );
}
