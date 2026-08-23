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
        className="relative z-10 min-h-screen flex justify-center items-center bg-neutral-950 text-yellow px-8 lg:px-12"
      >
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:gap-32 xl:gap-64 lg:grid-cols-2">
          <div className="reveal reveal-delay-1 mt-0 flex-col pt-20 justify-center font-bebas text-7xl md:text-7xl lg:text-7xl xl:text-8xl">
            <h1 className="text-light-gray uppercase">Our</h1>{" "}
            <h1 className="uppercase">Surveys</h1>{" "}
            <p className="text-sm sm:text-base flex w-72 sm:w-200 md:w-125 max-w-xl flex-col pt-4 font-DMSans leading-6 text-neutral-400 ">
              We provided some surveys for market validation and to understand
              the problems/needs of our clients and the market. Please fill out
              the relevant survey to help us improve our services and
              offerings.{" "}
            </p>
          </div>

          {/* Surveys */}
          <div className="reveal reveal-delay-2 xl:mt-36 lg:mt-22 flex flex-col text-xl sm:text-2xl">
            <h2 className="pb-2 font-semibold text-yellow">Surveys links</h2>
            {SurveysList.map((s, i) => (
              <div
                key={i}
                className="ml-0 flex w-full max-w-112.5 flex-col underline underline-offset-2"
              >
                <Link
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit py-2.5 text-base sm:text-xl text-neutral-200 transition-colors duration-150 hover:text-yellow/90 cursor-none "
                >
                  Survey {s.num} | {s.title}
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
