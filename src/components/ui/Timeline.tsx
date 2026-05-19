import { ADMISSION_STEPS } from "@/lib/constants";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
        style={{ backgroundColor: "var(--muted)" }}
      />

      <div className="flex flex-col gap-10">
        {ADMISSION_STEPS.map((step, i) => (
          <div key={i} className="flex gap-6 md:gap-10 items-start">
            {/* Step circle */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 relative z-10"
              style={{
                borderColor: "var(--accent)",
                backgroundColor: "var(--bg)",
              }}
            >
              <span
                className="text-sm font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--accent)",
                }}
              >
                {step.step}
              </span>
            </div>

            {/* Content */}
            <div className="pt-3">
              <h3
                className="text-xl mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text)",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-[var(--text)]/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
