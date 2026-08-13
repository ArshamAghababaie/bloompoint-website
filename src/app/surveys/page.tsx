import Script from "next/script";
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

const Survey01 = () => {
  return (
    <div>
      <div
        data-aidaform-app="form202405"
        data-url="https://bloompoints.aidaform.com/s01-industrial-enterprises"
        data-width="100%"
        data-height="500px"
        data-do-resize
      ></div>
      <Script
        id="aidaform-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){var r,d=document,gt=d.getElementById,cr=d.createElement,tg=d.getElementsByTagName,id="aidaform-app";if(!gt.call(d,id)){r=cr.call(d,"script");r.id=id;r.src="https://widget.aidaform.com/embed.js";(d.head || tg.call(d,"head")[0]).appendChild(r);}})()`,
        }}
      />
    </div>
  );
};

export default function Surveys() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        id="surveys"
        className="relative z-10 min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 bg-neutral-950 text-yellow"
      >
        {/* ======= Title ======= */}
        {/* <div className="reveal reveal-delay-1 flex justify-center sm:px-12 pt-14 text-center font-bebas tracking-wide">
          <h1 className="text-[80px] uppercase leading-none text-light-gray sm:text-[100px] md:text-[125px] lg:text-[160px] xl:text-[200px]">
            Our
          </h1>

          <h1 className="text-[80px] uppercase leading-none text-yellow sm:text-[100px] md:text-[125px] lg:text-[160px] xl:text-[200px]">
            &nbsp;Surveys
          </h1>
        </div> */}

        <div className="reveal reveal-delay-1 mt-0 pt-40 flex-col font-bebas text-7xl">
          <h1 className="text-light-gray uppercase">Our</h1>
          <h1 className="uppercase">Surveys</h1>
          <p className="pt-4 flex flex-col text-base w-100 font-DMSans text-neutral-400 leading-6">
            We provided some surveys for market validation and to understand the
            needs of our clients and the market. Please fill out the surveys
            below to help us improve our services and offerings.
          </p>
        </div>

        {/* <div className="font-DMSans">
          <p className="reveal reveal-delay-2 pt-4 flex flex-col text-base w-100 font-DMSans text-neutral-400 leading-6">
            We provided some surveys for market validation and to understand the
            needs of our clients and the market. Please fill out the surveys
            below to help us improve our services and offerings.
          </p>
        </div> */}

        <div className="reveal reveal-delay-3 flex flex-col mt-12">
          {SurveysList.map((s, i) => (
            <Link
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-yellow/90 py-2 w-fit transition-colors duration-150 cursor-none"
            >
              Survey {s.num} - {s.title}
            </Link>
          ))}
        </div>
        {/* <Survey01 /> */}
      </div>
      <Footer />
    </div>
  );
}
