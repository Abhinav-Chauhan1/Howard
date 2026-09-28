import type { Metadata } from "next";
import { BASE_OPEN_GRAPH } from "@/lib/seo";
import MpdContent from "./MpdContent";

export const metadata: Metadata = {
  title: { absolute: "Mandatory Public Disclosure | Howard Convent CBSE School" },
  description:
    "Mandatory Public Disclosure of Howard Convent Sr. Sec. School as per CBSE Affiliation Bye-Laws, Appendix-IX. Affiliation No. 2132869, School Code 81918.",
  alternates: { canonical: "/mandatory-public-disclosure" },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/mandatory-public-disclosure",
    title: "Mandatory Public Disclosure | Howard Convent CBSE School",
    description:
      "Official CBSE mandatory disclosure for Howard Convent Sr. Sec. School, Kanth, Moradabad. Affiliation No. 2132869.",
  },
};

export default function MandatoryPublicDisclosurePage() {
  return <MpdContent />;
}
