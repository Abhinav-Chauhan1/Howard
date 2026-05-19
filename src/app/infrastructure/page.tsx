import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { FACILITIES, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Infrastructure",
  description: "Explore the modern campus and world-class facilities at Howard Convent Sr. Sec. School, Kanth, Moradabad.",
};

const GALLERY_IMAGES = [
  { src: UNSPLASH_IMAGES.campus1, label: "Main Campus" },
  { src: UNSPLASH_IMAGES.library, label: "Library" },
  { src: UNSPLASH_IMAGES.lab, label: "Science Lab" },
  { src: UNSPLASH_IMAGES.classroom, label: "Smart Classroom" },
  { src: UNSPLASH_IMAGES.playground, label: "Playground" },
  { src: UNSPLASH_IMAGES.sports, label: "Sports Ground" },
  { src: UNSPLASH_IMAGES.campus3, label: "Campus View" },
  { src: UNSPLASH_IMAGES.campus4, label: "School Block" },
  { src: UNSPLASH_IMAGES.campus5, label: "Campus Grounds" },
  { src: UNSPLASH_IMAGES.campus2, label: "Building" },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        title="Our Campus"
        subtitle="A space designed to inspire learning in every corner."
        image={UNSPLASH_IMAGES.campus1}
        breadcrumbs={[{ label: "Infrastructure", href: "/infrastructure" }]}
      />

      {/* Gallery bento */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Campus Gallery"
            title="See Howard From Every Angle"
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Large image */}
            <div className="col-span-2 row-span-2 relative h-64 md:h-[300px] overflow-hidden rounded-sm group">
              <Image
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "rgba(0,0,0,0.4)" }}>
                <span className="text-white text-sm font-semibold px-3 py-1" style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-heading)" }}>
                  {GALLERY_IMAGES[0].label}
                </span>
              </div>
            </div>
            {GALLERY_IMAGES.slice(1, 9).map((img, i) => (
              <div key={i} className="relative h-36 overflow-hidden rounded-sm group">
                <Image src={img.src} alt={img.label} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  style={{ background: "rgba(0,0,0,0.4)" }}>
                  <span className="text-white text-xs font-semibold px-2 py-0.5" style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-heading)" }}>
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities list */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Facilities"
            title="Everything Our Students Need"
            subtitle="Our campus is equipped with modern, well-maintained facilities to support comprehensive student development."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-white rounded-sm border hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderColor: "var(--muted)" }}
              >
                <span className="text-3xl flex-shrink-0">{facility.icon}</span>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
                  >
                    {facility.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                  >
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
