"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";
import { UNSPLASH_IMAGES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSnippet() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { x: -60, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }
    if (textRef.current) {
      const els = textRef.current.querySelectorAll(".reveal");
      gsap.fromTo(
        els,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.1,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imgRef} className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src={UNSPLASH_IMAGES.about}
              alt="Students at Howard Convent School"
              fill
              className="object-cover"
            />
            <div
              className="absolute bottom-6 left-6 px-4 py-3 rounded-sm"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <p className="text-white text-xs font-semibold tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                CBSE Affiliated
              </p>
              <p className="text-white/80 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                Kanth, Moradabad, UP
              </p>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef}>
            <span
              className="reveal text-xs tracking-[0.2em] uppercase font-semibold mb-4 block"
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
            >
              About Us
            </span>
            <h2
              className="reveal text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Learning Begins With Us
            </h2>
            <p
              className="reveal text-base leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.7 }}
            >
              Howard Convent Sr. Sec. School is a CBSE-affiliated institution committed to holistic education —
              nurturing knowledge, character, and compassion in every student. Our campus in Kanth, Moradabad
              has been a beacon of academic excellence, shaping young minds into responsible, enlightened citizens.
            </p>

            <div className="reveal grid grid-cols-2 gap-5 mb-8">
              <div
                className="p-4 border"
                style={{ borderColor: "var(--muted)", backgroundColor: "var(--muted)" }}
              >
                <span
                  className="text-xs tracking-widest uppercase font-semibold block mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                >
                  Our Vision
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.7 }}
                >
                  To produce enlightened individuals who take pride in their identity while succeeding globally.
                </p>
              </div>
              <div
                className="p-4 border"
                style={{ borderColor: "var(--muted)", backgroundColor: "var(--muted)" }}
              >
                <span
                  className="text-xs tracking-widest uppercase font-semibold block mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                >
                  Our Mission
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.7 }}
                >
                  To provide quality education that develops the intellectual, social, and moral faculties of every student.
                </p>
              </div>
            </div>

            <div className="reveal">
              <Button href="/about" variant="ghost">
                Our Story →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
