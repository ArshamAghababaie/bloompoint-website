import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "#solutions", label: "Solutions" },
  { href: "#workflow", label: "Our Workflow" },
  // { href: '#offer', label: 'What We Offer' },
  { href: "/pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const solutionLinks = [
  { href: "#solutions", label: "Path" },
  { href: "#solutions", label: "Circle" },
];

const contactLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#bookacall", label: "Book a Call" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        {/* Brand */}
        <div>
          <div className="footer-brand-name">
            Bloom<span>Point</span>
          </div>
          <p className="footer-tagline">
            Empowering businesses to grow through social connection, strategic
            collaboration, and community impact.
          </p>
          <a href="mailto:hello@bloompoint.io" className="footer-email">
            hello@bloompoint.io
          </a>
        </div>

        {/* Navigate */}
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <div className="footer-col-title">Solutions</div>
          <ul className="footer-links">
            {solutionLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 BloomPoint. All rights reserved.
        </span>
        <div className="footer-socials">
          <Link href="#">LinkedIn</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
