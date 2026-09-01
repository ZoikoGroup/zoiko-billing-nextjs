import Link from "next/link";

import { SectionHeading, linkClass } from "./shared";

type Pathway = {
  need: string;
  destination: React.ReactNode;
  why: React.ReactNode;
};

// Destinations with no route in this app stay as "#" rather than pointing at a
// page that only sounds similar.
const PATHWAYS: Pathway[] = [
  {
    need: "What the product actually does today",
    destination: (
      <Link href="#" className={linkClass}>
        Documentation
      </Link>
    ),
    why: "Capability is current source truth; this page would go stale asserting it",
  },
  {
    need: "What it costs and what a plan includes",
    destination: (
      <Link href="/pricing-and-plans" className={linkClass}>
        Pricing
      </Link>
    ),
    why: "Commercial availability varies by plan and jurisdiction",
  },
  {
    need: "Security and assurance evidence",
    destination: (
      <>
        <Link href="#" className={linkClass}>
          Trust Center
        </Link>
        <span className="!text-[#5D7192]"> · </span>
        <Link href="#" className={linkClass}>
          Security
        </Link>
      </>
    ),
    why: "Evidence needs its scope, status and access state attached",
  },
  {
    need: "Customer results",
    destination: (
      <Link href="#" className={linkClass}>
        Customer Stories
      </Link>
    ),
    why: (
      <>
        <b className="font-bold">Consent and evidence gate applies</b> — no
        outcome is asserted here
      </>
    ),
  },
  {
    need: "Research findings",
    destination: (
      <Link href="#" className={linkClass}>
        Reports &amp; Insights
      </Link>
    ),
    why: "Methodology and limitations travel with the finding",
  },
  {
    need: "Whether a provider is supported",
    destination: (
      <Link href="/integrations-directory" className={linkClass}>
        Integrations
      </Link>
    ),
    why: "Availability is per provider and per jurisdiction",
  },
  {
    need: "Implementation effort and sequence",
    destination: (
      <Link href="#" className={linkClass}>
        Implementation Guidance
      </Link>
    ),
    why: (
      <>
        <b className="font-bold">
          No universal duration or timeline is published
        </b>
        ; readiness is assessed per organization
      </>
    ),
  },
];

export default function ProofPathways() {
  return (
    <section className="w-full bg-[#F7F8FA] px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <SectionHeading
          eyebrow="Proof pathways"
          title="Seven proof needs, each with the destination that can satisfy it."
          intro="This page states reasoning. Proof lives where it can carry its methodology, scope and limitations."
        />

        <div className="w-full overflow-hidden rounded-2xl border border-[#DFE5EE] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
          {/* Table from lg up */}
          <table className="hidden w-full table-fixed border-collapse lg:table">
            <thead>
              <tr>
                {["What you need to verify", "Destination", "Why there"].map(
                  (label, i) => (
                    <th
                      key={label}
                      scope="col"
                      className={`border-b border-[#DFE5EE] bg-[#FCFDFE] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890B2] ${
                        ["w-[27%]", "w-[19%]", "w-[54%]"][i]
                      }`}
                    >
                      {label}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {PATHWAYS.map(({ need, destination, why }, i) => {
                const border =
                  i < PATHWAYS.length - 1 ? "border-b border-[#EDF0F4]" : "";
                return (
                  <tr key={need}>
                    <td
                      className={`px-4 pb-4 pt-3.5 align-top text-sm font-semibold !leading-5 !text-[#0F172A] ${border}`}
                    >
                      {need}
                    </td>
                    <td
                      className={`px-4 py-3.5 align-top text-sm !leading-6 ${border}`}
                    >
                      {destination}
                    </td>
                    <td
                      className={`px-4 pb-4 pt-3.5 align-top text-sm !leading-5 !text-[#5D7192] ${border}`}
                    >
                      {why}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Stacked blocks below lg */}
          <div className="lg:hidden">
            {PATHWAYS.map(({ need, destination, why }, i) => (
              <div
                key={need}
                className={`flex flex-col gap-3 px-5 py-4 ${
                  i < PATHWAYS.length - 1 ? "border-b border-[#EDF0F4]" : ""
                }`}
              >
                <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A]">
                  {need}
                </p>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#7890B2]">
                    Destination
                  </span>
                  <span className="text-sm !leading-6">{destination}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#7890B2]">
                    Why there
                  </span>
                  <span className="text-sm !leading-5 !text-[#5D7192]">
                    {why}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
