import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photo gallery of Howard Convent Sr. Sec. School — campus, classrooms, labs, sports, cultural events, and student life in Kanth, Moradabad.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Gallery | Howard Convent School, Kanth Moradabad",
    description:
      "Explore photos of Howard Convent School — campus, classrooms, labs, sports, cultural events, and student life.",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
