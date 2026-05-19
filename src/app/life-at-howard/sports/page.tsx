import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import QuotePull from "@/components/ui/QuotePull";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sports & Athletics",
  description: "Howard Convent's comprehensive sports programme — building fitness, teamwork, and competitive excellence.",
};

const sports = [
  "Cricket", "Football", "Volleyball", "Basketball", "Badminton",
  "Table Tennis", "Athletics (Track & Field)", "Yoga & Fitness",
];

export default function SportsPage() {
  return (
    <>
      <PageHero
        title="Athletics & Sports"
        subtitle="Strength, discipline, and the spirit of play."
        image={UNSPLASH_IMAGES.sports}
        breadcrumbs={[
          { label: "Life at Howard", href: "/life-at-howard" },
          { label: "Sports", href: "/life-at-howard/sports" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading label="Sports Programme" title="Play. Train. Excel." className="mb-8" />
              <div
                className="space-y-5 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                <p>
                  At Howard Convent, we believe that physical education is as important as academic learning.
                  Our comprehensive sports programme is designed to develop physical fitness, cultivate discipline,
                  build teamwork, and instil a lifelong love of active living in every student.
                </p>
                <p>
                  Our spacious sports grounds and dedicated physical education faculty ensure that students
                  receive quality coaching and ample time for practice. We participate in inter-school tournaments
                  and district-level competitions, giving our students the opportunity to test their abilities
                  and develop competitive resilience.
                </p>
                <p>
                  Sports at Howard goes beyond winning — it is about developing character, learning to handle
                  victory and defeat with grace, and understanding the value of teamwork and perseverance.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {sports.map((sport, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: "var(--muted)",
                      fontFamily: "var(--font-heading)",
                      color: "var(--text)",
                    }}
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[UNSPLASH_IMAGES.sports, UNSPLASH_IMAGES.playground, UNSPLASH_IMAGES.campus1, UNSPLASH_IMAGES.campus5].map((img, i) => (
                <div key={i} className="relative h-48 overflow-hidden rounded-sm">
                  <Image src={img} alt={`Sports ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuotePull
        quote="A sound body is the foundation of a sound mind. At Howard, we train champions in sport and in life."
        attribution="— Physical Education Department, Howard Convent"
      />
    </>
  );
}
