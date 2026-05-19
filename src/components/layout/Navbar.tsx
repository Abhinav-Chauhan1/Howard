"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SCHOOL } from "@/lib/constants";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 flex-shrink-0 relative">
              <Image
                src="/logo.png"
                alt={SCHOOL.shortName}
                fill
                sizes="56px"
                className="object-contain"
                priority
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
          <div className="flex items-center gap-4">
            {/* Admissions badge */}
            <Link
              href="/admissions"
              className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all hover:brightness-90"
              style={{
                backgroundColor: "var(--accent)",
                color: "white",
                fontFamily: "var(--font-heading)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Admissions Open
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1.5 p-2 transition-opacity hover:opacity-70"
              aria-label="Open menu"
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

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
