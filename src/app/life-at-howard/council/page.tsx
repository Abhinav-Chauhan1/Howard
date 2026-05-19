import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Students Council",
  description: "The Students Council at Howard Convent Sr. Sec. School — student-led governance and leadership development.",
};

const roles = [
  { role: "Head Boy / Head Girl", description: "The senior student representatives who lead the council and act as a bridge between students and the school administration." },
  { role: "Cultural Secretary", description: "Organises and oversees cultural events, festivals, and performing arts activities throughout the year." },
  { role: "Sports Secretary", description: "Coordinates sports events, inter-house competitions, and represents student interests in athletics." },
  { role: "Academic Secretary", description: "Facilitates academic initiatives, study support programmes, and scholastic competitions." },
  { role: "Prefects & House Captains", description: "Lead individual houses, maintain discipline, and foster inter-house spirit and healthy competition." },
];

export default function CouncilPage() {
  return (
    <>
      <PageHero
        title="Students Council"
        subtitle="Student leadership, responsibility, and service."
        image={UNSPLASH_IMAGES.council}
        breadcrumbs={[
          { label: "Life at Howard", href: "/life-at-howard" },
          { label: "Students Council", href: "/life-at-howard/council" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading label="Student Leadership" title="Leading by Example" className="mb-8" />
              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                <p>
                  The Howard Convent Students Council is a student-led governing body that gives students a
                  voice in school life. The Council is elected annually through a democratic process, teaching
                  students the values of democracy, fair representation, and civic responsibility from an early age.
                </p>
                <p>
                  Council members take on real responsibilities — organising events, representing student concerns,
                  maintaining school culture, and contributing to the governance of their school community.
                  These experiences build leadership skills, public speaking ability, and the confidence
                  to take initiative.
                </p>
                <p>
                  We believe that the leaders of tomorrow are shaped by the responsibilities they carry today.
                  The Students Council is one of the many ways Howard Convent invests in developing students
                  as future leaders.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {roles.map((item, i) => (
                <div
                  key={i}
                  className="p-5 border"
                  style={{ borderColor: "var(--muted)" }}
                >
                  <h3
                    className="text-base font-semibold mb-1.5"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
                  >
                    {item.role}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
