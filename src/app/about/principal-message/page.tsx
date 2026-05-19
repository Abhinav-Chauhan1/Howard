import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Principal's Message",
  description: "A message from the Principal of Howard Convent Sr. Sec. School on the school's vision, values, and commitment to student excellence.",
};

export default function PrincipalMessagePage() {
  return (
    <>
      <PageHero
        title="Principal's Message"
        subtitle="Words from the heart of our institution."
        image={UNSPLASH_IMAGES.campus3}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Principal's Message", href: "/about/principal-message" },
        ]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-5">
                <Image
                  src={UNSPLASH_IMAGES.principal}
                  alt="Principal, Howard Convent School"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3
                className="text-xl font-normal mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Mrs. Renu Vishnoi
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                Howard Convent Sr. Sec. School
              </p>
            </div>

            {/* Message */}
            <div>
              <span
                className="text-xs tracking-[0.2em] uppercase font-semibold mb-4 block"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                A Message From The Principal
              </span>
              <h2
                className="text-4xl md:text-5xl font-normal mb-8 leading-[1.1]"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Dear Students, Parents & Well-wishers,
              </h2>

              <div
                className="space-y-5 text-base leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}
              >
                <p>
                  It gives me immense pleasure to welcome you to Howard Convent Sr. Sec. School — an institution
                  that stands as a beacon of academic excellence and holistic development in the Kanth-Moradabad
                  region.
                </p>
                <p>
                  Education is not merely the accumulation of information; it is the transformation of the self.
                  At Howard Convent, we are committed to nurturing young minds into responsible, compassionate,
                  and intellectually curious individuals who will contribute meaningfully to society.
                </p>
                <p>
                  Our school offers a stimulating environment where students are encouraged to question, explore,
                  and create. We believe that every child comes with unique gifts, and it is our privilege — and
                  our mission — to help them discover and develop those gifts.
                </p>
                <p>
                  Our dedicated faculty brings expertise, passion, and care to every classroom. Together with our
                  modern infrastructure and a comprehensive co-curricular programme, we ensure that the Howard
                  experience goes far beyond textbooks.
                </p>
                <p>
                  We also believe deeply in the partnership between school and home. Parents are the first and
                  most enduring teachers of their children, and we value your involvement, support, and trust.
                  Together, we can create an environment where every child thrives.
                </p>
                <p>
                  As we move forward, our commitment remains unwavering: to provide every Howard student with
                  the foundation they need to succeed — academically, personally, and as citizens of this
                  great nation and the world.
                </p>
                <p>
                  I invite you to walk with us on this journey of learning and growth. Welcome to Howard Convent.
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
                  &ldquo;Our endeavour is to produce enlightened young individuals who take pride in their
                  Indian identity while being successful members of the global community.&rdquo;
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
                  Principal
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.6 }}
                >
                  Howard Convent Sr. Sec. School, Kanth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
