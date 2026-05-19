import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import GrainOverlay from "@/components/layout/GrainOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SCHOOL } from "@/lib/constants";

const BASE_URL = "https://www.howardconventschool.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SCHOOL.name} | CBSE School in Kanth, Moradabad`,
    template: `%s | ${SCHOOL.shortName}`,
  },
  description:
    "Howard Convent Sr. Sec. School is a CBSE-affiliated senior secondary school in Kanth, Moradabad, Uttar Pradesh. Offering Science, Commerce, and Humanities streams with holistic education.",
  keywords: ["Howard Convent", "CBSE school Moradabad", "school Kanth", "senior secondary school UP"],
  openGraph: {
    siteName: SCHOOL.name,
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Howard Convent Sr. Sec. School",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/logo.png"],
  },
};

const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SCHOOL.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "CBSE-affiliated Senior Secondary school in Kanth, Moradabad, Uttar Pradesh, committed to holistic education.",
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SCHOOL.address.line1}, ${SCHOOL.address.line2}`,
    addressLocality: "Kanth",
    addressRegion: "Uttar Pradesh",
    postalCode: SCHOOL.address.pin,
    addressCountry: "IN",
  },
  telephone: SCHOOL.phone,
  email: SCHOOL.email,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SCHOOL.name,
  url: BASE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <LenisProvider>
          <GrainOverlay />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
