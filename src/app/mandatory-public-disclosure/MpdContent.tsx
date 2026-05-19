"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TBF = () => <span className="text-gray-400">—</span>;

const DOC_BASE = "/mpd/Documents%20%26%20Certificates";

const DOCS = {
  affiliation: `${DOC_BASE}/affiliaton%20letter%202028.pdf`,
  trust: `${DOC_BASE}/Trust%20Ded%201MB.pdf`,
  recognition: `${DOC_BASE}/Recognition%20up%20to%208th.pdf`,
  building: `${DOC_BASE}/BUILDING%20SAFETY%20CERTIFICATE.pdf`,
  fire: `${DOC_BASE}/FIRE%20CERTIFICATE.pdf`,
};

const TEACHERS = [
  { name: "RENU VISHNOI", designation: "PRINCIPAL", qualification: "M.A.", professional: "B.Ed.", experience: "16" },
  { name: "RACHNA KHANNA", designation: "TGT", qualification: "B.A.", professional: "B.Ed.", experience: "28" },
  { name: "PRAMOD KUMAR", designation: "PGT", qualification: "M.Sc. (Chemistry)", professional: "B.Ed.", experience: "10" },
  { name: "NEETU CHAUDHARY", designation: "PGT", qualification: "M.COM", professional: "B.Ed.", experience: "12" },
  { name: "Mr. KESHAV", designation: "PGT", qualification: "M.A.", professional: "B.Ed.", experience: "10" },
  { name: "SANJEEV KUMAR", designation: "PGT", qualification: "M.Sc.(Physics), M.A.(Maths)", professional: "D.El.Ed.", experience: "2" },
  { name: "ANNU KUMARI", designation: "PGT", qualification: "B.A.", professional: "B.Ed.", experience: "1" },
  { name: "AKSHITA VISHNOI", designation: "PGT", qualification: "M.Sc. (Biology)", professional: "B.Ed.", experience: "3" },
  { name: "SHALABH MATHUR", designation: "PGT", qualification: "M.COM", professional: "B.Ed.", experience: "4" },
  { name: "YOGESH SINGH BISHT", designation: "PGT", qualification: "M.A.", professional: "B.Ed.", experience: "4" },
  { name: "SACHIN CHAUDHARY", designation: "TGT", qualification: "B.A.", professional: "Computer", experience: "1" },
  { name: "AARIZ USMANI", designation: "TGT", qualification: "B.Sc.", professional: "B.Ed.", experience: "1" },
  { name: "SHANI KATHARIYA", designation: "TGT", qualification: "B.Sc.", professional: "D.El.Ed.", experience: "1" },
  { name: "SACHIN KUMAR SINGH", designation: "PET", qualification: "B.Sc.", professional: "B.P.Ed.", experience: "2" },
  { name: "RINU RANI", designation: "PRT", qualification: "M.A.", professional: "D.El.Ed.", experience: "—" },
  { name: "NEELAM RANI", designation: "PRT", qualification: "M.A.", professional: "B.Ed.", experience: "1" },
  { name: "SHALINI BHARTI", designation: "PRT", qualification: "M.A.", professional: "B.Ed.", experience: "1" },
  { name: "SHANU", designation: "PRT", qualification: "B.Sc.", professional: "D.Let.", experience: "1" },
  { name: "SHEEBA PARVEEN", designation: "PRT", qualification: "B.Sc.", professional: "Diploma in Computer", experience: "1" },
  { name: "SALONI", designation: "PRT", qualification: "B.Sc.", professional: "CCC", experience: "2" },
  { name: "SWATI CHAUHAN", designation: "PRT", qualification: "B.Sc.", professional: "BTC", experience: "2" },
  { name: "SABA KAUSAR", designation: "PRT", qualification: "B.Sc.", professional: "D.El.Ed.", experience: "3" },
  { name: "REETA RANI", designation: "PRT", qualification: "B.A.", professional: "B.A.", experience: "3" },
  { name: "ZOHA ASAD", designation: "PRT", qualification: "B.A.", professional: "B.Ed.", experience: "2" },
  { name: "AYESHA PARVEEN", designation: "PRT", qualification: "M.A.", professional: "M.A.", experience: "3" },
  { name: "SUFIA HANEEF", designation: "PRT", qualification: "B.A.", professional: "B.Ed.", experience: "4" },
  { name: "Farheen Misba", designation: "PRT", qualification: "B.Sc.", professional: "B.Ed.", experience: "8" },
  { name: "Sonam Balmiki", designation: "PRT", qualification: "M.A.", professional: "B.Ed.", experience: "3" },
  { name: "CHARUL CHAUHAN", designation: "PRT", qualification: "B.A.", professional: "B.T.C.", experience: "2" },
];

const RESULTS_2023_X = [
  "/mpd/RESULTS/2023/10.1.jpeg",
  "/mpd/RESULTS/2023/10.2.jpeg",
  "/mpd/RESULTS/2023/10.3.jpeg",
];
const RESULTS_2023_XII = [
  "/mpd/RESULTS/2023/12.1.jpeg",
  "/mpd/RESULTS/2023/12.2.jpeg",
  "/mpd/RESULTS/2023/12.3.jpeg",
  "/mpd/RESULTS/2023/12.4.jpeg",
];
const RESULTS_2025_X = [
  "/mpd/RESULTS/2025/10.1.jpeg",
  "/mpd/RESULTS/2025/10.2.jpeg",
  "/mpd/RESULTS/2025/10.3.jpeg",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-bold tracking-widest uppercase bg-gray-800 text-white px-4 py-2 mt-10 mb-0 print:bg-gray-800 print:text-white">
      {children}
    </h2>
  );
}

function InfoTable({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <table className="w-full border-collapse text-sm">
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700 w-[40%] align-top">{label}</td>
            <td className="border border-gray-300 px-3 py-2 text-gray-900">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DocRow({ label, available, link, note }: { label: string; available: boolean | null; link?: string; note?: string }) {
  return (
    <tr className="even:bg-gray-50">
      <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">{label}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-center font-semibold">
        {available === null ? <TBF /> : available ? <span className="text-green-700">YES</span> : <span className="text-red-600">NO</span>}
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 print:text-blue-800">
            View Document ↗
          </a>
        ) : available === null ? (
          <TBF />
        ) : (
          <span className="text-gray-400 text-xs">—</span>
        )}
        {note && <span className="text-gray-500 text-xs ml-2">({note})</span>}
      </td>
    </tr>
  );
}

export default function MpdContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { font-size: 11pt; }
          table { page-break-inside: auto; }
          tr { page-break-inside: avoid; }
          h2 { page-break-after: avoid; }
          .print-break { page-break-before: always; }
        }
      `}</style>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4 no-print"
          onClick={() => setLightboxSrc(null)}
        >
          <button onClick={() => setLightboxSrc(null)} className="absolute top-4 right-6 text-white text-4xl leading-none">&times;</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightboxSrc} alt="Result" className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-8 print:px-0 print:py-0" style={{ fontFamily: "var(--font-body)" }}>

        <div className="no-print flex justify-end mb-12">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded transition-colors hover:brightness-90"
            style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-heading)" }}
          >
            🖨️ Print / Save as PDF
          </button>
        </div>

        <div className="text-center border border-gray-800 p-6 mb-0">
          <div className="flex justify-center mb-3">
            <Image src="/logo.png" alt="Howard Convent School" width={80} height={80} className="object-contain" />
          </div>
          <h1 className="text-xl font-bold uppercase tracking-wide text-gray-900">Howard Convent Sr. Sec. School</h1>
          <p className="text-sm text-gray-600 mt-1">3KM Milestone, Near Garhi, Dhampur Road, Kanth, Moradabad — 244501, Uttar Pradesh</p>
          <p className="text-sm text-gray-600">Ph: 9319985501 | Email: howardconventschool9@gmail.com | Website: www.howardconventschool.in</p>
          <div className="mt-4 pt-4 border-t border-gray-300">
            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">Mandatory Public Disclosure</h2>
            <p className="text-xs text-gray-500 mt-1">As per CBSE Affiliation Bye-Laws — Appendix-IX</p>
            <p className="text-xs text-gray-500">Affiliation No.: <strong>2132869</strong> &nbsp;|&nbsp; School Code: <strong>81918</strong></p>
          </div>
        </div>

        <SectionTitle>A. General Information</SectionTitle>
        <InfoTable rows={[
          ["NAME OF SCHOOL", "HOWARD CONVENT SR. SEC. SCHOOL"],
          ["AFFILIATION NO. (CBSE)", "2132869"],
          ["SCHOOL CODE", "81918"],
          ["COMPLETE ADDRESS WITH PIN CODE", "3KM Milestone, Near Garhi, Dhampur Road, Kanth, Distt. Moradabad — 244501, Uttar Pradesh"],
          ["PRINCIPAL NAME & QUALIFICATION", "Mrs. Renu Vishnoi, M.A., B.Ed."],
          ["PRINCIPAL CONTACT NO.", "7248596176"],
          ["SCHOOL EMAIL ID", "howardconventschool9@gmail.com"],
          ["CONTACT DETAILS (PHONE/FAX)", "9319985501"],
          ["WEBSITE", "www.howardconventschool.in"],
          ["YEAR OF ESTABLISHMENT", "2012"],
          ["STATUS OF SCHOOL", "Co-Educational"],
          ["FIRST YEAR OF AFFILIATION", <TBF key="a" />],
          ["NAME OF TRUST / SOCIETY / COMPANY", "JAGRITI CHARITABLE TRUST"],
          ["NAME OF CHAIRMAN / MANAGER", "Deepesh Singh"],
          ["NOC ISSUING STATE / UT", <TBF key="c" />],
          ["NOC NO. & DATE", <TBF key="d" />],
          ["IS NOC ISSUED BY SAME STATE AS SCHOOL?", <TBF key="e" />],
          ["AREA OF SCHOOL CAMPUS (SQ. MTR)", "7,180 Sq. Mtr."],
          ["AREA OF SCHOOL CAMPUS (ACRES)", "1.77 Acres (Approx.)"],
          ["AREA OF PLAYGROUND (SQ. MTR)", <TBF key="f" />],
          ["AREA OF PLAYGROUND (ACRES)", <TBF key="g" />],
          ["CATEGORY OF AFFILIATION", "Senior Secondary (Classes I–XII)"],
          ["STATE / UT", "UTTAR PRADESH"],
        ]} />

        <SectionTitle>B. Documents and Certificates</SectionTitle>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700 w-[55%]">Document</th>
              <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700 w-[15%]">Available</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Link / Attachment</th>
            </tr>
          </thead>
          <tbody>
            <DocRow label="Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation, if any" available={true} link={DOCS.affiliation} />
            <DocRow label="Copies of Societies/Trust/Company Registration/Renewal Certificate, as applicable" available={true} link={DOCS.trust} />
            <DocRow label="Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT" available={null} />
            <DocRow label="Copies of Recognition Certificate under RTE Act, 2009, and its Renewal if applicable" available={true} link={DOCS.recognition} note="Up to Class VIII" />
            <DocRow label="Copy of Valid Building Safety Certificate as per the National Building Code" available={true} link={DOCS.building} />
            <DocRow label="Copy of Valid Fire Safety Certificate issued by the Competent Authority" available={true} link={DOCS.fire} />
            <DocRow label="Copy of the DEO Certificate submitted by the school for affiliation/upgradation/extension of affiliation or Self Certification by school" available={null} />
            <DocRow label="Copies of Valid Water, Health and Sanitation Certificates" available={null} />
          </tbody>
        </table>

        <SectionTitle>C. Result and Academics</SectionTitle>

        <table className="w-full border-collapse text-sm mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Item</th>
              <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700 w-[20%]">Status</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Details / Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">Fee Structure of the School (Class-wise)</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-semibold text-amber-700"><TBF /></td>
              <td className="border border-gray-300 px-3 py-2 text-gray-400 text-xs">Upload fee structure document</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">Annual Academic Calendar</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-semibold text-amber-700"><TBF /></td>
              <td className="border border-gray-300 px-3 py-2 text-gray-400 text-xs">Upload academic calendar</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">List of School Management Committee (SMC) Members</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-semibold text-green-700">YES</td>
              <td className="border border-gray-300 px-3 py-2 text-amber-700 text-sm"><TBF /></td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">List of Parents Teachers Association (PTA) Members</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-semibold text-amber-700"><TBF /></td>
              <td className="border border-gray-300 px-3 py-2 text-gray-400 text-xs">Upload PTA member list</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">Last 3 Years — Board Examination Results</h3>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-800 mb-2">Academic Year 2023–24 (CBSE Board Examination 2024)</p>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Class</th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">Students Appeared</th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">Passed</th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">Compartment</th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">Pass %</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Class X</td>
                <td className="border border-gray-300 px-3 py-2 text-center">98</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">85</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-amber-700">13</td>
                <td className="border border-gray-300 px-3 py-2 text-center font-semibold">86.73%</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Class XII</td>
                <td className="border border-gray-300 px-3 py-2 text-center">28</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">28</td>
                <td className="border border-gray-300 px-3 py-2 text-center">0</td>
                <td className="border border-gray-300 px-3 py-2 text-center font-semibold">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-800 mb-3">Academic Year 2022–23 (CBSE Board Examination 2023) — Result Gazette</p>
          <p className="text-xs text-gray-500 mb-2 no-print">Click any image to enlarge</p>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Class X</p>
              <div className="grid grid-cols-3 gap-2">
                {RESULTS_2023_X.map((src, i) => (
                  <button key={i} onClick={() => setLightboxSrc(src)} className="block border border-gray-200 hover:border-gray-400 transition-colors no-print">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Class X 2023 Result ${i + 1}`} className="w-full h-auto" loading="lazy" />
                  </button>
                ))}
                {RESULTS_2023_X.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={`print-${i}`} src={src} alt={`Class X 2023 Result ${i + 1}`} className="hidden print:block w-full h-auto border border-gray-200" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Class XII</p>
              <div className="grid grid-cols-3 gap-2">
                {RESULTS_2023_XII.map((src, i) => (
                  <button key={i} onClick={() => setLightboxSrc(src)} className="block border border-gray-200 hover:border-gray-400 transition-colors no-print">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Class XII 2023 Result ${i + 1}`} className="w-full h-auto" loading="lazy" />
                  </button>
                ))}
                {RESULTS_2023_XII.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={`print-${i}`} src={src} alt={`Class XII 2023 Result ${i + 1}`} className="hidden print:block w-full h-auto border border-gray-200" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-800 mb-3">Academic Year 2024–25 (CBSE Board Examination 2025) — Result Gazette</p>
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Class X</p>
            <div className="grid grid-cols-3 gap-2">
              {RESULTS_2025_X.map((src, i) => (
                <button key={i} onClick={() => setLightboxSrc(src)} className="block border border-gray-200 hover:border-gray-400 transition-colors no-print">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Class X 2025 Result ${i + 1}`} className="w-full h-auto" loading="lazy" />
                </button>
              ))}
              {RESULTS_2025_X.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`print-${i}`} src={src} alt={`Class X 2025 Result ${i + 1}`} className="hidden print:block w-full h-auto border border-gray-200" />
              ))}
            </div>
            <p className="text-xs text-amber-700 mt-2">Class XII 2025 results — <TBF /></p>
          </div>
        </div>

        <SectionTitle>D. Staff (Teaching)</SectionTitle>

        <InfoTable rows={[
          ["PRINCIPAL — NAME", "Mrs. Renu Vishnoi"],
          ["PRINCIPAL — QUALIFICATION", "M.A., B.Ed."],
          ["PRINCIPAL — EXPERIENCE", "16 Years"],
          ["TOTAL TEACHING STAFF", `${TEACHERS.length} (including Principal)`],
          ["TOTAL NON-TEACHING STAFF", "11"],
          ["TOTAL ADMINISTRATIVE STAFF", "3"],
        ]} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm min-w-[640px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-gray-700 w-6">S.No.</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Name</th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">Designation</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Academic Qual.</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Prof. Qual.</th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">Exp. (Yrs)</th>
              </tr>
            </thead>
            <tbody>
              {TEACHERS.map((t, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-2 py-1.5 text-gray-500 text-xs text-center">{i + 1}</td>
                  <td className="border border-gray-300 px-3 py-1.5 font-medium text-gray-900">{t.name}</td>
                  <td className="border border-gray-300 px-3 py-1.5 text-center">
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                      t.designation === "PRINCIPAL" ? "bg-purple-100 text-purple-800" :
                      t.designation === "PGT" ? "bg-blue-50 text-blue-800" :
                      t.designation === "TGT" ? "bg-green-50 text-green-800" :
                      t.designation === "PET" ? "bg-orange-50 text-orange-800" :
                      "bg-gray-100 text-gray-700"
                    }`}>{t.designation}</span>
                  </td>
                  <td className="border border-gray-300 px-3 py-1.5 text-gray-700">{t.qualification}</td>
                  <td className="border border-gray-300 px-3 py-1.5 text-gray-700">{t.professional}</td>
                  <td className="border border-gray-300 px-3 py-1.5 text-center text-gray-700">{t.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionTitle>E. School Infrastructure</SectionTitle>
        <InfoTable rows={[
          ["TOTAL CAMPUS AREA (SQ. MTR)", "7,180 Sq. Mtr."],
          ["TOTAL CAMPUS AREA (ACRES)", "1.77 Acres (Approx.)"],
          ["BUILT-UP AREA (SQ. MTR)", <TBF key="inf-1" />],
          ["AREA OF PLAYGROUND (SQ. MTR)", <TBF key="inf-2" />],
          ["NO. OF CLASSROOMS", "45"],
          ["NO. OF GIRLS' TOILETS", "10"],
          ["NO. OF BOYS' TOILETS", "10"],
          ["LIBRARY", "YES"],
          ["INTERNET FACILITY", "YES"],
          ["PLAYGROUND", "YES"],
          ["LABS (SCIENCE / COMPUTER / MATH)", "YES"],
          ["INDOOR GAMES", "YES"],
          ["DANCE / MUSIC ROOMS", "YES"],
          ["SWIMMING POOL", "YES"],
          ["GYMNASIUM", "NO"],
          ["AUDITORIUM / SEMINAR HALL", "NO"],
          ["MEDICAL / HEALTH CHECKUP FACILITY", "YES"],
          ["TRANSPORT FACILITY", "YES"],
          ["HOSTEL FACILITY", "NO"],
        ]} />

        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-xs text-gray-400">
          <p>This disclosure is as per CBSE Affiliation Bye-Laws, Appendix-IX. Last updated: May 2026.</p>
          <p className="mt-1">
            <Link href="/" className="text-gray-500 hover:text-gray-700 underline no-print">← Back to School Website</Link>
          </p>
        </div>
      </div>
    </>
  );
}
