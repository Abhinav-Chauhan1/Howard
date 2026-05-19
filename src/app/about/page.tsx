import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AdmissionCTA from "@/components/ui/AdmissionCTA";
import Button from "@/components/ui/Button";
import { UNSPLASH_IMAGES, SCHOOL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Howard Convent Sr. Sec. School — our history, vision, mission, and philosophy of holistic education in Kanth, Moradabad.",
};

const pillars = [
  {
    icon: "🎯",
    title: "Our Vision",
    body: "To produce enlightened young individuals who take pride in their Indian identity while being successful members of the global community — citizens who are compassionate, competent, and committed.",
  },
  {
    icon: "🌱",
    title: "Our Mission",
    body: "To provide quality, value-based education that nurtures the intellectual, emotional, social, and moral faculties of every child, preparing them to face the challenges of a rapidly changing world.",
  },
  {
    icon: "💡",
    title: "Our Philosophy",
    body: "We believe that every child is unique and capable. Our child-centred approach ensures that education goes beyond textbooks — fostering curiosity, creativity, and character alongside academic achievement.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Howard Convent"
        subtitle="A legacy of learning, character, and community."
        image={UNSPLASH_IMAGES.about}
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* School Story */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                label="Our Story"
                title="Building Bright Futures Since 2012"
                className="mb-8"
              />
              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                <p>
                  Howard Convent Sr. Sec. School is a prestigious CBSE-recognised educational institution located
                  in Kanth, Moradabad, Uttar Pradesh. Recognised as one of the top-rated schools in the region,
                  Howard Convent has consistently delivered exceptional academic outcomes and holistic development
                  for its students.
                </p>
                <p>
                  Our school is affiliated with the Central Board of Secondary Education (CBSE), New Delhi —
                  India&apos;s premier national board — ensuring that our students receive education aligned with
                  the highest national standards. We offer classes from Pre-Primary through Senior Secondary
                  (Class XII), with three streams at the +2 level: Science, Commerce, and Humanities.
                </p>
                <p>
                  Over the years, Howard Convent has built a reputation for academic rigour, co-curricular
                  excellence, and a nurturing environment that brings out the best in every student. Our highly
                  qualified and dedicated faculty, modern infrastructure, and comprehensive curriculum make
                  Howard Convent the institution of choice for families across Kanth and Moradabad.
                </p>
                <p>
                  We are committed to the development of the whole child — intellectually, physically, emotionally,
                  and spiritually — in an environment that is safe, stimulating, and supportive.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-sm">
              <Image
                src={UNSPLASH_IMAGES.campus2}
                alt="Howard Convent School building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Philosophy */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="What We Stand For"
            title="Values That Guide Us"
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-8 bg-white/70 rounded-sm border"
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
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Snippet */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="relative h-80 overflow-hidden rounded-sm">
              <Image
                src={UNSPLASH_IMAGES.director}
                alt="Deepesh Singh, Director"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span
                className="text-xs tracking-[0.2em] uppercase font-semibold mb-4 block"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                From the Director
              </span>
              <p
                className="text-3xl md:text-4xl font-normal italic mb-6 leading-[1.3]"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                &ldquo;Our goal is to build an institution where every student discovers their true potential.&rdquo;
              </p>
              <p
                className="text-sm font-semibold mb-4"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
              >
                Deepesh Singh — Director
              </p>
              <Button href="/about/director-message" variant="ghost">
                Read Full Message →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-3xl font-normal mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Meet Our Leadership
            </h3>
            <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.6 }}>
              The visionary team behind Howard Convent&apos;s legacy of excellence.
            </p>
          </div>
          <Button href="/about/leadership" variant="gold">
            View Leadership →
          </Button>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}
