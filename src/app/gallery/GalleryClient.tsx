"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/lib/constants";

const GALLERY_ITEMS = [
  { src: IMAGES.campus1, label: "Main Campus", category: "Campus", alt: "Main gate and front of Howard Convent School, Kanth" },
  { src: IMAGES.arts, label: "Poster Making", category: "Events", alt: "Students drawing posters at the Integrity – A Way of Life poster-making competition" },
  { src: IMAGES.computerLab, label: "Computer Lab", category: "Academics", alt: "Students working at desks in the school computer lab" },
  { src: IMAGES.campus2, label: "School Building", category: "Campus", alt: "Howard Convent School building with the school name board" },
  { src: IMAGES.pool, label: "Swimming Pool", category: "Sports", alt: "On-campus swimming pool at Howard Convent School" },
  { src: IMAGES.activities, label: "Poster Exhibition", category: "Events", alt: "Students holding up their integrity posters in the school hall" },
  { src: IMAGES.council, label: "Certificate Presentation", category: "Events", alt: "Teacher presenting a certificate to a student at the school entrance" },
  { src: IMAGES.campus5, label: "Campus Grounds", category: "Sports", alt: "Open grounds and tree-lined lawn on the Howard Convent campus" },
  { src: IMAGES.classroom, label: "Poster Making", category: "Events", alt: "Students sketching at a long table during the poster-making competition" },
  { src: IMAGES.diya1, label: "Diya Decoration", category: "Events", alt: "Lit diyas arranged in a pattern on the school floor" },
  { src: IMAGES.campus3, label: "Campus View", category: "Campus", alt: "Side view of the Howard Convent School building" },
  { src: IMAGES.about, label: "Young Artists", category: "Events", alt: "Students displaying their posters in front of the Howard Convent School wall" },
  { src: IMAGES.office, label: "Reception & Office", category: "Campus", alt: "School reception and front office" },
  { src: IMAGES.posterMaking2, label: "Ideas Taking Shape", category: "Events", alt: "Students colouring their posters during the competition" },
  { src: IMAGES.diya2, label: "Diya Decoration", category: "Events", alt: "Students lighting diyas arranged on the floor in front of the school backdrop" },
  { src: IMAGES.posterGroup2, label: "Our Budding Artists", category: "Events", alt: "Group of students with their integrity posters outside the school" },
];

const FILTERS = ["All", "Campus", "Events", "Sports", "Academics"];

export default function GalleryClient() {
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
        image={IMAGES.campus1}
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
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
                    alt={item.alt}
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
              alt={filtered[lightboxIndex].alt}
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
