import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Performing Arts & Music | Howard Convent School, Kanth" },
  alternates: { canonical: "/life-at-howard/arts" },
  description: "Creative expression through dance, drama, music, and visual arts at Howard Convent Sr. Sec. School.",
};

const artForms = [
  { name: "Classical Dance", icon: "💃" },
  { name: "Western Dance", icon: "🕺" },
  { name: "Drama & Theatre", icon: "🎭" },
  { name: "Vocal Music", icon: "🎵" },
  { name: "Instrumental Music", icon: "🎶" },
  { name: "Visual Arts & Painting", icon: "🎨" },
  { name: "Pottery & Craft", icon: "🏺" },
  { name: "Annual Cultural Events", icon: "🌟" },
];

export default function ArtsPage() {
  return (
    <>
      <PageHero
        title="Performing Arts & Music"
        subtitle="Where creativity finds its voice."
        image={IMAGES.arts}
        breadcrumbs={[
          { label: "Life at Howard", href: "/life-at-howard" },
          { label: "Arts", href: "/life-at-howard/arts" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading label="Arts Programme" title="Expression. Creativity. Excellence." className="mb-8" />
              <div
                className="space-y-5 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                <p>
                  The arts are not an extra at Howard Convent — they are an essential part of who we are.
                  Our performing arts and music programme gives every student a creative outlet, develops
                  emotional intelligence, builds confidence, and celebrates the rich cultural heritage of India.
                </p>
                <p>
                  From our annual cultural festivals to weekly music and art sessions, students at Howard
                  are constantly encouraged to explore, create, and perform. Our experienced faculty in dance,
                  drama, music, and visual arts guide students to discover their unique artistic voice.
                </p>
                <p>
                  Annual events including our School Day celebrations, Independence Day performances, and
                  inter-school cultural competitions give students a platform to shine and share their
                  creative talents with the wider community.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: IMAGES.arts, alt: "Students drawing posters at the poster-making competition" },
                { src: IMAGES.posterMaking2, alt: "Students colouring their posters at a long table" },
                { src: IMAGES.classroom, alt: "Students sketching during the poster-making competition" },
                { src: IMAGES.about, alt: "Students displaying their finished posters outside the school" },
              ].map((img) => (
                <div key={img.src} className="relative h-48 overflow-hidden rounded-sm">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Art forms */}
          <div className="mt-16">
            <h3
              className="text-2xl font-normal mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              What We Offer
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {artForms.map((art, i) => (
                <div
                  key={i}
                  className="p-5 text-center border"
                  style={{ borderColor: "var(--muted)" }}
                >
                  <span className="text-3xl mb-3 block">{art.icon}</span>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
                  >
                    {art.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
