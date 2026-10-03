import Link from "next/link";

import { Section, SectionHeading, cardClass, heading, linkClass } from "./shared";

const RELATED: { title: string; body: React.ReactNode }[] = [
  {
    title: "Which methods are available",
    body: (
      <>
        <strong className="font-bold">Local Payment Methods</strong> owns method
        availability truth.{" "}
        <strong className="font-bold">
          Route pending — and this page never duplicates that decision.
        </strong>
      </>
    ),
  },
  {
    title: "Where Zoiko Billing operates",
    body: (
      <>
        <Link href="/jurisdiction-availability" className={linkClass}>
          Jurisdiction Availability
        </Link>{" "}
        is the governed coverage source.
      </>
    ),
  },
  {
    title: "Currency permission",
    body: (
      <>
        {/* Figma styles this as bold body text rather than a blue link. */}
        <Link href="/currency-control" className="font-bold hover:underline">
          Currency Control
        </Link>{" "}
        governs which currencies may be used where.
      </>
    ),
  },
  {
    title: "Conversion governance",
    body: (
      <>
        <strong className="font-bold">FX Management</strong> owns rate
        provenance. <strong className="font-bold">Route pending</strong> — and no
        conversion is implied here.
      </>
    ),
  },
  {
    title: "Provider connections",
    body: (
      <>
        <Link href="/payment-providers" className={linkClass}>
          Payment Providers
        </Link>
        .{" "}
        <strong className="font-bold">
          A connection is not a payment path, and neither implies the other.
        </strong>
      </>
    ),
  },
  {
    title: "Reconciliation",
    body: (
      <>
        <Link href="/banking-and-reconciliation" className={linkClass}>
          Banking &amp; Reconciliation
        </Link>
        .{" "}
        <strong className="font-bold">
          Operational evidence is not settlement proof.
        </strong>
      </>
    ),
  },
];

export default function RelatedNavigation() {
  return (
    <Section tone="tint" className="lg:gap-11">
      <SectionHeading
        eyebrow="Related Global Billing navigation"
        title="Every dependency has a destination."
        intro="This page references these sources rather than reproducing what they hold."
      />

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {RELATED.map((item) => (
          <div key={item.title} className={`${cardClass} flex flex-col gap-1.5 p-5`}>
            <h3 className={`${heading} !mb-0 text-sm !font-bold !leading-6 !text-[#0F172A]`}>
              {item.title}
            </h3>
            <p className="!mb-0 text-xs !leading-5 !text-[#5D7192]">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
