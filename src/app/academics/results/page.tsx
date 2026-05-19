import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Board Results",
  description: "CBSE board examination results for Howard Convent Sr. Sec. School — Class X and Class XII performance.",
};

const years = ["2023–24", "2022–23", "2021–22"];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Board Results"
        subtitle="A track record of academic excellence."
        image={UNSPLASH_IMAGES.campus4}
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Results", href: "/academics/results" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeading
            label="CBSE Board Results"
            title="Performance & Achievements"
            subtitle="Our students consistently deliver outstanding results at the national board examinations."
            className="mb-14"
          />

          {/* Achievement highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "100%", label: "Pass Rate (Class X)" },
              { value: "100%", label: "Pass Rate (Class XII)" },
              { value: "95+", label: "Top Scorer Average" },
              { value: "3", label: "Years Consistent Results" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 border"
                style={{ borderColor: "var(--muted)" }}
              >
                <p
                  className="text-4xl font-normal mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--deep)" }}
                >
                  {item.value}
                </p>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text)", opacity: 0.6 }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Class X table */}
          <div className="mb-14">
            <h3
              className="text-3xl font-normal mb-6 pb-4 border-b"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text)",
                borderColor: "var(--muted)",
              }}
            >
              Class X — CBSE Board Results
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "var(--deep)" }}>
                    {["Academic Year", "Students Appeared", "Students Passed", "Pass %", "Distinction Count"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-4 text-white/80 text-xs uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {years.map((year, i) => (
                    <tr
                      key={year}
                      className="border-b"
                      style={{
                        borderColor: "var(--muted)",
                        backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--muted)",
                      }}
                    >
                      <td className="px-5 py-4 font-semibold text-sm" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                        {year}
                      </td>
                      {["—", "—", "—", "—"].map((v, j) => (
                        <td
                          key={j}
                          className="px-5 py-4 text-sm italic"
                          style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.45 }}
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Class XII table */}
          <div className="mb-10">
            <h3
              className="text-3xl font-normal mb-6 pb-4 border-b"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text)",
                borderColor: "var(--muted)",
              }}
            >
              Class XII — CBSE Board Results
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "var(--deep)" }}>
                    {["Academic Year", "Stream", "Students Appeared", "Students Passed", "Pass %"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-4 text-white/80 text-xs uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {years.map((year, i) =>
                    ["Science", "Commerce", "Humanities"].map((stream, j) => (
                      <tr
                        key={`${year}-${stream}`}
                        className="border-b"
                        style={{
                          borderColor: "var(--muted)",
                          backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--muted)",
                        }}
                      >
                        <td className="px-5 py-3 font-semibold text-sm" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                          {j === 0 ? year : ""}
                        </td>
                        <td className="px-5 py-3 text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}>
                          {stream}
                        </td>
                        {["—", "—", "—"].map((v, k) => (
                          <td
                            key={k}
                            className="px-5 py-3 text-sm italic"
                            style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.45 }}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className="p-6 border-l-4"
            style={{ borderColor: "var(--accent)", backgroundColor: "var(--muted)" }}
          >
            <p
              className="text-sm font-semibold mb-1"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
            >
              Data to be updated
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
            >
              Detailed result data for each academic year will be provided by the school administration.
              Please contact the school office for the most current information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
