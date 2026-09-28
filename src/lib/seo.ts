import type { Metadata } from "next";
import { SCHOOL } from "./constants";

export const BASE_URL = "https://www.howardconventschool.in";

export const OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: `${SCHOOL.name}, Kanth, Moradabad`,
};

// Next.js merges metadata shallowly: a page that sets its own `openGraph`
// replaces the root one entirely, so spread this in to keep the share image.
export const BASE_OPEN_GRAPH = {
  siteName: SCHOOL.name,
  type: "website",
  locale: "en_IN",
  images: [OG_IMAGE],
} satisfies Metadata["openGraph"];
