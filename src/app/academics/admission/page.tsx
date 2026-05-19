import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import Button from "@/components/ui/Button";
import { SCHOOL, DOCUMENTS_REQUIRED, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admission Procedure",
  description: "How to apply for admission at Howard Convent Sr. Sec. School — step-by-step process, documents required, and contact information.",
};

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        title="Admission Procedure"
        subtitle="Simple steps to join the Howard family."
        image={UNSPLASH_IMAGES.campus1}
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Admission", href: "/academics/admission" },
        ]}
      />

      {/* Process */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                label="How to Apply"
                title="Admission in 5 Simple Steps"
                subtitle="Our admission process is straightforward and designed to be transparent and welcoming."
                className="mb-12"
              />
              <Timeline />
            </div>

            {/* Documents */}
            <div>
              <SectionHeading
                label="Documents Required"
                title="What to Bring"
                className="mb-10"
              />
              <ul className="space-y-3">
                {DOCUMENTS_REQUIRED.map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 border"
                    style={{ borderColor: "var(--muted)", backgroundColor: "var(--bg)" }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-heading)" }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
                    >
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section-spacing" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-normal mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Ready to Begin?
          </h2>
          <p
            className="text-base mb-8 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
          >
            Reach out to our admissions team. We are happy to answer your questions and guide you through the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={SCHOOL.whatsapp} variant="gold" external>
              WhatsApp Us Now
            </Button>
            <Button href={`tel:${SCHOOL.phone}`} variant="ghost" external>
              Call {SCHOOL.phone}
            </Button>
          </div>
          <p
            className="text-sm mt-6"
            style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.5 }}
          >
            Office Hours: {SCHOOL.hours}
          </p>
        </div>
      </section>
    </>
  );
}
