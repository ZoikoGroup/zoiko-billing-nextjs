import Link from "next/link";
import type { ReactNode } from "react";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

interface Destination {
  category: string;
  body: ReactNode;
}

const linkClass =
  "text-sm font-semibold !text-[#1f6feb] transition hover:!text-[#1a5fd0]";

const destinations: Destination[] = [
  {
    category: "Entity charge governance",
    body: (
      <>
        <strong className="font-bold">Inter-Entity Billing</strong> —
        relationship registry, four approval states and separation of duties.{" "}
        <strong className="font-bold">Route pending.</strong>
      </>
    ),
  },
  {
    category: "Entity structure & controls",
    body: (
      <span className="block min-[1360px]:whitespace-nowrap">
        <Link href="/multi-entity-billing" className={linkClass}>
          Multi-Entity Billing
        </Link>{" "}
        and{" "}
        <Link href="/entity-level-controls" className={linkClass}>
          Entity-Level Controls
        </Link>
        .
      </span>
    ),
  },
  {
    category: "Market & currency",
    body: (
      <>
        <strong className="font-bold">
          Supported Countries · Currency Control · FX Management
        </strong>
        . <strong className="font-bold">Routes pending.</strong>
      </>
    ),
  },
  {
    category: "Tax & compliance review",
    body: (
      <>
        <strong className="font-bold">
          Local Compliance · Tax Configuration · Indirect Tax · Tax and
          Compliance
        </strong>
        . <strong className="font-bold">Routes pending.</strong>
      </>
    ),
  },
  {
    category: "Program sequencing",
    body: (
      <>
        <strong className="font-bold">Global Billing Guide</strong> — the wider
        seven-phase program sequence.{" "}
        <strong className="font-bold">Route pending.</strong>
      </>
    ),
  },
  {
    category: "Capability orientation",
    body: (
      <>
        <strong className="font-bold">Global Capabilities Overview</strong> —
        what each capability governs.{" "}
        <strong className="font-bold">Route pending.</strong>
      </>
    ),
  },
];

export default function EntitySpecialistDestinationsSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Specialist destinations"
          title="Where each phase hands off."
          subtitle="The guide names the authority; the authority owns the answer."
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-4 sm:mt-11 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item) => (
            <div
              key={item.category}
              className="flex flex-col gap-1.5 rounded-2xl border border-[#dfe5ee] bg-white px-5 pb-6 pt-5 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold !leading-6 text-[#091127]">
                {item.category}
              </h3>
              <p className="!m-0 text-xs !leading-5 !text-[#5d7192]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
