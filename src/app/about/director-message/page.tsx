import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Director's Message",
  description: "A message from Deepesh Singh, Director of Howard Convent Sr. Sec. School, on his vision for education and the school's future.",
};

export default function DirectorMessagePage() {
  return (
    <>
      <PageHero
        title="Director's Message"
        subtitle="The vision behind Howard Convent."
        image={UNSPLASH_IMAGES.campus4}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Director's Message", href: "/about/director-message" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-5">
                <Image
                  src={UNSPLASH_IMAGES.director}
                  alt="Deepesh Singh, Director"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3
                className="text-xl font-normal mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Deepesh Singh
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                Director, Howard Convent Sr. Sec. School
              </p>
            </div>

            {/* Message */}
            <div>
              <span
                className="text-xs tracking-[0.2em] uppercase font-semibold mb-4 block"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                A Message From The Director
              </span>
              <h2
                className="text-4xl md:text-5xl font-normal mb-8 leading-[1.1]"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Dear Howard Family,
              </h2>

              <div
                className="space-y-5 text-base leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                <p>
                  When we founded Howard Convent Sr. Sec. School, our dream was simple yet profound: to create
                  an institution where every child feels valued, every teacher feels inspired, and every parent
                  feels reassured that their child is in the best of hands.
                </p>
                <p>
                  Education, in my view, is the most powerful investment a society can make in its future.
                  At Howard Convent, we are not merely imparting knowledge — we are shaping character, building
                  confidence, and kindling the spark of curiosity that will light our students&apos; paths
                  for the rest of their lives.
                </p>
                <p>
                  We have assembled a faculty of passionate, experienced educators who go beyond the curriculum
                  to understand each child as an individual. Our infrastructure is modern and purposefully designed
                  to support learning in all its dimensions — academic, artistic, athletic, and social.
                </p>
                <p>
                  As Director, I am deeply committed to ensuring that Howard Convent continues to evolve —
                  embracing the best of modern pedagogy while preserving the timeless values of discipline,
                  integrity, and respect for all. We regularly review and upgrade our programmes, introduce
                  new learning methodologies, and forge partnerships that enrich the Howard experience.
                </p>
                <p>
                  I am proud of every student who has walked through our gates and emerged as a confident,
                  capable young individual ready to make their mark. To the families who trust us with their
                  most precious responsibility — thank you. Your faith in Howard Convent is the foundation
                  of everything we do.
                </p>
                <p>
                  Together, let us build a future where every Howard student can say with pride:
                  &ldquo;Howard made me who I am.&rdquo;
                </p>
              </div>

              {/* Closing quote */}
              <div
                className="border-l-4 pl-6 py-2 mb-8"
                style={{ borderColor: "var(--accent)" }}
              >
                <p
                  className="text-2xl md:text-3xl italic font-normal leading-[1.3]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  &ldquo;Our goal is to build an institution where every student discovers their true potential and
                  leaves Howard ready to shape the world.&rdquo;
                </p>
              </div>

              {/* Signature */}
              <div>
                <div
                  className="w-24 h-px mb-3"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
                >
                  Deepesh Singh
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.6 }}
                >
                  Director, Howard Convent Sr. Sec. School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
