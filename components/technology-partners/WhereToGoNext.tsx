import Link from "next/link";

import { Card, Section, SectionHeading, heading, linkClass } from "./shared";

// Destinations with no route in this app stay as "#" rather than pointing at a
// page that only sounds similar.
const DESTINATIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Become a partner",
    body: (
      <>
        <Link href="#" className={linkClass}>
          Become a Partner
        </Link>{" "}
        is the application route.{" "}
        <b className="font-bold">
          No application form appears on a directory page
        </b>
        , and applying does not produce a listing.
      </>
    ),
  },
  {
    title: "Understand the program",
    body: (
      <>
        <Link href="#" className={linkClass}>
          Partner Program
        </Link>{" "}
        owns the proposition.{" "}
        <b className="font-bold">
          This page does not restate benefits or eligibility.
        </b>
      </>
    ),
  },
  {
    title: "Submit an integration",
    body: (
      <>
        <Link href="#" className={linkClass}>
          Submit an Integration
        </Link>{" "}
        for technical review.{" "}
        <b className="font-bold">Submission is not partnership approval.</b>
      </>
    ),
  },
  {
    title: "Already a partner",
    body: "Partner Portal, rendered only where availability and eligibility are source-defined.",
  },
  {
    title: "Commercial question",
    body: (
      <>
        <Link href="#" className={linkClass}>
          Sales Enquiries
        </Link>
        .{" "}
        <b className="font-bold">
          No co-sell or contact promise is invented
        </b>{" "}
        on a partner&apos;s behalf.
      </>
    ),
  },
  {
    title: "Integration not working",
    body: (
      <>
        <Link href="/integration-support" className={linkClass}>
          Integration Support
        </Link>{" "}
        for account-specific failures — never a directory page.
      </>
    ),
  },
];

export default function WhereToGoNext() {
  return (
    <Section tone="tint" gap="gap-11">
      <SectionHeading
        eyebrow="Where to go next"
        title="Six destinations, by intent."
        intro="This page is a directory. Every action it points at happens elsewhere, and no form appears here."
      />

      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map(({ title, body }) => (
          <Card key={title} className="flex flex-col gap-1.5">
            <h3
              className={`${heading} !mb-0 !font-bold !text-sm !leading-6 !text-[#0F172A]`}
            >
              {title}
            </h3>
            <p className="!mb-0 text-xs !leading-5 !text-[#5B6B85]">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
