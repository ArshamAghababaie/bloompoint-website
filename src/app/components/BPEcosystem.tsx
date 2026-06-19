"use client";

export default function Solutions() {
  return (
    <div className="h-110 px-10 bg-light-gray text-neutral-950">
      <div className="reveal flex items-center pt-20">
        <div className="w-6 h-px bg-neutral-950" />
        <span className="pl-2 text-xs font-DMSans tracking-widest uppercase">
          BloomPoint Ecosystem
        </span>
      </div>
      <div className="reveal reveal-delay-1 mt-6 px-32 flex-col font-dmsans text-4xl text-center">
        <p className="font-DMSans leading-14">
          BloomPoint builds practical, and{" "}
          <span className="bg-neutral-950 px-1 rounded-xl text-light-gray">
            viable
          </span>{" "}
          systems where{" "}
          <span className="bg-neutral-950 px-1 rounded-xl text-light-gray">
            communities
          </span>{" "}
          and{" "}
          <span className="bg-neutral-950 px-1 rounded-xl text-light-gray">
            businesses
          </span>{" "}
          connected, valued, and capable of growing{" "}
          <span className="bg-neutral-950 px-1 rounded-xl text-light-gray">
            together
          </span>{" "}
          over time.
        </p>
      </div>
    </div>
  );
}
