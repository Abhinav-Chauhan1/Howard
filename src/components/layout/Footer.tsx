"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SCHOOL } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/components/ui/SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Admissions", href: "/admissions" },
  { label: "Mandatory Public Disclosure", href: "/mandatory-public-disclosure" },
];

const academicLinks = [
  { label: "Curriculum", href: "/academics/curriculum" },
  { label: "Methodology", href: "/academics/methodology" },
  { label: "Admission Procedure", href: "/academics/admission" },
  { label: "Board Results", href: "/academics/results" },
  { label: "Uniform", href: "/academics/uniform" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/mandatory-public-disclosure") return null;
  return (
    <footer style={{ backgroundColor: "var(--muted)" }}>
      <div className="max-w-screen-xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Col 1: Logo + tagline */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-5">
              <div className="relative w-20 h-20 mb-4">
                <Image src="/logo.png" alt={SCHOOL.shortName} fill sizes="80px" className="object-contain" />
              </div>
              <span className="font-semibold text-base block text-[var(--text)]" style={{ fontFamily: "var(--font-heading)" }}>
                Howard Convent
              </span>
              <span className="text-xs tracking-wider uppercase block mt-0.5 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>
                Sr. Sec. School
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-[var(--text)]/70" style={{ fontFamily: "var(--font-body)" }}>
              {SCHOOL.tagline}. A CBSE-affiliated institution committed to holistic education in Kanth, Moradabad.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SCHOOL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wide transition-all hover:brightness-90"
                style={{ backgroundColor: "var(--accent)", color: "white", fontFamily: "var(--font-heading)" }}
              >
                WhatsApp Us
              </a>
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SCHOOL.shortName} on ${label}`}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[var(--text)]/20 text-[var(--text)]/75 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-0.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-2 text-sm text-[var(--text)]/75 hover:text-[var(--text)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academics */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>
              Academics
            </h4>
            <ul className="flex flex-col gap-0.5">
              {academicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-2 text-sm text-[var(--text)]/75 hover:text-[var(--text)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs tracking-wide uppercase mb-1 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>Address</p>
                <p className="text-sm leading-relaxed text-[var(--text)]/75" style={{ fontFamily: "var(--font-body)" }}>
                  {SCHOOL.address.line1},<br />
                  {SCHOOL.address.line2},<br />
                  {SCHOOL.address.city}, {SCHOOL.address.state}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-wide uppercase mb-1 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>Phone</p>
                <a href={`tel:${SCHOOL.phone}`} className="inline-block py-2 text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium break-all" style={{ fontFamily: "var(--font-body)" }}>
                  {SCHOOL.phone}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-wide uppercase mb-1 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>Email</p>
                <a href={`mailto:${SCHOOL.email}`} className="inline-block py-2 text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium break-all" style={{ fontFamily: "var(--font-body)" }}>
                  {SCHOOL.email}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-wide uppercase mb-1 text-[var(--text)]/50" style={{ fontFamily: "var(--font-heading)" }}>Hours</p>
                <p className="text-sm text-[var(--text)]/75" style={{ fontFamily: "var(--font-body)" }}>
                  {SCHOOL.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[var(--text)]/10">
        <div className="max-w-screen-xl mx-auto px-6 pt-5 pb-24 sm:pb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text)]/50" style={{ fontFamily: "var(--font-body)" }}>
            © 2026 Howard Convent School
          </p>
          <p className="text-xs text-[var(--text)]/50" style={{ fontFamily: "var(--font-body)" }}>
            Developed with ❤️ by{" "}
            <a
              href={SCHOOL.builtByUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium"
            >
              {SCHOOL.builtBy}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
