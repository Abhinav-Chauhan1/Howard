import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { LEADERSHIP, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the visionary leadership team at Howard Convent Sr. Sec. School — guiding the institution towards excellence.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Our Leadership"
        subtitle="The people who make Howard Convent what it is."
        image={UNSPLASH_IMAGES.campus5}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Leadership", href: "/about/leadership" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Guiding Howard"
            title="Visionary Leadership, Enduring Values"
            subtitle="Our leadership team brings together decades of experience in education, administration, and community building."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {LEADERSHIP.map((leader, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-48 h-64 overflow-hidden rounded-sm mb-5">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <span
                  className="text-[var(--accent)] text-xs tracking-widest uppercase font-semibold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {leader.designation}
                </span>
                <h3
                  className="text-2xl font-normal mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {leader.name}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.6 }}
                >
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
