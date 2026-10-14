import Link from "next/link";

import SectionHeader from "./SectionHeader";

interface Destination {
  label: string;
  // Only destinations with a governed route are linked; the rest render dashed.
  href?: string;
}

interface DomainRow {
  domain: string;
  destinations: Destination[];
  question: string;
}

const domains: DomainRow[] = [
  {
    domain: "Currency & FX",
    destinations: [{ label: "FX Management" }, { label: "Currency Control" }],
    question: "How should currencies and conversion context be governed?",
  },
  {
    domain: "Entity & commercial structure",
    destinations: [{ label: "Inter-Entity Billing" }],
    question: "How should entity-to-entity billing relationships be governed?",
  },
  {
    domain: "Payments",
    destinations: [{ label: "Local Payment Methods" }, { label: "Local Payment" }],
    question:
      "What local payment paths may matter, and how should they be operated once approved?",
  },
  {
    domain: "Tax & compliance",
    destinations: [
      { label: "Local Compliance" },
      { label: "Tax Configuration" },
      { label: "Indirect Tax" },
      { label: "Tax and Compliance" },
    ],
    question:
      "What requirements, tax contexts, configuration and evidence need governance?",
  },
  {
    domain: "Market availability",
    destinations: [
      { label: "Supported Countries" },
      { label: "Jurisdiction Availability", href: "/jurisdiction-availability" },
    ],
    question:
      "Which capability is available in which market, and under what status and scope?",
  },
  {
    domain: "Pricing & presentation",
    destinations: [{ label: "Multi-Currency Pricing" }],
    question: "How should commercial prices be presented across currencies?",
  },
  {
    domain: "Guidance",
    destinations: [
      { label: "Global Billing Guide" },
      { label: "Multi-Entity Guide" },
      { label: "Tax Compliance Guide" },
      { label: "Download checklist" },
    ],
    question: "How should teams implement or evaluate the operating model?",
  },
];

function DestinationChip({ destination }: { destination: Destination }) {
  if (destination.href) {
    return (
      <Link
        href={destination.href}
        className="inline-flex items-center rounded-[5px] border border-[#dfe5ee] bg-white px-2 py-0.5 text-sm font-semibold leading-6 !text-[#1f6feb] transition hover:border-[#1f6feb] hover:!text-[#1a5fd0]"
      >
        {destination.label}
      </Link>
    );
  }

  return (
    <span className="inline-flex items-center rounded-[5px] border border-dashed border-[#dfe5ee] bg-white px-2 pb-1 pt-0.5 text-xs leading-4 text-[#7890b2]">
      {destination.label}
    </span>
  );
}

export default function CapabilityMapSection() {
  return (
    <section className="w-full bg-[#f5f7fb] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Global Billing capability map"
          title={
            <>
              Seven domains, and the destinations{" "}
              <br className="hidden lg:inline" />
              inside each.
            </>
          }
          subtitle={
            <>
              The map communicates relationships only.{" "}
              <strong className="font-bold">
                Dashed destinations have no governed route yet.
              </strong>
            </>
          }
        />

        {/* MOBILE: one card per domain */}
        <div className="mt-8 flex w-full flex-col gap-3 md:hidden">
          {domains.map((row) => (
            <div
              key={row.domain}
              className="rounded-xl border border-[#dfe5ee] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!m-0 text-sm font-bold !leading-5 text-[#091127]">
                {row.domain}
              </h3>
              <div className="mt-3 flex flex-wrap items-start gap-[5px]">
                {row.destinations.map((destination) => (
                  <DestinationChip key={destination.label} destination={destination} />
                ))}
              </div>
              <p className="!m-0 mt-3 border-t border-[#edf0f4] pt-3 text-xs !leading-5 !text-[#091127]">
                <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wide text-[#7890b2]">
                  Primary buyer question
                </span>
                {row.question}
              </p>
            </div>
          ))}
        </div>

        {/* TABLET & DESKTOP: full table */}
        <div className="mt-8 hidden w-full max-w-[1184px] overflow-x-auto rounded-xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:mt-10 md:block">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="bg-[#0b1b3c]">
                <th className="w-48 border-r border-white/15 px-3.5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Domain
                </th>
                <th className="w-[42%] border-r border-white/15 px-3.5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Orientation destinations
                </th>
                <th className="px-3.5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Primary buyer question
                </th>
              </tr>
            </thead>
            <tbody>
              {domains.map((row) => (
                <tr key={row.domain} className="border-t border-[#edf0f4] align-top">
                  <th
                    scope="row"
                    className="border-r border-[#edf0f4] bg-[#fafbfd] px-3.5 py-3.5 text-xs font-bold leading-5 text-[#091127]"
                  >
                    {row.domain}
                  </th>
                  <td className="border-r border-[#edf0f4] px-3.5 py-3.5">
                    <div className="flex flex-wrap items-start gap-[5px]">
                      {row.destinations.map((destination) => (
                        <DestinationChip
                          key={destination.label}
                          destination={destination}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-3.5 py-3.5 text-xs leading-5 text-[#091127]">
                    {row.question}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
