"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface QuotePullProps {
  quote: string;
  attribution: string;
  dark?: boolean;
}

export default function QuotePull({ quote, attribution, dark = false }: QuotePullProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useGSAP(() => {
    if (!quoteRef.current) return;
    const words = quoteRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  const words = quote.split(" ").map((w, i) => (
    <span key={i} className="word inline-block">
      {w}&nbsp;
    </span>
  ));

  const bg = dark ? "var(--deep)" : "var(--bg)";
  const color = dark ? "white" : "var(--text)";
  const lineColor = "var(--accent)";

  return (
    <section
      ref={sectionRef}
      className="section-spacing"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="block w-16 h-px mx-auto mb-10"
            style={{ backgroundColor: lineColor }}
          />
          <blockquote
            ref={quoteRef}
            className="italic leading-[1.3] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 60px)",
              color,
            }}
          >
            "{words}"
          </blockquote>
          <span
            className="block w-16 h-px mx-auto mb-8"
            style={{ backgroundColor: lineColor }}
          />
          <p
            className="text-sm tracking-wider"
            style={{
              fontFamily: "var(--font-heading)",
              color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)",
            }}
          >
            {attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
