import Image from "next/image";
import Link from "next/link";
import { basePath } from "../../../lib/basePath";

type LogoItem = {
  file: string;
  boxSize?: number;
  rounded?: boolean;
  imgScale?: number;
};

const LOGOS: LogoItem[] = [
  { file: "Aseh.png" },
  { file: "Bahaman.png" },
  { file: "Crouse.png", imgScale: 2 },
  { file: "DBST.png", imgScale: 1.6 },
  { file: "Darasiab.jpg", rounded: true },
  { file: "Keunee.png", rounded: true },
  { file: "Mahram.png" },
  { file: "Mammut.jpg", rounded: true },
  { file: "Talashim.png" },
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
    diameter: "clamp(280px, 40vw, 460px)",
    count: 3,
    duration: 95,
    direction: "ccw",
    box: 60,
  },
  {
    diameter: "clamp(360px, 52vw, 620px)",
    count: 3,
    duration: 120,
    direction: "cw",
    box: 60,
  },
  {
    diameter: "clamp(440px, 64vw, 780px)",
    count: 3,
    duration: 150,
    direction: "ccw",
    box: 60,
  },
];

function OrbitRingLayer({
  ring,
  logoOffset,
}: {
  ring: OrbitRing;
  logoOffset: number;
}) {
  const spinAnim = ring.direction === "cw" ? "orbit-cw" : "orbit-ccw";
  const counterAnim = ring.direction === "cw" ? "orbit-ccw" : "orbit-cw";

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-700 dashed"
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
                  style={{
                    width: box,
                    height: box,
                    transform: `rotate(-${angle}deg)`,
                  }}
                  className="rounded-xl border border-neutral-600/30 bg-neutral-800/20 overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={`${basePath}/logos-hero/${logo.file}`}
                    width={imgSize}
                    height={imgSize}
                    alt=""
                    className={`object-contain ${logo.rounded ? "rounded-xl w-full h-full" : ""}`}
                    style={
                      logo.imgScale
                        ? { transform: `scale(${logo.imgScale})` }
                        : undefined
                    }
                  />
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
  const segments = ["SMEs", "LARGE ENTERPRISES", "CITIES"];

  return (
    <div className="relative h-screen flex justify-center items-center bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* Logo orbits - ambient background only, kept faint so text stays fully legible */}
      <div className="orbit-mask absolute inset-0 flex items-center justify-center opacity-[0.35]">
        {
          ORBIT_RINGS.reduce<{ offset: number; elements: React.ReactNode[] }>(
            (acc, ring, i) => {
              acc.elements.push(
                <OrbitRingLayer key={i} ring={ring} logoOffset={acc.offset} />,
              );
              acc.offset += ring.count;
              return acc;
            },
            { offset: 0, elements: [] },
          ).elements
        }
      </div>

      <div className="relative z-10 flex-col p-32 text-center justify-center items-center flex">
        <div className="font-bebas flex items-center justify-center flex-col">
          <h1 className="hero-reveal text-[110px]/24">
            Grow
            <br />
            Through
            <br />
            <span className="text-yellow">Community</span>
          </h1>
          <p className="hero-reveal hero-reveal-delay-1 mt-6 text-lg text-neutral-500 font-DMSans font-light">
            <span className="animate-text-sweep font-semibold text-xl text-transparent bg-clip-text">
              Community-Led Solution
            </span>
            <br />A viable approach to deal with{" "}
            {/* <span className="animate-text-sweep font-semibold text-transparent bg-clip-text"> */}
            <span className="font-semibold">problems</span>/
            {/* <span className="animate-text-sweep font-semibold text-transparent bg-clip-text"> */}
            <span className="font-semibold">needs</span> of
          </p>
        </div>
        <div className="hero-reveal hero-reveal-delay-2 mb-8 pt-4 font-DMSans flex gap-8 text-neutral-500">
          {segments.map((s, i) => (
            <div key={i} className="flex gap-2">
              <div className="mt-1.5 w-3 h-3 rounded-full bg-yellow" />
              <span className="text-[16px] font-medium text-light-gray/90">
                {s}
              </span>
            </div>
          ))}
        </div>
        <div className="hero-reveal hero-reveal-delay-3 mt-6 flex gap-4 font-DMSans">
          <Link href={"/projects"} className="">
            <button className="text-sm px-9 py-4 border bg-neutral-950/10 backdrop-blur-[1px] border-neutral-700 text-neutral-500 rounded-xl hover:bg-white hover:-translate-y-1 transition duration-300 cursor-none">
              Explore Projects
            </button>
          </Link>
          <button className="font-medium text-sm px-9 py-4 bg-yellow text-gray-800 rounded-xl hover:bg-white hover:-translate-y-1  transition duration-300 cursor-none">
            Book a meeting
          </button>
        </div>
      </div>
      <div className="z-10 flex items-end absolute bottom-7 left-1/2 w-fit">
        <div className="relative mt-2 w-[0.1rem] rounded-full h-8 overflow-hidden bg-neutral-600">
          <div className="absolute inset-0 bg-yellow animate-scroll-line"></div>
        </div>

        {/* <span className="text-neutral-600 pl-2 text-[11px] font-DmSans">
          SCROLL TO EXPLORE
        </span> */}
      </div>
    </div>
  );
}
