"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, image, breadcrumbs }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const els = [titleRef.current, subRef.current].filter(Boolean);
    gsap.fromTo(
      els,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", stagger: 0.12, delay: 0.2 }
    );
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 6, ease: "power1.out" }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-[60vh] min-h-[400px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div ref={imgRef} className="absolute inset-0">
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 pb-16 pt-32">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 mb-4 text-white/40 text-xs" style={{ fontFamily: "var(--font-heading)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[var(--accent)]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Gold line */}
        <span className="gold-line mb-4" />

        <h1
          ref={titleRef}
          className="text-white text-5xl md:text-7xl font-normal leading-[1.05] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subRef}
            className="text-white/60 text-lg max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
