"use client";

import Link from "next/link";
import Image from "next/image";
import { basePath } from "../../../lib/basePath";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "#solutions", label: "Solutions" },
  { href: "/workflow", label: "AI Workflow" },
  { href: "/surveys", label: "Surveys" },
  { href: "/pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const contactLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "mailto:info@bloompoint.world", label: "Email" },
  { href: "#bookAMeeting", label: "Book A Meeting" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-neutral-950 px-15 pt-20 pb-10 border-t border-[rgba(245,245,240,0.08)] max-[767px]:px-6 max-[767px]:pt-15 max-[767px]:pb-7.5">
      <div className="grid grid-cols-[2fr_1fr] gap-15 pb-15 border-b border-[rgba(245,245,240,0.08)] max-[1023px]:grid-cols-2 max-[1023px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10 max-[767px]:pb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-2 text-2xl font-DMSans font-bold">
            <Image
              src={`${basePath}/bp-logo-white.png`}
              alt="BloomPoint Logo"
              width={70}
              height={50}
            />

            <Image
              src={`${basePath}/bloomPoint-text.png`}
              width={120}
              height={120}
              alt="BloomPoint logo"
              className="mt-2 ml-1"
            />
          </div>

          <p className="max-w-65 text-[0.85rem] font-light leading-[1.7] text-[rgba(245,245,240,0.4)]">
            BloomPoint is a B2B platform that enables businesses, schools, third
            places and cities to design, regenerate, and manage communities for
            new outcomes.
          </p>

          <a
            href="mailto:info@bloompoint.world"
            className="block mt-3 font-DMSans text-[0.8rem] tracking-[0.06em] text-yellow no-underline cursor-none"
          >
            info@bloompoint.world
          </a>
        </div>

        {/* Navigate + Contact */}
        <div className="grid grid-cols-2 gap-15 max-[1023px]:gap-10 max-[767px]:gap-10">
          {/* Navigate */}
          <div>
            <div className="mb-5 font-DMSans text-[0.65rem] tracking-[0.2em] uppercase text-yellow">
              Navigate
            </div>

            <ul className="list-none">
              {navLinks.map((link) => (
                <li key={link.href + link.label} className="mb-2.5">
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.href.slice(1));

                        if (el) {
                          // adjust this value to control how far from the top the element stops
                          const offset = 80;

                          const top =
                            window.scrollY +
                            el.getBoundingClientRect().top -
                            offset;

                          window.scrollTo({
                            top,
                            behavior: "smooth",
                          });
                        } else {
                          window.location.href = `${basePath}/${link.href}`;
                        }
                      }}
                      className="text-[0.85rem] text-[rgba(245,245,240,0.45)] no-underline transition-colors duration-200 cursor-none hover:text-white"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[0.85rem] text-[rgba(245,245,240,0.45)] no-underline transition-colors duration-200 cursor-none hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-5 font-DMSans text-[0.65rem] tracking-[0.2em] uppercase text-yellow">
              Contact
            </div>

            <ul className="list-none">
              {contactLinks.map((link) => (
                <li key={link.label} className="mb-2.5">
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.href.slice(1));

                        if (el) {
                          // adjust this value to control how far from the top the element stops
                          const offset = 80;

                          const top =
                            window.scrollY +
                            el.getBoundingClientRect().top -
                            offset;

                          window.scrollTo({
                            top,
                            behavior: "smooth",
                          });
                        } else {
                          window.location.href = `${basePath}/${link.href}`;
                        }
                      }}
                      className="text-[0.85rem] text-[rgba(245,245,240,0.45)] no-underline transition-colors duration-200 cursor-none hover:text-white"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[0.85rem] text-[rgba(245,245,240,0.45)] no-underline transition-colors duration-200 cursor-none hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-start max-[767px]:justify-center items-center pt-8 max-[767px]:items-start">
        <span className="font-DMSans text-xs tracking-wider text-neutral-600">
          © {new Date().getFullYear()} BloomPoint. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
