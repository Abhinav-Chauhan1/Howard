import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Life at Howard",
  description: "Discover the vibrant life beyond academics at Howard Convent — sports, arts, activities, and student leadership.",
};

const categories = [
  {
    title: "Athletics & Sports",
    description: "From cricket to football to athletics — our sports programme builds fitness, discipline, and team spirit.",
    image: UNSPLASH_IMAGES.sports,
    href: "/life-at-howard/sports",
  },
  {
    title: "Performing Arts & Music",
    description: "Dance, drama, music, and visual arts — creative expression at the heart of the Howard experience.",
    image: UNSPLASH_IMAGES.arts,
    href: "/life-at-howard/arts",
  },
  {
    title: "Co-curricular Activities",
    description: "Clubs, competitions, and community initiatives that broaden every student's horizons.",
    image: UNSPLASH_IMAGES.activities,
    href: "/life-at-howard/activities",
  },
  {
    title: "Students Council",
    description: "A student-led body that cultivates leadership, responsibility, and a sense of service.",
    image: UNSPLASH_IMAGES.council,
    href: "/life-at-howard/council",
  },
];

export default function LifeAtHowardPage() {
  return (
    <>
      <PageHero
        title="Life at Howard"
        subtitle="Where learning happens everywhere — in the classroom and beyond."
        image={UNSPLASH_IMAGES.activities}
        breadcrumbs={[{ label: "Life at Howard", href: "/life-at-howard" }]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Beyond the Classroom"
            title="A Richer School Experience"
            subtitle="At Howard Convent, education extends far beyond textbooks. We nurture every dimension of our students — physical, creative, social, and emotional."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group relative overflow-hidden rounded-sm block h-80"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3
                    className="text-white text-3xl font-normal mb-2 group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cat.description}
                  </p>
                  <span
                    className="inline-block mt-4 text-[var(--accent)] text-xs tracking-widest uppercase font-semibold transition-all group-hover:translate-x-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
