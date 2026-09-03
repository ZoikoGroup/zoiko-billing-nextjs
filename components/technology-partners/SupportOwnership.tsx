import Link from "next/link";

import { Section, SectionHeading, linkClass } from "./shared";

type Issue = {
  type: string;
  authority: React.ReactNode;
  behavior: React.ReactNode;
};

// Destinations with no route in this app stay as "#" rather than pointing at a
// page that only sounds similar.
const ISSUES: Issue[] = [
  {
    type: "Zoiko Billing platform behavior",
    authority: (
      <>
        Zoiko Support ·{" "}
        <Link href="/documentation" className={linkClass}>
          Documentation
        </Link>
      </>
    ),
    behavior: "Routed to the approved destination",
  },
  {
    type: "Partner product behavior",
    authority: (
      <b className="font-bold">The partner&apos;s own support route</b>
    ),
    behavior: (
      <>
        Published <b className="font-bold">only where approved</b>, and{" "}
        <b className="font-bold">
          no response time or coverage is promised
        </b>
      </>
    ),
  },
  {
    type: "Integration setup",
    authority: "Developers · integration documentation",
    behavior: (
      <>
        Technical truth stays there;{" "}
        <b className="font-bold">no setup steps restated here</b>
      </>
    ),
  },
  {
    type: "Account-specific integration failure",
    authority: (
      <Link href="/integration-support" className={linkClass}>
        Integration Support
      </Link>
    ),
    behavior: (
      <>
        Routed.{" "}
        <b className="font-bold">No support case detail is exposed publicly</b>
      </>
    ),
  },
  {
    type: "Commercial purchase or contracting",
    authority: (
      <>
        <Link href="#" className={linkClass}>
          Sales Enquiries
        </Link>{" "}
        or an approved partner commercial route
      </>
    ),
    behavior: (
      <>
        <b className="font-bold">No reseller relationship invented</b> where none
        is established
      </>
    ),
  },
  {
    type: "Partnership application",
    authority: (
      <Link href="#" className={linkClass}>
        Become a Partner
      </Link>
    ),
    behavior: (
      <>
        <b className="font-bold">Not Sales, and not Support</b> — and no
        application form appears on a directory page
      </>
    ),
  },
];

const COLUMNS = [
  { label: "Issue type", width: "w-[22%]" },
  { label: "Primary authority", width: "w-[32%]" },
  { label: "Behavior on this page", width: "w-[46%]" },
];

export default function SupportOwnership() {
  return (
    <Section tone="tint" id="support-ownership">
      <SectionHeading
        eyebrow="Support ownership"
        title="Six issue types, and only three are ours."
        intro="A directory page is where support expectations get set incorrectly, because a listing looks like a commitment."
      />

      <div className="w-full overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
        {/* Table from lg up */}
        <table className="hidden w-full table-fixed border-collapse lg:table">
          <thead>
            <tr>
              {COLUMNS.map(({ label, width }) => (
                <th
                  key={label}
                  scope="col"
                  className={`${width} border-b border-[#E5EAF2] bg-[#FAFBFE] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ISSUES.map(({ type, authority, behavior }, i) => {
              const border =
                i < ISSUES.length - 1 ? "border-b border-[#EDF1F7]" : "";
              return (
                <tr key={type}>
                  <td
                    className={`px-4 pb-4 pt-3.5 align-top text-sm font-semibold !leading-5 !text-[#0F172A] ${border}`}
                  >
                    {type}
                  </td>
                  <td
                    className={`px-4 py-3.5 align-top text-sm !leading-5 !text-[#5B6B85] ${border}`}
                  >
                    {authority}
                  </td>
                  <td
                    className={`px-4 pb-4 pt-3.5 align-top text-sm !leading-5 !text-[#5B6B85] ${border}`}
                  >
                    {behavior}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Stacked blocks below lg */}
        <div className="lg:hidden">
          {ISSUES.map(({ type, authority, behavior }, i) => (
            <div
              key={type}
              className={`flex flex-col gap-3 px-5 py-4 ${
                i < ISSUES.length - 1 ? "border-b border-[#EDF1F7]" : ""
              }`}
            >
              <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A]">
                {type}
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]">
                  Primary authority
                </span>
                <span className="text-sm !leading-5 !text-[#5B6B85]">
                  {authority}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]">
                  Behavior on this page
                </span>
                <span className="text-sm !leading-5 !text-[#5B6B85]">
                  {behavior}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
