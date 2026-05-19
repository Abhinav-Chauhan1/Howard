interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center items-center" : "items-start";
  const textColor = light ? "text-white" : "text-[var(--text)]";
  const labelColor = light ? "text-[var(--accent)]" : "text-[var(--accent)]";
  const subtitleColor = light ? "text-white/60" : "text-[var(--text)]/60";

  return (
    <div className={`flex flex-col gap-3 ${textAlign} ${className}`}>
      {label && (
        <span
          className={`text-xs tracking-[0.2em] uppercase font-semibold ${labelColor}`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] ${textColor}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
