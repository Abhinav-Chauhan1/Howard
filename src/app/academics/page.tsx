import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AdmissionCTA from "@/components/ui/AdmissionCTA";
import Button from "@/components/ui/Button";
import { STREAMS, CLASS_LEVELS, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics",
  description: "Howard Convent's academic programme — from Pre-Primary to Senior Secondary. Science, Commerce, and Humanities streams with CBSE curriculum.",
};

const classDetails = [
  {
    level: "Pre-Primary",
    range: "Nursery – KG",
    description:
      "A play-based learning environment that nurtures curiosity, language, fine motor skills, and early numeracy in a warm, safe setting.",
  },
  {
    level: "Primary",
    range: "Class I – V",
    description:
      "Building strong foundational skills in literacy and numeracy through experiential, activity-based learning methods.",
  },
  {
    level: "Middle School",
    range: "Class VI – VIII",
    description:
      "Deepening subject knowledge across Languages, Mathematics, Science, and Social Science with project-based approaches.",
  },
  {
    level: "Secondary",
    range: "Class IX – X",
    description:
      "Rigorous CBSE board preparation with a focus on conceptual clarity, examination strategy, and skill development.",
  },
  {
    level: "Senior Secondary",
    range: "Class XI – XII",
    description:
      "Three specialised streams — Science, Commerce, Humanities — preparing students for higher education and professional careers.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="A curriculum designed for depth, curiosity, and real-world readiness."
        image={UNSPLASH_IMAGES.classroom}
        breadcrumbs={[{ label: "Academics", href: "/academics" }]}
      />

      {/* Class Levels */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Our Curriculum"
            title="From First Steps to Final Years"
            subtitle="A comprehensive educational journey spanning Pre-Primary through Senior Secondary."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classDetails.map((cls, i) => (
              <div
                key={i}
                className="p-8 border hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: "var(--muted)", backgroundColor: "var(--bg)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-2xl font-normal mb-1"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                    >
                      {cls.level}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--muted)",
                        fontFamily: "var(--font-heading)",
                        color: "var(--text)",
                      }}
                    >
                      {cls.range}
                    </span>
                  </div>
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--muted)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                >
                  {cls.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streams */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Streams (Class XI–XII)"
            title="Choose Your Path"
            subtitle="Three comprehensive streams to match your aspirations and career goals."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STREAMS.map((stream, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-sm border"
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
                <ul className="space-y-2">
                  {stream.subjects.map((sub, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.7 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology snippet */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              label="How We Teach"
              title="Child-Centred Methodology"
              subtitle="Our approach puts the learner at the heart of every lesson — fostering curiosity, collaboration, and critical thinking."
              align="center"
              className="mb-8"
            />
            <Button href="/academics/methodology" variant="ghost">
              Explore Our Methodology →
            </Button>
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}
