import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academic Methodology",
  description: "Howard Convent's child-centred teaching methodology — how we make learning meaningful, engaging, and effective for every student.",
};

const pillars = [
  {
    icon: "📖",
    title: "Language & Literacy",
    description:
      "We develop strong communication skills through rich reading environments, structured writing programmes, storytelling, and debate. Language is the foundation of all learning, and we invest in it at every level.",
  },
  {
    icon: "🔢",
    title: "Mathematical Development",
    description:
      "Mathematics is taught through hands-on activities, real-world problem-solving, and conceptual exploration — building number sense, logical reasoning, and analytical skills progressively from Pre-Primary onwards.",
  },
  {
    icon: "🏃",
    title: "Physical Development",
    description:
      "Physical education is a core part of our curriculum. We believe a healthy body supports a healthy mind, and our PE programme develops fitness, coordination, sportsmanship, and teamwork.",
  },
  {
    icon: "🎨",
    title: "Creative Development",
    description:
      "Art, music, drama, and craft are integral to our programme. Creative expression builds imagination, emotional intelligence, and the ability to think divergently — skills as important as any academic subject.",
  },
  {
    icon: "💻",
    title: "Technology-Aided Learning",
    description:
      "Smart classrooms, computer labs, and digital learning tools enhance the educational experience. We prepare students to be responsible, capable users of technology in an increasingly digital world.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        title="Academic Methodology"
        subtitle="How we teach is as important as what we teach."
        image={UNSPLASH_IMAGES.classroom}
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Methodology", href: "/academics/methodology" },
        ]}
      />

      {/* Intro */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl">
            <SectionHeading
              label="Our Approach"
              title="Child-Centred Learning"
              className="mb-8"
            />
            <p
              className="text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
            >
              At Howard Convent, we recognise that every child learns differently. Our teaching methodology
              is built on the principle that education must be adapted to the child — not the other way around.
              We create a learning environment where questions are welcomed, curiosity is celebrated, and
              every student is given the opportunity to grow at their own pace.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
            >
              Our teachers are trained facilitators who guide students through discovery-based learning
              experiences. Whether it is a science experiment, a mathematical puzzle, a literary discussion,
              or an artistic project, the goal is always the same: to make learning meaningful, enjoyable,
              and lasting.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Pillars */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="Learning Pillars"
            title="Five Dimensions of Development"
            subtitle="Our curriculum addresses five core areas of development to ensure every student grows fully — not just academically."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-sm border group hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: "var(--muted)" }}
              >
                <span className="text-4xl mb-5 block">{pillar.icon}</span>
                <h3
                  className="text-2xl font-normal mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching philosophy block */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="block w-16 h-px mx-auto mb-8"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <p
              className="text-3xl md:text-4xl italic font-normal leading-[1.3] mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              &ldquo;Tell me and I forget. Teach me and I remember. Involve me and I learn.&rdquo;
            </p>
            <span
              className="block w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <p
              className="text-sm tracking-wider"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text)", opacity: 0.45 }}
            >
              — Benjamin Franklin
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
