import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import GrainOverlay from "@/components/layout/GrainOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SCHOOL } from "@/lib/constants";

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
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
