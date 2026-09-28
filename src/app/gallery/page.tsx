import type { Metadata } from "next";
import { BASE_OPEN_GRAPH } from "@/lib/seo";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: { absolute: "Photo Gallery | Howard Convent School, Kanth Moradabad" },
  description:
    "Photos from Howard Convent School, Kanth: student awards, Independence Day and Hindi Diwas, competitions, parent-teacher meetings and campus.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/gallery",
    title: "Photo Gallery | Howard Convent School, Kanth Moradabad",
    description:
      "Achievements, celebrations, competitions, parent-teacher meetings and campus photos from Howard Convent School.",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
