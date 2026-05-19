import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Co-curricular Activities",
  description: "Clubs, competitions, community service, and enrichment activities at Howard Convent Sr. Sec. School.",
};

const clubs = [
  { name: "Science Club", description: "Experiments, projects, and exploration beyond the curriculum." },
  { name: "Literary Club", description: "Reading, writing, debating, and celebrating the power of words." },
  { name: "Eco Club", description: "Environmental awareness, sustainability projects, and Green School initiatives." },
  { name: "Mathematics Club", description: "Olympiad preparation, puzzle-solving, and mathematical exploration." },
  { name: "Community Service", description: "Social responsibility initiatives and community outreach programmes." },
  { name: "Quiz Club", description: "General knowledge, competitive quizzing, and inter-school events." },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Co-curricular Activities"
        subtitle="Learning that goes far beyond the textbook."
        image={UNSPLASH_IMAGES.activities}
        breadcrumbs={[
          { label: "Life at Howard", href: "/life-at-howard" },
          { label: "Activities", href: "/life-at-howard/activities" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Clubs & Activities"
            title="Explore. Engage. Excel."
            subtitle="Howard Convent offers a rich range of co-curricular activities designed to broaden students' horizons and develop well-rounded, engaged citizens."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clubs.map((club, i) => (
              <div
                key={i}
                className="p-7 border hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: "var(--muted)" }}
              >
                <h3
                  className="text-xl font-normal mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {club.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                >
                  {club.description}
                </p>
              </div>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              UNSPLASH_IMAGES.activities,
              UNSPLASH_IMAGES.gallery2,
              UNSPLASH_IMAGES.gallery5,
              UNSPLASH_IMAGES.gallery8,
            ].map((img, i) => (
              <div key={i} className="relative h-48 overflow-hidden rounded-sm">
                <Image src={img} alt={`Activity ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
