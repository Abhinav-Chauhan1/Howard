import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SCHOOL, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Career Counseling",
  description: "Career guidance and counseling programme at Howard Convent Sr. Sec. School — helping students make informed decisions about their future.",
};

const steps = [
  {
    title: "Self-Assessment",
    description: "Students explore their interests, strengths, and values through structured assessments and guided self-reflection exercises.",
  },
  {
    title: "Career Exploration",
    description: "Exposure to diverse career paths, industries, and professional roles through sessions, guest talks, and curated resources.",
  },
  {
    title: "Stream & Subject Guidance",
    description: "Expert guidance on selecting the right stream (Science, Commerce, Humanities) and subjects based on aptitude and career goals.",
  },
  {
    title: "Higher Education Planning",
    description: "Support for college and university selection, entrance exam preparation, and application processes for Class XII students.",
  },
];

export default function CounselingPage() {
  return (
    <>
      <PageHero
        title="Career Counseling"
        subtitle="Helping students discover their path with confidence."
        image={UNSPLASH_IMAGES.counseling}
        breadcrumbs={[
          { label: "Life at Howard", href: "/life-at-howard" },
          { label: "Career Counseling", href: "/life-at-howard/counseling" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                label="Career Guidance"
                title="Chart Your Course"
                className="mb-8"
              />
              <div
                className="space-y-5 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                <p>
                  At Howard Convent, we understand that choosing a career path is one of the most significant
                  decisions a young person will make. Our Career Counseling Programme is designed to help
                  students navigate this journey with clarity, confidence, and purpose.
                </p>
                <p>
                  Our trained counselors work closely with students — particularly those in Classes IX through
                  XII — to help them understand their own strengths, explore career options aligned with their
                  interests, and make well-informed decisions about their academic future.
                </p>
                <p>
                  We also involve parents in the counseling process, ensuring that families are aligned and
                  supportive of their child&apos;s chosen direction. Career counseling at Howard is not a
                  one-time event — it is an ongoing conversation.
                </p>
              </div>
              <Button href={SCHOOL.whatsapp} variant="gold" external>
                Speak to Our Counselor
              </Button>
            </div>

            <div className="space-y-5">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 border"
                  style={{ borderColor: "var(--muted)" }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-heading)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-normal mb-2"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
