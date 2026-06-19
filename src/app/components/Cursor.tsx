"use client";

import { useEffect, useRef } from "react";

const TRAIL_POOL_SIZE = 30;
const TRAIL_SPAWN_DISTANCE = 16; // px between dashes
const TRAIL_MIN_LENGTH = 12; // px
const TRAIL_MAX_LENGTH = 12; // px
const TRAIL_MIN_OPACITY = 0.5;
const TRAIL_MAX_OPACITY = 0.8;
const TRAIL_FADE_DURATION = 500; // ms, must match the cursor-dash-fade keyframes

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf: number;

    // Trail spawn bookkeeping
    let lastSpawnX = 0,
      lastSpawnY = 0,
      lastSpawnTime = performance.now();
    let dashIndex = 0;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (prefersReducedMotion) return;

      if (!hasMoved) {
        hasMoved = true;
        lastSpawnX = mx;
        lastSpawnY = my;
        lastSpawnTime = performance.now();
        return;
      }

      const dx = mx - lastSpawnX;
      const dy = my - lastSpawnY;
      const distance = Math.hypot(dx, dy);
      if (distance < TRAIL_SPAWN_DISTANCE) return;

      const now = performance.now();
      const elapsed = Math.max(now - lastSpawnTime, 1);
      const speed = distance / elapsed; // px/ms

      const dash = trailRefs.current[dashIndex % trailRefs.current.length];
      dashIndex++;

      if (dash) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const midX = (mx + lastSpawnX) / 2;
        const midY = (my + lastSpawnY) / 2;
        const speedRatio = Math.min(speed / 1.5, 1);
        const length =
          TRAIL_MIN_LENGTH + (TRAIL_MAX_LENGTH - TRAIL_MIN_LENGTH) * speedRatio;
        const opacity =
          TRAIL_MIN_OPACITY +
          (TRAIL_MAX_OPACITY - TRAIL_MIN_OPACITY) * speedRatio;

        dash.style.left = midX + "px";
        dash.style.top = midY + "px";
        dash.style.width = length + "px";
        dash.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        dash.style.setProperty("--dash-opacity", String(opacity));

        // Restart the fade animation even if this dash is mid-fade already.
        dash.style.animation = "none";
        void dash.offsetWidth;
        dash.style.animation = `cursor-dash-fade ${TRAIL_FADE_DURATION}ms ease-out forwards`;
      }

      lastSpawnX = mx;
      lastSpawnY = my;
      lastSpawnTime = now;
    };

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
      }
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    // Scale on interactive elements
    const handleEnter = () => {
      if (cursorRef.current)
        cursorRef.current.style.transform = "translate(-50%,-50%) scale(2)";
    };
    const handleLeave = () => {
      if (cursorRef.current)
        cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";
    };

    const attach = () => {
      document
        .querySelectorAll("a, button, .solution-card, .price-card, .offer-item")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleEnter);
          el.addEventListener("mouseleave", handleLeave);
        });
    };
    attach();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_POOL_SIZE }).map((_, i) => (
        <div
          key={i}
          className="cursor-dash"
          ref={(el) => {
            if (el) trailRefs.current[i] = el;
          }}
        />
      ))}
      <div className="cursor" ref={cursorRef} id="cursor" />
      <div className="cursor-ring" ref={ringRef} id="cursorRing" />
    </>
  );
}

//   w-3 h-3 rounded-full bg-yellow pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 transition-[transform,width,height] duration-150
// } fixed w-9 h-9 rounded-full border border-[rgba(254,203,47,0.4)] pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 transition-all duration-120
