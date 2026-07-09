import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects, getProjectBySlug } from "../projects-data";
import { basePath } from "../../../../lib/basePath";
import PathAnimation from "./PathAnimation";

const colorMap: Record<string, string> = {
  keune_umber: "oklch(0.6353 0.041 70.89)",
  crouse_blue: "oklch(0.367 0.0493 249.3)",
  raad_green: "oklch(0.4263 0.1001 147.1)",
  companies_red: "oklch(0.5195 0.1825 23.91)",
  aseh_gray: "oklch(0.5522 0.0179 216.79)",
  darasiab_green: "oklch(0.4586 0.1014 150.23)",
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
  crouse_blue: "text-white",
  raad_green: "text-white",
  companies_red: "text-white",
  aseh_gray: "text-white",
  darasiab_green: "text-white",
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
        { label: "Description", value: s1.clientDescription },
        { label: "Problem", value: s1.problem },
        { label: "Community-led Solution", value: s1.communityLedSolution },
        { label: "Prototype", value: s1.prototype },
        { label: "Designated Group", value: s1.designatedGroup },
        { label: "Target", value: s1.target },
      ]
    : [];

  return (
    <div className="bg-neutral-950 overflow-x-clip">
      <Navbar />

      {/* ─── SECTION 1 : Hero ─── */}
      <section
        className={`sticky top-0 z-0 h-screen ${textColor} flex flex-col justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="px-10 md:px-16 lg:px-20 pt-20">
          {s2?.clientLogo && (
            <img
              src={`${basePath}${s2.clientLogo}`}
              alt={project.name}
              className="reveal reveal-delay-1 w-30 h-30 object-contain mb-6 rounded-3xl"
            />
          )}

          {/* <h1 className="reveal reveal-delay-2 text-wrap max-w-xl font-bebas uppercase text-4xl md:text-6xl leading-none mb-9"> */}
          <h1 className="max-w-xl font-bebas uppercase text-4xl md:text-6xl leading-none mb-9">
            {project.name}
          </h1>

          {detailRows.length > 0 && (
            <div className="reveal reveal-delay-3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl">
              {detailRows.map((row) => (
                <div key={row.label} className="flex flex-col">
                  <span className="font-DMSans text-xs uppercase tracking-widest opacity-60 mb-1">
                    {row.label}
                  </span>
                  <span className="font-DMSans text-sm leading-relaxed whitespace-pre-line">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 2 : Path Animation ─── */}
      {s2 && <PathAnimation data={s2} basePath={basePath} />}

      {/* ─── SECTION 3 : PDF Viewer ─── */}
      <section className="relative z-10 bg-neutral-950 py-12 px-10 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bebas text-light-gray text-3xl md:text-4xl uppercase">
              {s3?.pdfTitle || "Project Document"}
            </h2>
            {/* {s3?.pdfUrl && (
              <a
                href={`${basePath}${s3.pdfUrl}`}
                download
                className="font-DMSans text-sm bg-yellow text-neutral-900 px-5 py-2.5 rounded hover:opacity-90 transition"
              >
                Download PDF
              </a>
            )} */}
          </div>

          {s3?.pdfUrl ? (
            <embed
              src={`${basePath}${s3.pdfUrl}`}
              type="application/pdf"
              className="w-full rounded-2xl"
              style={{ height: "80vh" }}
            />
          ) : (
            <div
              className="w-full rounded-lg border border-neutral-800 flex items-center justify-center"
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
