import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: { label: string; href: string }[];
}

// Intro animation is pure CSS (see .intro-* in globals.css) so the hero
// paints immediately and needs no client JavaScript.
export default function PageHero({ title, subtitle, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[55svh] md:h-[60vh] min-h-[380px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="ken-burns absolute inset-0">
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 pb-12 md:pb-16 pt-28 md:pt-32">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 mb-2 text-white/75 text-xs" style={{ fontFamily: "var(--font-heading)" }}>
            <Link href="/" className="py-3 hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[var(--accent)]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="py-3 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Gold line */}
        <span className="gold-line mb-4" />

        <h1
          style={{ fontFamily: "var(--font-display)", animationDelay: "0.1s" }}
          className="intro-rise text-white text-[2.5rem] sm:text-5xl md:text-7xl font-normal leading-[1.05] mb-4"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="intro-fade text-white/75 text-base md:text-lg max-w-xl"
            style={{ fontFamily: "var(--font-body)", animationDelay: "0.3s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
