# SEO Action Plan — Howard Convent Sr. Sec. School
**Generated:** 2026-05-20  
**Overall Score:** 35/100  
**Target Score:** 65/100 (within 60 days)

---

## CRITICAL — Fix Immediately (Score impact: +18 points)

### C1. Add `robots.txt`
**File:** `public/robots.txt`  
**Effort:** 30 min  
**Impact:** Enables Googlebot policy; allows AI crawler access control  
```
User-agent: *
Allow: /

Sitemap: https://www.howardconventschool.in/sitemap.xml
```

### C2. Add `sitemap.xml` via Next.js
**File:** `app/sitemap.ts`  
**Effort:** 1 hour  
**Impact:** Google discovers all 14 pages programmatically; required for Search Console submission  
See `FULL-AUDIT-REPORT.md §1` for full code.

### C3. Add canonical tags to all pages
**Where:** Each page's `metadata` export  
**Effort:** 1–2 hours (bulk edit)  
**Impact:** Prevents duplicate content penalties; required for proper crawl consolidation  
```ts
// Each page.tsx
export const metadata = {
  alternates: { canonical: 'https://www.howardconventschool.in/PAGE-PATH' }
}
```

### C4. Fix duplicate titles on `/gallery` and `/mandatory-public-disclosure`
**Effort:** 15 minutes  
**Impact:** Google can now index these as distinct pages  
- `/gallery` → `"Photo Gallery | Howard Convent School, Kanth Moradabad"`
- `/mandatory-public-disclosure` → `"Mandatory Public Disclosure | Howard Convent CBSE School"`
Also fix their meta descriptions (both are 187 chars and identical — cut to <160 chars, make page-specific).

### C5. Add `EducationalOrganization` JSON-LD schema to root layout
**Effort:** 2 hours  
**Impact:** Knowledge Panel eligibility, local pack signals, AI citation anchor  
See full JSON-LD in `FULL-AUDIT-REPORT.md §4`.

### C6. Add OG image to every page
**Effort:** 2–3 hours (create image + wire up metadata)  
**Impact:** Every WhatsApp/Facebook/Twitter share renders with a school image — directly increases referral clicks from parents  
Create a 1200×630px school image at `public/og-default.jpg` and add to root layout:
```ts
openGraph: {
  images: [{ url: 'https://www.howardconventschool.in/og-default.jpg', width: 1200, height: 630 }]
}
```

---

## HIGH — Fix Within 1 Week (Score impact: +12 points)

### H1. Fix H1 typo on homepage
**Effort:** 2 minutes  
"Where **KnowledgeBecomes** Character" → "Where **Knowledge Becomes** Character"

### H2. Add `fetchpriority="high"` to hero image
**Effort:** 30 minutes  
Ensure `priority` prop is set on the hero `<Image>` component. This alone can reduce LCP by 200–600ms.

### H3. Add preconnect for `images.unsplash.com`
**File:** Root layout `<head>`  
**Effort:** 15 minutes  
```html
<link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
```

### H4. Add security headers to `next.config.js`
**Effort:** 30 minutes  
```js
{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
{ key: 'X-Content-Type-Options', value: 'nosniff' },
{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
```

### H5. Fix non-www 307 Temporary redirect to Permanent
**File:** `vercel.json`  
**Effort:** 30 minutes  
Change the non-www redirect from Vercel's default 307 to a 308 permanent redirect. Link equity is not passed by 307s.

### H6. Expand all interior page titles to include location keywords
**Effort:** 1 hour  
Pattern: `"Page Topic | Howard Convent CBSE School, Kanth"`  
See full recommendations table in `FULL-AUDIT-REPORT.md §2`.

### H7. Add `BreadcrumbList` schema to all interior pages
**Effort:** 2 hours  
Enables breadcrumb rich results in Google SERPs. See schema code in `FULL-AUDIT-REPORT.md §4`.

### H8. Claim and optimize Google Business Profile
**Effort:** 2–3 hours (external)  
Single highest-ROI local SEO action. Go to business.google.com, claim the listing, set category to "School", upload 10+ photos, add CBSE affiliation number and hours. The school cannot appear in local pack ("CBSE school near Kanth") until this is done.

---

## MEDIUM — Fix Within 1 Month (Score impact: +8 points)

### M1. Migrate fonts to `next/font/google`
**Effort:** 2–3 hours  
Eliminates FOUT and reduces CLS. Replaces the manual Google Fonts `<link>` with self-hosted, subsetted fonts served from Vercel.

### M2. Build out thin content pages
**Priority pages:** `/academics/results`, `/life-at-howard`, `/academics/admission`  
**Effort:** 1 day writing  
- `/academics/results`: Add written summary of each year's board results with pass percentages, top scores, and stream-wise breakdown in text (not just images)
- `/life-at-howard`: Add 400+ words covering each activity category
- `/academics/admission`: Expand to 400+ words covering the full admission process step-by-step

### M3. Add `FAQPage` schema to `/admissions`
**Effort:** 2 hours  
Note: Won't produce Google rich results (restricted to govt/healthcare), but valuable for ChatGPT/Perplexity citation.  
Target questions: "What documents are needed for admission?", "What grades does Howard Convent offer?", "Is Howard Convent CBSE affiliated?"

### M4. Create `/llms.txt`
**File:** `public/llms.txt`  
**Effort:** 1 hour  
Content: School name, CBSE affiliation number (2132869), founding year (2012), location, grades offered, streams, key contacts, notable achievements.

### M5. Build Indian education directory citations
**Effort:** 2–4 hours (external)  
Submit consistent NAP to: SchoolMyKids, IndiaEducation.net, EduVidya, Justdial, CBSE School Locator. Use exact name "Howard Convent Sr. Sec. School" with PIN 244501 everywhere.

### M6. Switch email to branded domain
Change `howardconventschool9@gmail.com` → `info@howardconventschool.in` (or similar).  
Update all site references and directory listings consistently.

### M7. Add Google Maps embed to contact page
**Effort:** 30 minutes  
Embed an iframe of the school location and add a short written directions block. Confirms GBP pin visually.

### M8. Add `WebSite` schema to homepage
**Effort:** 30 minutes  
Establishes entity identity for Google and AI systems. See schema in `FULL-AUDIT-REPORT.md §4`.

---

## LOW — Backlog (Score impact: +2–4 points)

| # | Action | Effort |
|---|---|---|
| L1 | Implement IndexNow (Bing/Yandex instant indexing) | 1 hour |
| L2 | Add `Content-Security-Policy` header (nonce-based for Next.js) | 3–4 hours |
| L3 | Host hero image in `/public` instead of Unsplash | 2 hours |
| L4 | Add `Event` schema when school events are published | 30 min/event |
| L5 | Launch Google review acquisition campaign | Ongoing |
| L6 | Audit `/academics/uniform` page for complete metadata | 30 min |
| L7 | Add `numberOfStudents`, `knowsAbout` to School schema | 30 min |
| L8 | Create a school YouTube channel for brand mention signals | Long-term |

---

## Score Projection

| Phase | Timeline | Actions | Projected Score |
|---|---|---|---|
| Current | — | — | **35/100** |
| After Critical | Week 1 | C1–C6 | ~53/100 |
| After High | Week 2 | H1–H8 | ~62/100 |
| After Medium | Month 2 | M1–M8 | ~71/100 |
| After Low | Month 3+ | L1–L8 | ~75/100 |
