"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SCHOOL, IMAGES } from "@/lib/constants";
import Image from "next/image";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Open/close is animated with CSS transitions (no GSAP), so the animation
// library is not loaded on every page just for the menu. `invisible` keeps
// the closed menu out of the tab order and the accessibility tree.
export default function OverlayMenu({ isOpen, onClose }: OverlayMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // Only fetch the desktop campus photo once the menu has been opened.
  const [hasOpened, setHasOpened] = useState(false);
  if (isOpen && !hasOpened) setHasOpened(true);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[9990] flex flex-col md:flex-row overflow-hidden transition-[opacity,visibility] duration-300 ease-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ backgroundColor: "var(--deep)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!isOpen}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 md:top-6 md:right-6 z-10 flex items-center justify-center w-12 h-12 text-white/70 hover:text-white transition-colors"
        aria-label="Close menu"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <line x1="6" y1="6" x2="26" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="6" x2="6" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Left — nav links. my-auto on the inner block centres it when it fits
          and lets the column scroll from the top when sections are expanded. */}
      <div className="flex-1 flex flex-col px-8 md:px-20 py-20 md:py-16 overflow-y-auto overscroll-contain" data-lenis-prevent>
        <div className="my-auto">
          <div className="flex flex-col gap-1 md:gap-2">
            {NAV_LINKS.map((link, i) => {
              const open = hoveredIndex === i || expandedIndex === i;
              return (
                <div
                  key={link.href}
                  className={`nav-link group transition-[opacity,transform] duration-700 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
                  style={{ transitionDelay: isOpen ? `${200 + i * 80}ms` : "0ms" }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-1 font-display text-white/90 hover:text-[var(--accent)] transition-colors leading-none"
                      style={{ fontSize: "clamp(32px, 6vw, 72px)", fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                    {/* Touch screens have no hover: a toggle reveals the sub-pages */}
                    {link.children && (
                      <button
                        type="button"
                        onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                        className="md:hidden flex items-center justify-center w-11 h-11 flex-shrink-0 text-white/75"
                        aria-expanded={expandedIndex === i}
                        aria-label={`${expandedIndex === i ? "Hide" : "Show"} ${link.label} pages`}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          {expandedIndex !== i && (
                            <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          )}
                        </svg>
                      </button>
                    )}
                  </div>
                  {link.children && open && (
                    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-1 mb-2 md:mb-0 md:mt-1 pl-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="py-2.5 md:py-0 text-white/75 hover:text-[var(--accent)] transition-colors text-base md:text-sm tracking-wide"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom info */}
          <div className="mt-10 md:mt-12 pt-8 border-t border-white/10 flex flex-col items-start gap-4">
            <Link
              href="/admissions"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all hover:brightness-90"
              style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: "var(--font-heading)" }}
            >
              Admissions Open {SCHOOL.admissionSession} →
            </Link>
            <div>
              <p
                className="text-white/75 text-sm tracking-wider uppercase mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {SCHOOL.board}
              </p>
              <a
                href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`}
                className="inline-block py-2 text-[var(--accent-soft)] hover:text-white transition-colors text-lg"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {SCHOOL.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right — info + image */}
      <div className="hidden md:flex w-[420px] flex-col justify-between p-12 border-l border-white/10">
        <div>
          <p
            className="text-white/75 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Campus
          </p>
          <div className="relative w-full h-64 overflow-hidden rounded-sm">
            {hasOpened && (
              <Image
                src={IMAGES.campus1}
                alt="Howard Convent Campus"
                fill
                sizes="360px"
                className="object-cover opacity-80"
              />
            )}
          </div>
        </div>
        <div>
          <p
            className="text-white/75 text-sm mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {SCHOOL.address.full}
          </p>
          <p
            className="text-white/75 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {SCHOOL.hours}
          </p>
        </div>
      </div>
    </div>
  );
}
