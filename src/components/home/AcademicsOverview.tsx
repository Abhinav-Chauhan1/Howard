"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STREAMS, CLASS_LEVELS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AcademicsOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll(".stream-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            label="Academics"
            title="A Curriculum Built for Tomorrow"
            subtitle="Three streams, rigorous methodology, and a commitment to all-round development."
          />
          <Button href="/academics/curriculum" variant="ghost" className="flex-shrink-0">
            View Full Curriculum →
          </Button>
        </div>

        {/* Stream cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {STREAMS.map((stream, i) => (
            <div
              key={i}
              className="stream-card group p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ borderColor: "var(--muted)", backgroundColor: "var(--bg)" }}
            >
              <span className="text-4xl mb-4 block">{stream.icon}</span>
              <h3
                className="text-2xl font-normal mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                {stream.name}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.6 }}
              >
                {stream.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stream.subjects.slice(0, 4).map((sub, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--muted)",
                      color: "var(--text)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {sub}
                  </span>
                ))}
                {stream.subjects.length > 4 && (
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "white",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    +{stream.subjects.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Class levels strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-0 border divide-x overflow-hidden rounded-sm"
          style={{ borderColor: "var(--muted)" }}
        >
          {CLASS_LEVELS.map((level, i) => (
            <div
              key={i}
              className="flex-1 min-w-[140px] text-center px-6 py-5 transition-colors hover:bg-[var(--muted)]"
            >
              <p
                className="font-semibold text-sm mb-1"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
              >
                {level.name}
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.5 }}
              >
                {level.range}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
