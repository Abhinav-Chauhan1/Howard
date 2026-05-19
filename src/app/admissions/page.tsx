import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { SCHOOL, STREAMS, FAQ, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admissions 2025–26",
  description: "Apply for admission at Howard Convent Sr. Sec. School for the 2025–26 academic year. Limited seats available across all streams.",
};

const WHY_HOWARD = [
  {
    icon: "🏆",
    title: "Academic Excellence",
    description: "Consistent 100% board results with a track record of top performers across all streams.",
  },
  {
    icon: "👩‍🏫",
    title: "Expert Faculty",
    description: "40+ certified, experienced teachers committed to nurturing every student's potential.",
  },
  {
    icon: "🏛️",
    title: "Modern Infrastructure",
    description: "Smart classrooms, science labs, library, sports grounds — a campus built to inspire.",
  },
  {
    icon: "🌱",
    title: "Holistic Development",
    description: "Sports, arts, activities, and leadership programmes ensuring all-round student growth.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Begin Your Journey at Howard Convent"
        subtitle="Admissions Open for 2025–26 · Limited Seats Available"
        image={UNSPLASH_IMAGES.campus1}
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }]}
      />

      {/* Why Howard */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Why Choose Howard"
            title="An Education That Lasts a Lifetime"
            subtitle="Join a community that has been shaping exceptional individuals since our founding."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_HOWARD.map((reason, i) => (
              <div
                key={i}
                className="text-center p-8 border hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: "var(--muted)" }}
              >
                <span className="text-4xl mb-4 block">{reason.icon}</span>
                <h3
                  className="text-xl font-normal mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="How to Apply"
              title="Simple 5-Step Process"
              className="mb-12"
            />
            <Timeline />
          </div>
        </div>
      </section>

      {/* Streams */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Streams Available"
            title="Choose Your Academic Path"
            subtitle="We offer three streams at the Senior Secondary level — select the path that matches your aspirations."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STREAMS.map((stream, i) => (
              <div
                key={i}
                className="p-8 border"
                style={{ borderColor: "var(--muted)" }}
              >
                <span className="text-4xl mb-4 block">{stream.icon}</span>
                <h3
                  className="text-2xl font-normal mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {stream.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                >
                  {stream.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {stream.subjects.map((sub, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1"
                      style={{
                        backgroundColor: "var(--muted)",
                        fontFamily: "var(--font-heading)",
                        color: "var(--text)",
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Common Questions"
              title="Frequently Asked Questions"
              className="mb-10"
            />
            <Accordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--deep)" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <span
            className="text-[var(--accent)] text-xs tracking-[0.2em] uppercase font-semibold mb-4 block"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Admissions Open
          </span>
          <h2
            className="text-white text-5xl md:text-7xl font-normal mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Join Howard?
          </h2>
          <p
            className="text-white/60 text-lg mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Seats are limited. Reach out today to begin the admission process for 2025–26.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={SCHOOL.whatsapp} variant="gold" external>
              WhatsApp Us
            </Button>
            <Button href={`tel:${SCHOOL.phone}`} variant="outlined" external>
              Call {SCHOOL.phone}
            </Button>
          </div>
          <p
            className="text-white/30 text-xs mt-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Office Hours: {SCHOOL.hours}
          </p>
        </div>
      </section>
    </>
  );
}
