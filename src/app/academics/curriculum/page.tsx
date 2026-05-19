import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AdmissionCTA from "@/components/ui/AdmissionCTA";
import { STREAMS, CLASS_LEVELS, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Detailed curriculum overview for Howard Convent Sr. Sec. School — CBSE affiliated, from Pre-Primary to Senior Secondary.",
};

const subjectsByLevel: { level: string; subjects: string[] }[] = [
  {
    level: "Pre-Primary (Nursery – KG)",
    subjects: [
      "English Language & Literacy",
      "Hindi Language",
      "Environmental Studies",
      "Mathematics",
      "Art & Craft",
      "Music & Movement",
      "Physical Education",
    ],
  },
  {
    level: "Primary (Class I – V)",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Environmental Studies (EVS)",
      "General Knowledge",
      "Computer Science",
      "Art & Craft",
      "Physical Education",
      "Value Education",
    ],
  },
  {
    level: "Middle School (Class VI – VIII)",
    subjects: [
      "English",
      "Hindi / Sanskrit",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Science",
      "General Knowledge",
      "Art Education",
      "Physical & Health Education",
    ],
  },
  {
    level: "Secondary (Class IX – X)",
    subjects: [
      "English (Language & Literature)",
      "Hindi Course A / B",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science (History, Geography, Civics, Economics)",
      "Information Technology",
    ],
  },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="Curriculum"
        subtitle="A detailed look at what we teach and how we teach it."
        image={UNSPLASH_IMAGES.classroom}
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Curriculum", href: "/academics/curriculum" },
        ]}
      />

      {/* Intro */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6 max-w-3xl">
          <SectionHeading
            label="CBSE Curriculum"
            title="Learning That Lasts a Lifetime"
            className="mb-8"
          />
          <p
            className="text-base leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
          >
            Howard Convent Sr. Sec. School follows the CBSE (Central Board of Secondary Education) curriculum —
            India&apos;s most comprehensive and well-recognised educational framework. Our curriculum is structured
            to ensure age-appropriate progression, conceptual depth, and skill development at every stage.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
          >
            We supplement the core CBSE curriculum with enrichment activities, project-based learning, technology
            integration, and co-curricular programmes to ensure our students are prepared not just for board
            examinations, but for life.
          </p>
        </div>
      </section>

      {/* Subject tables by level */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Subject Overview"
            title="Stage-Wise Curriculum"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjectsByLevel.map((level, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-sm border"
                style={{ borderColor: "var(--muted)" }}
              >
                <h3
                  className="text-xl font-normal mb-5 pb-4 border-b"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text)",
                    borderColor: "var(--muted)",
                  }}
                >
                  {level.level}
                </h3>
                <ul className="space-y-2.5">
                  {level.subjects.map((sub, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Secondary Streams */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Senior Secondary (Class XI–XII)"
            title="Three Streams, Infinite Possibilities"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STREAMS.map((stream, i) => (
              <div
                key={i}
                className="p-8 border"
                style={{ borderColor: "var(--muted)" }}
              >
                <span className="text-3xl mb-4 block">{stream.icon}</span>
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
                <div className="space-y-2">
                  <p
                    className="text-xs uppercase tracking-widest font-semibold mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                  >
                    Subjects
                  </p>
                  {stream.subjects.map((sub, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm py-1 border-b"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--text)",
                        opacity: 0.7,
                        borderColor: "var(--muted)",
                      }}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}
