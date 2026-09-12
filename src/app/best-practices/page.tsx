import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const BestPracticesList = [
  {
    num: "01",
    title: "CFW",
    subtitle: "CONSUMPTION | FOOD | WASTE",
    url: "",
  },
  {
    num: "02",
    title: "PWD",
    subtitle: "PEOPLE WITH DISABILITIES",
    url: "",
  },
  {
    num: "03",
    title: "PCC",
    subtitle: "?",
    url: "",
  },
  {
    num: "04",
    title: "...",
    subtitle: "?",
    url: "",
  },
];

export default function BestPractices() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        id="best-practices"
        className="relative z-10 min-h-screen flex justify-center items-center bg-light-gray px-8 lg:px-12"
      >
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:gap-32 xl:gap-64 lg:grid-cols-2">
          <div className="reveal reveal-delay-1 mt-0 flex-col pt-20 justify-center font-bebas text-7xl md:text-7xl lg:text-7xl xl:text-8xl">
            <h1 className="text-neutral-950 uppercase">Best</h1>
            <h1 className="text-yellow uppercase">Practicrs</h1>
            <p className="text-sm sm:text-base flex w-72 sm:w-200 md:w-125 max-w-xl flex-col pt-4 font-DMSans leading-6 text-neutral-500 ">
              These are our best practices over the years. The best practice
              collection is a functional source our projects.
            </p>
          </div>

          {/* Surveys */}
          <div className="reveal reveal-delay-2 xl:mt-20 lg:mt-22 flex flex-col text-xl sm:text-2xl">
            <h2 className="pb-2 font-semibold text-yellow">Best Practices</h2>
            {BestPracticesList.map((b, i) => (
              <div
                key={i}
                className="ml-0 flex w-full max-w-112.5 flex-col underline underline-offset-2"
              >
                <Link
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit py-2.5 text-base sm:text-xl text-neutral-700 transition-colors duration-150 hover:text-yellow/90 cursor-none "
                >
                  {b.title} | <span className="text-sm">{b.subtitle}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
