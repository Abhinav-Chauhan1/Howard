import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { SCHOOL, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "School Uniform | Howard Convent School, Kanth Moradabad",
  description: "School uniform details for Howard Convent Sr. Sec. School students — dress code for all classes.",
  alternates: { canonical: "/academics/uniform" },
};

export default function UniformPage() {
  return (
    <>
      <PageHero
        title="School Uniform"
        subtitle="Dress code and uniform guidelines."
        image={UNSPLASH_IMAGES.campus3}
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Uniform", href: "/academics/uniform" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl">
            <SectionHeading
              label="Dress Code"
              title="Uniform Guidelines"
              className="mb-10"
            />
            <div
              className="p-8 border mb-8"
              style={{ borderColor: "var(--accent)", backgroundColor: "var(--muted)" }}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                Note from Administration
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                Detailed uniform specifications — including colour, fabric, and seasonal variants for boys and girls —
                will be updated here shortly. Please contact the school office directly for current uniform requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {["Boys — Summer Uniform", "Boys — Winter Uniform", "Girls — Summer Uniform", "Girls — Winter Uniform"].map((item, i) => (
                <div
                  key={i}
                  className="p-6 border"
                  style={{ borderColor: "var(--muted)" }}
                >
                  <h3
                    className="text-lg font-normal mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {item}
                  </h3>
                  <p
                    className="text-sm italic"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.5 }}
                  >
                    [Details to be updated by school administration]
                  </p>
                </div>
              ))}
            </div>

            <div
              className="p-6 border-l-4"
              style={{ borderColor: "var(--accent)", backgroundColor: "var(--muted)" }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
              >
                Uniform Provider
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
              >
                Information about the authorised uniform provider and purchase locations will be available
                from the school office. Please contact us at{" "}
                <a
                  href={`tel:${SCHOOL.phone}`}
                  className="text-[var(--accent)]"
                >
                  {SCHOOL.phone}
                </a>{" "}
                or{" "}
                <a
                  href={SCHOOL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)]"
                >
                  WhatsApp
                </a>{" "}
                for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
