import Link from "next/link";

import { Card, Section, SectionHeading, heading, linkClass } from "./shared";

// Destinations with no route in this app stay as "#" rather than pointing at a
// page that only sounds similar.
const ROUTES: { title: string; body: React.ReactNode }[] = [
  {
    title: "Evaluating the product",
    body: (
      <>
        Product pages and{" "}
        <Link href="/why-zoiko-billing" className={linkClass}>
          Why Zoiko Billing
        </Link>{" "}
        hold the decision criteria and design reasoning.
      </>
    ),
  },
  {
    title: "Checking cost",
    body: (
      <>
        <Link href="/pricing-and-plans" className={linkClass}>
          Pricing
        </Link>{" "}
        owns price, plan and commercial availability.
      </>
    ),
  },
  {
    title: "Checking credibility",
    body: (
      <>
        <Link href="#" className={linkClass}>
          Trust Center
        </Link>{" "}
        catalogs assurance evidence with its scope, state and access — which is
        what a group name cannot establish.
      </>
    ),
  },
  {
    title: "Company context",
    body: (
      <>
        <Link href="/about" className={linkClass}>
          About
        </Link>{" "}
        owns product and company identity and the entity relationships.
      </>
    ),
  },
  {
    title: "Looking for a role",
    body: (
      <>
        <Link href="#" className={linkClass}>
          Careers
        </Link>{" "}
        lists open roles with the legal employer stated per role.
      </>
    ),
  },
  {
    title: "Need to reach someone",
    body: (
      <>
        <Link href="#" className={linkClass}>
          Contact
        </Link>{" "}
        routes by inquiry type rather than into a general corporate queue.
      </>
    ),
  },
];

export default function TaskContinuity() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Task continuity"
        title="Getting back to what you were doing."
        intro="Most readers arrive here mid-evaluation, from a footer link or a credibility check. Six routes back into the work."
      />

      <div className="grid w-full grid-cols-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
        {ROUTES.map(({ title, body }) => (
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
