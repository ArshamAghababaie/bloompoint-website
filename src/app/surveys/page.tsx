import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const SurveysList = [
  {
    num: "01",
    title: "Industrial Enterprises",
    url: "https://bloompoints.aidaform.com/s01-industrial-enterprises",
  },
  {
    num: "02",
    title: "City Ecosystem Organizations",
    url: "https://bloompoints.aidaform.com/s02-city-ecosystem-organizations",
  },
  {
    num: "03",
    title: "Educational Institutions",
    url: "https://bloompoints.aidaform.com/s03-educational-institutions",
  },
  {
    num: "04",
    title: "Innovation Organizations",
    url: "https://bloompoints.aidaform.com/s04-innovation-organizations",
  },
];

export default function Surveys() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        id="surveys"
        className="relative z-10 min-h-screen bg-neutral-950 text-yellow px-8 lg:px-12"
      >
        {/* Header */}
        <div className="reveal reveal-delay-1 mt-0 flex-col pt-28 font-bebas text-6xl sm:pt-32 sm:text-7xl md:pt-40 ">
          <h1 className="text-light-gray uppercase">Our</h1>{" "}
          <h1 className="uppercase">Surveys</h1>{" "}
          <p className="text-sm sm:text-base flex w-full max-w-xl flex-col pt-4 font-DMSans leading-6 text-neutral-400 ">
            We provided some surveys for market validation and to understand the
            problems/needs of our clients and the market. Please fill out the
            surveys below to help us improve our services and offerings.{" "}
          </p>
        </div>

        {/* Surveys */}
        <div className="reveal reveal-delay-2 mt-8 flex flex-col text-xl sm:text-2xl sm:mt-12">
          <h2 className="pb-3 font-semibold text-yellow">Surveys links</h2>
          {SurveysList.map((s, i) => (
            <div
              key={i}
              className="ml-0 flex w-full max-w-112.5 flex-col border-b border-neutral-700 sm:ml-4 "
            >
              <Link
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit py-3 text-base sm:text-xl text-neutral-200 transition-colors duration-150 hover:text-yellow/90 cursor-none "
              >
                Survey {s.num} | {s.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
