import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects, getProjectBySlug } from "../projects-data";
import { basePath } from "../../../../lib/basePath";
import PathAnimation from "./PathAnimation";

const colorMap: Record<string, string> = {
  keune_umber: "oklch(0.6353 0.041 70.89)",
  palletabad_orange: "oklch(0.6253 0.0989 60.77)",
  crouse_blue: "oklch(0.367 0.0493 249.3)",
  avh_blue: "oklch(0.6917 0.0482 248.53)",
  raad_green: "oklch(0.4263 0.1001 147.1)",
  companies_red: "oklch(0.5195 0.1825 23.91)",
  aseh_gray: "oklch(0.5522 0.0179 216.79)",
  darasiab_green: "oklch(0.4586 0.1014 150.23)",
  nikan_yellow: "oklch(0.8372 0.1494 85)",
  yellow: "oklch(0.8634 0.1657 88.82)",
  green: "#22c55e",
  red: "#ef4444",
  blue: "#3b82f6",
  gray: "#737373",
};

const textColorMap: Record<string, string> = {
  yellow: "text-neutral-900",
  green: "text-white",
  red: "text-white",
  blue: "text-white",
  gray: "text-white",
  keune_umber: "text-white",
  palletabad_orange: "text-white",
  crouse_blue: "text-white",
  avh_blue: "text-white",
  raad_green: "text-white",
  companies_red: "text-white",
  aseh_gray: "text-white",
  darasiab_green: "text-white",
  nikan_yellow: "text-white",
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const s1 = project.section1;
  const s2 = project.section2;
  const s3 = project.section3;

  const bgColor = s1 ? colorMap[s1.color] || "#262626" : "#262626";
  const textColor = s1 ? textColorMap[s1.color] || "text-white" : "text-white";

  const detailRows = s1
    ? [
        { label: "Client", value: s1.clientName },
        // { label: "Description", value: s1.clientDescription },
        { label: "Problem", value: s1.problem },
        { label: "Community-led Solution", value: s1.communityLedSolution },
        { label: "Prototype", value: s1.prototype },
        // { label: "Designated Group", value: s1.designatedGroup },
        { label: "Target", value: s1.target },
        ...(s1.link ? [{ label: "Website", value: s1.link }] : []),
      ]
    : [];

  return (
    <div className="bg-neutral-950 overflow-x-clip">
      <Navbar />

      {/* ─── SECTION 1 : Hero ─── */}
      <section
        className={`sticky top-0 z-0 h-screen ${textColor} flex flex-col`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="h-full px-10 md:px-16 lg:px-20 pt-64 pb-16 flex flex-col gap-x-16 gap-y-4 max-[767px]:px-6 max-[767px]:pt-32 max-[767px]:pb-10 max-[767px]:gap-y-6">
          {/* Upper section: client logo + project name, pinned to the top */}
          <div>
            <h1 className="reveal reveal-delay-2 max-w-xl font-bebas uppercase text-5xl md:text-6xl leading-none mb-9 max-[767px]:max-w-full max-[767px]:text-5xl max-[767px]:mb-7">
              {project.name}
            </h1>
          </div>

          <div className="flex flex-col mt-20 max-[767px]:mt-10">
            <div className="reveal reveal-delay-3 max-w-4xl">
              {detailRows.map((row) => (
                <div
                  key={row.label}
                  className="flex mb-3 gap-x-2 items-baseline max-[767px]:gap-x-3 max-[767px]:mb-3 max-[767px]:whitespace-pre-line"
                >
                  <span className="font-DMSans text-sm uppercase tracking-widest font-semibold text-neutral-950 max-[767px]:text-[0.65rem] max-[767px]:tracking-[0.12em]">
                    {row.label}
                  </span>
                  {row.label === "Website" && row.value ? (
                    <Link
                      href={row.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline cursor-none lg:hover:text-neutral-300 transition-colors duration-150"
                    >
                      Visit website
                    </Link>
                  ) : (
                    <span className="font-DMSans leading-relaxed max-[767px]:text-[0.85rem]">
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 : Path Animation ─── */}
      {s2 && (
        <div className="hidden md:block">
          <PathAnimation data={s2} basePath={basePath} />
        </div>
      )}

      {/* ─── SECTION 3 : Image Gallery ─── */}
      <section className="relative z-10 bg-neutral-950 p-0">
        <div className="mx-auto">
          <div className="mb-4 pt-4">
            <h2 className="font-bebas text-light-gray pl-5 sm:pl-10 text-3xl md:text-4xl uppercase">
              {s3?.title || "Project Document"}
            </h2>
          </div>

          {s3?.images && s3.images.length > 0 ? (
            <div className="flex flex-col">
              {s3.images.map((image, index) => (
                <img
                  key={image}
                  src={`${basePath}${image}`}
                  alt={`${s3.title} ${index + 1}`}
                  className="w-full h-auto"
                />
              ))}
            </div>
          ) : (
            <div
              className="w-full border border-neutral-800 flex items-center justify-center"
              style={{ height: "80vh" }}
            >
              <p className="font-DMSans text-neutral-500 text-lg">
                The report will be available soon...
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
