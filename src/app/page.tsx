import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import AboutSnippet from "@/components/home/AboutSnippet";
import StatCounter from "@/components/ui/StatCounter";
import AcademicsOverview from "@/components/home/AcademicsOverview";
import LifeAtHowardScroll from "@/components/home/LifeAtHowardScroll";
import QuotePull from "@/components/ui/QuotePull";
import InfrastructureGlimpse from "@/components/home/InfrastructureGlimpse";
import AdmissionCTA from "@/components/ui/AdmissionCTA";

export const metadata: Metadata = {
  title: "Howard Convent Sr. Sec. School | CBSE School in Kanth, Moradabad",
  description:
    "A CBSE-affiliated school committed to holistic education — nurturing knowledge, character, and compassion in every student. Kanth, Moradabad, UP.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSnippet />
      <StatCounter />
      <AcademicsOverview />
      <LifeAtHowardScroll />
      <QuotePull
        quote="Our endeavour is to produce enlightened young individuals who take pride in their Indian identity while being successful members of the global community."
        attribution="— Principal, Howard Convent Sr. Sec. School"
      />
      <InfrastructureGlimpse />
      <AdmissionCTA />
    </>
  );
}
