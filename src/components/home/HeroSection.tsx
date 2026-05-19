"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SCHOOL, UNSPLASH_IMAGES } from "@/lib/constants";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      [line1Ref.current, line2Ref.current],
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", stagger: 0.15 }
    )
      .fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 8, ease: "power1.out" }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div ref={imgRef} className="absolute inset-0">
        <Image
          src={UNSPLASH_IMAGES.hero}
          alt="Howard Convent School Campus"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 pb-20 md:pb-28">
        <p
          ref={subRef}
          className="text-white/60 text-xs tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {SCHOOL.board} · {SCHOOL.address.city}, {SCHOOL.address.state} · {SCHOOL.established}
        </p>

        <h1
          className="text-white font-normal leading-[1.0] mb-8 overflow-hidden"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 110px)" }}
        >
          <span ref={line1Ref} className="block">Where Knowledge</span>
          <span ref={line2Ref} className="block text-[var(--accent)]">Becomes Character</span>
        </h1>

        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white text-white text-sm font-semibold tracking-wide transition-all hover:bg-white hover:text-[var(--deep)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Academics
          </Link>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-white text-sm font-semibold tracking-wide transition-all hover:brightness-90"
            style={{ fontFamily: "var(--font-heading)", backgroundColor: "var(--accent)" }}
          >
            Apply for Admission
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-white/30 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 relative overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              height: "50%",
              backgroundColor: "var(--accent)",
              animation: "scrollIndicator 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
