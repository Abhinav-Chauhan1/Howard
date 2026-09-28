import Link from "next/link";
import Button from "@/components/ui/Button";

const SUGGESTIONS = [
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center" style={{ backgroundColor: "var(--deep)" }}>
      <div className="max-w-screen-xl mx-auto w-full px-6 pt-32 pb-20">
        <span
          className="text-xs tracking-[0.2em] uppercase font-semibold mb-4 block"
          style={{ fontFamily: "var(--font-heading)", color: "var(--accent-soft)" }}
        >
          Error 404
        </span>
        <h1
          className="text-5xl md:text-7xl font-normal leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-display)", color: "white" }}
        >
          Page not found
        </h1>
        <p
          className="text-base md:text-lg max-w-xl mb-10"
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}
        >
          The page you were looking for has moved or no longer exists.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Button href="/" variant="gold">
            Back to Home
          </Button>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {SUGGESTIONS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="inline-block py-2 text-sm text-white underline underline-offset-4 hover:text-[var(--accent-soft)] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
