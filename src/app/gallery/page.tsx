"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { UNSPLASH_IMAGES } from "@/lib/constants";

const GALLERY_ITEMS = [
  { src: UNSPLASH_IMAGES.campus1, label: "Main Campus", category: "Campus" },
  { src: UNSPLASH_IMAGES.library, label: "Library", category: "Campus" },
  { src: UNSPLASH_IMAGES.lab, label: "Science Lab", category: "Academics" },
  { src: UNSPLASH_IMAGES.classroom, label: "Classroom", category: "Academics" },
  { src: UNSPLASH_IMAGES.sports, label: "Sports Day", category: "Sports" },
  { src: UNSPLASH_IMAGES.playground, label: "Playground", category: "Sports" },
  { src: UNSPLASH_IMAGES.arts, label: "Cultural Event", category: "Events" },
  { src: UNSPLASH_IMAGES.activities, label: "Co-curricular", category: "Events" },
  { src: UNSPLASH_IMAGES.council, label: "Students Council", category: "Events" },
  { src: UNSPLASH_IMAGES.campus2, label: "School Building", category: "Campus" },
  { src: UNSPLASH_IMAGES.campus3, label: "Campus View", category: "Campus" },
  { src: UNSPLASH_IMAGES.gallery1, label: "Student Activity", category: "Events" },
  { src: UNSPLASH_IMAGES.gallery2, label: "Sports Event", category: "Sports" },
  { src: UNSPLASH_IMAGES.gallery3, label: "Class Room", category: "Academics" },
  { src: UNSPLASH_IMAGES.gallery4, label: "Campus", category: "Campus" },
  { src: UNSPLASH_IMAGES.gallery5, label: "School Day", category: "Events" },
  { src: UNSPLASH_IMAGES.gallery6, label: "Sports", category: "Sports" },
  { src: UNSPLASH_IMAGES.gallery7, label: "Arts Show", category: "Events" },
  { src: UNSPLASH_IMAGES.gallery8, label: "Activity", category: "Events" },
];

const FILTERS = ["All", "Campus", "Events", "Sports", "Academics"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments that define the Howard experience."
        image={UNSPLASH_IMAGES.campus1}
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2 text-sm font-medium transition-all"
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: activeFilter === filter ? "var(--deep)" : "var(--muted)",
                  color: activeFilter === filter ? "white" : "var(--text)",
                }}
                data-cursor
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-sm break-inside-avoid cursor-pointer group"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative" style={{ paddingBottom: i % 3 === 0 ? "130%" : i % 3 === 1 ? "75%" : "100%" }}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                  >
                    <span
                      className="text-white text-xs font-semibold px-2 py-1"
                      style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-heading)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-12 text-sm"
            style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.45 }}
          >
            More photos coming soon
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <line x1="6" y1="6" x2="26" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="26" y1="6" x2="6" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].label}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh]"
            />
            <div className="absolute bottom-4 left-4">
              <span
                className="text-white text-sm font-semibold px-3 py-1"
                style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-heading)" }}
              >
                {filtered[lightboxIndex].label}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
