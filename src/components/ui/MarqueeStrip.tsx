import { MARQUEE_TEXT } from "@/lib/constants";

export default function MarqueeStrip() {
  const repeated = MARQUEE_TEXT.repeat(4);

  return (
    <div
      className="overflow-hidden border-y"
      style={{
        backgroundColor: "var(--muted)",
        borderColor: "var(--accent)",
      }}
    >
      <div className="marquee-track flex items-center py-4">
        <span
          className="text-sm font-medium tracking-wider whitespace-nowrap"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
        >
          {repeated}
          {repeated}
        </span>
      </div>
    </div>
  );
}
