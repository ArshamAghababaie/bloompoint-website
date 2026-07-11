"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProjectSection2 } from "../projects-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PathAnimationProps {
  data: ProjectSection2;
  basePath: string;
}

export default function PathAnimation({ data, basePath }: PathAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const nodeARef = useRef<HTMLDivElement>(null);
  const nodeBRef = useRef<HTMLDivElement>(null);
  const nodeCRef = useRef<HTMLDivElement>(null);
  const nodeDRef = useRef<HTMLDivElement>(null);

  const aboveBRef = useRef<HTMLDivElement>(null);
  const belowBRef = useRef<HTMLDivElement>(null);
  const belowCRef = useRef<HTMLDivElement>(null);
  const belowDRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const aboveB = aboveBRef.current;
    const belowB = belowBRef.current;
    const belowC = belowCRef.current;
    const belowD = belowDRef.current;

    if (!container || !track || !aboveB || !belowB || !belowC || !belowD)
      return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const xStart = vw;
    const xEnd = 0;
    const totalTravel = xStart - xEnd;

    // Monotonic stops: content always moves right→left
    const xAtB = xStart - totalTravel * 0.45;
    const xAtC = xStart - totalTravel * 0.72;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });

      // Phase 1-2: slide right→left, reveal up to Node B + part of Line 2
      tl.fromTo(track, { x: xStart }, { x: xAtB, duration: 2.5, ease: "none" });

      // Phase 3: vertical join at Node B (h-scroll paused)
      tl.fromTo(
        aboveB,
        { y: -vh * 0.55, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
      ).fromTo(
        belowB,
        { y: vh * 0.55, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
        "<",
      );

      // Phase 4: resume right→left, reveal up to Node C + part of Line 3
      tl.to(track, { x: xAtC, duration: 1.5, ease: "none" });

      // Phase 5: blueprint content slides up (h-scroll paused)
      tl.fromTo(
        belowC,
        { y: vh * 0.55, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      );

      // Phase 6: final slide right→left — entire path now visible
      tl.to(track, { x: xEnd, duration: 1.5, ease: "none" });

      // Phase 7: goal content slides up (entire path visible, h-scroll done)
      tl.fromTo(
        belowD,
        { y: vh * 0.55, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
      );

      // Phase 8: hold
      tl.to({}, { duration: 0.8 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10"
      style={{ height: "700vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-light-gray flex items-center">
        <div
          ref={trackRef}
          className="flex items-center px-8"
          style={{ width: "100vw" }}
        >
          {/* ── Node A : Client Logo ── */}
          <div ref={nodeARef} className="shrink-0 flex items-center gap-3">
            <img
              src={`${basePath}${data.clientLogo}`}
              alt={data.clientName}
              // className="w-20 h-20 object-contain rounded-2xl border border-neutral-900"
              className="w-20 h-20 object-contain rounded-2xl"
            />
          </div>

          {/* ── Line 1 ── */}
          <div className="flex-1 ml-3 h-px bg-neutral-600 min-w-0" />

          {/* ── Node B : bloompointClsTitle pill ── */}
          <div
            ref={nodeBRef}
            className="shrink-0 relative flex flex-col items-center"
          >
            {/* above: client dept info — slides DOWN from top */}
            <div
              ref={aboveBRef}
              className="absolute bottom-full mb-3 flex flex-col items-center"
            >
              <p className="font-DMSans text-center w-40 text-xs text-neutral-500 tracking-wide pb-2">
                {data.clientDepartment}
              </p>
              {data.clientDepartmentLogo && (
                <img
                  src={`${basePath}${data.clientDepartmentLogo}`}
                  alt=""
                  // className="w-20 h-20 object-contain rounded-2xl border border-neutral-900"
                  className="w-20 h-20 object-contain"
                />
              )}
            </div>

            {/* the pill */}
            <div className="border border-neutral-600 rounded-2xl px-5 py-3">
              <span className="text-yellow font-bebas text-lg md:text-xl tracking-wide">
                {data.bloompointClsTitle}
              </span>
            </div>

            {/* below: bloompoint info — slides UP from bottom */}
            <div
              ref={belowBRef}
              className="absolute top-full mt-5 flex flex-col items-center gap-2"
            >
              <img
                src={`${basePath}${data.bloompointLogo}`}
                alt="BloomPoint"
                className="h-18 object-contain"
              />
              <p className="font-DMSans text-xs text-neutral-500 tracking-wide">
                {data.bloompointDepartment}
              </p>
            </div>
          </div>

          {/* ── Line 2 ── */}
          <div className="flex-1 h-px bg-neutral-600 min-w-0" />

          {/* ── Node C : Blueprint icon ── */}
          <div
            ref={nodeCRef}
            className="shrink-0 relative flex flex-col items-center"
          >
            <img
              src={`${basePath}${data.blueprintLogo}`}
              alt=""
              className="w-16 h-16 object-contain m-2 mb-10"
            />

            {/* below: blueprint details — slides UP */}
            <div
              ref={belowCRef}
              className="absolute top-full flex flex-col items-center gap-1 text-center"
              style={{ minWidth: "220px" }}
            >
              <h3 className="font-bebas text-neutral-900 text-base uppercase tracking-wide">
                {data.blueprintTitle}
              </h3>
              {data.blueprintDescription.map((item, i) => (
                <p
                  key={i}
                  className="font-DMSans text-xs text-neutral-600 leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* ── Line 3 ── */}
          <div className="flex-1 h-px bg-neutral-600 min-w-0" />

          {/* ── Node D : Goal pill ── */}
          <div
            ref={nodeDRef}
            className="shrink-0 relative flex flex-col items-center"
          >
            <div className="rounded-2xl border border-neutral-600 px-5 py-3">
              <span className="text-yellow font-bebas text-lg md:text-xl tracking-wide">
                {data.goalTitle}
              </span>
            </div>

            {/* below: goal details — slides UP */}
            <div
              ref={belowDRef}
              className="absolute top-full mt-7 flex flex-col items-center gap-1 text-center"
              style={{ minWidth: "240px" }}
            >
              {data.goalDescription.map((item, i) => (
                <p
                  key={i}
                  className="font-DMSans text-xs text-neutral-600 leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
