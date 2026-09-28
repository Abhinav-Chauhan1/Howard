"use client";

import { useState } from "react";

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y" style={{ borderColor: "var(--muted)" }}>
      {items.map((item, i) => (
        <div key={i} className="py-3">
          <button
            id={`faq-q-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-2 text-left group"
            aria-expanded={openIndex === i}
            aria-controls={`faq-a-${i}`}
            data-cursor
          >
            <span
              className="text-lg font-medium group-hover:text-[var(--accent-ink)] transition-colors"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
            >
              {item.q}
            </span>
            <span
              className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all"
              style={{
                borderColor: openIndex === i ? "var(--accent)" : "var(--muted)",
                backgroundColor: openIndex === i ? "var(--accent)" : "transparent",
                transform: openIndex === i ? "rotate(45deg)" : "none",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <line x1="5" y1="1" x2="5" y2="9" stroke={openIndex === i ? "var(--on-accent)" : "currentColor"} strokeWidth="1.5" />
                <line x1="1" y1="5" x2="9" y2="5" stroke={openIndex === i ? "var(--on-accent)" : "currentColor"} strokeWidth="1.5" />
              </svg>
            </span>
          </button>
          <div
            id={`faq-a-${i}`}
            role="region"
            aria-labelledby={`faq-q-${i}`}
            aria-hidden={openIndex !== i}
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: openIndex === i ? "300px" : "0" }}
          >
            <p
              className="pt-4 text-[var(--text)]/70 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
