import Link from "next/link";
import type { ReactNode } from "react";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

interface Destination {
  category: string;
  body: ReactNode;
}

const destinations: Destination[] = [
  {
    category: "Capability orientation",
    body: (
      <>
        <strong className="font-bold">Global Capabilities Overview</strong> —
        what each capability governs and what must not be inferred.{" "}
        <strong className="font-bold">Route pending.</strong>
      </>
    ),
  },
  {
    category: "Availability truth",
    body: (
      <>
        <span className="block sm:whitespace-nowrap">
          <strong className="font-bold">Supported Countries</strong> and{" "}
          <Link
            href="/jurisdiction-availability"
            className="text-sm font-semibold !text-[#1f6feb] transition hover:!text-[#1a5fd0]"
          >
            Jurisdiction Availability
          </Link>
          .
        </span>
        <strong className="block font-bold">The phase 2 gate routes here.</strong>
      </>
    ),
  },
  {
    category: "Currency, FX & pricing",
    body: (
      <>
        <strong className="font-bold">
          Currency Control · FX Management · Multi-Currency Pricing
        </strong>
        . <strong className="font-bold">Routes pending.</strong>
      </>
    ),
  },
  {
    category: "Payment context",
    body: (
      <>
        <strong className="font-bold">Local Payment Methods · Local Payment</strong>
        . <strong className="font-bold">Routes pending.</strong>
      </>
    ),
  },
  {
    category: "Tax & compliance",
    body: (
      <>
        <strong className="font-bold">
          Local Compliance · Tax Configuration · Indirect Tax · Tax and
          Compliance
        </strong>
        . <strong className="font-bold">The phase 5 gate routes here.</strong>
      </>
    ),
  },
  {
    category: "Entity & systems",
    body: (
      <>
        <strong className="font-bold">Inter-Entity Billing</strong> plus
        governed technical sources.{" "}
        <strong className="font-bold">Routes pending.</strong>
      </>
    ),
  },
];

export default function GuideSpecialistDestinationsSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Specialist destinations"
          title="Where each phase hands off."
          subtitle={
            <>
              The guide names the authority; the authority owns the answer.
              Most routes are still <br className="hidden lg:inline" />
              pending.
            </>
          }
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-4 sm:mt-11 lg:grid-cols-2 min-[1360px]:grid-cols-3">
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
