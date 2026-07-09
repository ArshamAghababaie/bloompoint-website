"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "../../../lib/basePath";

type LogoItem = {
  file: string;
  name: string;
  boxSize?: number;
  imgScale?: number;
};

// NORMAL COLORIZED LOGOS

// const LOGOS: LogoItem[] = [
//   { file: "Aseh.png", name: "Aseh" },
//   { file: "Bahaman.png", name: "Bahaman" },
//   { file: "Crouse.png", name: "Crouse", imgScale: 1.5 },
//   { file: "DBST.png", name: "DBST", imgScale: 1.6 },
//   { file: "Darasiab.jpg", name: "Darasiab" },
//   { file: "Keunee.png", name: "Keune" },
//   { file: "Mahram.png", name: "Mahram" },
//   { file: "Mammut.jpg", name: "Mammut" },
//   { file: "Talashim.png", name: "Talashim", imgScale: 1.1 },
// ];

// NEGATIVE LOGOS

// const LOGOS: LogoItem[] = [
//   { file: "Aseh-negative.jpg", name: "Aseh" },
//   { file: "BAHAMAN-negative.jpg", name: "Bahaman" },
//   { file: "Crouse-negative.jpg", name: "Crouse" },
//   { file: "DBST-negative.jpg", name: "DBST", imgScale: 1.6 },
//   { file: "Darasiab-negative.jpg", name: "Darasiab" },
//   { file: "Keunee-negative.jpg", name: "Keune" },
//   { file: "Mahram-negative.jpg", name: "Mahram" },
//   { file: "Mammut-negative.jpg", name: "Mammut" },
//   { file: "Talashim-negative.jpg", name: "Talashim", imgScale: 0.5 },
// ];

// WHITE LOGOS

const LOGOS: LogoItem[] = [
  { file: "Aseh-white.png", name: "Aseh" },
  { file: "Bahaman-white.png", name: "Bahaman" },
  { file: "Crouse-white.png", name: "Crouse" },
  { file: "DBST-white.png", name: "DBST" },
  { file: "Darasiab-white.png", name: "Darasiab" },
  { file: "Keune-care-white.png", name: "KeuneCare" },
  { file: "Mahram-white.png", name: "Mahram" },
  { file: "Mammut-white.png", name: "Mammut" },
  { file: "Talashim-white.png", name: "Talashim", imgScale: 1 },
];

type OrbitRing = {
  diameter: string;
  count: number;
  duration: number;
  direction: "cw" | "ccw";
  box: number;
};

const ORBIT_RINGS: OrbitRing[] = [
  {
    diameter: "clamp(360px, 52vw, 620px)",
    count: 3,
    duration: 120,
    direction: "cw",
    box: 30,
  },
  {
    diameter: "clamp(440px, 64vw, 780px)",
    count: 3,
    duration: 150,
    direction: "ccw",
    box: 30,
  },
  {
    diameter: "clamp(520px, 76vw, 940px)",
    count: 3,
    duration: 150,
    direction: "cw",
    box: 30,
  },
];

function OrbitRingLayer({
  ring,
  logoOffset,
  onHoverChange,
  allHighlighted,
}: {
  ring: OrbitRing;
  logoOffset: number;
  onHoverChange: (hovered: boolean) => void;
  allHighlighted: boolean;
}) {
  const spinAnim = ring.direction === "cw" ? "orbit-cw" : "orbit-ccw";
  const counterAnim = ring.direction === "cw" ? "orbit-ccw" : "orbit-cw";

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-700 dashed pointer-events-none"
      style={{ width: ring.diameter, height: ring.diameter }}
    >
      <div
        className="orbit-anim absolute inset-0"
        style={{ animation: `${spinAnim} ${ring.duration}s linear infinite` }}
      >
        {Array.from({ length: ring.count }).map((_, i) => {
          const angle = (360 / ring.count) * i;
          const logo = LOGOS[logoOffset + i];
          const box = logo.boxSize ?? ring.box;
          const imgSize = box - 6;
          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div
                className="orbit-anim absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `${counterAnim} ${ring.duration}s linear infinite`,
                }}
              >
                <div
                  className="group/logo relative pointer-events-auto"
                  style={{ transform: `rotate(-${angle}deg)` }}
                  onMouseEnter={() => onHoverChange(true)}
                  onMouseLeave={() => onHoverChange(false)}
                >
                  <div
                    style={{ width: box, height: box }}
                    // className={`rounded-full border border-neutral-600/30 bg-neutral-700/90 overflow-hidden flex items-center justify-center cursor-none transition-all duration-300 group-hover/logo:scale-[2] group-hover/logo:border-yellow/40 group-hover/logo:shadow-[0_0_18px_4px_rgba(234,179,8,0.25)] ${allHighlighted ? "scale-[2] border-yellow/40! shadow-[0_0_18px_4px_rgba(234,179,8,0.25)]" : ""}`} // With border & yellow shadow
                    // className={`rounded-full border border-neutral-600/30 bg-neutral-700/90 overflow-hidden flex items-center justify-center cursor-none transition-all duration-300 group-hover/logo:scale-[2]  group-hover/logo:shadow-[0_0_18px_4px_rgba(234,179,8,0.25)] ${allHighlighted ? "scale-[2] shadow-[0_0_18px_4px_rgba(234,179,8,0.25)]" : ""}`} // Without border - yellow shadow
                    className={`rounded-full border border-neutral-600/30 bg-neutral-700/90 overflow-hidden flex items-center justify-center cursor-none transition-all duration-300 group-hover/logo:scale-[2]  group-hover/logo:shadow-[0_0_18px_4px_rgba(255,255,255,0.15)] ${allHighlighted ? "scale-[2] shadow-[0_0_18px_4px_rgba(255,255,255,0.15)]" : ""}`} // Without border - white shadow
                    // className={`rounded-full border border-neutral-600/30 bg-neutral-700/90 overflow-hidden flex items-center justify-center cursor-none transition-all duration-300 group-hover/logo:scale-[2]  ${allHighlighted ? "scale-[2] " : ""}`} // Without border & shadow
                  >
                    <Image
                      // src={`${basePath}/logos-hero/${logo.file}`}
                      // src={`${basePath}/logo-hero-new/negative/${logo.file}`}
                      src={`${basePath}/logo-hero-new/mains/${logo.file}`}
                      width={imgSize}
                      height={imgSize}
                      alt={logo.name}
                      className={`object-cover rounded-full w-full h-full transition-opacity duration-300 ${allHighlighted ? "opacity-100" : "opacity-0"} group-hover/logo:opacity-100`}
                      style={
                        logo.imgScale
                          ? { transform: `scale(${logo.imgScale})` }
                          : undefined
                      }
                    />
                  </div>
                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-5.5 px-2.5 py-1 text-[11px] font-DMSans text-neutral-300 bg-neutral-800/80 backdrop-blur-sm rounded-lg whitespace-nowrap transition-opacity duration-300 pointer-events-none ${allHighlighted ? "opacity-100" : "opacity-0"} group-hover/logo:opacity-100`}
                  >
                    {logo.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  const [logoHovered, setLogoHovered] = useState(false);
  const [exploreHovered, setExploreHovered] = useState(false);
  const anyHighlight = logoHovered || exploreHovered;
  const segments = ["SMEs", "LARGE ENTERPRISES", "CITIES"];

  return (
    <div
      id="hero"
      className="sticky top-0 z-0 h-screen flex justify-center items-center bg-neutral-950 text-neutral-100 overflow-hidden"
    >
      <div
        className="orbit-mask absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        style={{ opacity: anyHighlight ? 0.75 : 0.35 }}
      >
        {
          ORBIT_RINGS.reduce<{ offset: number; elements: React.ReactNode[] }>(
            (acc, ring, i) => {
              acc.elements.push(
                <OrbitRingLayer
                  key={i}
                  ring={ring}
                  logoOffset={acc.offset}
                  onHoverChange={setLogoHovered}
                  allHighlighted={exploreHovered}
                />,
              );
              acc.offset += ring.count;
              return acc;
            },
            { offset: 0, elements: [] },
          ).elements
        }
      </div>

      <div
        className="relative z-10 flex-col p-32 text-center justify-center items-center flex transition-opacity duration-500 pointer-events-none"
        style={{ opacity: anyHighlight ? 0.15 : 1 }}
      >
        <div className="font-bebas flex items-center justify-center flex-col">
          <h1 className="hero-reveal text-[110px]/24">
            Grow
            <br />
            Through
            <br />
            <span className="text-yellow">Community</span>
          </h1>
          <div className="hero-reveal hero-reveal-delay-1">
            <div className="flex items-center justify-center">
              <div className="relative mt-6 mr-2 w-8 rounded-full h-px overflow-hidden bg-neutral-600">
                <div className="absolute inset-0 bg-yellow animate-underline-ltr"></div>
              </div>
              <p className="pt-6 text-lg text-neutral-500 font-DMSans font-light">
                {/* <span className="animate-text-sweep font-semibold text-xl text-transparent bg-clip-text"> */}
                <span className="font-semibold text-xl">
                  Community-Led Solutions
                </span>
              </p>
              <div className="relative mt-6 ml-2 w-8 rounded-full h-px overflow-hidden bg-neutral-600">
                <div className="absolute inset-0 bg-yellow animate-underline-rtl"></div>
              </div>
            </div>
            <p className="-mt-4 text-lg text-neutral-500 font-DMSans font-light">
              <br />A viable approach to deal with{" "}
              <span className="font-semibold">problems</span>/
              <span className="font-semibold">needs</span> of
            </p>
          </div>
        </div>
        <div className="hero-reveal hero-reveal-delay-2 mb-8 pt-2 font-DMSans flex gap-8 text-neutral-500">
          {segments.map((s, i) => (
            <div key={i} className="flex gap-2">
              <div className="mt-1.5 w-3 h-3 rounded-full bg-yellow" />
              <span className="text-[16px] font-medium text-light-gray/70">
                {s}
              </span>
            </div>
          ))}
        </div>
        <div className="hero-reveal hero-reveal-delay-3 mt-6 flex gap-4 font-DMSans pointer-events-auto">
          <Link
            href={"/projects"}
            onMouseEnter={() => setExploreHovered(true)}
            onMouseLeave={() => setExploreHovered(false)}
          >
            <button className="text-sm px-9 py-4 border bg-neutral-950/10 backdrop-blur-[1px] border-neutral-700 text-neutral-500 rounded-xl hover:bg-white hover:-translate-y-1 transition duration-300 cursor-none">
              Explore Projects
            </button>
          </Link>
          <button
            onClick={() =>
              document
                .getElementById("problem-need")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-medium text-sm px-9 py-4 bg-yellow text-gray-800 rounded-xl hover:bg-white hover:-translate-y-1  transition duration-300 cursor-none"
          >
            Let’s Get Started
          </button>
        </div>
      </div>
      <div className="z-10 flex items-end absolute bottom-7 left-1/2 w-fit">
        <div className="relative mt-2 w-[0.1rem] rounded-full h-8 overflow-hidden bg-neutral-600">
          <div className="absolute inset-0 bg-yellow animate-scroll-line"></div>
        </div>
      </div>
    </div>
  );
}
