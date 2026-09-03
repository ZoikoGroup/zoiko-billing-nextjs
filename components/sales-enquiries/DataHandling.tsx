import Link from "next/link";

import { Section, SectionHeading, linkClass } from "./shared";

type Rule = {
  rule: string;
  means: React.ReactNode;
  prevents: React.ReactNode;
};

const RULES: Rule[] = [
  {
    rule: "Purpose limitation",
    means: "Enquiry data is used to handle the enquiry.",
    prevents: (
      <>
        <b className="font-bold">Silent addition to a marketing list</b> — which
        is what the unbundled consent exists for
      </>
    ),
  },
  {
    rule: "Minimization",
    means: "Four required fields, five conditional, one deliberately not collected.",
    prevents:
      "Qualification data gathered before anyone has agreed to a conversation",
  },
  {
    rule: "Ranges over exact values",
    means: "Organization size uses bands rather than a precise headcount.",
    prevents: "More personal and commercial detail than routing requires",
  },
  {
    rule: "Privacy authority",
    means: (
      <>
        Retention, rights and handling follow{" "}
        <Link href="/privacy-and-data-governance" className={linkClass}>
          Privacy &amp; Data Governance
        </Link>
        .
      </>
    ),
    prevents: "A second, divergent privacy story on a commercial surface",
  },
];

export default function DataHandling() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Data handling"
        title="Four rules for commercial enquiry data."
        intro="An enquiry is business contact data about a real person, submitted before any relationship exists."
      />

      <div className="w-full overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
        {/* Table from lg up */}
        <table className="hidden w-full table-fixed border-collapse lg:table">
          <thead>
            <tr className="bg-[#0B1B3C]">
              {[
                ["Rule", "w-[16%]"],
                ["What it means", "w-[42%]"],
                ["What it prevents", "w-[42%]"],
              ].map(([label, w], i) => (
                <th
                  key={label}
                  scope="col"
                  className={`${w} px-3.5 py-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-white ${
                    i < 2 ? "border-r border-white/15" : ""
                  }`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RULES.map(({ rule, means, prevents }) => (
              <tr key={rule} className="border-t border-[#EDF1F7]">
                <td className="border-r border-[#EDF1F7] bg-[#FAFBFE] px-3.5 py-3 align-top text-xs font-bold !leading-5 !text-[#0F172A]">
                  {rule}
                </td>
                <td className="border-r border-[#EDF1F7] px-3.5 py-3 align-top text-xs !leading-5 !text-[#0F172A]">
                  {means}
                </td>
                <td className="bg-[#FEFAF9] px-3.5 py-3 align-top text-xs !leading-5 !text-[#A81C1C]">
                  {prevents}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Stacked blocks below lg */}
        <div className="lg:hidden">
          {RULES.map(({ rule, means, prevents }, i) => (
            <div
              key={rule}
              className={`flex flex-col gap-2 px-5 py-4 ${
                i < RULES.length - 1 ? "border-b border-[#EDF1F7]" : ""
              }`}
            >
              <p className="!mb-0 text-sm font-bold !leading-5 !text-[#0F172A]">
                {rule}
              </p>
              <p className="!mb-0 text-xs !leading-5 !text-[#0F172A]">{means}</p>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]">
                  What it prevents
                </span>
                <p className="!mb-0 rounded-md bg-[#FEFAF9] px-3 py-2 text-xs !leading-5 !text-[#A81C1C]">
                  {prevents}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
