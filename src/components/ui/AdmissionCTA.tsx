import Button from "./Button";
import { SCHOOL } from "@/lib/constants";

export default function AdmissionCTA() {
  return (
    <section
      className="section-spacing"
      style={{ backgroundColor: "var(--deep)" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <span
          className="text-[var(--accent)] text-xs tracking-[0.2em] uppercase font-semibold mb-4 block"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Now Enrolling
        </span>
        <h2
          className="text-white text-5xl md:text-7xl font-normal mb-4 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Admissions Open 2025–26
        </h2>
        <p
          className="text-white/60 text-lg mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Join a legacy of excellence. Limited seats available.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/admissions" variant="gold">
            Apply Now
          </Button>
          <Button href={SCHOOL.whatsapp} variant="outlined" external>
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
