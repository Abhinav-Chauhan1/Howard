import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "./ContactForm";
import { SCHOOL, UNSPLASH_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Howard Convent Sr. Sec. School — address, phone, email, and contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We'd love to hear from you."
        image={UNSPLASH_IMAGES.contact}
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="section-spacing" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info + Map */}
            <div>
              <h2
                className="text-4xl font-normal mb-8"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  {
                    label: "Address",
                    icon: "📍",
                    content: (
                      <p style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }} className="text-sm leading-relaxed">
                        {SCHOOL.address.line1},<br />
                        {SCHOOL.address.line2},<br />
                        {SCHOOL.address.city}, {SCHOOL.address.state}
                      </p>
                    ),
                  },
                  {
                    label: "Phone",
                    icon: "📞",
                    content: (
                      <a
                        href={`tel:${SCHOOL.phone}`}
                        className="text-[var(--accent)] hover:underline text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {SCHOOL.phone}
                      </a>
                    ),
                  },
                  {
                    label: "Email",
                    icon: "✉️",
                    content: (
                      <a
                        href={`mailto:${SCHOOL.email}`}
                        className="text-[var(--accent)] hover:underline text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {SCHOOL.email}
                      </a>
                    ),
                  },
                  {
                    label: "Office Hours",
                    icon: "🕐",
                    content: (
                      <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.75 }}>
                        {SCHOOL.hours}
                      </p>
                    ),
                  },
                  {
                    label: "WhatsApp",
                    icon: "💬",
                    content: (
                      <a
                        href={SCHOOL.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Chat with us on WhatsApp →
                      </a>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-1"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                      >
                        {item.label}
                      </p>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="rounded-sm overflow-hidden border" style={{ borderColor: "var(--muted)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3!2d78.6400!3d28.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU0JzAwLjAiTiA3OMKwMzgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Howard Convent School Location"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2
                className="text-4xl font-normal mb-8"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
