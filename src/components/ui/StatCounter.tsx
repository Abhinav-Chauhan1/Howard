"use client";

import { useRef } from "react";
import { STATS } from "@/lib/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StatCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    STATS.forEach((stat, i) => {
      const el = counterRefs.current[i];
      if (!el) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 2,
        ease: "power1.out",
        onUpdate() {
          el.textContent = Math.round(obj.val) + stat.suffix;
        },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="section-spacing"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="leading-none mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(60px, 8vw, 110px)",
                  color: "var(--deep)",
                }}
              >
                <span
                  ref={(el) => { counterRefs.current[i] = el; }}
                >
                  0{stat.suffix}
                </span>
              </div>
              <p
                className="text-sm tracking-wider uppercase"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text)",
                  opacity: 0.6,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
