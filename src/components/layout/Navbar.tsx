"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SCHOOL } from "@/lib/constants";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/mandatory-public-disclosure") return null;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9980] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--muted)" : "none",
        }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 relative rounded-full bg-white shadow-sm">
              <Image
                src="/logo.png"
                alt={SCHOOL.shortName}
                fill
                sizes="56px"
                className="object-contain"
                loading="eager"
              />
            </div>
            <span
              className="font-semibold text-sm leading-tight hidden sm:block transition-colors group-hover:text-[var(--accent)]"
              style={{
                fontFamily: "var(--font-heading)",
                color: scrolled ? "var(--text)" : "white",
                textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              Howard Convent
              <br />
              <span className="font-normal opacity-70 text-xs">Sr. Sec. School</span>
            </span>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Admissions badge */}
            <Link
              href="/admissions"
              className="flex items-center gap-2 px-4 py-3 lg:py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all hover:brightness-90"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--on-accent)",
                fontFamily: "var(--font-heading)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--on-accent)] animate-pulse" />
              Admissions<span className="hidden sm:inline"> Open</span>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col items-center justify-center gap-1.5 w-11 h-11 -mr-2 transition-opacity hover:opacity-70"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-6 h-[1.5px] transition-colors"
                  style={{
                    backgroundColor: scrolled ? "var(--text)" : "white",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      <OverlayMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
}
