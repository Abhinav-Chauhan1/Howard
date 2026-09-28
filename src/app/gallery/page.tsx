import type { Metadata } from "next";
import { BASE_OPEN_GRAPH } from "@/lib/seo";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: { absolute: "Photo Gallery | Howard Convent School, Kanth Moradabad" },
  description:
    "Photo gallery of Howard Convent Sr. Sec. School — campus, computer lab, student events and competitions in Kanth, Moradabad.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/gallery",
    title: "Photo Gallery | Howard Convent School, Kanth Moradabad",
    description:
      "Explore photos of Howard Convent School — campus, facilities, student events and competitions.",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
