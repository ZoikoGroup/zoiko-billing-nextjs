import Link from "next/link";

import { Section, SectionHeading, cardClass, heading } from "./shared";

const linkClass = "text-sm font-semibold !text-[#1F6FEB] hover:underline";

const RELATED: { title: string; body: React.ReactNode }[] = [
  {
    title: "Billing from multiple entities",
    body: (
      <>
        <Link href="/multi-entity-billing" className={linkClass}>
          Multi-Entity Billing
        </Link>
        .{" "}
        <strong className="font-bold">
          Billing from several entities is a different question from charging
          between them.
        </strong>
      </>
    ),
  },
  {
    title: "Entity-level configuration",
    body: (
      <>
        <Link href="/entity-level-controls" className={linkClass}>
          Entity-Level Controls
        </Link>{" "}
        owns per-entity settings and their boundaries.
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
        governs which currencies may be used in which contexts.
      </>
    ),
  },
  {
    title: "Conversion governance",
    body: (
      <>
        <strong className="font-bold">FX Management</strong> owns rate provenance
        and authority. <strong className="font-bold">Route pending</strong> — and{" "}
        <strong className="font-bold">
          no conversion is implied by a currency context here
        </strong>
        .
      </>
    ),
  },
  {
    title: "Reviewability model",
    body: (
      <>
        <strong className="font-bold">Strengthen Auditability</strong> owns
        attribution, evidence linkage and correction semantics.{" "}
        <strong className="font-bold">Route pending.</strong>
      </>
    ),
  },
  {
    title: "Market coverage",
    body: (
      <>
        <Link href="/jurisdiction-availability" className={linkClass}>
          Jurisdiction Availability
        </Link>
        .{" "}
        <strong className="font-bold">
          An entity pair existing in a model says nothing about where the
          platform operates.
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
        intro="Inter-entity billing depends on entity structure, currency context and evidence — each owned elsewhere."
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
