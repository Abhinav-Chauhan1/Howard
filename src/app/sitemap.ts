import { MetadataRoute } from "next";

const BASE_URL = "https://www.howardconventschool.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${BASE_URL}/about/principal-message`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/about/director-message`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/about/leadership`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/academics`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${BASE_URL}/academics/curriculum`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/academics/admission`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/academics/results`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/academics/methodology`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/academics/uniform`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/life-at-howard`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/life-at-howard/activities`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/life-at-howard/sports`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/life-at-howard/arts`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/life-at-howard/council`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/life-at-howard/counseling`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/admissions`, priority: 0.9, changeFrequency: "yearly" },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${BASE_URL}/gallery`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/infrastructure`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE_URL}/mandatory-public-disclosure`, priority: 0.5, changeFrequency: "yearly" },
  ];
}
