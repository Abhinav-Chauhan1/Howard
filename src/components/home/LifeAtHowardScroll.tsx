"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { UNSPLASH_IMAGES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PANELS = [
  {
    title: "Athletics & Sports",
    description: "A comprehensive sports program building physical excellence, teamwork, and competitive spirit in our students.",
    image: UNSPLASH_IMAGES.sports,
    href: "/life-at-howard/sports",
  },
  {
    title: "Performing Arts & Music",
    description: "Creative expression through dance, drama, music, and fine arts — nurturing the artistic soul of every student.",
    image: UNSPLASH_IMAGES.arts,
    href: "/life-at-howard/arts",
  },
  {
    title: "Co-curricular Activities",
    description: "Clubs, competitions, community service, and enrichment activities that broaden students' horizons beyond academics.",
    image: UNSPLASH_IMAGES.activities,
    href: "/life-at-howard/activities",
  },
  {
    title: "Students Council",
    description: "Student-led governance cultivating leadership, responsibility, and democratic values from an early age.",
    image: UNSPLASH_IMAGES.council,
    href: "/life-at-howard/council",
  },
];

export default function LifeAtHowardScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile || !sectionRef.current || !trackRef.current) return;

    const panels = trackRef.current.querySelectorAll(".panel");
    const totalWidth = (panels.length - 1) * window.innerWidth;

    gsap.to(trackRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden"
      style={{ backgroundColor: "var(--deep)" }}
    >
      {/* Section label — desktop only */}
      <div className="hidden md:block absolute top-8 left-8 z-20">
        <span
          className="text-white/30 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Life at Howard
        </span>
      </div>

      {/* Mobile: stack vertically */}
      <div className="md:hidden">
        <div className="px-6 pt-20 pb-6">
          <span
            className="text-[var(--accent)] text-xs tracking-[0.2em] uppercase font-semibold mb-3 block"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Life at Howard
          </span>
          <h2
            className="text-white text-4xl font-normal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Beyond the Classroom
          </h2>
        </div>
        <div className="flex flex-col">
          {PANELS.map((panel, i) => (
            <div
              key={i}
              className="relative h-80 overflow-hidden"
            >
              <Image src={panel.image} alt={panel.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3
                  className="text-white text-2xl font-normal mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {panel.title}
                </h3>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal scroll */}
      <div ref={trackRef} className="hidden md:flex h-screen">
        {PANELS.map((panel, i) => (
          <div
            key={i}
            className="panel relative flex-shrink-0 w-screen h-screen overflow-hidden"
          >
            <Image src={panel.image} alt={panel.title} fill sizes="100vw" className="object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-16">
              <span
                className="text-[var(--accent)] text-xs tracking-[0.2em] uppercase font-semibold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {String(i + 1).padStart(2, "0")} / {String(PANELS.length).padStart(2, "0")}
              </span>
              <h2
                className="text-white font-normal mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                {panel.title}
              </h2>
              <p
                className="text-white/60 max-w-md text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {panel.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
