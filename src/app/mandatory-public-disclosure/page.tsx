import type { Metadata } from "next";
import MpdContent from "./MpdContent";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure",
  description:
    "Mandatory Public Disclosure of Howard Convent Sr. Sec. School as per CBSE Affiliation Bye-Laws, Appendix-IX. Affiliation No. 2132869, School Code 81918.",
  alternates: { canonical: "/mandatory-public-disclosure" },
  openGraph: {
    title: "Mandatory Public Disclosure | Howard Convent CBSE School",
    description:
      "Official CBSE mandatory disclosure for Howard Convent Sr. Sec. School, Kanth, Moradabad. Affiliation No. 2132869.",
  },
};

export default function MandatoryPublicDisclosurePage() {
  return <MpdContent />;
}
