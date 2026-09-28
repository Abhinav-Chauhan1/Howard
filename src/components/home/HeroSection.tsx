import Image from "next/image";
import Link from "next/link";
import { SCHOOL, IMAGES } from "@/lib/constants";

// Intro animation is pure CSS (see .intro-* in globals.css) so the hero
// paints immediately and needs no client JavaScript.
export default function HeroSection() {
  return (
    <section className="relative h-svh min-h-[560px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="ken-burns absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Howard Convent School Campus"
          fill
          sizes="100vw"
          className="object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 pb-20 md:pb-28">
        <p
          className="intro-fade text-white/75 text-xs tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: "var(--font-heading)", animationDelay: "0.45s" }}
        >
          {SCHOOL.board} · {SCHOOL.address.city}, {SCHOOL.address.state} · {SCHOOL.established}
        </p>

        <h1
          className="text-white font-normal leading-[1.0] mb-8 overflow-hidden"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 110px)" }}
        >
          <span className="intro-rise block" style={{ animationDelay: "0.1s" }}>Where Knowledge</span>{" "}
          <span className="intro-rise block text-[var(--accent)]" style={{ animationDelay: "0.25s" }}>Becomes Character</span>
        </h1>

        <div className="intro-fade flex flex-wrap gap-4" style={{ animationDelay: "0.6s" }}>
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white text-white text-sm font-semibold tracking-wide transition-all hover:bg-white hover:text-[var(--deep)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Academics
          </Link>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[var(--on-accent)] text-sm font-semibold tracking-wide transition-all hover:brightness-90"
            style={{ fontFamily: "var(--font-heading)", backgroundColor: "var(--accent)" }}
          >
            Apply for Admission
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span
          className="text-white/75 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 relative overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              height: "50%",
              backgroundColor: "var(--accent)",
              animation: "scrollIndicator 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
