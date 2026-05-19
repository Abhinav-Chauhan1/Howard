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
        <div key={i} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 text-left group"
            data-cursor
          >
            <span
              className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors"
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
                <line x1="5" y1="1" x2="5" y2="9" stroke={openIndex === i ? "white" : "currentColor"} strokeWidth="1.5" />
                <line x1="1" y1="5" x2="9" y2="5" stroke={openIndex === i ? "white" : "currentColor"} strokeWidth="1.5" />
              </svg>
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: openIndex === i ? "300px" : "0" }}
          >
            <p
              className="pt-4 text-[var(--text)]/60 leading-relaxed"
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
