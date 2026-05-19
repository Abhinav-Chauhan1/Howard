# Full SEO Audit Report
## Howard Convent Sr. Sec. School
**URL:** https://www.howardconventschool.in/  
**Date:** 2026-05-20  
**Auditor:** Claude Code SEO Audit  

---

## Executive Summary

### Overall SEO Health Score: 35 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 38/100 | 8.4 |
| Content Quality | 23% | 44/100 | 10.1 |
| On-Page SEO | 20% | 33/100 | 6.6 |
| Schema / Structured Data | 10% | **0**/100 | 0.0 |
| Performance (CWV) | 10% | 45/100 | 4.5 |
| AI Search Readiness | 10% | 31/100 | 3.1 |
| Images | 5% | 55/100 | 2.8 |
| **Total** | 100% | | **35.4 / 100** |

**Business type detected:** Educational institution — CBSE Sr. Secondary school, brick-and-mortar, Kanth, Moradabad, Uttar Pradesh, India.

**Pages audited:** 13 (/, /about, /academics, /academics/curriculum, /academics/admission, /academics/results, /academics/methodology, /life-at-howard, /admissions, /contact, /gallery, /infrastructure, /mandatory-public-disclosure)

**Hosting:** Vercel (CDN, HTTP/2, HSTS enabled)

---

### Top 5 Critical Issues
1. No `robots.txt` — all crawlers operate under no policy
2. No `sitemap.xml` — Google cannot discover pages programmatically
3. No canonical tags on any of the 13 pages — duplicate content risk
4. Zero structured data (schema) across the entire site — no Knowledge Panel eligibility
5. Duplicate title tags on `/gallery` and `/mandatory-public-disclosure` (both use the homepage title)

### Top 5 Quick Wins
1. Add `robots.txt` — 30 minutes, single file
2. Add `sitemap.ts` in Next.js — 1 hour, unlocks Googlebot page discovery
3. Fix duplicate titles on `/gallery` and `/mandatory-public-disclosure` — 15 minutes
4. Fix H1 typo: "KnowledgeBecomes" → "Knowledge Becomes" — 2 minutes
5. Add `EducationalOrganization` JSON-LD schema to root layout — 2 hours, highest-ROI schema action

---

## 1. Technical SEO — Score: 38/100

### Crawlability

| Finding | Status | Severity |
|---|---|---|
| robots.txt | 404 MISSING | **Critical** |
| sitemap.xml | 404 MISSING | **Critical** |
| noindex / nofollow on any page | None — all pages are indexable | Pass |
| x-robots-tag header | Not set on any response | Pass |
| All 13 pages return HTTP 200 | Pass | Pass |
| Pages statically pre-rendered (x-nextjs-prerender: 1) | Pass | Pass |

**Fix for robots.txt** — create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.howardconventschool.in/sitemap.xml
```

**Fix for sitemap** — create `app/sitemap.ts`:
```ts
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.howardconventschool.in'
  return [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/academics`, priority: 0.8 },
    { url: `${baseUrl}/academics/curriculum`, priority: 0.7 },
    { url: `${baseUrl}/academics/admission`, priority: 0.7 },
    { url: `${baseUrl}/academics/results`, priority: 0.7 },
    { url: `${baseUrl}/academics/methodology`, priority: 0.6 },
    { url: `${baseUrl}/academics/uniform`, priority: 0.5 },
    { url: `${baseUrl}/life-at-howard`, priority: 0.7 },
    { url: `${baseUrl}/admissions`, priority: 0.9 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
    { url: `${baseUrl}/gallery`, priority: 0.6 },
    { url: `${baseUrl}/infrastructure`, priority: 0.6 },
    { url: `${baseUrl}/mandatory-public-disclosure`, priority: 0.5 },
  ]
}
```

### Canonical Tags

| Finding | Severity |
|---|---|
| Canonical tag missing on ALL 13 pages | **Critical** |
| `/gallery` and `/mandatory-public-disclosure` share identical title as homepage | **High** |

Add self-referencing canonicals in each page's `metadata` export:
```ts
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.howardconventschool.in/about',
  }
}
```
Or set it in the root layout with a dynamic approach using `headers()` and the pathname.

### Security Headers

| Header | Status | Severity |
|---|---|---|
| HSTS | Present (max-age=63072000) | Pass |
| HTTPS (HTTP→HTTPS 308 redirect) | Pass | Pass |
| X-Frame-Options | MISSING | **High** |
| X-Content-Type-Options | MISSING | **High** |
| Content-Security-Policy | MISSING | Medium |
| Referrer-Policy | MISSING | Medium |
| Permissions-Policy | MISSING | Low |

Add to `next.config.js`:
```js
headers: async () => [{
  source: '/(.*)',
  headers: [
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  ]
}]
```

### Redirects & URL Structure

| Finding | Severity |
|---|---|
| Non-www → www redirect is **307 Temporary** (should be 301/308 Permanent) | **High** |
| Trailing slash: `/about/` → 308 to `/about` — consistent | Pass |
| HTTP → HTTPS: 308 Permanent | Pass |
| No redirect chains detected | Pass |
| `/academics/uniform` returns 200 but was not in original page inventory | Medium |

Fix the 307 by adding a permanent redirect rule in `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "howardconventschool.in" }],
      "destination": "https://www.howardconventschool.in/$1",
      "permanent": true
    }
  ]
}
```

---

## 2. Content Quality — Score: 44/100

### Page-by-Page Analysis

| Page | Title Length | Title Issue | Meta Desc | H1 Issue | Word Count | Status |
|---|---|---|---|---|---|---|
| `/` | 64 chars | 4 over limit | Good (145) | Typo: "KnowledgeBecomes" | ~500 net | Needs fixes |
| `/about` | 25 chars | Too short | Short (132) | Generic | ~290 | Thin |
| `/academics` | 26 chars | Too short | Good (144) | Generic | ~210 | Thin |
| `/academics/curriculum` | 27 chars | Too short | Short (120) | Generic | ~230 | Thin |
| `/academics/admission` | 36 chars | Too short | Pass | OK | ~150 | Thin |
| `/academics/results` | 30 chars | Too short | Short (102) | OK | ~100 | **Very thin** |
| `/academics/methodology` | 37 chars | Too short | Pass | Generic | ~280 | Thin |
| `/life-at-howard` | 31 chars | Too short | Short (112) | Generic | ~100 | **Very thin** |
| `/admissions` | 35 chars | Too short | Pass | Good | ~380 | Acceptable |
| `/contact` | 27 chars | Too short | Short (91) | Generic | ~100 | Thin |
| `/gallery` | 64 chars | **DUPLICATE homepage title** | **187 chars + DUPLICATE** | OK | ~60 | **Critical** |
| `/infrastructure` | 31 chars | Too short | Short (105) | OK | ~160 | Thin |
| `/mandatory-public-disclosure` | 64 chars | **DUPLICATE homepage title** | **187 chars + DUPLICATE** | H1 = school name | ~450 | **Critical** |

### Critical Content Issues

**Duplicate titles (Critical):** `/gallery` and `/mandatory-public-disclosure` both use the homepage title verbatim ("Howard Convent Sr. Sec. School | CBSE School in Kanth, Moradabad"). Google cannot distinguish these pages.

**OG image missing site-wide (Critical):** No `og:image` on any of the 13 pages. Every WhatsApp/Facebook share shows a blank card — severe impact on parent-driven referral traffic.

**Thin content (High):** 7 of 13 pages fall below 300 words of unique content after removing nav/footer boilerplate. `/academics/results` is image-only with ~100 crawlable words.

**E-E-A-T gaps (High):**
- No named faculty or principal anywhere (only Director name)
- CBSE affiliation number present (2132869) but not in schema
- No founding story depth on About page
- Phone and address present but not in schema
- Email is Gmail (howardconventschool9@gmail.com) — not a branded domain

**Keyword omission in interior titles (High):** All interior page titles follow "Page Name | Howard Convent" with no location keywords. Target pattern: "Page Topic | Howard Convent CBSE School, Kanth Moradabad".

### Recommended Title Fixes

| Page | Current Title | Recommended Title |
|---|---|---|
| `/about` | "About Howard Convent" | "About Us — Howard Convent CBSE School, Kanth Moradabad" |
| `/academics` | "Academics" | "Academics — CBSE Curriculum | Howard Convent, Kanth" |
| `/academics/admission` | "Admission Procedure" | "Admission Procedure | Howard Convent CBSE School, Kanth" |
| `/academics/results` | "Board Results" | "CBSE Board Results | Howard Convent School, Moradabad" |
| `/admissions` | "Admissions" | "Admissions 2025–26 | Howard Convent CBSE School, Kanth" |
| `/contact` | "Contact Us" | "Contact Howard Convent School — Kanth, Moradabad, UP" |
| `/gallery` | *(homepage title)* | "Photo Gallery | Howard Convent School, Kanth Moradabad" |
| `/infrastructure` | "Infrastructure" | "Campus & Infrastructure | Howard Convent School, Kanth" |
| `/mandatory-public-disclosure` | *(homepage title)* | "Mandatory Public Disclosure | Howard Convent CBSE School" |
| `/life-at-howard` | "Life at Howard" | "Life at Howard Convent — Extracurricular & Activities" |

---

## 3. On-Page SEO — Score: 33/100

### Social / Open Graph

| Tag | Status | Severity |
|---|---|---|
| og:title | Present (homepage) | Pass |
| og:description | Present (homepage) | Pass |
| og:image | **MISSING on all 13 pages** | **Critical** |
| og:url | Not set | Medium |
| og:type | Not set | Low |
| twitter:card | "summary" present | Pass |
| twitter:image | MISSING | High |
| twitter:title | Not set | Medium |

Add a default OG image (1200×630px) via root layout metadata, override per page:
```ts
// app/layout.tsx
openGraph: {
  images: [{ url: 'https://www.howardconventschool.in/og-default.jpg', width: 1200, height: 630 }]
}
```

### Heading Structure

- Homepage H1 has a typo: "Where **KnowledgeBecomes** Character" (missing space)
- H2 hierarchy on homepage is logical and keyword-rich
- Interior pages use generic H1s ("Academics", "Gallery", "Our Campus")
- `/mandatory-public-disclosure` uses the school name as H1 — should be the page purpose

### Internal Linking

Navigation covers all major sections. No orphaned pages detected. `/academics/uniform` is linked from nav but was absent from the original crawl list — verify it has complete metadata.

---

## 4. Schema / Structured Data — Score: 0/100

**Zero structured data on any of the 13 pages.** This is the single biggest missed opportunity for search visibility.

### Recommended Schemas (Priority Order)

| Schema | Pages | Priority | Impact |
|---|---|---|---|
| `School` (EducationalOrganization) | /, /about | **Critical** | Knowledge Panel eligibility |
| `BreadcrumbList` | All interior pages | **High** | Rich results in SERPs |
| `WebSite` with SearchAction | / | **High** | Sitelinks search box |
| `FAQPage` | /admissions, /academics/admission | Medium | AI/LLM citation readiness |
| `Event` | Relevant pages | Low | When dated events are published |

### JSON-LD: School Schema (add to / and /about)
```json
{
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Howard Convent Sr. Sec. School",
  "url": "https://www.howardconventschool.in",
  "logo": "https://www.howardconventschool.in/logo.png",
  "description": "CBSE-affiliated Senior Secondary school in Kanth, Moradabad, Uttar Pradesh, committed to holistic education.",
  "foundingDate": "2012",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3KM Milestone, Near Garhi, Dhampur Road",
    "addressLocality": "Kanth",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "244501",
    "addressCountry": "IN"
  },
  "telephone": "+91-9319985501",
  "email": "howardconventschool9@gmail.com",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "16:00"
  }],
  "sameAs": []
}
```

### JSON-LD: BreadcrumbList (example for /academics/admission)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.howardconventschool.in" },
    { "@type": "ListItem", "position": 2, "name": "Academics", "item": "https://www.howardconventschool.in/academics" },
    { "@type": "ListItem", "position": 3, "name": "Admission", "item": "https://www.howardconventschool.in/academics/admission" }
  ]
}
```

> **Note on FAQPage:** Google restricted FAQ rich results to government/healthcare sites (Aug 2023). Adding FAQPage schema will **not** produce Google rich results for this school, but it remains valuable for AI/LLM citation systems (ChatGPT, Perplexity, Gemini). Recommend adding to `/admissions` for GEO benefit.

---

## 5. Performance (Core Web Vitals) — Score: 45/100

### Estimated CWV Ratings (lab-based — no CrUX field data available)

| Metric | Estimated Value | Rating |
|---|---|---|
| LCP | 3.2–4.5s | **Needs Improvement / Poor** |
| CLS | 0.05–0.12 | Good / Borderline |
| INP | 150–220ms | Good / Borderline |

### LCP Issues (Hero Image)
- Hero image: Unsplash photo proxied via `/_next/image`
- `<link rel="preload">` is present but **missing `fetchpriority="high"`**
- **No `<link rel="preconnect" href="https://images.unsplash.com">`** — costs 200–500ms DNS+TCP+TLS
- Logo preload appears **before** hero image preload in `<head>` — wastes early bandwidth

### CLS Issues
- Three Google Fonts (Cormorant Garamond, Syne, DM Sans) loaded via manual `<link>` rather than `next/font`
- `font-display: swap` causes FOUT; no `size-adjust`/`ascent-override` fallback metrics
- Migrating to `next/font/google` would eliminate FOUT and CLS entirely

### INP / JS
- 11 async JS chunks, ~821 KB uncompressed / ~260 KB gzipped
- All `async` — no parser blocking ✓
- No third-party analytics/GTM detected ✓ (good)

### Recommendations

| Priority | Fix | Impact |
|---|---|---|
| High | Add `fetchpriority="high"` to hero `<Image>` (ensure `priority` prop is set) | –200–600ms LCP |
| High | Add `<link rel="preconnect" href="https://images.unsplash.com" crossorigin>` | –200–500ms LCP |
| Medium | Migrate fonts from `<link>` to `next/font/google` | Eliminates FOUT/CLS |
| Medium | Move hero preload before logo preload in `<head>` | Bandwidth prioritization |
| Low | Host hero image in `/public` or Vercel Blob | Removes Unsplash dependency |

---

## 6. AI Search Readiness (GEO) — Score: 31/100

| Platform | Score | Reason |
|---|---|---|
| Google AI Overviews | 25/100 | No FAQ schema, no structured passages |
| ChatGPT | 20/100 | No Wikipedia entity, no YouTube/Reddit brand presence |
| Perplexity | 35/100 | NAP consistent and complete |
| Bing Copilot | 30/100 | CBSE number present; no entity graph signals |

### Key Gaps
- **llms.txt: MISSING** — The primary signal for LLM indexing intent
- **No robots.txt** — AI crawlers (GPTBot, ClaudeBot, PerplexityBot) operate under no explicit policy
- **No citable passage blocks** — CBSE affiliation number, founding year, and result data exist but are not structured for extraction
- **No FAQ / Q&A headings** — No content targeting queries like "Is Howard Convent CBSE affiliated?"
- **No named faculty** — AI models weight named educators as authority signals
- **No social proof statistics** — No student count, pass rates, top scores in crawlable text

### Quick wins for AI visibility
1. Create `/llms.txt` with school facts: name, affiliation, location, grades, streams, founding year
2. Add FAQPage schema to `/admissions` targeting top parent queries
3. Publish CBSE result data as crawlable text (not just images) on `/academics/results`
4. Add `foundingDate`, `numberOfStudents`, and CBSE affiliation number to School schema

---

## 7. Images — Score: 55/100

| Finding | Status | Severity |
|---|---|---|
| All 18 homepage images have alt text | Pass | — |
| Hero image from external Unsplash URL | Suboptimal | Medium |
| OG image missing (all pages) | MISSING | **Critical** |
| Next.js `<Image>` component used for optimization | Pass | — |
| Below-fold images use `loading="lazy"` | Pass | — |
| `fill` layout avoids CLS (container-driven sizing) | Pass | — |
| Logo preloaded in `<head>` | Pass | — |

---

## 8. Local SEO — Score: 28/100

### NAP Consistency

| Data Point | Homepage | /about | /contact | Consistent? |
|---|---|---|---|---|
| Name | Howard Convent Sr. Sec. School | Same | Same | YES ✓ |
| Address | 3KM Milestone, Near Garhi, Dhampur Road, Kanth, Moradabad UP 244501 | Same | Same | YES ✓ |
| Phone | +91 9319985501 | Same | Same | YES ✓ |
| Email | howardconventschool9@gmail.com | Same | Same | YES ✓ (but Gmail — not branded) |
| Hours | 9AM–4PM Mon–Sat | Same | Same | YES ✓ |

NAP is internally consistent — a strong foundation. Email should be migrated to a branded domain address.

### Local SEO Gaps

| Finding | Severity |
|---|---|
| Google Business Profile: status unknown, no GBP link/embed on site | **Critical** |
| No Google Maps embed on contact page | **High** |
| No EducationalOrganization schema | **Critical** |
| No "How to Reach" directions content | Medium |
| Email is Gmail, not branded domain | Medium |
| No review widget or aggregateRating schema | Medium |
| Local education directory citations unverified (Justdial, SchoolMyKids, etc.) | Medium |

---

## Appendix: Site Inventory

| Page | HTTP Status | Indexed? | Canonical | Schema | OG Image |
|---|---|---|---|---|---|
| / | 200 | Yes | Missing | None | Missing |
| /about | 200 | Yes | Missing | None | Missing |
| /academics | 200 | Yes | Missing | None | Missing |
| /academics/curriculum | 200 | Yes | Missing | None | Missing |
| /academics/admission | 200 | Yes | Missing | None | Missing |
| /academics/results | 200 | Yes | Missing | None | Missing |
| /academics/methodology | 200 | Yes | Missing | None | Missing |
| /academics/uniform | 200 | Yes | Missing | None | Missing |
| /life-at-howard | 200 | Yes | Missing | None | Missing |
| /admissions | 200 | Yes | Missing | None | Missing |
| /contact | 200 | Yes | Missing | None | Missing |
| /gallery | 200 | Yes | Missing | None | Missing |
| /infrastructure | 200 | Yes | Missing | None | Missing |
| /mandatory-public-disclosure | 200 | Yes | Missing | None | Missing |
| /robots.txt | **404** | — | — | — | — |
| /sitemap.xml | **404** | — | — | — | — |
| /llms.txt | **404** | — | — | — | — |
