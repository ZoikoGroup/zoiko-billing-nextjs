import Link from "next/link";

import { Section, SectionHeading, cardClass, heading } from "./shared";

const linkClass = "text-sm font-semibold !text-[#1F6FEB] hover:underline";

const RELATED: { title: string; body: React.ReactNode }[] = [
  {
    title: "Which currencies are supported",
    body: (
      <>
        <Link href="/multi-currency" className={linkClass}>
          Multi-Currency Billing
        </Link>
        .{" "}
        <strong className="font-bold">
          No currency is named or asserted on this page.
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
        is the governed coverage source.{" "}
        <strong className="font-bold">A market scope layer is not coverage.</strong>
      </>
    ),
  },
  {
    title: "Conversion-rate governance",
    body: (
      <>
        <strong className="font-bold">FX Management</strong> owns rate provenance,
        currentness and authority. <strong className="font-bold">Route pending.</strong>
      </>
    ),
  },
  {
    title: "Entity structure",
    body: (
      <>
        <Link href="/multi-entity-billing" className={linkClass}>
          Multi-Entity Billing
        </Link>{" "}
        and{" "}
        <Link href="/entity-level-controls" className={linkClass}>
          Entity-Level Controls
        </Link>
        .
      </>
    ),
  },
  {
    title: "Document output",
    body: (
      <>
        <Link href="/localized-documents" className={linkClass}>
          Localized Documents
        </Link>
        .{" "}
        <strong className="font-bold">
          Currency permission is not document-type support.
        </strong>
      </>
    ),
  },
  {
    title: "Commercial terms",
    body: (
      <>
        <Link href="/pricing" className={linkClass}>
          Pricing
        </Link>
        .{" "}
        <strong className="font-bold">
          No localized price book, pricing rule or entitlement is described here.
        </strong>
      </>
    ),
  },
];

export default function RelatedNavigation() {
  return (
    <Section className="lg:gap-11">
      <SectionHeading
        eyebrow="Related Global Billing navigation"
        title="Where the adjacent answers live."
        intro="Four of the questions this page declines have their own destinations."
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
