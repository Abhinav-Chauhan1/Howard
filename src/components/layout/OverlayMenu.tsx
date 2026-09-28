"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS, SCHOOL, IMAGES } from "@/lib/constants";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OverlayMenu({ isOpen, onClose }: OverlayMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useGSAP(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(overlayRef.current, { display: "flex" });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      const links = linksRef.current?.querySelectorAll(".nav-link");
      if (links) {
        gsap.fromTo(
          links,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.08,
            delay: 0.2,
          }
        );
      }
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { display: "none" });
          }
        },
      });
    }
  }, { dependencies: [isOpen] });

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9990] hidden flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: "var(--deep)" }}
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
          <div ref={linksRef} className="flex flex-col gap-1 md:gap-2">
            {NAV_LINKS.map((link, i) => {
              const open = hoveredIndex === i || expandedIndex === i;
              return (
                <div
                  key={link.href}
                  className="nav-link group"
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
                        className="md:hidden flex items-center justify-center w-11 h-11 flex-shrink-0 text-white/60"
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
                          className="py-2.5 md:py-0 text-white/60 hover:text-[var(--accent)] transition-colors text-base md:text-sm tracking-wide"
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
              style={{ backgroundColor: "var(--accent)", color: "white", fontFamily: "var(--font-heading)" }}
            >
              Admissions Open {SCHOOL.admissionSession} →
            </Link>
            <div>
              <p
                className="text-white/40 text-sm tracking-wider uppercase mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {SCHOOL.board}
              </p>
              <a
                href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`}
                className="inline-block py-2 text-[var(--accent)] hover:text-white transition-colors text-lg"
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
            className="text-white/30 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Campus
          </p>
          <div className="relative w-full h-64 overflow-hidden rounded-sm">
            <Image
              src={IMAGES.campus1}
              alt="Howard Convent Campus"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
        <div>
          <p
            className="text-white/50 text-sm mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {SCHOOL.address.full}
          </p>
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {SCHOOL.hours}
          </p>
        </div>
      </div>
    </div>
  );
}
