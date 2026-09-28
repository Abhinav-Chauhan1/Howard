"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/lib/constants";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/data/gallery";

const FILTERS = ["All", ...GALLERY_CATEGORIES] as const;

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const count = (filter: (typeof FILTERS)[number]) =>
    filter === "All" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((item) => item.category === filter).length;

  const close = useCallback(() => setLightboxIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightboxIndex((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, step]);

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
                onClick={() => {
                  setActiveFilter(filter);
                  setLightboxIndex(null);
                }}
                aria-pressed={activeFilter === filter}
                className="px-5 py-2 text-sm font-medium transition-all"
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: activeFilter === filter ? "var(--deep)" : "var(--muted)",
                  color: activeFilter === filter ? "white" : "var(--text)",
                }}
                data-cursor
              >
                {filter}
                <span style={{ opacity: 0.6, marginLeft: 6 }}>{count(filter)}</span>
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={item.src}
                className="relative overflow-hidden rounded-sm break-inside-avoid cursor-pointer group"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative" style={{ aspectRatio: `${item.width} / ${item.height}` }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
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
            New photos are added after every school event
          </p>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={filtered[lightboxIndex].label}
        >
          <button
            className="absolute z-10 top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={close}
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <line x1="6" y1="6" x2="26" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="26" y1="6" x2="6" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {filtered.length > 1 && (
            <>
              <button
                className="absolute z-10 left-3 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white/80 hover:text-white transition-colors p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <polyline points="20,6 10,16 20,26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="absolute z-10 right-3 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white/80 hover:text-white transition-colors p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <polyline points="12,6 22,16 12,26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={filtered[lightboxIndex].width}
              height={filtered[lightboxIndex].height}
              sizes="(min-width: 1024px) 896px, 100vw"
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
