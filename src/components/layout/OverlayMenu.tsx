"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS, SCHOOL, UNSPLASH_IMAGES } from "@/lib/constants";
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
      {/* Left — nav links */}
      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 py-16 overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="6" y1="6" x2="26" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="6" x2="6" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div ref={linksRef} className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <div
              key={link.href}
              className="nav-link group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="block font-display text-white/90 hover:text-[var(--accent)] transition-colors leading-none"
                style={{ fontSize: "clamp(36px, 6vw, 72px)", fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {link.label}
              </Link>
              {link.children && hoveredIndex === i && (
                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1 pl-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="text-white/50 hover:text-[var(--accent)] transition-colors text-sm tracking-wide"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p
            className="text-white/40 text-sm tracking-wider uppercase mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SCHOOL.board}
          </p>
          <a
            href={SCHOOL.whatsapp}
            className="text-[var(--accent)] hover:text-white transition-colors text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SCHOOL.phone}
          </a>
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
              src={UNSPLASH_IMAGES.campus1}
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
