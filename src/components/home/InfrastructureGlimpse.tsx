"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UNSPLASH_IMAGES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const BENTO = [
  { src: UNSPLASH_IMAGES.campus1, label: "Main Campus", large: true },
  { src: UNSPLASH_IMAGES.library, label: "Library" },
  { src: UNSPLASH_IMAGES.lab, label: "Science Lab" },
  { src: UNSPLASH_IMAGES.playground, label: "Playground" },
  { src: UNSPLASH_IMAGES.classroom, label: "Classrooms" },
];

export default function InfrastructureGlimpse() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            label="Infrastructure"
            title="A Campus Built to Inspire"
            subtitle="Modern facilities designed to support every dimension of student growth."
          />
          <Button href="/infrastructure" variant="ghost" className="flex-shrink-0">
            See Full Campus →
          </Button>
        </div>

        {/* Bento Grid
            Mobile:  2-col, large spans full width (col-span-2), smalls in 2×2 below
            Desktop: 4-col 2-row, large = left 2 cols × 2 rows, smalls = right 2 cols × 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Large image */}
          <div
            className="relative col-span-2 md:row-span-2 h-72 md:h-[500px] overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={BENTO[0].src}
              alt={BENTO[0].label}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{ background: "rgba(0,0,0,0.4)", opacity: hoveredIndex === 0 ? 1 : 0 }}
            />
            <div
              className="absolute bottom-4 left-4 px-3 py-1.5 transition-all duration-300"
              style={{
                backgroundColor: "var(--accent)",
                opacity: hoveredIndex === 0 ? 1 : 0,
                transform: hoveredIndex === 0 ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <span className="text-white text-xs font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                {BENTO[0].label}
              </span>
            </div>
          </div>

          {/* 4 small images — 2×2 grid in the right 2 columns on desktop */}
          {BENTO.slice(1).map((item, i) => (
            <div
              key={i + 1}
              className="relative h-40 md:h-[244px] overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: "rgba(0,0,0,0.4)", opacity: hoveredIndex === i + 1 ? 1 : 0 }}
              />
              <div
                className="absolute bottom-3 left-3 px-2.5 py-1 transition-all duration-300"
                style={{
                  backgroundColor: "var(--accent)",
                  opacity: hoveredIndex === i + 1 ? 1 : 0,
                  transform: hoveredIndex === i + 1 ? "translateY(0)" : "translateY(6px)",
                }}
              >
                <span className="text-white text-xs font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
