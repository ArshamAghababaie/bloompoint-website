"use client";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "../../../lib/basePath";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "#solutions", label: "Solutions" },
  { href: "#workflow", label: "Workflow" },
  // { href: '#offer', label: 'What We Offer' },
  { href: "/pricing", label: "Pricing" },
  // { href: "#faq", label: "FAQ" },
];

// const solutionLinks = [
//   { href: "#solutions", label: "Path" },
//   { href: "#solutions", label: "Circle" },
// ];

const contactLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#bookAMeeting", label: "Book A Meeting" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-neutral-950">
      <div className="footer-top">
        {/* Brand */}
        <div>
          <div className="flex text-2xl font-DMSans font-bold items-center mb-2">
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
            {/* <p className="text-white pt-0">
              bloom<span className="text-yellow">Point</span>
            </p> */}
          </div>
          <p className="footer-tagline">
            Empowering businesses to grow through social connection, strategic
            collaboration, and community impact.
          </p>
          <a
            href="mailto:arsham.aghababaie@gamil.com"
            className="footer-email cursor-none"
          >
            info@bloompoint.com
          </a>
        </div>

        {/* Navigate */}
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                {link.href.startsWith("#") ? (
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.href.slice(1));
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = `${basePath}/${link.href}`;
                      }
                    }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link href={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        {/* <div>
          <div className="footer-col-title">Solutions</div>
          <ul className="footer-links">
            {solutionLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact */}
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            {contactLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("#") ? (
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.href.slice(1));
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = `${basePath}/${link.href}`;
                      }
                    }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link href={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <span className="footer-copy"> */}
        <span className="font-DMSans text-xs text-neutral-600 tracking-wider">
          © 2026 BloomPoint. All rights reserved.
          {/* it should be change to dynamic style. */}
        </span>
        {/* <div className="footer-socials">
          <Link href="#">LinkedIn</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Privacy Policy</Link>
        </div> */}
      </div>
    </footer>
  );
}
