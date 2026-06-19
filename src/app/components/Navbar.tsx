import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  type NavLink = {
    id: string;
    title: string;
    url: string;
  };
  const navlinks: NavLink[] = [
    { id: "1", title: "Projects", url: "/projects" },
    { id: "2", title: "Solutions", url: "/solutions" },
    { id: "3", title: "Workflow", url: "/workflow" },
    { id: "4", title: "Pricing", url: "/pricing" },
  ];

  return (
    <div className="font-DMSans text-sm fixed top-0 text-white w-full border-b border-neutral-800 z-50 h-20">
      <div className="flex items-center h-full px-12 bg-neutral-950">
        {/* <div className="flex items-center h-full px-12 bg-neutral-950/70 backdrop-blur-sm"> */}
        <Link href={"/"} className="flex cursor-none">
          <div className="relative w-15 h-15" style={{ perspective: "800px" }}>
            <Image
              src="/logo-animation/bp-logo-back-animation.png"
              width={60}
              height={60}
              alt=""
              className="logo-swoosh absolute inset-0"
              style={{
                animation: "logo-swoosh-pulse 12s ease-in-out infinite",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                animation: "logo-swoosh-pulse 12s ease-in-out infinite",
              }}
            >
              <Image
                src="/logo-animation/b-logo.png"
                width={60}
                height={60}
                alt="BloomPoint logo"
                className="logo-letter"
                style={{
                  animation: "logo-flip 12s ease-in-out infinite",
                  transformOrigin: "16px center",
                }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="text-xl font-bold pl-1">
              bloom
              <span className="text-yellow">Point</span>
            </h1>
          </div>
        </Link>

        <div className="flex ml-auto">
          {navlinks.map((l, i) => (
            <Link
              key={i}
              href={l.url}
              className="text-neutral-400 hover:text-white px-4 transition duration-300 cursor-none"
            >
              {l.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
